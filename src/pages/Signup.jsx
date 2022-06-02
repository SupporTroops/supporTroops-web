import React from "react";
import { Typography } from "@mui/material";

import SignupForm from "../components/function/SignupForm";

function Signup({ setIsLoggedIn }) {
    return (
        <React.Fragment>
            <Typography variant="h1" style={{ marginBottom: "2rem" }}>
                Create Account
            </Typography>
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
        </React.Fragment>
    );
}

export default Signup;
