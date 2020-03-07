import React from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import {AboutMe} from "./aboutMe/AboutMe";
import {Projects} from "./projects/Projects";
import {createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import {pdfjs} from 'react-pdf';
import {Navbar} from "./navbar/Navbar";
import {CV} from './cv/CV';
import {CssBaseline} from "@material-ui/core";
import {Contact} from "./contact/Contact";
import ReactGA from 'react-ga';
import i18next from "i18next";
import {Prints3D} from "./prints3d/Prints3D";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ga_TrackerId = 'UA-157113083-1';
ReactGA.initialize(ga_TrackerId);
ReactGA.set({
    selectedLanguage: i18next.language,
    // any data that is relevant to the user session
    // that you would like to track with google analytics
});

const drawerWidth = 240;

const App: React.FC = () => {
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

    let theme = createMuiTheme({
        palette: {
            type: true ? 'dark' : 'light', // mediaquery on dark theme
            // primary: {main: blue[500]},
            // secondary: red,
        },
    });
    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar drawerWidth={drawerWidth}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <AboutMe/>
                <CV/>
                <Projects/>
                <Contact/>
                <Prints3D/>
            </main>
        </ThemeProvider>
    );
};

export default withRouter(App);
