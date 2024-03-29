import React, {useState} from "react";
import {Box, Grid, Grow} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Trans} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import VisibilitySensor from "react-visibility-sensor";

export const Prints3D: React.FC = () => {
    const [visibilityTriggered, setVisibilityTriggered] = useState(false);

    return (
        <VisibilitySensor partialVisibility active={!visibilityTriggered} delayedCall
                          onChange={((isVisible: boolean) => isVisible ? setVisibilityTriggered(true) : null)}>
            {(isVisible: boolean) =>
                <Box id="Prints3D">
                    <Typography variant="h2" color="textPrimary" align={"center"}>
                        <Trans i18nKey={`prints3D.title`}/>
                    </Typography>

                    <Grid container spacing={1} style={{margin: 'auto', width: '80%'}}>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={1000}>
                                <Card>
                                    <CardHeader
                                        title={<Trans i18nKey={`prints3D.me`}/>}
                                        subheader={<Trans i18nKey={`prints3D.designed`}/>}
                                    />
                                    <iframe
                                        title={"me"}
                                        loading={"lazy"}
                                        src="https://myhub.autodesk360.com/ue2de58ca/shares/public/SH56a43QTfd62c1cd968d4bc6f04d342da23?mode=embed"
                                        width="100%" height="480" allowFullScreen={true} frameBorder="0"/>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={2000}>
                                <Card>
                                    <CardHeader
                                        title={<Trans i18nKey={`prints3D.headsetHolder`}/>}
                                        subheader={<Trans i18nKey={`prints3D.designed`}/>}
                                    />
                                    <iframe
                                        title={"headset"}
                                        loading={"lazy"}
                                        src="https://myhub.autodesk360.com/ue2de58ca/shares/public/SH56a43QTfd62c1cd9683f5f475ce888bb67?mode=embed"
                                        width="100%" height="480" allowFullScreen={true}
                                        // webkitAllowFullScreen={true}
                                        // mozAllowFullScreen={true}
                                        frameBorder="0"/>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={3000}>
                                <Card>
                                    <CardHeader
                                        title={<Trans i18nKey={`prints3D.lampshade`}/>}
                                        subheader={<Trans i18nKey={`prints3D.designed`}/>}
                                    />
                                    <iframe
                                        title={"lampshade"}
                                        loading={"lazy"}
                                        src="https://myhub.autodesk360.com/ue2de58ca/shares/public/SH7f1edQT22b515c761e8b3405b7a7a5e935?mode=embed"
                                        width="100%" height="480" allowFullScreen={true} frameBorder="0"/>
                                </Card>
                            </Grow>
                        </Grid>
                        <Grid item md={6}>
                            <Grow in={isVisible} timeout={4000}>
                                <Card>
                                    <CardHeader
                                        title={<Trans i18nKey={`prints3D.pawood`}/>}
                                        subheader={<Trans i18nKey={`prints3D.designed`}/>}
                                    />
                                    <iframe
                                        title={"PA Wood"}
                                        loading={"lazy"}
                                        src="https://myhub.autodesk360.com/ue2de58ca/shares/public/SH56a43QTfd62c1cd968e1d2ce80f6922135?mode=embed"
                                        width="100%" height="480" allowFullScreen={true} frameBorder="0"/>
                                </Card>
                            </Grow>
                        </Grid>
                    </Grid>
                </Box>
            }
        </VisibilitySensor>
    )
};