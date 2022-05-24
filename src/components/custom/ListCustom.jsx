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

function ListCustom({
    list,
    clickableButtons = false,
    style,
    primaryTypographyProps,
    secondaryTypographyProps,
}) {
    return (
        <List style={{ width: 270, ...style }}>
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
                                    <ListItemIcon
                                        style={{
                                            minWidth: 45,
                                            marginRight: "2rem",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={
                                        primaryTypographyProps
                                    }
                                    secondary={item.subTitle}
                                    secondaryTypographyProps={{
                                        color: item.subTitleColor,
                                        ...secondaryTypographyProps,
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
                                    <ListItemIcon
                                        style={{
                                            minWidth: 45,
                                            marginRight: "2rem",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={
                                        primaryTypographyProps
                                    }
                                    secondary={item.subTitle}
                                    secondaryTypographyProps={{
                                        color: item.subTitleColor,
                                        ...secondaryTypographyProps,
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
