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
    type,
    required,
    helperText,
    doNotApplyMarginBottom,
    ...rest
}) {
    const classes = useStyles();
    return (
        <TextField
            variant={variant}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            className={doNotApplyMarginBottom === true ? "" : classes.textField}
            required={required}
            type={type}
            helperText={helperText}
            style={style}
            {...rest}
        />
    );
}

const useStyles = createUseStyles({
    textField: {
        marginBottom: "30px !important",
    },
});

export default TextFieldCustom;
