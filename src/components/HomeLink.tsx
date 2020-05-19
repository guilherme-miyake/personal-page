import React from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import SvgIcon from "@material-ui/core/SvgIcon";
import {SvgIconComponent} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    card: {
        width:"100%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    link:{
        width: "30%",
        minWidth: "300px",
        height: "300px",
        margin: "10px 10px",
        textDecoration: "none"
    },
    text: {
        textAlign: "center",
        wordWrap: "normal",
        width: "240px"
        // margin: "0px 0px 10px 0px"
    },
    icon: {
        fontSize: "120px",
        margin: "15px"
    },
}));

export default function HomeLink(props: { title: string, to: string, icon: SvgIconComponent }) {
    const classes = useStyles()
    return <Link to={props.to} className={classes.link}>
        <Card className={classes.card}>
            <Box className={classes.box}>
                <SvgIcon className={classes.icon} component={props.icon}/>
                <Typography className={classes.text} variant="h4">{props.title}</Typography>
            </Box>
        </Card></Link>
}