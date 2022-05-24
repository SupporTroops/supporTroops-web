import React, { useState } from "react";
import { TextField } from "@mui/material";
import { createUseStyles } from "react-jss";

import ButtonCustom from "./ButtonCustom";

function SearchCustom(props) {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (event) => {
        console.log("Searching");
    };

    return (
        <div className={classes.searchContainer}>
            <TextField
                placeholder="Search Campaign"
                variant="outlined"
                name="searchText"
                value={searchText}
                onChange={handleChange}
                sx={{
                    width: "100%",
                    marginRight: "1rem",
                    "& fieldset": {
                        borderRadius: 20,
                    },
                    "& input": {
                        paddingLeft: 3,
                    },
                }}
            />
            <ButtonCustom
                onClick={handleSearch}
                variant="contained"
                horizontalPadding={4}
            >
                Search
            </ButtonCustom>
        </div>
    );
}

const useStyles = createUseStyles({
    searchContainer: {
        display: "flex",
        width: "100%",
    },
});

export default SearchCustom;
