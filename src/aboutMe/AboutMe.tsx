import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bewerbungsbild from "../resources/profile_web.jpg";
import './AboutMe.css'
import {Trans} from "react-i18next";

export const AboutMe: React.FC = () => {
    const useStyles = makeStyles(theme => ({
        card: {
            display: 'flex',
            flexDirection: 'column',
            // height: '50%',
            width: '40%',
            marginRight: 0,
            marginLeft: 'auto'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            padding: '20px'
        },
    }));

    const classes = useStyles();

    return (
        <div id="aboutMeBackground">
            <Card className={classes.card}>
                <CardHeader
                    title="Jan Adamczyk"
                    subheader={<Trans i18nKey={`aboutme.subheader`}/>}
                />
                <CardMedia
                    className={classes.media}
                    image={Bewerbungsbild}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Trans i18nKey={`aboutme.text`}/>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};
