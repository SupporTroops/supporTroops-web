import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

function LinearProgressCustom({ style, className, ...rest }) {
    return (
        <Box
            sx={{ display: "flex", alignItems: "center" }}
            className={className}
            style={style}
        >
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    style={{ height: 10, borderRadius: 10 }}
                    {...rest}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${Math.round(rest.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default LinearProgressCustom;
