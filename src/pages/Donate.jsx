import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";

import DonationBill from "../components/function/donation/DonationBill";
import DonationDetails from "../components/function/donation/DonationDetails";
import { useCrowdFundContext } from "../contexts/CrowdFund";
import { unlockAccount } from '../api/web3';
import { useWeb3Context } from '../contexts/Web3';


const initialDonationValues = {
    crypto: "GWei",
    amount: "",
    tip: 0,
};

function Donate(props) {
    const classes = useStyles();
    const { campaign_id } = useParams();
    const { state: { campaigns } } = useCrowdFundContext();
    const [campaignDetails, setCampaignDetails] = useState(campaigns.filter(c => c.address === campaign_id));
    const { state: { account, web3 }, updateAccount } = useWeb3Context();
    useEffect(() => {
        if (!web3) {
            const handleMeta = async () => {
                try {
                    const data = await unlockAccount();
                    updateAccount(data);
                } catch (err) {
                    console.error(err);
                }
            };
            handleMeta();
        }
        const campaign = campaigns.filter(c => c.address === campaign_id)[0];
        console.log(campaign)
        setCampaignDetails(campaign);
    }, [campaigns]);

    const [donationValue, setDonationValue] = useState(initialDonationValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDonationValue({
            ...donationValue,
            [name]: value,
        });
    };

    return (
        <div className={classes.container}>
            <DonationDetails
                campaignName={campaignDetails.name}
                organiser={campaignDetails.owner}
                coverImage={campaignDetails.coverImage}
                organisation={campaignDetails.owner}
                donationValue={donationValue}
                handleChange={handleChange}
            />
            <DonationBill donationValue={donationValue} />
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        display: "flex",
        height: "100%",
    },
});

export default Donate;
