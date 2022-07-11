import React, { useState } from "react";
import {
    Typography,
    Stepper,
    Step,
    StepLabel,
    FormControl,
} from "@mui/material";
import { createUseStyles } from "react-jss";

import { campaignFormHandler } from "../utils/functions";
import CreateCampaignStepOne from "../components/function/createCampaign/CreateCampaignStepOne";
import CreateCampaignStepTwo from "../components/function/createCampaign/CreateCampaignStepTwo";
import CreateCampaignStepThree from "../components/function/createCampaign/CreateCampaignStepThree";
import CreateCampaignStepFour from "../components/function/createCampaign/CreateCampaignStepFour";
import FormButtonGroup from "../components/function/createCampaign/FormButtonGroup";

const steps = ["Campaign Details", "Host Details", "Vendor Details", "Review"];
const defaultFormValues = {
    campaignName: "",
    campaignDescription: "",
    campaignCause: false,
    coverImage: null,
    numberOfVendors: 2,
    vendorsList: {
        1: { name: "", id: "", amount: 0 },
        2: { name: "", id: "", amount: 0 },
    },
    hostName: "",
    // organisation: "",
    // roleInOrganisation: "",
    amountToRaise: 0,
};

function CreateCampaign(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (event) => {
        campaignFormHandler(event, formValues, setFormValues);
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
                            setActiveStep={setActiveStep}
                            formValues={formValues}
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
