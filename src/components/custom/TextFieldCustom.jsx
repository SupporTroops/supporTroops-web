import React from "react";
import TextField from "@mui/material/TextField";

function TextFieldCustom({
    variant = "outlined",
    label,
    name,
    value,
    onChange,
    style,
}) {
    return (
        <TextField
            variant={variant}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            style={{
                ...style,
                marginBottom: 30,
            }}
        />
    );
}

export default TextFieldCustom;
