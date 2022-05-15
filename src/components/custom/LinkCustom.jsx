import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

function LinkCustom({ children, to = "/", style, ...rest }) {
    const classes = useStyles();
    return (
        <Link className={classes.link} to={to} style={style} {...rest}>
            {children}
        </Link>
    );
}

const useStyles = createUseStyles({
    link: {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

export default LinkCustom;
