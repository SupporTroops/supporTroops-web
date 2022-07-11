import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";

function VendorDetails({ style, numberOfVendors, vendorsList }) {
    const classes = useStyles();

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
                <div className={classes.vList}>
                    {vendorsList?.map((vendor) => (
                        <div className={classes.vendorDetails} key={vendor}>
                            {/* <Typography variant="body1">
                                <b>Name: </b>
                                {vendor.address}
                            </Typography> */}
                            <div className={classes.vednorIdAndAmount}>
                                <Typography
                                    variant="body1"
                                    style={{ width: "60%" }}
                                >
                                    <b>ID: </b>
                                    {vendor.address}
                                </Typography>
                                <Typography variant="body1">
                                    <b>Amount: </b>
                                    {vendor.amount}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

const useStyles = createUseStyles({
    vList: {
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
