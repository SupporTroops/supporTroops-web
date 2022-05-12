import React from "react";
import {
    List,
    ListItemButton,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

/**
 * ListItem: {
 *  title,
 *  subTitle,
 *  icon,
 *  backgroundColor,
 *  color,
 *  subTitleColor,
 *  divider: boolean,
 *  onClick,
 *  to: route
 * }
 */

function ListCustom({ list, clickableButtons = false }) {
    return (
        <List style={{ width: 270 }}>
            {list.map((item) => {
                return (
                    <React.Fragment key={item.title}>
                        {clickableButtons ? (
                            <ListItemButton
                                style={{
                                    color: item.color,
                                    backgroundColor: item.backgroundColor,
                                }}
                                divider={item.divider}
                                onClick={item.onClick}
                                component={Link}
                                to={item.to ? item.to : "/"}
                            >
                                {item.icon && (
                                    <ListItemIcon style={{ minWidth: 45 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={item.title}
                                    secondary={item.subTitle}
                                    secondaryTypographyProps={{
                                        color: item.subTitleColor,
                                    }}
                                />
                            </ListItemButton>
                        ) : (
                            <ListItem
                                style={{
                                    color: item.color,
                                    backgroundColor: item.backgroundColor,
                                }}
                                divider={item.divider}
                            >
                                {item.icon && (
                                    <ListItemIcon style={{ minWidth: 45 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={item.title}
                                    secondary={item.subTitle}
                                    secondaryTypographyProps={{
                                        color: item.subTitleColor,
                                    }}
                                />
                            </ListItem>
                        )}
                    </React.Fragment>
                );
            })}
        </List>
    );
}

export default ListCustom;
