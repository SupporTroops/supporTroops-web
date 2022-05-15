import { Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";

function DonationCampaignDetails({
    campaignName,
    organiser,
    coverImage,
    organisation,
}) {
    const classes = useStyles();
    return (
        <div style={{ display: "flex", marginTop: "1rem" }}>
            <div className={classes.coverImageContainer}>
                <img src={coverImage} alt="" />
            </div>
            <div style={{ marginTop: "1rem" }}>
                <Typography variant="h6" style={{ display: "inline" }}>
                    Donating to{" "}
                </Typography>
                <Typography
                    variant="h5"
                    style={{
                        display: "inline",
                        fontWeight: "bold",
                    }}
                >
                    {campaignName}
                </Typography>
                <Typography>
                    Your donation will supoort the cause of <b>{organiser}</b>{" "}
                    from <b>{organisation}</b>
                </Typography>
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
    coverImageContainer: {
        height: "10rem",
        width: "60%",
        overflow: "hidden",
        borderRadius: "1rem",
        border: "1px solid grey",
        marginRight: "2rem",
        "& img": {
            width: "100%",
            height: "10rem",
            objectFit: "cover",
            objectPosition: "center",
        },
    },
});

export default DonationCampaignDetails;
