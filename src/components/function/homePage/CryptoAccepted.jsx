import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material";

import Dai from "../../../assets/crypto/dai.svg";
import WDai from "../../../assets/crypto/wdai.svg";
import Ethereum from "../../../assets/crypto/ethereum.svg";

import Bitcoin from "../../../assets/crypto/bitcoin.svg";
import Bnb from "../../../assets/crypto/bnb.svg";
import Avalanche from "../../../assets/crypto/avalanche.svg";
import Cardano from "../../../assets/crypto/cardano.svg";
import Doge from "../../../assets/crypto/doge.svg";
import Shiba from "../../../assets/crypto/shiba.svg";
import Solana from "../../../assets/crypto/solana.svg";
import Terra from "../../../assets/crypto/terra.svg";
import Tether from "../../../assets/crypto/tether.svg";
import Xrp from "../../../assets/crypto/xrp.svg";

const ACCEPTED_CRYPTOS = [Dai, WDai, Ethereum];
const WORKING_TOWARDS_CRYPTOS = [
    Bitcoin,
    Bnb,
    Avalanche,
    Doge,
    Shiba,
    Cardano,
    Solana,
    Xrp,
    Tether,
    Terra,
];

function CryptoAccepted(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h2" style={{ marginBottom: "2rem" }}>
                We Trade in
            </Typography>
            <div className={classes.cryptos}>
                {ACCEPTED_CRYPTOS.map((crypto) => (
                    <div key={crypto} className={classes.imageContainer}>
                        <img src={crypto} alt={crypto} />
                    </div>
                ))}
            </div>
            <Typography
                variant="h4"
                style={{ marginBottom: "2rem", fontWeight: "300" }}
            >
                And are working towards
            </Typography>
            <div className={classes.cryptos}>
                {WORKING_TOWARDS_CRYPTOS.map((crypto) => (
                    <div key={crypto} className={classes.imageContainer}>
                        <img src={crypto} alt={crypto} />
                    </div>
                ))}
            </div>
            <Typography
                variant="h5"
                style={{
                    marginTop: "-1rem",
                    marginBottom: "3rem",
                }}
            >
                & more...
            </Typography>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        marginTop: "5rem",
    },
    cryptos: {
        display: "flex",
        width: "80%",
        flexWrap: "wrap",
        alignItems: "center",
    },
    imageContainer: {
        height: "5rem",
        width: "7rem",
        marginRight: "3rem",
        marginBottom: "3rem",
        textAlign: "center",
        "& img": {
            height: "100%",
            width: "auto",
        },
    },
});

export default CryptoAccepted;
