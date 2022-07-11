import { Typography } from "@mui/material";
import React from "react";

import theme from "../../../config/theme";
import LinearProgressCustom from "../../custom/LinearProgressCustom";

function Progress({ amountRaised, amountToRaise, progress, style }) {
    return (
        <div style={style}>
            <Typography variant="h5" style={{ display: "inline" }}>
                <b>{amountRaised > amountToRaise ? amountToRaise : amountRaised} DAI</b>
            </Typography>
            <Typography
                variant="body1"
                style={{
                    display: "inline",
                    marginLeft: "0.5rem",
                    color: theme.palette.grey[600],
                }}
            >
                raised of <b>{amountToRaise} DAI</b> goal
            </Typography>
            <LinearProgressCustom value={progress} />
        </div>
    );
}

export default Progress;
