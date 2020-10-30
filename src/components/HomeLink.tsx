import React from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import SvgIcon from "@material-ui/core/SvgIcon";
import {SvgIconComponent} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import {Link} from "gatsby";

const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px"
    },
    box: {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    link: {
        width: "calc(100%/3 - 15px)",
        [theme.breakpoints.down("sm")]: {
            width: "calc(100%/2 - 10px)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(100%/2 - 10px)",
            minHeight: "200px",
        },
        margin: "5px 5px",
        minHeight: "300px",
        textDecoration: "none"
    },
    text: {
        textAlign: "center",
        wordWrap: "normal",
        width: "70%",
    },
    icon: {
        fontSize: "120px",
        margin: "15px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "80px",
        }
    },
}));

export default function HomeLink(props: { title: string, to: string, icon: SvgIconComponent }) {
    const theme = useTheme()
    const classes = useStyles(theme)
    const card = <Card className={classes.card}>
        <Box className={classes.box}>
            <SvgIcon className={classes.icon} component={props.icon}/>
            <Typography className={classes.text} variant="h4">{props.title}</Typography>
        </Box>
    </Card>

    return props.to.indexOf("http") >= 0 ? <a href={props.to} className={classes.link}>{card}</a> :
        <Link to={props.to} className={classes.link}>{card}</Link>
}