import React from "react";
import { Typography } from "@mui/material";
import GetCampaigns from "../components/function/GetCampaigns";
import { unlockAccount } from '../api/web3';
import { useWeb3Context } from '../contexts/Web3';
import ButtonCustom from "../components/custom/ButtonCustom";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const Networks = {
    0: "None",
    1: "MAINNET",
    2: "ROPSTEN",
    4: "RINKEBY"
}

function Dashboard(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const { state: { account, netId }, updateAccount } = useWeb3Context();

    const handleClick = (event) => {
        navigate('/create_campaign');
    }

    const handleMetamask = async (event) => {
        try {
            const data = await unlockAccount();
            console.log(data)
            updateAccount(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h1">Dashboard</Typography>
            <div className={classes.buttonGroup}>
                {!account && <ButtonCustom onClick={handleMetamask} style={{ marginRight: '1rem' }} variant="contained">Connect to Metamask</ButtonCustom>}{/* : `${account} at ${Networks[netId]}`*/}
                {account && <ButtonCustom onClick={handleClick} variant="contained">Create Campaign</ButtonCustom>}
            </div>
            {!account && <div>To view campaigns connect to metamask</div>}
            <GetCampaigns />
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    buttonGroup: {
        marginTop: '2rem'
    }
})

export default Dashboard;
