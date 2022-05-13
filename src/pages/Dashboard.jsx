import React from "react";
import { Typography } from "@mui/material";
import GetCampaigns from "../components/function/GetCampaigns";

function Dashboard(props) {
    return (
        <React.Fragment>
            <Typography variant="h1">Dashboard</Typography>
            <GetCampaigns />
        </React.Fragment>
    );
}

export default Dashboard;
