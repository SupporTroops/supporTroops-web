import { Typography } from "@mui/material";
import React from "react";
import SearchCustom from "../components/custom/SearchCustom";
import GetCampaigns from "../components/function/GetCampaigns";

function CampaignsList(props) {
    return (
        <React.Fragment>
            <Typography variant="h1" style={{ marginBottom: "3rem" }}>
                Campaigns List
            </Typography>
            <SearchCustom />
            <GetCampaigns />
        </React.Fragment>
    );
}

export default CampaignsList;
