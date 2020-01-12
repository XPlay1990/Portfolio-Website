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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App: React.FC = () => {
    const useStyles = makeStyles(theme => ({
        content: {
            marginLeft: 240
        }
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
            {/*<Appbar/>*/}
            <Navbar/>
            <div className={classes.content}>
                <AboutMe/>
                <CV/>
                <Projects/>
            </div>
        </ThemeProvider>
    );
};

export default withRouter(App);
