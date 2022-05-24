import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/colors";

function NumberIconCustom({ children, size }) {
    const classes = useStyles();
    return (
        <div
            className={classes.container}
            style={{ width: size ? size * 1.5 : "3rem" }}
        >
            <Typography
                variant="body1"
                style={{ fontSize: size ? size : "2rem", textAlign: "center" }}
            >
                {children}
            </Typography>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        backgroundColor: colors.white,
        padding: "1rem",
        borderRadius: "50%",
    },
});

export default NumberIconCustom;
