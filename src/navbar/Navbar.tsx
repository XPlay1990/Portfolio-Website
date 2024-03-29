import React, {Dispatch} from 'react';
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
import {Trans} from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import CreateIcon from '@material-ui/icons/Create';
import ReactGA from 'react-ga';
import {IS_DARK_MODE} from "../config/constants";

import germanFlag from "../resources/navbar/flags/germany.png"
import enFlag from "../resources/navbar/flags/united-kingdom.png"
import {Brightness3, WbSunny} from "@material-ui/icons";

interface Props {
    drawerWidth: number
    isDarkMode: string,
    language: string,
    changeLanguageToggle: any,
    setIsDarkMode: Dispatch<string>
}

export function Navbar(props: Props) {

    const useStyles = makeStyles(theme => ({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: props.drawerWidth,
                flexShrink: 0,
            },
            // marginTop: 48
        },
        drawerPaper: {
            width: props.drawerWidth,
        },
        listItemIcon: {
            width: '36px'
        },
        ListItemTextDarkMode: {
            // color: "white"
        },
        ListItemTextBrightMode: {
            // color: "black"
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                // width: `calc(100% - ${props.drawerWidth}px)`,
                // marginLeft: props.drawerWidth,
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
            // [theme.breakpoints.up('sm')]: {
            //     display: 'none',
            // },
        },
        ToggleButtonGroup: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px"
        }
    }));
    const classes = useStyles();

    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

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

    function changeDarkMode(event: any, isDarkMode: string) {
        if (isDarkMode) {
            props.setIsDarkMode(isDarkMode);
            localStorage.setItem(IS_DARK_MODE, isDarkMode);

            ReactGA.event({
                category: "ChangeDisplayMode",
                action: (isDarkMode === "true") ? 'dark' : 'light',
            });
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                <ListItem button key='AboutMe' onClick={() => {
                    jumpToDivId('aboutMeBackground')
                }}>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText
                        className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}

                        primary={<Trans i18nKey={`navbar.aboutme`}/>}/>
                </ListItem>
                <ListItem button key='Lebenslauf' onClick={() => {
                    jumpToDivId('CV')
                }}>
                    <ListItemIcon><DescriptionIcon/></ListItemIcon>
                    <ListItemText
                        className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                        primary={<Trans i18nKey={`navbar.cv`}/>}
                    />
                </ListItem>
                <ListItem button key='Projekte' onClick={() => {
                    jumpToDivId('Projects')
                }}>
                    <ListItemIcon><WorkIcon/></ListItemIcon>
                    <ListItemText
                        className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}

                        primary={<Trans i18nKey={`navbar.projects`}/>}/>
                </ListItem>
                <ListItem button key='Kontakt' onClick={() => {
                    jumpToDivId('Contact')
                }}>
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText
                        className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}

                        primary={<Trans i18nKey={`navbar.contact`}/>}/>
                </ListItem>
                <ListItem button key='Prints3D' onClick={() => {
                    jumpToDivId('Prints3D')
                }}>
                    <ListItemIcon><CreateIcon/></ListItemIcon>
                    <ListItemText
                        className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}

                        primary={<Trans i18nKey={`prints3D.title`}/>}/>
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
                            <ListItemText
                                className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                                primary='LinkedIn'/>
                        </ListItem>
                    </ReactGA.OutboundLink>
                    <ReactGA.OutboundLink eventLabel="Navbar_Xing" to={'https://www.xing.com/profile/Jan_Adamczyk3'}
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
                    <ReactGA.OutboundLink eventLabel="Navbar_GitHub" to={'https://github.com/XPlay1990'}
                                          target="_blank" rel="noopener noreferrer">
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
                        <ListItemText
                            className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                            primary='QD Software'/>
                    </ListItem>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink eventLabel="Navbar_Jenkins" to={'http://jenkins.jan-adamczyk.de'}
                                      target="_blank" rel="noopener noreferrer">
                    <ListItem button key='Jenkins'>
                        <ListItemIcon><LinkIcon/></ListItemIcon>
                        <ListItemText
                            className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                            primary='Jenkins'/>
                    </ListItem>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink eventLabel="Navbar_Artifactory" to={'http://artifactory.jan-adamczyk.de'}
                                      target="_blank" rel="noopener noreferrer">
                    <ListItem button key='Artifactory'>
                        <ListItemIcon><LinkIcon/></ListItemIcon>
                        <ListItemText
                            className={localStorage.getItem(IS_DARK_MODE) === 'true' ? classes.ListItemTextDarkMode : classes.ListItemTextBrightMode}
                            primary='Artifactory'/>
                    </ListItem>
                </ReactGA.OutboundLink>
            </List>
            <Divider/>
            <Box style={{
                margin: 'auto',
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"
            }}>
                <Tooltip title={<Trans i18nKey={`navbar.languageToggle.title`}/>}>
                    <ToggleButtonGroup
                        value={props.language}
                        exclusive
                        size="medium"
                        onChange={props.changeLanguageToggle}
                        aria-label="text alignment"
                        className={classes.ToggleButtonGroup}
                    >
                        <ToggleButton value='de' aria-label="centered">
                            <img src={germanFlag} alt={'de'} width={40}/>
                        </ToggleButton>
                        <ToggleButton value='en' aria-label="centered">
                            <img src={enFlag} alt={'en'} width={40}/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Tooltip>
                <Tooltip title={<Trans i18nKey={`navbar.darkModeToggle.title`}/>}>
                    <ToggleButtonGroup
                        value={props.isDarkMode}
                        exclusive
                        size="medium"
                        onChange={changeDarkMode}
                        aria-label="text alignment"
                        className={classes.ToggleButtonGroup}
                    >
                        <ToggleButton value='true' aria-label="centered">
                            <Brightness3/>
                        </ToggleButton>
                        <ToggleButton value='false' aria-label="centered">
                            <WbSunny/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Tooltip>
            </Box>
        </div>
    );

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} id={"AppBar"}>
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
                    {/*    Fullstack Software Engineer*/}
                    {/*</Typography>*/}
                    <h1 style={{margin: "auto"}}><Trans i18nKey={`appbar.title`}/></h1>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    variant="temporary"
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
            </nav>
        </div>
    )
}