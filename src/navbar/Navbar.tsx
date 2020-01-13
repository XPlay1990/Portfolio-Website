import React from "react";
import {Box, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";
import linkedInIcon from "../resources/contact/Linkedin.png";
import xingIcon from "../resources/contact/Xing.png";
import githubIcon from "../resources/contact/Github.png";
import LinkIcon from "@material-ui/icons/Link";
import {makeStyles} from "@material-ui/core/styles";
import qdIcon from "../resources/navbar/qd_software.png"

export const Navbar: React.FC = () => {
    const drawerWidth = 240;

    const useStyles = makeStyles(theme => ({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
            // marginTop: 48
        },
        drawerPaper: {
            width: drawerWidth,
            // marginTop: 48
        },
        listItemIcon: {
            width: '36px'
        },
        ListItemText: {
            color: "white"
        }
    }));

    const classes = useStyles();

    function jumpToDivId(divId: string) {
        const element = document.getElementById(divId);
        console.log(divId)
        console.log(element)
        if (element) {
            element.scrollIntoView()
        }
    }

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <div
                    // className={classes.toolbar}
                />
                <Divider/>
                <List>
                    <ListItem button key='AboutMe' onClick={() => {
                        jumpToDivId('aboutMeBackground')
                    }}>
                        <ListItemIcon><PersonIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary='Über mich'/>
                    </ListItem>
                    <ListItem button key='Lebenslauf' onClick={() => {
                        jumpToDivId('CV')
                    }}>
                        <ListItemIcon><DescriptionIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary='Lebenslauf'/>
                    </ListItem>
                    <ListItem button key='Projekte' onClick={() => {
                        jumpToDivId('Projects')
                    }}>
                        <ListItemIcon><WorkIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary='Projekte'/>
                    </ListItem>
                    <ListItem button key='Kontakt' onClick={() => {
                        jumpToDivId('Contact')
                    }}>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary='Kontakt'/>
                    </ListItem>
                </List>
                <Divider/>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Social Media
                        </ListSubheader>
                    }
                >
                    <Box display={'flex'} flexDirection={'column'} margin={'auto'}>
                        <Link href={'https://www.linkedin.com/in/jan-adamczyk/'} target="_blank"
                              rel="noopener noreferrer">
                            <ListItem button key='LinkedIn'>
                                <ListItemIcon><img className={classes.listItemIcon} src={linkedInIcon}
                                                   alt={'LinkedIn'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='LinkedIn'/>
                            </ListItem>
                        </Link>
                        <Link href={'https://www.xing.com/profile/Jan_Adamczyk3'} target="_blank"
                              rel="noopener noreferrer">
                            <ListItem button key='Xing'>
                                <ListItemIcon><img className={classes.listItemIcon} src={xingIcon}
                                                   alt={'Xing'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='Xing'/>
                            </ListItem>
                        </Link>
                        <Link href={'https://github.com/XPlay1990'} target="_blank" rel="noopener noreferrer">
                            <ListItem button key='Github'>
                                <ListItemIcon><img className={classes.listItemIcon} src={githubIcon}
                                                   alt={'Github'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='Github'/>
                            </ListItem>
                        </Link>
                    </Box>
                </List>
                <Divider/>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Development
                        </ListSubheader>
                    }
                >
                    <Link href={'http://www.qd-software.de'} target="_blank" rel="noopener noreferrer">
                        <ListItem button key='QD Software'>
                            <ListItemIcon><img className={classes.listItemIcon} src={qdIcon} alt={"qd software"}/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='QD Software'/>
                        </ListItem>
                    </Link>
                    <Link href={'http://jenkins.jan-adamczyk.de'} target="_blank" rel="noopener noreferrer">
                        <ListItem button key='Jenkins'>
                            <ListItemIcon><LinkIcon/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='Jenkins'/>
                        </ListItem>
                    </Link>
                    <Link href={'http://artifactory.jan-adamczyk.de'} target="_blank" rel="noopener noreferrer">
                        <ListItem button key='Artifactory'>
                            <ListItemIcon><LinkIcon/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='Artifactory'/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </nav>
    )
};