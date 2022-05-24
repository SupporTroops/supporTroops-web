import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

import Cover from "../components/function/homePage/Cover";
import CryptoAccepted from "../components/function/homePage/CryptoAccepted";
import DonationSteps from "../components/function/homePage/DonationSteps";
import FancyDetails from "../components/function/homePage/FancyDetails";
import ButtonCustom from "../components/custom/ButtonCustom";

function Home(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/campaigns_list");
    };
    return (
        <React.Fragment>
            <Cover />
            <DonationSteps />
            <FancyDetails />
            <CryptoAccepted />
            <div className={classes.allCampaignsButton}>
                <ButtonCustom
                    size="large"
                    horizontalPadding={2}
                    endIcon={<ChevronRight />}
                    onClick={handleClick}
                >
                    Explore Campaigns
                </ButtonCustom>
            </div>
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    allCampaignsButton: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem",
    },
});

export default Home;
