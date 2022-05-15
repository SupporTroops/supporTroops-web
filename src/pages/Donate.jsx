import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";

import DonationBill from "../components/function/donation/DonationBill";
import DonationDetails from "../components/function/donation/DonationDetails";
import { getCampaignDetails } from "../utils/campaignUtils";

const initialDonationValues = {
    crypto: "ETH",
    amount: "",
    tip: 40,
};

function Donate(props) {
    const classes = useStyles();
    const { campaign_id } = useParams();
    const campaignDetails = getCampaignDetails(campaign_id);

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
                campaignName={campaignDetails.campaignName}
                organiser={campaignDetails.hostName}
                coverImage={campaignDetails.coverImage}
                organisation={campaignDetails.organisation}
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
