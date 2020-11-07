import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useText from "../hooks/useText";
import {Translation} from "../locales";
import PhotoImage from "./PhotoImage";

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
    zen: {
        textShadow: "2px 2px 3px black"
    }
}));

export default function AboutPhotoSection() {
    const classes = useStyles()
    const text = useText<Translation["About"]>("About")

    const tzp = [
        text("the zen of python 0"),
        text("the zen of python 1"),
        text("the zen of python 2"),
        text("the zen of python 3"),
        text("the zen of python 4"),
        text("the zen of python 5"),
        text("the zen of python 6"),
    ]

    return <Container className={classes.box}>
        <PhotoImage/>
        <Box flexGrow={2} minWidth={"300px"} m={"10px 10px"}>
            <br/>
            {tzp.map((text, index) => {
                return <Typography
                    className={classes.zen}
                    key={index}
                    variant={"h5"}
                >
                    {text}
                </Typography>
            })}
            <Typography
                className={classes.zen}
                variant={"h6"}
                align={"right"}
            >
                {text("the zen of python footer")}
            </Typography>
        </Box>
    </Container>
}