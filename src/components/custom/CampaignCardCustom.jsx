import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import ButtonCustom from "./ButtonCustom";
import LinearProgressCustom from "./LinearProgressCustom";

function CampaignCardCustom({
    campaignName,
    campaignDescription,
    host,
    organisation,
    progress,
    style,
    onClick,
}) {
    const classes = useStyles();
    return (
        <Card raised className={classes.card} style={style}>
            <CardContent>
                <Typography variant="h3" className={classes.title}>
                    {campaignName}
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    {campaignDescription}
                </Typography>
                <LinearProgressCustom
                    value={progress}
                    className={classes.progressBar}
                />
            </CardContent>
            <CardActions style={{ padding: 16 }}>
                <Typography variant="h6">
                    By {host} from {organisation}
                </Typography>
                <ButtonCustom
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                    horizontalPadding={4}
                    onClick={onClick}
                >
                    Details
                </ButtonCustom>
            </CardActions>
        </Card>
    );
}

const useStyles = createUseStyles({
    card: {
        borderRadius: "2rem !important",
        padding: "1rem 1.5rem",
    },
    title: {
        fontWeight: "500",
        marginBottom: "1rem !important",
    },
    description: {
        width: "80%",
        height: "7.5rem",
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 5,
        // whiteSpace: "normal",
    },
    progressBar: {
        marginTop: "3rem",
    },
});

export default CampaignCardCustom;
