import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Alert,
    Backdrop,
    CircularProgress,
    Collapse,
    FormControl,
    Typography,
} from "@mui/material";

import auth from "../../utils/auth";

import ButtonCustom from "../custom/ButtonCustom";
import TextFieldCustom from "../custom/TextFieldCustom";

const initialLoginDetails = {
    email: "",
    password: "",
};

const initialAlertDetails = {
    open: false,
    status: "error",
    message: "",
};

function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
    const [alert, setAlert] = useState(initialAlertDetails);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        });
    };

    const handleLogin = async (event) => {
        setBackdropOpen(true);
        const response = await auth.signIn(loginDetails);
        setTimeout(() => {
            setAlert({
                status: "Success",
                message: "OK",
                open: true,
            });
            if (response) {
                // setTimeout(() => {
                    navigate("/dashboard");
                    setIsLoggedIn(true);
                // }, 2000);
            }
        }, 2000);
    };

    useEffect(() => {
        setTimeout(() => {
            setBackdropOpen(false);
        }, 2000);
    }, [backdropOpen]);

    useEffect(() => {
        if (!alert.open) {
            setTimeout(() => {
                setAlert({
                    ...alert,
                    open: false,
                });
            }, 5000);
        }
    }, [alert]);

    return (
        <form>
            <FormControl style={{ width: "100%" }}>
                <TextFieldCustom
                    label="Email"
                    name="email"
                    value={loginDetails.email}
                    required
                    onChange={handleChange}
                    type="email"
                />
                <TextFieldCustom
                    label="Password"
                    name="password"
                    value={loginDetails.password}
                    required
                    onChange={handleChange}
                    type="password"
                />
                <ButtonCustom
                    variant="contained"
                    onClick={handleLogin}
                    horizontalPadding={4}
                    style={{ alignSelf: "flex-start" }}
                >
                    Login
                </ButtonCustom>
                <Typography variant="body1" style={{ marginTop: "1rem" }}>
                    Not a member yet?{" "}
                    <Link to="/signup" style={{ color: "black" }}>
                        Sign Up
                    </Link>
                </Typography>
                <Collapse in={alert.open}>
                    <Alert sx={{ marginTop: "2rem" }} severity={alert.status}>
                        {alert.message}
                    </Alert>
                </Collapse>
                <Backdrop
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={backdropOpen}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </FormControl>
        </form>
    );
}

export default LoginForm;
