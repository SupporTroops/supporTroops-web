import React from "react";
import { Divider, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";

import { getCampaignDetails } from "../utils/campaignUtils";
import HostDetails from "../components/function/campaignDetails/HostDetails";
import CampaignAbout from "../components/function/campaignDetails/CampaignAbout";
import VendorDetails from "../components/function/campaignDetails/VendorDetails";
import Progress from "../components/function/campaignDetails/Progress";
import DonateButtonGroup from "../components/function/campaignDetails/DonateButtonGroup";
import auth from "../utils/auth";
import ButtonCustom from "../components/custom/ButtonCustom";

function CampaignDetails(props) {
    const classes = useStyles();

    const { campaign_id } = useParams();
    const campaignDetails = getCampaignDetails(campaign_id);

    return (
        <React.Fragment>
            <Typography variant="h1">{campaignDetails.campaignName}</Typography>
            <div className={classes.coverImageContainer}>
                <img src={campaignDetails.coverImage} alt="" />
            </div>
            <div className={classes.details}>
                <CampaignAbout
                    campaignDescription={campaignDetails.campaignDescription}
                    campaignCause={campaignDetails.campaignCause}
                />
                <Divider
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Progress
                    amountRaised={campaignDetails.amountRaised}
                    amountToRaise={campaignDetails.amountToRaise}
                    progress={campaignDetails.progress}
                    style={{ marginTop: "2rem", padding: "0 0.2rem" }}
                />
                <DonateButtonGroup style={{ marginBottom: "2rem" }} />
                <Divider
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.12)",
                    }}
                />
                <HostDetails
                    hostName={campaignDetails.hostName}
                    organisation={campaignDetails.organisation}
                    roleInOrganisation={campaignDetails.roleInOrganisation}
                    style={{ marginTop: "2rem" }}
                />
                <VendorDetails
                    numberOfVendors={campaignDetails.numberOfVendors}
                    vendorsList={campaignDetails.vendorsList}
                    style={{ marginTop: "2rem" }}
                />
                {campaignDetails.hostId === auth.getUserId() && (
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
