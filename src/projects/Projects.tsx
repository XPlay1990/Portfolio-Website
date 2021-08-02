import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import ComportTool from "../resources/projects/ComportTool.png";
import PyQtGraph from "../resources/projects/PyQtGraph_3D.png";
import QDPortal from "../resources/projects/QD_Portal.png";
import W3Datalyzer from "../resources/projects/W3Datalyzer.png";
import KlimaComfort from "../resources/projects/klima-comfort.jpg";
import {Grid, Grow} from "@material-ui/core";
import {Trans} from "react-i18next";
import ReactGA from 'react-ga';
import VisibilitySensor from "react-visibility-sensor";

export const Projects: React.FC = () => {
    const [visibilityTriggered, setVisibilityTriggered] = useState(false);

    const useStyles = makeStyles(theme => ({
        card: {
            right: 0,
            left: 'auto',
            height: '100%'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            padding: '20px'
        },
        GitHubmedia: {
            height: 0,
            paddingTop: '100%', // 16:9
            padding: '20px'
        },
    }));

    const classes = useStyles();

    return (
        <VisibilitySensor partialVisibility active={!visibilityTriggered} delayedCall
                          onChange={(isVisible => isVisible ? setVisibilityTriggered(true) : null)}>
            {({isVisible}) =>
                <div id="Projects">
                    <Typography variant="h2" color="textPrimary" align={"center"}>
                        <Trans i18nKey={`projects.title`}/>
                    </Typography>
                    <Grid container spacing={1} style={{margin: 'auto', width: '80%'}}>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={4000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="Klima-Comfort"
                                        subheader="Wordpress"
                                    />
                                    <ReactGA.OutboundLink eventLabel="Projects_Klima-Comfort"
                                                          to="https://klima-comfort.pl" target="_blank"
                                                          rel="noopener noreferrer">
                                        <CardMedia
                                            className={classes.media}
                                            image={KlimaComfort}
                                            title="Klima-Comfort"
                                        />
                                    </ReactGA.OutboundLink>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Trans i18nKey={`projects.klimaComfort.text`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_Comport-Tool"
                                                              to="https://klima-comfort.pl" target="_blank"
                                                              rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={1000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="w3datalyzer"
                                        subheader="React, Typescript, Chart.js"
                                    />
                                    <ReactGA.OutboundLink eventLabel="Projects_w3datalyzer" to="https://github.com/XPlay1990/w3datalyzer"
                                                          target="_blank" rel="noopener noreferrer">
                                        <CardMedia
                                            className={classes.media}
                                            image={W3Datalyzer}
                                            title="w3datalyzer"
                                        />
                                    </ReactGA.OutboundLink>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <ReactGA.OutboundLink eventLabel="Projects_w3datalyzer"
                                                                  to="https://github.com/XPlay1990/w3datalyzer">www.w3datalyzer.com</ReactGA.OutboundLink>
                                            <br/>
                                            <Trans i18nKey={`projects.w3datalyzer.text`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_w3datalyzer"
                                                              to="https://github.com/XPlay1990/w3datalyzer"
                                                              target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={1000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="QD Software"
                                        subheader="Backend: Kotlin & Spring Boot 2, Frontend: React"
                                    />
                                    <ReactGA.OutboundLink eventLabel="Projects_QDSoftware" to="http://qd-software.de"
                                                          target="_blank" rel="noopener noreferrer">
                                        <CardMedia
                                            className={classes.media}
                                            image={QDPortal}
                                            title="QDPortal"
                                        />
                                    </ReactGA.OutboundLink>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <ReactGA.OutboundLink eventLabel="Projects_QDSoftware"
                                                                  to="http://qd-software.de">www.qd-software.de</ReactGA.OutboundLink>
                                            <br/>
                                            <Trans i18nKey={`projects.qd.text`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_QDSoftware"
                                                              to="http://qd-software.de"
                                                              target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={2000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="3D Radar Tool"
                                        subheader="Python & PyQtGraph"
                                    />
                                    <ReactGA.OutboundLink eventLabel="Projects_PyQtGraph3D"
                                                          to="https://github.com/XPlay1990/PyQTGraph_3D" target="_blank"
                                                          rel="noopener noreferrer">
                                        <CardMedia
                                            className={classes.media}
                                            image={PyQtGraph}
                                            title="3D Radar Tool"
                                        />
                                    </ReactGA.OutboundLink>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Trans i18nKey={`projects.radar.text`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_PyQtGraph3D"
                                                              to="https://github.com/XPlay1990/PyQTGraph_3D"
                                                              target="_blank"
                                                              rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={3000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="Comport-Tool"
                                        subheader="Java 1.8"
                                    />
                                    <ReactGA.OutboundLink eventLabel="Projects_Comport-Tool"
                                                          to="https://github.com/XPlay1990/Comport-Tool" target="_blank"
                                                          rel="noopener noreferrer">
                                        <CardMedia
                                            className={classes.media}
                                            image={ComportTool}
                                            title="Comport-Tool"
                                        />
                                    </ReactGA.OutboundLink>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Trans i18nKey={`projects.comporttool.text`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_Comport-Tool"
                                                              to="https://github.com/XPlay1990/Comport-Tool"
                                                              target="_blank"
                                                              rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>

                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={5000}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="GitHub"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <Trans i18nKey={`projects.additional`}/>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ReactGA.OutboundLink eventLabel="Projects_more"
                                                              to="https://github.com/XPlay1990/"
                                                              target="_blank"
                                                              rel="noopener noreferrer">
                                            <IconButton aria-label="link">
                                                <LinkIcon/>
                                            </IconButton>
                                        </ReactGA.OutboundLink>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </Grid>
                    </Grid>
                </div>
            }
        </VisibilitySensor>
    )
};
