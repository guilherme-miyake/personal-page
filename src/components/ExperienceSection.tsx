import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import {ChevronRight} from "@material-ui/icons";
import { navigate } from "gatsby";

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
    }));

export interface Experience {
    id: string
    description: string[]

    title?: string
    where?: string
    when?: string
    hasProjects?: boolean
    skillStack?: string[]
}

export default function ExperienceSection(props: { experience: Experience }) {
    const classes = useStyles()
    const {title, when, where, description, id, hasProjects} = props.experience

    const projectRedirect = <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}
                                 style={{opacity: 0.7}}>
        <Typography variant={"h6"}>
            For related projects click twice
        </Typography>
        <ChevronRight/>
    </Box>


    return <Paper elevation={3} className={classes.paper} onDoubleClick={() => hasProjects ? navigate(`/projects/${id}`): null }>
        <Box className={classes.box}>
            <Typography variant={"h5"}>{title ? title : where}</Typography>
            <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
                {title && where ? <Typography variant={"h6"}>{where}</Typography> : null}
                {when ? <Typography variant={"h6"}>{when}</Typography> : null}
            </Box>
            <Divider className={classes.divider}/>

            {
                description.map(
                    (text, index) =>
                        <Typography variant={"h6"} key={index} paragraph>
                            {text}
                        </Typography>
                )
            }
            {hasProjects ? projectRedirect : null}
        </Box>
    </Paper>
}