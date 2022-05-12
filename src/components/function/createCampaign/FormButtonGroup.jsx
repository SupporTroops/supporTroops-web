import React from "react";
import { createUseStyles } from "react-jss";
import ButtonCustom from "../../custom/ButtonCustom";

function FormButtonGroup({ checkActiveStep, handleStepButtons }) {
    const classes = useStyles();
    return (
        <div className={classes.ButtonGroup}>
            <ButtonCustom
                variant="outlined"
                style={{ display: checkActiveStep([1, 2, 3]) ? "" : "none" }}
                onClick={handleStepButtons}
                horizontalPadding={4}
            >
                back
            </ButtonCustom>
            <ButtonCustom
                variant="contained"
                style={{
                    display: checkActiveStep([0, 1, 2]) ? "" : "none",
                    marginLeft: 3,
                }}
                onClick={handleStepButtons}
                horizontalPadding={4}
            >
                next
            </ButtonCustom>
            <ButtonCustom
                variant="contained"
                style={{
                    display: checkActiveStep([3]) ? "" : "none",
                    marginLeft: 3,
                }}
                horizontalPadding={4}
            >
                submit
            </ButtonCustom>
        </div>
    );
}

const useStyles = createUseStyles({
    ButtonGroup: {
        marginLeft: "auto",
        marginTop: 60,
        "& input": {
            marginLeft: 10,
        },
    },
});

export default FormButtonGroup;
