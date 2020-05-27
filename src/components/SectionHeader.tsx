import React, {Fragment} from "react";

import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import {SvgIconComponent} from "@material-ui/icons"
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: "0px",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-end",
        display: 'flex',
        margin: "2px 0px",
    },
    text: {
        margin: "0px 0px 10px 0px"
    },
    icon: {
        fontSize: "80px",
        margin: "0px 10px 0px 0px"
    },
    line: {
        backgroundColor: theme.palette.text.primary,
        display: "flex",
        height: "8px",
        padding: "0",
        borderRadius: "5px",
        margin: "0px 0px 20px 0px"
    }
}));

export default function SectionHeader(props: { title: string, icon: SvgIconComponent }) {
    const theme = useTheme()
    const classes = useStyles(theme)

    return <Fragment>
        <Container className={classes.title}>
            <SvgIcon className={classes.icon} component={props.icon}/>
            <Typography className={classes.text} variant="h4">{props.title}</Typography>
        </Container>
        <div className={classes.line}/>
    </Fragment>
}