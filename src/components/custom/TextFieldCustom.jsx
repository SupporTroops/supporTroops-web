import React from "react";
import TextField from "@mui/material/TextField";
import { createUseStyles } from "react-jss";

function TextFieldCustom({
    variant = "outlined",
    label,
    name,
    value,
    onChange,
    style,
}) {
    const classes = useStyles();
    return (
        <TextField
            variant={variant}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            className={classes.textField}
            style={{
                ...style,
            }}
        />
    );
}

const useStyles = createUseStyles({
    textField: {
        marginBottom: "30px !important",
    },
});

export default TextFieldCustom;
