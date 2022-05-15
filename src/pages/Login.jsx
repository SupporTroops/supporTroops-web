import React from "react";
import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss";

import CoverImage from "../assets/login_cover.png";
import LoginForm from "../components/function/LoginForm";

function Login(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h1" style={{ marginBottom: "2rem" }}>
                Welcome Back!
            </Typography>
            <div className={classes.container}>
                <div className={classes.loginFormContainer}>
                    <LoginForm />
                </div>
                <img
                    src={CoverImage}
                    alt="crypto transfer"
                    style={{ width: "45%" }}
                />
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
    loginFormContainer: {
        width: "40%",
        paddingTop: "4rem",
        marginRight: "3rem",
    },
});

export default Login;
