import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import {AboutMe} from "./aboutMe/AboutMe";
import {Projects} from "./projects/Projects";
import {makeStyles, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import {Navbar} from "./navbar/Navbar";
import {CV} from './cv/CV';
import {createTheme, CssBaseline, useMediaQuery} from "@material-ui/core";
import {Contact} from "./contact/Contact";
import ReactGA from 'react-ga';
import i18next from "i18next";
import i18n from "i18next";
import {Prints3D} from "./prints3d/Prints3D";
import {IS_DARK_MODE} from "./config/constants";

const ga_TrackerId = 'UA-157113083-1';
ReactGA.initialize(ga_TrackerId);
ReactGA.set({
    selectedLanguage: i18next.language,
    // any data that is relevant to the user session
    // that you would like to track with google analytics
});

const drawerWidth = 240;

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDarkMode, setIsDarkMode] = React.useState(localStorage.getItem(IS_DARK_MODE) || prefersDarkMode.toString());
    const [language, setLanguage] = useState(i18n.language.substring(0, 2));

    function changeLanguageToggle(event: any, selectedLanguage: string) {
        if (selectedLanguage) {
            setLanguage(selectedLanguage);
            i18n.changeLanguage(selectedLanguage);

            ReactGA.event({
                category: "ChangeLanguage",
                action: selectedLanguage,
            });
        }
    }

    const useStyles = makeStyles(theme => ({
        content: {
            flexGrow: 1,
            // padding: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
                marginLeft: drawerWidth,
            },
        },
        toolbar: (theme.mixins.toolbar as any),
    }));

    const classes = useStyles();

    let theme = createTheme({
        palette: {
            type: (isDarkMode === 'false') ? 'light' : 'dark', // mediaquery on dark theme
            // primary: {main: blue[500]},
            // secondary: red,
        },
    });
    theme = responsiveFontSizes(theme);

    useEffect(() => {
        setIsDarkMode(prefersDarkMode.toString())
    }, [prefersDarkMode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar drawerWidth={drawerWidth} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language}
                    changeLanguageToggle={changeLanguageToggle}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <AboutMe/>
                <CV/>
                <Projects/>
                {/*<Certificates/>*/}
                <Prints3D/>
                <Contact/>
            </main>
        </ThemeProvider>
    );
}

export default withRouter(App);
