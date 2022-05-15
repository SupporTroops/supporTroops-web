export const getAllCampaignsDetails = () => {
    // Get campaign details from backend
    return [
        {
            name: "Raise them up!",
            campaignDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loo type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loo",
            host: "CSBS",
            organisation: "Bharati Vidyapeeth University",
            progress: 70,
        },
        {
            name: "Chamoli Flood",
            campaignDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            host: "Pashu Palan",
            organisation: "Nirogi Kaya NGO",
            progress: 47,
        },
        {
            name: "Right to education",
            campaignDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lo",
            host: "Jayesh Nahar",
            organisation: "EdCare",
            progress: 92,
        },
    ];
};

export const getCampaignDetails = (campaignId) => {
    // Get Details from server

    // Parse image from server

    // Store in local storage

    return {
        coverImage:
            "https://www.bailinson-oleary.com/wp-content/uploads/2019/08/Child-Support.jpg",
        campaignName: "Raise Them Up!",
        campaignDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loo type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Loo",
        campaignCause: "nonProfit",
        hostName: "CSBS",
        organisation: "Bharati Vidyapeeth University",
        roleInOrganisation: "Deaprtment in Engineering College",
        amountToRaise: 14000,
        amountRaised: 11582,
        progress: Math.round((11582 / 14000) * 100),
        numberOfVendors: 3,
        vendorsList: {
            1: {
                name: "Sujata Stationary",
                id: "kCmnjkdXKhjkdsIUELjlk729KSLK",
                amount: "3400",
            },
            2: {
                name: "Regal Stationers",
                id: "kCmnjkdXKhjkdsIUELjlk729KSLK",
                amount: "5600",
            },
            3: {
                name: "Pandey Stationary",
                id: "kCmnjkdXKhjkdsIUELjlk729KSLK",
                amount: "4400",
            },
        },
    };
};
