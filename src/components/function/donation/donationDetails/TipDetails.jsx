import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

function TipDetails({ donationValue, handleChange }) {
    const valueLabelFormat = (value) => {
        if (!donationValue.amount) return 0;
        else {
            const amount = Math.round((value / 100) * donationValue.amount, 2);
            return `${amount} ETH (${value}%)`;
        }
    };

    return (
        <React.Fragment>
            <Typography
                variant="h5"
                style={{
                    marginTop: "2rem",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                }}
            >
                Tip SupporTroops services
            </Typography>
            <Typography variant="body1">
                SupporTroops has a 0% platform fee for organisers. SupporTroops
                plans to continue offering its services for free with the help
                of optional tip.
            </Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1, mt: "2.4rem" }}
                alignItems="center"
            >
                <Typography variant="h6">0%</Typography>
                <Slider
                    name="tip"
                    value={donationValue.tip}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    valueLabelFormat={valueLabelFormat}
                    sx={{
                        "& .MuiSlider-valueLabel": {
                            borderRadius: "0.5rem",
                            backgroundColor: "white",
                            color: "black",
                            boxShadow: "rgb(100 100 111 / 80%) 0px 3px 7px 0px",
                        },
                        "& .MuiSlider-valueLabel:before": {
                            transform: "none",
                        },
                    }}
                />
                <Typography variant="h6">100%</Typography>
            </Stack>
        </React.Fragment>
    );
}

export default TipDetails;
