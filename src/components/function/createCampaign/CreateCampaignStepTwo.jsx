import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import TextFieldCustom from "../../custom/TextFieldCustom";

const range = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
};

function CreateCampaignStepTwo({ formValues, handleChange }) {
    return (
        <React.Fragment>
            <InputLabel id="vendor-number">Number of Vendors</InputLabel>
            <Select
                labelId="vendor-number"
                id="vendor-select"
                name="numberOfVendors"
                value={formValues.numberOfVendors}
                label="vendor-number"
                onChange={handleChange}
                style={{ marginBottom: 60 }}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Typography variant="h5" style={{ marginBottom: 20 }}>
                Vendors List
            </Typography>
            {range(formValues.numberOfVendors).map((element, index) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <TextFieldCustom
                            label={"Vendor " + (index + 1) + " ID"}
                            name={"vendor" + (index + 1) + "id"}
                            style={{ width: "100%", marginRight: 20 }}
                        />
                        <TextFieldCustom
                            label={"Vendor " + (index + 1) + " Amount"}
                            name={"vendor" + (index + 1) + "amount"}
                            style={{ width: "100%" }}
                        />
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default CreateCampaignStepTwo;
