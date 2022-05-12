import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../function/Footer";
import Header from "../function/Header";

function ScreenCustom({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <Header />
            <div className={classes.container}>{children}</div>
            <Footer />
        </div>
    );
}

const useStyles = createUseStyles({
    screen: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    container: {
        margin: "0 auto",
        padding: "1rem 2rem",
        width: "100%",
        maxWidth: "1276px",
        boxSizing: "border-box",
    },
});

export default ScreenCustom;
