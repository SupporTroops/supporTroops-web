import { Typography } from "@mui/material";
import React from "react";
import GetCampaigns from "../components/function/GetCampaigns";

function CampaignsList(props) {
    return (
        <React.Fragment>
            <Typography variant="h1">Campaigns List</Typography>
            <GetCampaigns />
        </React.Fragment>
    );
}

export default CampaignsList;
