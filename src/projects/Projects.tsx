import React from "react";
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
import {Grid, Link} from "@material-ui/core";
import {Trans} from "react-i18next";

export const Projects: React.FC = () => {
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
        <div id="Projects">
            <Typography variant="h2" color="textPrimary" align={"center"}>
                <Trans i18nKey={`projects.title`}/>
            </Typography>
            <Grid container spacing={1} style={{margin: 'auto', width: '80%'}}>
                <Grid item md={6}>
                    <Card className={classes.card}>
                        <CardHeader
                            title="QD Software"
                            subheader="Backend: Kotlin & Spring Boot 2, Frontend: React"
                        />
                        <Link href="http://qd-software.de" target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                className={classes.media}
                                image={QDPortal}
                                title="QDPortal"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Link href="http://qd-software.de">www.qd-software.de</Link> <br/>
                                <Trans i18nKey={`projects.qd.text`}/>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Link href="http://qd-software.de" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="link">
                                    <LinkIcon/>
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className={classes.card}>
                        <CardHeader
                            title="3D Radar Tool"
                            subheader="Python & PyQtGraph"
                        />
                        <Link href="https://github.com/XPlay1990/PyQTGraph_3D" target="_blank"
                              rel="noopener noreferrer">
                            <CardMedia
                                className={classes.media}
                                image={PyQtGraph}
                                title="3D Radar Tool"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Trans i18nKey={`projects.radar.text`}/>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Link href="https://github.com/XPlay1990/PyQTGraph_3D" target="_blank"
                                  rel="noopener noreferrer">
                                <IconButton aria-label="link">
                                    <LinkIcon/>
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className={classes.card}>
                        <CardHeader
                            title="Comport-Tool"
                            subheader="Java 1.8"
                        />
                        <Link href="https://github.com/XPlay1990/Comport-Tool" target="_blank"
                              rel="noopener noreferrer">
                            <CardMedia
                                className={classes.media}
                                image={ComportTool}
                                title="Comport-Tool"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Trans i18nKey={`projects.comporttool.text`}/>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Link href="https://github.com/XPlay1990/Comport-Tool" target="_blank"
                                  rel="noopener noreferrer">
                                <IconButton aria-label="link">
                                    <LinkIcon/>
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
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
                            <Link href="https://github.com/XPlay1990/" target="_blank"
                                  rel="noopener noreferrer">
                                <IconButton aria-label="link">
                                    <LinkIcon/>
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};
