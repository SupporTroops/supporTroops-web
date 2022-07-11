import React, { useEffect, useState} from "react";
import { createUseStyles } from "react-jss";

import CampaignCardCustom from "../custom/CampaignCardCustom";
import { useWeb3Context } from "../../contexts/Web3";
import { useCrowdFundContext } from "../../contexts/CrowdFund";

function GetCampaigns(props) {
    const classes = useStyles();
    const { state: { account } } = useWeb3Context();
    const { state } = useCrowdFundContext();
    return (
        <div className={classes.cardContainer}>
            { (account && !state.campaigns.length) ? 'Loading campaigns' :
            state.campaigns.map((campaign) => (
                <CampaignCardCustom
                    key={campaign.address}
                    campaignId={campaign.address}
                    campaignName={campaign.name}
                    campaignDescription={campaign.description}
                    host={campaign.owner}
                    organisation={campaign.type}
                    progress={(campaign.amountRaised / campaign.amountToRaise) * 100}
                    style={{ marginBottom: 50 }}
                />
            ))}
        </div>
    );
}

const useStyles = createUseStyles({
    cardContainer: {
        marginTop: "3rem",
    },
});

export default GetCampaigns;
