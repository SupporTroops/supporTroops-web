import React, { useState } from "react";
import { InputAdornment, MenuItem, Select, Typography } from "@mui/material";
import TextFieldCustom from "../../../custom/TextFieldCustom";
import { createUseStyles } from "react-jss";

function DonationAmount({ donationValue, handleChange }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography
                variant="h5"
                style={{ marginTop: "2rem", fontWeight: "bold" }}
            >
                Enter your Donation amount
            </Typography>
            <div className={classes.donationAmount}>
                <Select
                    id="crypto-select"
                    value={donationValue.crypto}
                    name="crypto"
                    onChange={handleChange}
                    style={{ marginRight: "1rem" }}
                >
                    <MenuItem value="ETH">ETH</MenuItem>
                    <MenuItem value="DAI">DAI</MenuItem>
                    <MenuItem value="WDAI">WDAI</MenuItem>
                </Select>
                <TextFieldCustom
                    name="amount"
                    value={donationValue.amount}
                    onChange={handleChange}
                    type="number"
                    doNotApplyMarginBottom
                    style={{ width: "100%" }}
                    placeholder="Enter Amount"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">GWei</InputAdornment>
                        ),
                    }}
                />
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    donationAmount: {
        display: "flex",
        marginTop: "1rem",
    },
});

export default DonationAmount;
