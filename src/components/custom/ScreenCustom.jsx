import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";
import Footer from "../function/Footer";
import Header from "../function/Header";

function ScreenCustom({ children, isLoggedIn, setIsLoggedIn }) {
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className={classes.screen}>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
