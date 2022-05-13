import React from "react";
import { createUseStyles } from "react-jss";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextFieldCustom from "../../custom/TextFieldCustom";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import ButtonCustom from "../../custom/ButtonCustom";

function CreateCampaignStepOne({ formValues, handleChange }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TextFieldCustom
                label="Campaign Name"
                name="campaignName"
                value={formValues.campaignName}
                onChange={handleChange}
            />
            <TextareaAutosize
                minRows={10}
                placeholder="Campaign Details"
                name="campaignDescription"
                value={formValues.campaignDescription}
                onChange={handleChange}
                className={classes.textArea}
            />
            <FormLabel
                id="campaign-cause-radio-button-group"
                style={{ marginTop: 30, marginLeft: 5 }}
            >
                Campaign Cause
            </FormLabel>
            <RadioGroup
                aria-labelledby="campaign-cause-radio-button-group"
                name="campaignCause"
                value={formValues.campaignCause}
                onChange={handleChange}
                row
                style={{ marginLeft: 5 }}
            >
                <FormControlLabel
                    value="nonProfit"
                    control={<Radio />}
                    label="Non Profit"
                />
                <FormControlLabel
                    value="profit"
                    control={<Radio />}
                    label="Profit"
                />
            </RadioGroup>
            <ButtonCustom
                variant="outlined"
                component="label"
                style={{ marginTop: "2rem" }}
            >
                Upload Cover Image
                <input
                    name="coverImage"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleChange}
                />
            </ButtonCustom>
            {formValues.coverImage && (
                <div className={classes.imageContainer}>
                    <img
                        src={URL.createObjectURL(formValues.coverImage)}
                        alt="Cover of campaign"
                        className={classes.image}
                    />
                </div>
            )}
        </React.Fragment>
    );
}

const useStyles = createUseStyles({
    textArea: {
        font: "inherit",
        padding: 12,
        outline: "none",
        color: "rgba(0, 0, 0, 0.87)",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: 5,
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        maxHeight: "21rem",
        marginTop: "3rem",
        borderRadius: 20,
        border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    image: {
        height: "auto",
        maxWidth: "100%",
        display: "block",
    },
});

export default CreateCampaignStepOne;
