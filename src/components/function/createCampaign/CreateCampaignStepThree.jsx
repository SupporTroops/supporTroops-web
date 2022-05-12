import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { range } from "../../../utils/functions";
import TextFieldCustom from "../../custom/TextFieldCustom";

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
            {range(formValues.numberOfVendors).map((element) => {
                return (
                    <div
                        key={element}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <TextFieldCustom
                            label={"Vendor " + element + " ID"}
                            name={"vendor" + element + "id"}
                            value={formValues.vendorsList[element].id}
                            onChange={handleChange}
                            style={{ width: "100%", marginRight: 20 }}
                        />
                        <TextFieldCustom
                            label={"Vendor " + element + " Amount"}
                            name={"vendor" + element + "amount"}
                            value={formValues.vendorsList[element].amount}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                        />
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default CreateCampaignStepTwo;
