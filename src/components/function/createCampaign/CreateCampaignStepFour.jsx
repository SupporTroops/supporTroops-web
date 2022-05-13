import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import { range } from "../../../utils/functions";

function CreateCampaignStepFour({ formValues }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <Typography variant="h3" className={classes.heading}>
                    Campaign Details
                </Typography>
                <div className={classes.details}>
                    <Typography variant="h6">Campaign Name</Typography>
                    <Typography variant="body1">
                        {formValues.campaignName}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6">Campaign Details</Typography>
                    <Typography variant="body1">
                        {formValues.campaignDescription}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6">Campaign Cause</Typography>
                    <Typography variant="body1">
                        {formValues.campaignCause === "nonProfit"
                            ? "Non Profit"
                            : "Profit"}
                    </Typography>
                </div>
            </div>
            <div style={{ marginTop: 30 }}>
                <Typography variant="h3" className={classes.heading}>
                    Vendor Details
                </Typography>
                <div className={classes.details}>
                    <Typography variant="h6">Number of Vendors</Typography>
                    <Typography variant="body1">
                        {formValues.numberOfVendors}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6" style={{ marginBottom: 5 }}>
                        Vendors List
                    </Typography>
                    {range(formValues.numberOfVendors).map((vendorNum) => (
                        <div className={classes.vendorDetail} key={vendorNum}>
                            <Typography variant="body1">
                                <b>ID:</b>{" "}
                                {formValues.vendorsList[vendorNum].id}
                            </Typography>
                            <Typography variant="body1">
                                <b>Amount:</b>{" "}
                                {formValues.vendorsList[vendorNum].amount}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: 30 }}>
                <Typography variant="h3" className={classes.heading}>
                    Host Details
                </Typography>
                <div className={classes.details}>
                    <Typography variant="h6">Host Name</Typography>
                    <Typography variant="body1">
                        {formValues.hostName}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6">Organisation</Typography>
                    <Typography variant="body1">
                        {formValues.organisation}
                    </Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6">Role in Organisation</Typography>
                    <Typography variant="body1">
                        {formValues.roleInOrganisation}
                    </Typography>
                </div>
            </div>
            {/* <Typography variant="h2">Amount To Raise: </Typography> */}
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    details: {
        marginBottom: 15,
    },
    heading: {
        marginBottom: "15px !important",
    },
    vendorDetail: {
        marginBottom: 10,
    },
});

export default CreateCampaignStepFour;
