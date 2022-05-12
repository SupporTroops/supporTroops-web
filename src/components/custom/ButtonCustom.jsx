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
}) {
    return (
        <Button
            sx={{
                ...styles.button,
                ...style,
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
