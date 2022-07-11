import React from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";

import ButtonCustom from "../../custom/ButtonCustom";

import TipDetails from "./donationDetails/TipDetails";
import DonationAmount from "./donationDetails/DonationAmount";
import DonationCampaignDetails from "./donationDetails/DonationCampaignDetails";
import auth from "../../../utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { donateToCampaign } from "../../../api/crowdfund";
import { useWeb3Context } from "../../../contexts/Web3";

function DonationDetails({
    campaignName,
    organiser,
    coverImage,
    organisation,
    donationValue,
    handleChange,
}) {
    const navigate = useNavigate();
    const { campaign_id } = useParams();
    const { state: { web3, account } } = useWeb3Context();

    const handleClick = async () => {
        if (!auth.isAuthenticated()) {
            navigate("/login");
        } else {
            console.log(String(donationValue.amount) + String(10 ** 9).substring(1))
            await donateToCampaign(web3, account, campaign_id, "ETH", String(donationValue.amount) + String(10 ** 9).substring(1));
            console.log("Payment Successfull");
        }
    };

    const handleReturn = () => {
        navigate(-1);
    };

    return (
        <Card
            raised
            style={{
                width: "100%",
                marginRight: "3rem",
                padding: "1.5rem",
                borderRadius: "1.5rem",
                marginBottom: "4rem",
            }}
        >
            <CardContent style={{ paddingBottom: "1rem" }}>
                <ButtonCustom
                    variant="outlined"
                    horizontalPadding={3}
                    startIcon={<ChevronLeft />}
                    style={{ marginBottom: "1.5rem" }}
                    onClick={handleReturn}
                >
                    Return to Campaign
                </ButtonCustom>
                <DonationCampaignDetails
                    campaignName={campaignName}
                    coverImage={coverImage}
                    organisation={organisation}
                    organiser={organiser}
                />
                <DonationAmount
                    donationValue={donationValue}
                    handleChange={handleChange}
                />
                {/* <TipDetails
                    donationValue={donationValue}
                    handleChange={handleChange}
                /> */}
                <ButtonCustom
                    variant="contained"
                    style={{ marginTop: "1.5rem" }}
                    horizontalPadding={3}
                    onClick={handleClick}
                >
                    Donate
                </ButtonCustom>
            </CardContent>
        </Card>
    );
}

export default DonationDetails;
