import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";

import { range } from "../../../utils/functions";

function VendorDetails({ style, numberOfVendors, vendorsList }) {
    const classes = useStyles();
    let totalVendorsAmount = 0;
    return (
        <Card
            variant="outlined"
            style={{
                ...style,
                borderRadius: "1rem",
            }}
        >
            <CardContent>
                <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                    Vendors
                </Typography>
                <div className={classes.vendorsList}>
                    {range(numberOfVendors).map((vendorNum) => (
                        <div className={classes.vendorDetails} key={vendorNum}>
                            <Typography variant="body1">
                                <b>Name: </b>
                                {vendorsList[vendorNum].name}
                            </Typography>
                            <div className={classes.vednorIdAndAmount}>
                                <Typography
                                    variant="body1"
                                    style={{ width: "60%" }}
                                >
                                    <b>ID: </b>
                                    {vendorsList[vendorNum].id}
                                </Typography>
                                <Typography variant="body1">
                                    <b>Amount: </b>
                                    {vendorsList[vendorNum].amount}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
                {console.log(totalVendorsAmount)}
            </CardContent>
        </Card>
    );
}

const useStyles = createUseStyles({
    vendorsList: {
        "& > :last-child": {
            marginBottom: "0 !important",
        },
    },
    vednorIdAndAmount: {
        display: "flex",
        // justifyContent: "space-between",
    },
    vendorDetails: {
        marginBottom: "1rem",
    },
});

export default VendorDetails;
