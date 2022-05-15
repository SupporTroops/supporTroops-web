import { FormControl, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import auth from "../../utils/auth";

import ButtonCustom from "../custom/ButtonCustom";
import TextFieldCustom from "../custom/TextFieldCustom";

const initialLoginDetails = {
    email: "",
    password: "",
};

function LoginForm(props) {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState(initialLoginDetails);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await auth.signIn(loginDetails);
        if (!response) {
            // Raise error
            console.log("error");
        } else {
            navigate("/dashboard");
            console.log("success");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    type="submit"
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
            </FormControl>
        </form>
    );
}

export default LoginForm;
