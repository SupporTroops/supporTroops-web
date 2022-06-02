import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { MenuRounded } from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    Drawer,
    CircularProgress,
    Backdrop,
} from "@mui/material";

import ButtonCustom from "../custom/ButtonCustom";
import ListCustom from "../custom/ListCustom";

import logo from "../../assets/logo.png";
import auth from "../../utils/auth";
import { HEADER_NAV_LIST } from "../../utils/data";

function Header({ isLoggedIn, setIsLoggedIn }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);

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
        } else if (buttonName === "dashboard") {
            navigate("/dashboard");
        } else if (buttonName === "sign out") {
            setBackdropOpen(true);
            setTimeout(() => {
                auth.signOut();
                setIsLoggedIn(false);
            }, 2000);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setBackdropOpen(false);
        }, 2000);
    }, [backdropOpen]);

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
                <Link to="/">
                    <img src={logo} alt="SupporTroops Logo" />
                </Link>
                <div className={classes.navLinks}>
                    <ButtonCustom
                        className={classes.button}
                        onClick={handleClick}
                    >
                        ongoing campaigns
                    </ButtonCustom>
                    <ButtonCustom
                        className={classes.button}
                        onClick={handleClick}
                    >
                        our story
                    </ButtonCustom>
                    {!isLoggedIn && (
                        <ButtonCustom
                            variant="outlined"
                            onClick={handleClick}
                            className={classes.button}
                        >
                            sign in
                        </ButtonCustom>
                    )}
                    {!isLoggedIn && (
                        <ButtonCustom
                            variant="contained"
                            disableElevation
                            className={classes.button}
                            onClick={handleClick}
                        >
                            create account
                        </ButtonCustom>
                    )}
                    {isLoggedIn && (
                        <ButtonCustom
                            variant="outlined"
                            onClick={handleClick}
                            className={classes.button}
                        >
                            dashboard
                        </ButtonCustom>
                    )}
                    {isLoggedIn && (
                        <ButtonCustom
                            variant="contained"
                            disableElevation
                            className={classes.button}
                            onClick={handleClick}
                        >
                            sign out
                        </ButtonCustom>
                    )}
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
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={backdropOpen}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
    button: {
        marginRight: "1rem !important",
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
};

export default Header;
