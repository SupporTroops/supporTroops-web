import React from "react";
import { createUseStyles } from "react-jss";

import { Typography } from "@mui/material";
import theme from "../../../config/theme";
import colors from "../../../config/colors";

function FancyDetails(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.normalContainer}>
                <Typography variant="h2">We are safe</Typography>
            </div>
            <div className={classes.bgContainer}>
                <Typography variant="h2">BlockChain to the Rescue!</Typography>
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    normalContainer: {
        height: "20rem",
        marginTop: "5rem",
    },
    bgContainer: {
        height: "20rem",
        marginTop: "5rem",
        backgroundColor: theme.palette.secondary.main,
        color: colors.white,
        borderRadius: "1rem",
        padding: "2rem 3rem",
    },
});

export default FancyDetails;
