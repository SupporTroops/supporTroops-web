import React from "react";
import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

import CoverImage from "../../../assets/cover.svg";
import theme from "../../../config/theme";

function Cover(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h1">
                Crypto for People, Not for Profit
            </Typography>
            <div className={classes.flexContainer}>
                <Typography variant="h5" className={classes.subTitle}>
                    Transforming the classical crowdfunding with{" "}
                    <span className={classes.accentText}>CRYPTO</span>, for the
                    new{" "}
                    <span className={classes.accentText}>DIGITAL INDIA</span>
                </Typography>
                <img src={CoverImage} alt="" className={classes.image} />
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        marginTop: "3rem",
    },
    image: {
        height: "25rem",
        marginRight: "3rem",
        marginTop: "8rem",
    },
    flexContainer: {
        display: "flex",
    },
    subTitle: {
        paddingTop: "3rem",
    },
    accentText: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
    },
});

export default Cover;
