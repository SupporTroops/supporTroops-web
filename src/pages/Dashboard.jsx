import React from "react";
import { Typography } from "@mui/material";
import GetCampaigns from "../components/function/GetCampaigns";
import { unlockAccount } from '../api/web3';
import { useWeb3Context } from '../contexts/Web3';

function Dashboard(props) {
    return (
        <React.Fragment>
            <Typography variant="h1">Dashboard</Typography>
            <GetCampaigns />
        </React.Fragment>
    );
}

export default Dashboard;
