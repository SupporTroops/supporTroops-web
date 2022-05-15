import { Button } from "@mui/material";
import React from "react";

function ButtonCustom({
    children,
    variant,
    size,
    color,
    onClick,
    style,
    className,
    disableElevation = true,
    horizontalPadding,
    component,
    startIcon,
    endIcon,
    ...rest
}) {
    return (
        <Button
            style={style}
            sx={{
                ...styles.button,
                paddingRight: horizontalPadding,
                paddingLeft: horizontalPadding,
            }}
            variant={variant}
            color={color}
            size={size}
            disableElevation={disableElevation}
            onClick={onClick}
            className={className}
            component={component}
            startIcon={startIcon}
            endIcon={endIcon}
            {...rest}
        >
            {children}
        </Button>
    );
}

const styles = {
    button: {
        borderRadius: 20,
    },
};

export default ButtonCustom;
