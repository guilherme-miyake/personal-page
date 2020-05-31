import React, {Fragment, useState} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import useText from "../hooks/useText";
import {Translation} from "../locales";
import SectionHeader from "./SectionHeader";
import {Person} from "@material-ui/icons";
import {useLocation} from "react-router-dom";
import {LeftButton, RightButton} from "./SectionButtons";

const useStyles = makeStyles(() => (
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
        },
        read_more: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }
    }));

export default function ResumeSummarySection(props: { startingVersion: number }) {
    const location = useLocation()
    const classes = useStyles()
    const [summaryVersion, changeVersion] = useState(props.startingVersion)
    const text = useText<Translation["Resume"]>("Resume")

    const bioText = [
        text("bio text 0"),
        text("bio text 1")
    ]

    const summaryText = [
        text(`summary text 0`),
        text(`summary text 1`),
        text(`summary text 2`),
    ]


    const extendedText = [
        text(`extended summary text 0`),
        text(`extended summary text 1`),
        text(`extended summary text 2`),
        text(`extended summary text 3`)
    ]


    const displayTitle = [
        text("bio title"),
        text("summary title"),
        text("extended summary title")
    ][summaryVersion]

    const displayText = [
        bioText,
        summaryText,
        extendedText
    ][summaryVersion]


    return <Fragment>
        <SectionHeader title={displayTitle} icon={Person}/>
        <Box className={classes.read_more}>

            {
                location.pathname === "/about" && summaryVersion === 1 ?
                    <LeftButton to={"/resume"}>
                        view my resume
                    </LeftButton> :
                    <LeftButton onClick={() => changeVersion(summaryVersion + 1)} disabled={summaryVersion >= 2}>
                        view a heavier version
                    </LeftButton>
            }

            {
                location.pathname === "/resume" && summaryVersion === 0 ? <RightButton to={"/about"}>
                        view more about me
                    </RightButton> :
                    <RightButton onClick={() => changeVersion(summaryVersion - 1)} disabled={summaryVersion === 0}>
                        view a lighter version
                    </RightButton>
            }

        </Box>
        <Paper elevation={3} className={classes.paper}>
            <Box className={classes.box}>
                {
                    displayText.map(
                        (text, index) =>
                            <Typography variant={"h5"} key={index} paragraph>{text}</Typography>)
                }
            </Box>
        </Paper>
    </Fragment>
}