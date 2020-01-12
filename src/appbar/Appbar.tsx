import InboxIcon from "@material-ui/icons/Folder";
import {AppBar} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export const Appbar: React.FC = () => {
    const appbarHeight = 48;
    // const drawerWidth = 240;
    const useStyles = makeStyles(theme => ({
        appBar: {
            [theme.breakpoints.up('sm')]: {
            },
            height: appbarHeight
        }
    }));
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
        </AppBar>
    )
};

export default Appbar