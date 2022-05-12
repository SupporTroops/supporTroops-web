import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Instagram, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { createUseStyles } from 'react-jss';

import theme from '../../config/theme';
import LinkCustom from '../custom/LinkCustom';

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative" sx={{ top: 'auto', bottom: 0, marginTop: 'auto' }}>
            <div className={classes.container}>
                <Toolbar style={{ padding: 0, borderBottom: '0.5px solid' }} className={classes.toolbarContainer}>
                    <LinkCustom>About&nbsp;Us</LinkCustom>
                    <LinkCustom>Contact&nbsp;Us</LinkCustom>
                    <LinkCustom>What's&nbsp;New</LinkCustom>
                    <LinkCustom>Feedback</LinkCustom>
                </Toolbar>
                <Toolbar style={{ padding: 0 }} className={classes.toolbarContainer2}>
                    <div>
                        <LinkCustom><IconButton color='inherit'><Facebook /></IconButton></LinkCustom>
                        <LinkCustom><IconButton color='inherit'><Instagram /></IconButton></LinkCustom>
                        <LinkCustom><IconButton color='inherit'><LinkedIn /></IconButton></LinkCustom>
                        <LinkCustom><IconButton color='inherit'><Twitter /></IconButton></LinkCustom>
                    </div>
                    <div style={{ padding: 0 }} className={classes.legalContainer}>
                        <LinkCustom style={{ fontSize: '0.8rem' }}>Privacy&nbsp;and&nbsp;Security</LinkCustom>
                        <LinkCustom style={{ fontSize: '0.8rem' }}>Terms&nbsp;of&nbsp;Use</LinkCustom>
                        <LinkCustom style={{ fontSize: '0.8rem' }}>Research</LinkCustom>
                    </div>
                </Toolbar>
                <div className={classes.info}>
                    <span>Copyright © 2000-2021 Write.io</span>
                    <span>Developed with React and &nbsp;{'\u2764\uFE0F'}</span>
                </div>
            </div>
        </AppBar >
    );
}

const useStyles = createUseStyles({
    container: {
        margin: '0 auto',
        padding: '1rem 2rem',
        width: '100%',
        maxWidth: '1276px',
        boxSizing: 'border-box'
    },
    toolbarContainer: {
        flexWrap: 'wrap',
        '& a': {
            marginRight: 50,
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingBottom: 20,
            '& a': {
                marginRight: 0,
                marginBottom: 10
            },
            '& :last-child': {
                marginBottom: 15
            }
        }
    },
    toolbarContainer2: {
        marginLeft: -10,
        justifyContent: 'space-between',
        '& a': {
            marginRight: 10
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: 10,
            marginBottom: 20,
            marginLeft: 0
        }
    },
    legalContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    info: {
        marginBottom: '1.5rem',
        fontSize: '0.8rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: theme.palette.grey[400],
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 0,
            '& span': {
                marginBottom: 10
            }
        }
    }
})

export default Footer;