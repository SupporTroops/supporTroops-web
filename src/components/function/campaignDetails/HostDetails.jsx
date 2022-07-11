import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

import theme from "../../../config/theme";
import colors from "../../../config/colors";
import ButtonCustom from "../../custom/ButtonCustom";

function HostDetails({ hostName, organisation, roleInOrganisation, style }) {
    return (
        <Card
            variant="outlined"
            style={{
                ...style,
                backgroundColor: theme.palette.primary.main,
                color: colors.white,
                borderRadius: "1rem",
            }}
        >
            <CardContent>
                <Typography variant="h4">Organizer</Typography>
            </CardContent>
            <CardActions
                style={{
                    padding: "1rem",
                    paddingTop: 0,
                    color: theme.palette.grey[300],
                }}
            >
                <div>
                    <Typography variant="h6">{hostName}</Typography>
                    <Typography variant="subtitle1">
                        {roleInOrganisation}
                    </Typography>
                    <Typography variant="subtitle2">{organisation}</Typography>
                </div>
                {/* <ButtonCustom
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: "auto", marginLeft: "auto" }}
                >
                    Contact
                </ButtonCustom> */}
            </CardActions>
        </Card>
    );
}

export default HostDetails;
