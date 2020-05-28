import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useText from "../hooks/useText";
import DynamicBreadcrumbs from "./DynamicBreadcrumbs";
import LanguageController from "./LanguageController";
import Paper from "@material-ui/core/Paper";
import {Translation} from "../locales";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.background.paper,
        padding: "40px 20px",
        justifyContent: "flex-start",
        flexDirection: "column",
        display: 'flex',
        margin: "10px 0px 20px 0px",
        borderRadius: "10px"
    },
    nav: {
        margin: "5px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px"
    }
}));

export default function Header() {
    const text = useText<Translation["Home"]>("Home")
    const theme = useTheme()
    const classes = useStyles(theme)
    return <Fragment>
        <Box className={classes.nav}>
            <DynamicBreadcrumbs/>
            <LanguageController/>
        </Box>
        <Paper elevation={3} className={classes.header}>
            <Typography variant="h3">Guilherme Toshio Miyake</Typography>
            <Typography variant="h5">{text("Job Title")}</Typography>
        </Paper>
    </Fragment>
}