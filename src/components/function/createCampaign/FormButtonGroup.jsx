import React from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ButtonCustom from "../../custom/ButtonCustom";
import { createCampaign, endCampaign, donateToCampaign } from "../../../api/crowdfund";
import { useCrowdFundContext } from "../../../contexts/CrowdFund";
import { useWeb3Context } from "../../../contexts/Web3";
import { unlockAccount } from '../../../api/web3';



function FormButtonGroup({ checkActiveStep, setActiveStep, formValues }) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleMetamask = async () => {
        try {
            const data = await unlockAccount();
            console.log(data)
            updateAccount(data);
        } catch (err) {
            console.error(err);
        }
    }

    // Stepper Handler
    const handleStepButtons = (event) => {
        if (event.target.textContent === "next") {
            setActiveStep((prev) => prev + 1);
        } else if (event.target.textContent === "back") {
            setActiveStep((prev) => prev - 1);
        }
    };
    const { state: { web3, account }, updateAccount } = useWeb3Context();
    const { state } = useCrowdFundContext();

    async function createCamp() {
        if(web3 && account) {
            const details = { name: formValues.campaignName, description: formValues.campaignDescription, type: formValues.campaignCause, vendor_addresses: Object.values(formValues.vendorsList).map(v => v.id), vendor_amounts: Object.values(formValues.vendorsList).map(v => v.amount)};
            console.log(details);
            await createCampaign(web3, account, details);
            navigate("/dashboard");    
        } else{
            handleMetamask();
        }
    }

    async function endCamp() {
        const data = await endCampaign(web3, account, state.campaigns[0].address, "test");
        // end_campaign(data);
    }
    async function donateCampaign() {
        const data = await donateToCampaign(web3, account, state.campaigns[0].address, "ETH", 10 ** 10);
        // const data = await sendEther(web3, account, state.campaigns[0].address, "ETH", 10**7);
    }


    return (
        <div className={classes.ButtonGroup}>
            <ButtonCustom
                variant="outlined"
                style={{ display: checkActiveStep([1, 2, 3]) ? "" : "none" }}
                onClick={handleStepButtons}
                horizontalPadding={4}
            >
                back
            </ButtonCustom>
            <ButtonCustom
                variant="contained"
                style={{
                    display: checkActiveStep([0, 1, 2]) ? "" : "none",
                    marginLeft: 3,
                }}
                onClick={handleStepButtons}
                horizontalPadding={4}
            >
                next
            </ButtonCustom>
            <ButtonCustom
                variant="contained"
                style={{
                    display: checkActiveStep([3]) ? "" : "none",
                    marginLeft: 3,
                }}
                horizontalPadding={4}
                onClick={createCamp}
            >
                {web3 && account ? 'Create' : 'Connect'}
            </ButtonCustom>
        </div>
    );
}

const useStyles = createUseStyles({
    ButtonGroup: {
        marginLeft: "auto",
        marginTop: 60,
        "& input": {
            marginLeft: 10,
        },
    },
});

export default FormButtonGroup;
