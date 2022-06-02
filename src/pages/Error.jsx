import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import ErrorImage from "../assets/error.svg";
import ButtonCustom from "../components/custom/ButtonCustom";

function Error(props) {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleClick = (event) => {
        const buttonName = event.target.textContent;
        if (buttonName === "home") {
            navigate("/");
        } else if (buttonName === "go back") {
            navigate(-1);
        } else if (buttonName === "contact us") {
            navigate("/contact_us");
        }
    };

    return (
        <React.Fragment>
            <div className={classes.imageContainer}>
                <img src={ErrorImage} alt="error 404" />
            </div>
            <div className={classes.infoContainer}>
                <Typography
                    variant="h4"
                    style={{ marginTop: "5rem", marginBottom: "1rem" }}
                >
                    Sorry, could not find the page you are looking for
                </Typography>
                <Stack direction="row" spacing={2}>
                    <ButtonCustom variant="contained" onClick={handleClick}>
                        home
                    </ButtonCustom>
                    <ButtonCustom variant="outlined" onClick={handleClick}>
                        go back
                    </ButtonCustom>
                    <ButtonCustom variant="outlined" onClick={handleClick}>
                        contact us
                    </ButtonCustom>
                </Stack>
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    imageContainer: {
        marginTop: "3rem",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        "& img": {
            height: "15rem",
        },
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export default Error;
