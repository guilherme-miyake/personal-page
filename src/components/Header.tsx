import React, { Fragment } from "react";
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useText from "../hooks/useText";
import DynamicBreadcrumbs from "./DynamicBreadcrumbs";
import LanguageController from "./LanguageController";
import Card from "@material-ui/core/Card";

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
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px"
    }
}));

export default function Header() {
    const text = useText()
    const theme = useTheme()
    const classes = useStyles(theme)
    return <Fragment>
        <Container className={classes.nav}>
            <DynamicBreadcrumbs/>
            <LanguageController/>
        </Container>
        <Card className={classes.header}>
            <Typography variant="h2">Guilherme Toshio Miyake</Typography>
            <Typography variant="h4">{text("Job Title")}</Typography>
        </Card>
    </Fragment>
}