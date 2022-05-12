import React, { useState } from "react";
import {
    Typography,
    Stepper,
    Step,
    StepLabel,
    FormControl,
} from "@mui/material";
import { createUseStyles } from "react-jss";

import CreateCampaignStepOne from "../components/function/createCampaign/CreateCampaignStepOne";
import FormButtonGroup from "../components/function/createCampaign/FormButtonGroup";
import CreateCampaignStepTwo from "../components/function/createCampaign/CreateCampaignStepTwo";
import { campaignFormHandler } from "../utils/functions";
import CreateCampaignStepThree from "../components/function/createCampaign/CreateCampaignStepThree";
import CreateCampaignStepFour from "../components/function/createCampaign/CreateCampaignStepFour";

const steps = ["Campaign Details", "Host Details", "Vendor Details", "Review"];
const defaultFormValues = {
    campaignName: "",
    campaignDetails: "",
    campaignCause: "nonProfit",
    coverImage: null,
    numberOfVendors: 2,
    vendorsList: {
        1: { id: "", amount: 0 },
        2: { id: "", amount: 0 },
    },
    hostName: "",
    organisation: "",
    roleInOrganisation: "",
    amountToRaise: 0,
};

function CreateCampaign(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (event) => {
        campaignFormHandler(event, formValues, setFormValues);
    };

    // Stepper Handler
    const handleStepButtons = (event) => {
        if (event.target.textContent === "next") {
            setActiveStep((prev) => prev + 1);
        } else if (event.target.textContent === "back") {
            setActiveStep((prev) => prev - 1);
        }
    };

    // Active Step Checker
    const checkActiveStep = (arr) => {
        if (arr.includes(activeStep)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h1">Create a new Campaign</Typography>

            <div className={classes.container}>
                <div className={classes.stepperContainer}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className={classes.formContainer}>
                    <FormControl style={{ width: "70%" }}>
                        {checkActiveStep([0]) && (
                            <CreateCampaignStepOne
                                formValues={formValues}
                                handleChange={handleChange}
                            />
                        )}
                        {checkActiveStep([2]) && (
                            <CreateCampaignStepThree
                                formValues={formValues}
                                handleChange={handleChange}
                            />
                        )}
                        {checkActiveStep([1]) && (
                            <CreateCampaignStepTwo
                                formValues={formValues}
                                handleChange={handleChange}
                            />
                        )}
                        {checkActiveStep([3]) && (
                            <CreateCampaignStepFour formValues={formValues} />
                        )}

                        <FormButtonGroup
                            checkActiveStep={checkActiveStep}
                            handleStepButtons={handleStepButtons}
                        />
                    </FormControl>
                </div>
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    container: {
        marginTop: "3rem",
        marginBottom: "3rem",
        marginLeft: "1rem",
        display: "flex",
    },
    stepperContainer: {
        marginRight: "15rem",
    },
    formContainer: {
        flex: 1,
    },
});

export default CreateCampaign;
