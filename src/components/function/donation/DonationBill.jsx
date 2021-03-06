import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

function DonationBill({ donationValue }) {
    const classes = useStyles();

    let totalAmount = 0,
        tipAmount = 0,
        donationAmount = 0;

    if (donationValue.amount) {
        let tipPercent = parseInt(donationValue.tip);
        donationAmount = parseInt(donationValue.amount);
        tipAmount = 0; //Math.round((tipPercent / 100) * donationAmount);
        totalAmount = (tipAmount + donationAmount);
    }

    return (
        <Card
            raised
            style={{
                width: "50%",
                padding: "1rem",
                borderRadius: "1.5rem",
                alignSelf: "flex-start",
            }}
        >
            <CardContent style={{ paddingBottom: "1rem" }}>
                <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>
                    Your Donation
                </Typography>
                <div className={classes.flexContainer}>
                    <Typography>Your Donation</Typography>
                    <Typography>{donationAmount} GWei</Typography>
                </div>
                {/* <div className={classes.flexContainer}>
                    <Typography>SupporTroops Tip</Typography>
                    <Typography>{tipAmount} ETH</Typography>
                </div> */}
                <Divider
                    style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
                />
                <div className={classes.flexContainer}>
                    <Typography>Total Amount</Typography>
                    <Typography>{totalAmount} GWei</Typography>
                </div>
            </CardContent>
        </Card>
    );
}

const useStyles = createUseStyles({
    flexContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
});

export default DonationBill;
