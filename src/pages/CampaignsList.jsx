import { Typography } from "@mui/material";
import React from "react";
import { unlockAccount } from "../api/web3";
import SearchCustom from "../components/custom/SearchCustom";
import GetCampaigns from "../components/function/GetCampaigns";
import { useWeb3Context } from "../contexts/Web3";
import ButtonCustom from "../components/custom/ButtonCustom";


function CampaignsList(props) {

    const { state: { account }, updateAccount } = useWeb3Context();

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
            <Typography variant="h1" style={{ marginBottom: "3rem" }}>
                Campaigns List
            </Typography>
            <div>
                {!account && <ButtonCustom onClick={handleMetamask} style={{ marginRight: '1rem' }} variant="contained">Connect to Metamask</ButtonCustom>}
            </div>
            {!account && <div>To view campaigns connect to metamask</div>}
            {/* {account && <SearchCustom />} */}
            <GetCampaigns />
        </React.Fragment>
    );
}

export default CampaignsList;
