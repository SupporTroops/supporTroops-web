import React from "react";
import { Chip, Typography } from "@mui/material";

function CampaignAbout({ campaignDescription, campaignCause }) {
    return (
        <React.Fragment>
            <Typography variant="h3" style={{ marginBottom: "1rem" }}>
                Details
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
                {campaignDescription}
            </Typography>
            {campaignCause === "nonProfit" ? (
                <Chip
                    label="Non Profit Campaign"
                    color="success"
                    style={{ marginBottom: "2rem" }}
                />
            ) : (
                <Chip
                    label="Profit Based Campaign"
                    color="info"
                    style={{ marginBottom: "2rem" }}
                />
            )}
        </React.Fragment>
    );
}

export default CampaignAbout;
