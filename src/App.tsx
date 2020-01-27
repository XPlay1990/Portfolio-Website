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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            </main>
        </ThemeProvider>
    );
};

export default withRouter(App);
