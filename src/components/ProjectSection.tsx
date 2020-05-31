import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import {allTags} from "../assets/projectsData";
import {SkillTags} from "./SkillTag";

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
        skills: {
            width: "150px",
        }
    }));

export interface Project {
    title: string
    purpose: string[]
    solution: string[]
    skillStack: allTags[]
    experienceId?: string
    contribution?: string[]
    results?: string[]
}

function SubSection(props: { statement: string, textArray: string[] }) {
    const {statement, textArray} = props

    return <Fragment>
        {
            textArray.map(
                (text, index) => {
                    return index === 0 ?
                        <Typography variant={"h6"} style={{textIndent: "-2em", padding: "0 0 0 2em"}} key={index}
                                    paragraph>
                            <span><span style={{fontStyle: "italic"}}>{statement}</span> {text} </span>
                        </Typography> : <Typography style={{padding: "0 0 0 2em"}} variant={"h6"} key={index} paragraph>
                            {text}
                        </Typography>
                }
            )
        }
    </Fragment>
}

export default function ProjectSection(props: { project: Project }) {
    const classes = useStyles()
    const {
        title,
        purpose,
        solution,
        skillStack,
        contribution,
        results
    } = props.project


    return <Paper elevation={3} className={classes.paper}>
        <Box className={classes.box}>
            <Typography variant={"h5"}>{title}</Typography>
            <Divider className={classes.divider}/>
            <SubSection statement={"The purpose of this project -"} textArray={purpose}/>
            <SubSection statement={"For this project -"} textArray={solution}/>
            {contribution ? <SubSection statement={"In this project I -"} textArray={contribution}/> : null}
            {results ? <SubSection statement={"The outcome was -"} textArray={results}/> : null}
            <Box display={"flex"} alignItems={"center"} style={{opacity: 0.7}}>
                <Typography variant={"h6"} className={classes.skills}>Relevant Skills:</Typography>
                <Box display={"flex"}>
                    <SkillTags skillNames={skillStack}/>
                </Box>
            </Box>
        </Box>
    </Paper>
}