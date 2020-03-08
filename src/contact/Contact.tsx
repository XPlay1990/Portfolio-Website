import React, {useState} from "react";
import {Box, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Slide} from "@material-ui/core";
import linkedInIcon from "../resources/contact/Linkedin.png";
import xingIcon from "../resources/contact/Xing.png";
import githubIcon from "../resources/contact/Github.png";
import {makeStyles} from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ReactGA from 'react-ga';
import {IS_DARK_MODE} from "../config/constants";
import VisibilitySensor from "react-visibility-sensor";

export const Contact: React.FC = () => {
    const [visibilityTriggered, setVisibilityTriggered] = useState(false);

    const useStyles = makeStyles({
        ContactList: {
            margin: 'auto'
        },
        listItemIcon: {
            width: '36px'
        },
        ListItemTextDarkMode: {
            color: "white"
        },
        ListItemTextBrightMode: {
            color: "black"
        }
    });
    const classes = useStyles();


    return (
        <VisibilitySensor partialVisibility active={!visibilityTriggered} delayedCall
                          onChange={(isVisible => isVisible ? setVisibilityTriggered(true) : null)}>
            {({isVisible}) =>
                <div id='Contact' style={{
                    margin: 'auto',
                    height: '100vh',
                }}>
                    <Slide direction="left" in={isVisible} timeout={1000}>
                        <Box style={{
                            width: '50%',
                            margin: 'auto',
                            display: "flex",
                            flexDirection: "row",
                            height: '100%',
                            flexWrap: "wrap"
                        }}>
                            <List
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Kontakt
                                    </ListSubheader>
                                }
                                className={classes.ContactList}
                            >
                                <Box>
                                    <ReactGA.OutboundLink eventLabel="Contact_Mail" to={'mailto:j_adamczyk@hotmail.com'}
                                                          rel="noopener noreferrer">
                                        <ListItem button key='Mail'>
                                            <ListItemIcon><MailIcon/></ListItemIcon>
                                            <ListItemText
                                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                                primary='Email: j_adamczyk@hotmail.com'/>
                                        </ListItem>
                                    </ReactGA.OutboundLink>
                                    <ReactGA.OutboundLink eventLabel="Contact_Phone" to={'tel:+4915751763598'}
                                                          rel="noopener noreferrer">
                                        <ListItem button key='Tel'>
                                            <ListItemIcon><PhoneIcon/></ListItemIcon>
                                            <ListItemText
                                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                                primary='Tel: +49 1575 1763598'/>
                                        </ListItem>
                                    </ReactGA.OutboundLink>
                                </Box>
                            </List>
                            <List
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Social Media
                                    </ListSubheader>
                                }
                                className={classes.ContactList}
                            >
                                <Box>
                                    <ReactGA.OutboundLink eventLabel="Contact_LinkedIn"
                                                          to={'https://www.linkedin.com/in/jan-adamczyk/'}
                                                          target="_blank"
                                                          rel="noopener noreferrer">
                                        <ListItem button key='LinkedIn'>
                                            <ListItemIcon><img className={classes.listItemIcon} src={linkedInIcon}
                                                               alt={'LinkedIn'}/></ListItemIcon>
                                            <ListItemText
                                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                                primary='LinkedIn'/>
                                        </ListItem>
                                    </ReactGA.OutboundLink>
                                    <ReactGA.OutboundLink eventLabel="Contact_Xing"
                                                          to={'https://www.xing.com/profile/Jan_Adamczyk3'}
                                                          target="_blank"
                                                          rel="noopener noreferrer">
                                        <ListItem button key='Xing'>
                                            <ListItemIcon><img className={classes.listItemIcon} src={xingIcon}
                                                               alt={'Xing'}/></ListItemIcon>
                                            <ListItemText
                                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                                primary='Xing'/>
                                        </ListItem>
                                    </ReactGA.OutboundLink>
                                    <ReactGA.OutboundLink eventLabel="Contact_GitHub"
                                                          to={'https://github.com/XPlay1990'}
                                                          target="_blank"
                                                          rel="noopener noreferrer">
                                        <ListItem button key='Github'>
                                            <ListItemIcon><img className={classes.listItemIcon} src={githubIcon}
                                                               alt={'Github'}/></ListItemIcon>
                                            <ListItemText
                                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                                primary='Github'/>
                                        </ListItem>
                                    </ReactGA.OutboundLink>
                                </Box>
                            </List>
                        </Box>
                    </Slide>
                </div>
            }
        </VisibilitySensor>
    )
};