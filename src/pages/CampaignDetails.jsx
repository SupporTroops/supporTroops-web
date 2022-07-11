import React, { useState, useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import HostDetails from "../components/function/campaignDetails/HostDetails";
import CampaignAbout from "../components/function/campaignDetails/CampaignAbout";
import VendorDetails from "../components/function/campaignDetails/VendorDetails";
import Progress from "../components/function/campaignDetails/Progress";
import DonateButtonGroup from "../components/function/campaignDetails/DonateButtonGroup";
import auth from "../utils/auth";
import ButtonCustom from "../components/custom/ButtonCustom";
import { useCrowdFundContext } from "../contexts/CrowdFund";
import { unlockAccount } from '../api/web3';
import { useWeb3Context } from '../contexts/Web3';


function CampaignDetails(props) {
    const classes = useStyles();

    const { campaign_id } = useParams();
    const { state: { campaigns } } = useCrowdFundContext();
    const { state: { account, web3 }, updateAccount } = useWeb3Context();
    const [campaignDetails, setCampaignDetails] = useState(campaigns.filter(c => c.address === campaign_id));

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
        setCampaignDetails(campaign);
    }, [campaigns]);

    return (
        <React.Fragment>
            <Typography variant="h1">{campaignDetails.name}</Typography>
            {/* <div className={classes.coverImageContainer}>
                <img src={campaignDetails.coverImage} alt="" />
            </div> */}
            <div className={classes.details}>
                <CampaignAbout
                    campaignDescription={campaignDetails.description}
                    campaignCause={campaignDetails.type}
                />
                <Divider
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Progress
                    amountRaised={campaignDetails.amountRaised}
                    amountToRaise={campaignDetails.amountToRaise}
                    progress={(campaignDetails.amountRaised / campaignDetails.amountToRaise) *100}
                    style={{ marginTop: "2rem", padding: "0 0.2rem" }}
                />
                <DonateButtonGroup progress={(campaignDetails.amountRaised / campaignDetails.amountToRaise) *100} style={{ marginBottom: "2rem" }} />
                <Divider
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.12)",
                    }}
                />
                <HostDetails
                    hostName={campaignDetails.owner}
                    organisation={campaignDetails.organisation}
                    roleInOrganisation={campaignDetails.roleInOrganisation}
                    style={{ marginTop: "2rem" }}
                />
                <VendorDetails
                    numberOfVendors={0}
                    vendorsList={campaignDetails.vendorList}
                    style={{ marginTop: "2rem" }}
                />
                {campaignDetails.hostId === auth.getUserId() && ((campaignDetails.amountRaised / campaignDetails.amountToRaise) *100) < 100 && (
                    <ButtonCustom
                        variant="contained"
                        color="error"
                        horizontalPadding={3}
                        style={{
                            marginTop: "2rem",
                            marginLeft: "auto",
                            display: "block",
                        }}
                    >
                        End Campaign
                    </ButtonCustom>
                )}
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    coverImageContainer: {
        width: "100%",
        height: "30rem",
        overflow: "hidden",
        borderRadius: "2rem",
        border: "2px solid grey",
        padding: "1rem",
        marginTop: "2rem",
        "& img": {
            width: "100%",
            height: "30rem",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "1rem",
        },
    },
    details: {
        margin: "2rem 1rem",
        marginBottom: "4rem",
    },
});

export default CampaignDetails;
