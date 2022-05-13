import React from "react";
import ButtonCustom from "../../custom/ButtonCustom";

function DonateButtonGroup({ style }) {
    return (
        <div style={{ ...style, marginTop: "1rem" }}>
            <ButtonCustom
                variant="contained"
                horizontalPadding={3}
                style={{ marginRight: "1rem" }}
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
