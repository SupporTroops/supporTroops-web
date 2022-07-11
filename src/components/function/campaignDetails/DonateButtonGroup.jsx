import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../custom/ButtonCustom";

function DonateButtonGroup({ style, progress }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("donate");
    };

    return (
        <div style={{ ...style, marginTop: "1rem" }}>
            <ButtonCustom
                variant="contained"
                horizontalPadding={3}
                style={{ marginRight: "1rem" }}
                onClick={handleClick}
                disabled={progress >= 100 ? true : false}
            >
                Donate Now
            </ButtonCustom>
            <ButtonCustom variant="outlined" horizontalPadding={3}>
                Share
            </ButtonCustom>
        </div>
    );
}

export default DonateButtonGroup;
