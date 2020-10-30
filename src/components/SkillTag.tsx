import React, {Fragment, useState} from "react";
import {Modal, Paper, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import {ChevronRight, Search} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import {allTags, frameworkTags, languageTags, otherTags, toolTags} from "../assets/projectsData";
import {formatName} from "./DynamicBreadcrumbs";
import SectionHeader from "./SectionHeader";
import Container from "@material-ui/core/Container";
import { navigate } from "gatsby";

const useStyles = makeStyles((theme) => (
        {
            category: {
                minWidth: "150px",
                textShadow: "2px 2px 3px black",

            },
            line: {
                backgroundColor: theme.palette.text.primary,
                display: "flex",
                height: "2px",
                opacity: "0.3",
                borderRadius: "5px",
                alignSelf: "flex-end",
                margin: "10px",
                width: "calc(100% - 120px)",
                [theme.breakpoints.down("sm")]: {
                    width: "90%"
                }
            },
            modal: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }
        }
    )
);

export function SkillTags(props: { skillNames: allTags[] }) {
    return <Box>
        {props.skillNames.map(
            (name, index) => <Chip
                color={"secondary"}
                label={formatName(name).toUpperCase()}
                style={{margin: "5px"}}
                clickable
                key={index}
                onDelete={() => null}
                deleteIcon={<ChevronRight/>}
                onClick={() => navigate(`/projects/${name}`)}
            />
        )
        }
    </Box>
}

export function AllSkillTags() {
    const classes = useStyles()
    const categories = [
        "Languages:",
        "Frameworks:",
        "Tools:",
        "Others:",
    ]

    const tags: { [category: string]: string[] } = {
        "Languages:": languageTags,
        "Frameworks:": frameworkTags,
        "Tools:": toolTags,
        "Others:": otherTags
    }

    return <Box display={"flex"} flexDirection={"column"} padding={"10px"}>

        {

            categories.map(
                (category, index) => <Fragment key={index}>
                    {index !== 0 ? <Box className={classes.line}/> : null}
                    <Box display={"flex"} alignItems={"center"}>
                        <Typography variant={"h5"} className={classes.category}>{category}</Typography>
                        <Box display={"flex"}>
                            <SkillTags skillNames={tags[category]}/>
                        </Box>
                    </Box>
                </Fragment>
            )
        }
    </Box>
}

export function FilterSkills(props: { open: boolean, onClose: () => any }) {
    const classes = useStyles()

    return <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
    >
        <Container>
            <Paper style={{padding: "50px"}}>
                <SectionHeader title={"Filter projects by Skill"} icon={Search}/>
                <AllSkillTags/>
            </Paper>
        </Container>

    </Modal>
}

