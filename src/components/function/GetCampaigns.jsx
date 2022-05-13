import React from "react";
import { createUseStyles } from "react-jss";

import CampaignCardCustom from "../custom/CampaignCardCustom";
import { getAllCampaignsDetails } from "../../utils/campaignUtils";

const campaigns = getAllCampaignsDetails();

function GetCampaigns(props) {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            {campaigns.map((campaign) => (
                <CampaignCardCustom
                    key={campaign.name}
                    campaignName={campaign.name}
                    campaignDescription={campaign.campaignDescription}
                    host={campaign.host}
                    organisation={campaign.organisation}
                    progress={campaign.progress}
                    style={{ marginBottom: 50 }}
                    onClick={() => console.log("Card Clicked")}
                />
            ))}
        </div>
    );
}

const useStyles = createUseStyles({
    cardContainer: {
        marginTop: "3rem",
    },
});

export default GetCampaigns;
