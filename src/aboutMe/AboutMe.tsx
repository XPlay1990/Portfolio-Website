import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bewerbungsbild from "../resources/profile_web.jpg";
import './AboutMe.css'
import {Trans} from "react-i18next";
import {Slide} from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";

export const AboutMe: React.FC = () => {
    const [visibilityTriggered, setVisibilityTriggered] = useState(false);
    const useStyles = makeStyles({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            padding: '20px'
        },
    });

    const classes = useStyles();

    return (
        <VisibilitySensor partialVisibility active={!visibilityTriggered} delayedCall
                          onChange={(isVisible => isVisible ? setVisibilityTriggered(true) : null)}>
            {({isVisible}) =>
                <div id="aboutMeBackground">
                    <Slide direction="left" in={isVisible} timeout={1000}>
                        <Card className="aboutMeCard">
                            <CardHeader
                                title="Jan Adamczyk"
                                subheader={<Trans i18nKey={`aboutme.subheader`}/>}
                            />
                            <CardMedia
                                className={classes.media}
                                image={Bewerbungsbild}
                                title="Jan Adamczyk"
                            />
                            <CardContent>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    <Trans i18nKey={`aboutme.text`}/>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Slide>
                </div>
            }
        </VisibilitySensor>
    )
};
