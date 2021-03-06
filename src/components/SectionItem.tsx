import React, {ReactNode} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme) => (
    {
        paper: {
            display: 'flex',
            justifyContent: "center",
            padding: "10px 20px",
            margin: "10px 10px",
            maxWidth: "100%",
            borderRadius: "10px",
        },
        box: {
            justifyContent: "space-evenly",
            flexDirection: "column",
            display: 'flex',
            margin: "10px",
            width: "100%"
        },
        divider: {
            margin: "0px 0px 10px 0px"
        }
    }));

export default function SectionItem(props: { title?: string, children?: ReactNode, textArray?: string[] }) {
    const theme = useTheme()
    const classes = useStyles(theme)
    return <Paper elevation={3} className={classes.paper}>
        <Box className={classes.box}>
            {props.title ? <Typography variant={"h5"}>{props.title}</Typography> : null}
            {props.title ? <Divider className={classes.divider}/> : null}

            {props.children ? props.children : null}

            {props.textArray ? props.textArray.map((text, index) => <Typography variant={"h5"} key={index}
                                                                                paragraph>{text}</Typography>) : null}
        </Box>
    </Paper>
}