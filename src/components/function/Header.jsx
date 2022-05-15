import { MenuRounded } from "@mui/icons-material";
import { AppBar, Toolbar, Drawer } from "@mui/material";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import ButtonCustom from "../custom/ButtonCustom";
import ListCustom from "../custom/ListCustom";

import logo from "../../assets/logo.png";
import theme from "../../config/theme";
import colors from "../../config/colors";

import auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const HEADER_NAV_LIST = [
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
        onClick: auth.signIn,
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

function Header(props) {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event) => {
        const buttonName = event.target.textContent;
        if (buttonName === "ongoing campaigns") {
            navigate("/campaigns_list");
        } else if (buttonName === "our story") {
            navigate("/about_us");
        } else if (buttonName === "create account") {
            navigate("/signup");
        } else if (buttonName === "sign in") {
            navigate("/login");
        } else if (buttonName === "sign out") {
            auth.signOut();
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Toolbar sx={{ ...styles.navBarContainer }}>
                <img src={logo} alt="SupporTroops Logo" />
                <div className={classes.navLinks}>
                    <ButtonCustom style={styles.button} onClick={handleClick}>
                        ongoing campaigns
                    </ButtonCustom>
                    <ButtonCustom style={styles.button} onClick={handleClick}>
                        our story
                    </ButtonCustom>
                    <ButtonCustom
                        style={styles.button}
                        variant="outlined"
                        onClick={handleClick}
                        className={classes.signIn}
                    >
                        sign in
                    </ButtonCustom>
                    <ButtonCustom
                        style={styles.button}
                        variant="contained"
                        disableElevation
                        className={classes.createAccount}
                        onClick={handleClick}
                    >
                        create account
                    </ButtonCustom>
                    <ButtonCustom
                        style={styles.button}
                        variant="contained"
                        disableElevation
                        className={classes.signOut}
                        onClick={handleClick}
                    >
                        sign out
                    </ButtonCustom>
                </div>
                <div className={classes.menuButton}>
                    <MenuRounded
                        onClick={toggleDrawer(true)}
                        fontSize="large"
                    />
                </div>
            </Toolbar>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <div className={classes.emptySpace}></div>
                {<ListCustom clickableButtons list={HEADER_NAV_LIST} />}
            </Drawer>
        </AppBar>
    );
}

const useStyles = createUseStyles({
    navLinks: {
        "@media (max-width: 1000px)": {
            display: "none",
        },
    },
    menuButton: {
        display: "none",
        "@media (max-width: 1000px)": {
            display: "block",
        },
    },
    createAccount: {
        display: auth.isAuthenticated() ? "none !important" : "",
    },
    signIn: {
        display: auth.isAuthenticated() ? "none !important" : "",
    },
    signOut: {
        display: auth.isAuthenticated() ? "" : "none !important",
    },
    emptySpace: {
        height: 20,
    },
});

const styles = {
    navBarContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        height: 90,
    },
    button: {
        marginRight: "1rem",
    },
};

export default Header;
