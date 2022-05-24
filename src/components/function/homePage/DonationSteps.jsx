import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material";

import ListCustom from "../../custom/ListCustom";

import colors from "../../../config/colors";
import theme from "../../../config/theme";
import NumberIconCustom from "../../custom/NumberIconCustom";

const DONATION_STEPS = [
    {
        title: "Find your campaign",
        subTitle:
            "Find the specific campaign you want to support or maybe just scroll through the ongoing campaigns",
        icon: <NumberIconCustom>1</NumberIconCustom>,
    },
    {
        title: "Verify Details",
        subTitle:
            "Check if the details of the campaign are correct and to your liking.",
        icon: <NumberIconCustom>2</NumberIconCustom>,
    },
    {
        title: "Donate",
        subTitle:
            "If everything falls into place, hit the Donate button and its Done.",
        icon: <NumberIconCustom>3</NumberIconCustom>,
    },
];

function DonationSteps(props) {
    const classes = useStyles();
    return (
        <div className={classes.donationSteps}>
            <Typography variant="h2">Donate in a few easy steps</Typography>
            <ListCustom
                list={DONATION_STEPS}
                style={{ width: "70%" }}
                primaryTypographyProps={{ variant: "h4" }}
                secondaryTypographyProps={{
                    variant: "h6",
                    style: {
                        color: theme.palette.grey[300],
                        fontWeight: "300",
                    },
                }}
            />
        </div>
    );
}

const useStyles = createUseStyles({
    donationSteps: {
        padding: "2rem 3rem",
        marginTop: "5rem",
        borderRadius: "1rem",
        color: colors.white,
        backgroundColor: theme.palette.primary.main,
    },
});

export default DonationSteps;
