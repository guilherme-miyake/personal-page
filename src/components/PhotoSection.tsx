import React, {ReactNode} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    box: {
        padding: "0x",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        margin: "10px 0px",
        flexWrap: "wrap"
    },
    photo: {
        width: "300px",
        height: "300px",
        borderRadius: "30px"
    }
}));

export default function PhotoSection(props: { children: ReactNode }) {
    const classes = useStyles()
    return <Container className={classes.box}>
        <img className={classes.photo} src={"https://picsum.photos/300/300"} alt={"Guilherme Toshio Miyake"}/>
        <Box flexGrow={2} minWidth={"300px"} m={"10px 10px"}>
            {props.children}
        </Box>
    </Container>
}