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

const initialSignupDetails = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const initialAlertDetails = {
    open: false,
    status: "error",
    message: "",
};

function SignupForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [signupDetails, setSignupDetails] = useState(initialSignupDetails);
    const [alert, setAlert] = useState(initialAlertDetails);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value,
        });
    };

    const handleSignup = async (event) => {
        setBackdropOpen(true);
        const response = await auth.signUp(signupDetails);
        setTimeout(() => {
            setAlert({
                ...response,
                open: true,
            });
            if (response.status === "success") {
                setTimeout(() => {
                    navigate("/dashboard");
                    setIsLoggedIn(true);
                }, 2000);
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
            <FormControl style={{ width: "100%", flexDirection: "row" }}>
                <FormControl style={{ width: "100%", marginRight: "4rem" }}>
                    <TextFieldCustom
                        label="Name"
                        name="name"
                        value={signupDetails.name}
                        required
                        onChange={handleChange}
                    />
                    <TextFieldCustom
                        label="Email"
                        name="email"
                        value={signupDetails.email}
                        required
                        onChange={handleChange}
                        type="email"
                    />
                    <TextFieldCustom
                        label="Phone"
                        name="phone"
                        value={signupDetails.phone}
                        required
                        onChange={handleChange}
                        type="tel"
                    />
                    <ButtonCustom
                        variant="contained"
                        onClick={handleSignup}
                        horizontalPadding={4}
                        style={{ alignSelf: "flex-start" }}
                    >
                        Create Account
                    </ButtonCustom>
                    <Typography variant="body1" style={{ marginTop: "1rem" }}>
                        Already a member?{" "}
                        <Link to="/login" style={{ color: "black" }}>
                            Login
                        </Link>
                    </Typography>
                    <Collapse in={alert.open}>
                        <Alert
                            sx={{ marginTop: "2rem" }}
                            severity={alert.status}
                        >
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
                <FormControl style={{ width: "100%" }}>
                    <TextFieldCustom
                        label="Password"
                        name="password"
                        value={signupDetails.password}
                        required
                        onChange={handleChange}
                        type="password"
                    />
                    <TextFieldCustom
                        label="Confirm Password"
                        name="confirmPassword"
                        value={signupDetails.confirmPassword}
                        required
                        onChange={handleChange}
                        type="password"
                    />
                </FormControl>
            </FormControl>
        </form>
    );
}

export default SignupForm;
