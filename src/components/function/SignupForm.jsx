import { FormControl, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

function SignupForm(props) {
    const navigate = useNavigate();
    const [signupDetails, setSignupDetails] = useState(initialSignupDetails);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await auth.signUp(signupDetails);
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
                        type="submit"
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
