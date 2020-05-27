import React, {ReactNode} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((fit?: boolean) => ({
    paper: {
        display: 'flex',
        justifyContent: "center",
        padding: "10px 20px",
        margin: "10px 10px",
        width: fit ? "max-content" : "100%",
        maxWidth: "100%"
    },
    box: {
        justifyContent: "space-evenly",
        flexDirection: "column",
        display: 'flex',
        margin: "10px",
    },
    divider: {
        margin: "0px 0px 10px 0px"
    }
}));

export default function SectionItem(props: { title?: string, children: ReactNode, noPaper?: boolean, fit?: boolean }) {
    const classes = useStyles(props.fit)
    const boxElement = <Box className={classes.box}>
        {props.title ? <Typography variant={"h5"}>{props.title}</Typography> : null}
        {props.title ? <Divider className={classes.divider}/> : null}
        {props.children}
    </Box>
    return props.noPaper ? <Box className={classes.paper}>{boxElement}</Box> :
        <Paper elevation={3} className={classes.paper}>{boxElement}</Paper>
}