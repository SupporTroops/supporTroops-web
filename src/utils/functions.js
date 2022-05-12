export const range = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
};

export const campaignFormHandler = (event, formValues, setFormValues) => {
    let { name, value } = event.target;

    // Hamding number of Vendors
    if (name === "numberOfVendors") {
        const newvendorsList = {};
        range(value).forEach((ele) => {
            if (ele <= formValues.numberOfVendors) {
                newvendorsList[ele] = formValues.vendorsList[ele];
            } else {
                newvendorsList[ele] = { id: "", amount: 0 };
            }
        });
        setFormValues({
            ...formValues,
            numberOfVendors: value,
            vendorsList: newvendorsList,
        });
        return;
    }

    //  Handling Vendor List ID
    if (name.startsWith("vendor") && name.endsWith("id")) {
        const vendorNum = name[6];
        setFormValues({
            ...formValues,
            vendorsList: {
                ...formValues.vendorsList,
                [vendorNum]: {
                    ...formValues.vendorsList[vendorNum],
                    id: value,
                },
            },
        });
        return;
    }

    //  Handling Vendor List Amount
    if (name.startsWith("vendor") && name.endsWith("amount")) {
        const vendorNum = name[6];
        setFormValues({
            ...formValues,
            vendorsList: {
                ...formValues.vendorsList,
                [vendorNum]: {
                    ...formValues.vendorsList[vendorNum],
                    amount: value,
                },
            },
        });
        return;
    }

    // Handling Image
    if (event.target.name === "coverImage") {
        value = event.target.files[0];
    }

    setFormValues({
        ...formValues,
        [name]: value,
    });
};
