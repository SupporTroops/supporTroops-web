import React from "react";
import { Typography } from "@mui/material";

import SignupForm from "../components/function/SignupForm";

function Signup(props) {
    return (
        <React.Fragment>
            <Typography variant="h1" style={{ marginBottom: "2rem" }}>
                Create Account
            </Typography>
            <SignupForm />
        </React.Fragment>
    );
}

export default Signup;
