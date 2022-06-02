import colors from "../config/colors";
import theme from "../config/theme";

export const HEADER_NAV_LIST = [
    {
        title: "Create Account",
        subTitle: "Come Join us in our Campaigns",
        backgroundColor: theme.palette.primary.main,
        color: colors.white,
        subTitleColor: theme.palette.grey[300],
        divider: false,
    },
    {
        title: "Sign In",
        subTitle: "See how your Campaigns are doing",
        backgroundColor: theme.palette.secondary.main,
        color: colors.white,
        subTitleColor: theme.palette.grey[300],
    },
    {
        title: "Ongoing Campaigns",
        subTitle: "Find what you came for or maybe just explore!",
    },
    {
        title: "Our Story",
        subTitle: "Who are we and What's our goal?",
    },
];
