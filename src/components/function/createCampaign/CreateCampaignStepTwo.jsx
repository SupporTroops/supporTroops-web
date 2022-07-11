import React from "react";
import TextFieldCustom from "../../custom/TextFieldCustom";

function CreateCampaignStepThree({ formValues, handleChange }) {
    return (
        <React.Fragment>
            <TextFieldCustom
                label="Owner Name"
                name="hostName"
                value={formValues.hostName}
                onChange={handleChange}
            />
            {/* <TextFieldCustom
                label="Organisation"
                name="organisation"
                value={formValues.organisation}
                onChange={handleChange}
            /> */}
            {/* <TextFieldCustom
                label="Role in Organisation"
                name="roleInOrganisation"
                value={formValues.roleInOrganisation}
                onChange={handleChange}
            /> */}
            <TextFieldCustom
                label="Amount to Raise (DAI)"
                name="amountToRaise"
                value={formValues.amountToRaise}
                onChange={handleChange}
                type="number"
                style={{ marginTop: 30, marginBotton: "0 !important" }}
            />
        </React.Fragment>
    );
}

export default CreateCampaignStepThree;
