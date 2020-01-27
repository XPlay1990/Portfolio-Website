import React, {FunctionComponent, useState} from 'react';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Toolbar,
    Tooltip,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
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
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import i18n from "i18next";
import {Trans} from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import ReactGA from 'react-ga';

// export const Navbar: React.FC = () => {
export const Navbar: FunctionComponent<{ drawerWidth: number }> =
    (drawerWidth) => {
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const [language, setLanguage] = useState(i18n.language);
        const theme = useTheme();

        const useStyles = makeStyles(theme => ({
            drawer: {
                [theme.breakpoints.up('sm')]: {
                    width: drawerWidth.drawerWidth,
                    flexShrink: 0,
                },
                // marginTop: 48
            },
            drawerPaper: {
                width: drawerWidth.drawerWidth,
                // marginTop: 48
            },
            listItemIcon: {
                width: '36px'
            },
            ListItemText: {
                color: "white"
            },
            appBar: {
                [theme.breakpoints.up('sm')]: {
                    width: `calc(100% - ${drawerWidth.drawerWidth}px)`,
                    marginLeft: drawerWidth.drawerWidth,
                },
            },
            menuButton: {
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                    display: 'none',
                },
            },
            toolbar: (theme.mixins.toolbar as any),
        }));

        const classes = useStyles();

        const breakPointMatches: boolean = useMediaQuery(theme.breakpoints.up('sm'));

        function jumpToDivId(divId: string) {
            const element = document.getElementById(divId);
            if (element) {
                element.scrollIntoView()
            }

            ReactGA.event({
                category: "Navbar",
                action: divId,
            });
        }

        function changeLanguageToggle(event: any, selectedLanguage: string) {
            setLanguage(selectedLanguage);
            i18n.changeLanguage(selectedLanguage);
            window.location.reload();

            ReactGA.event({
                category: "ChangeLanguage",
                action: selectedLanguage,
            });
        }

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    <ListItem button key='AboutMe' onClick={() => {
                        jumpToDivId('aboutMeBackground')
                    }}>
                        <ListItemIcon><PersonIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText}
                                      primary={<Trans i18nKey={`navbar.aboutme`}/>}/>
                    </ListItem>
                    <ListItem button key='Lebenslauf' onClick={() => {
                        jumpToDivId('CV')
                    }}>
                        <ListItemIcon><DescriptionIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary={<Trans i18nKey={`navbar.cv`}/>}/>
                    </ListItem>
                    <ListItem button key='Projekte' onClick={() => {
                        jumpToDivId('Projects')
                    }}>
                        <ListItemIcon><WorkIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText}
                                      primary={<Trans i18nKey={`navbar.projects`}/>}/>
                    </ListItem>
                    <ListItem button key='Kontakt' onClick={() => {
                        jumpToDivId('Contact')
                    }}>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText className={classes.ListItemText}
                                      primary={<Trans i18nKey={`navbar.contact`}/>}/>
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
                        <ReactGA.OutboundLink eventLabel="Navbar_LinkedIn"
                                              to={'https://www.linkedin.com/in/jan-adamczyk/'} target="_blank"
                                              rel="noopener noreferrer">
                            <ListItem button key='LinkedIn'>
                                <ListItemIcon><img className={classes.listItemIcon} src={linkedInIcon}
                                                   alt={'LinkedIn'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='LinkedIn'/>
                            </ListItem>
                        </ReactGA.OutboundLink>
                        <ReactGA.OutboundLink eventLabel="Navbar_Xing" to={'https://www.xing.com/profile/Jan_Adamczyk3'}
                                              target="_blank"
                                              rel="noopener noreferrer">
                            <ListItem button key='Xing'>
                                <ListItemIcon><img className={classes.listItemIcon} src={xingIcon}
                                                   alt={'Xing'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='Xing'/>
                            </ListItem>
                        </ReactGA.OutboundLink>
                        <ReactGA.OutboundLink eventLabel="Navbar_GitHub" to={'https://github.com/XPlay1990'}
                                              target="_blank" rel="noopener noreferrer">
                            <ListItem button key='Github'>
                                <ListItemIcon><img className={classes.listItemIcon} src={githubIcon}
                                                   alt={'Github'}/></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary='Github'/>
                            </ListItem>
                        </ReactGA.OutboundLink>
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
                    <ReactGA.OutboundLink eventLabel="Navbar_QDSoftware" to={'http://www.qd-software.de'}
                                          target="_blank" rel="noopener noreferrer">
                        <ListItem button key='QD Software'>
                            <ListItemIcon><img className={classes.listItemIcon} src={qdIcon}
                                               alt={"qd software"}/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='QD Software'/>
                        </ListItem>
                    </ReactGA.OutboundLink>
                    <ReactGA.OutboundLink eventLabel="Navbar_Jenkins" to={'http://jenkins.jan-adamczyk.de'}
                                          target="_blank" rel="noopener noreferrer">
                        <ListItem button key='Jenkins'>
                            <ListItemIcon><LinkIcon/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='Jenkins'/>
                        </ListItem>
                    </ReactGA.OutboundLink>
                    <ReactGA.OutboundLink eventLabel="Navbar_Artifactory" to={'http://artifactory.jan-adamczyk.de'}
                                          target="_blank" rel="noopener noreferrer">
                        <ListItem button key='Artifactory'>
                            <ListItemIcon><LinkIcon/></ListItemIcon>
                            <ListItemText className={classes.ListItemText} primary='Artifactory'/>
                        </ListItem>
                    </ReactGA.OutboundLink>
                </List>
                <Divider/>
                <List>
                    <ListItem>
                        <Tooltip title={"Language"}>
                            <ToggleButtonGroup
                                value={language}
                                exclusive
                                size="medium"
                                onChange={changeLanguageToggle}
                                aria-label="text alignment"
                                className="ToggleButtonGroup"
                            >
                                <ToggleButton value='de' aria-label="centered">
                                    de
                                </ToggleButton>
                                <ToggleButton value='en' aria-label="centered">
                                    en
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Tooltip>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {/*<Typography variant="h1" noWrap>*/}
                        {/*    Fullstack Software Entwickler*/}
                        {/*</Typography>*/}
                        <h1 style={{margin: "auto"}}><Trans i18nKey={`appbar.title`}/></h1>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {
                        breakPointMatches ?
                            (
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    variant="permanent"
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            ) : (
                                <Drawer
                                    variant="temporary"
                                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            )
                    }
                </nav>
            </div>
        )
    };