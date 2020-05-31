import React, {Fragment, useEffect, useState} from "react";
import {BusinessCenter, History} from "@material-ui/icons";
import {useParams} from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import {projects} from "../assets/projectsData";
import {FilterSkills} from "../components/SkillTag";
import {LeftButton, RightButton} from "../components/SectionButtons";
import Box from "@material-ui/core/Box";
import {formatName} from "../components/DynamicBreadcrumbs";
import ProjectSection from "../components/ProjectSection";
import {educationExperiences, otherExperiences, workExperiences} from "../assets/experienceData";
import SectionItem from "../components/SectionItem";

export default function Projects() {
    const {tag} = useParams()
    const [openModal, handleModal] = useState(false)
    useEffect(() => handleModal(false), [tag])

    const displayExperience = {...workExperiences, ...educationExperiences, ...otherExperiences}[tag]

    const displayProjects = tag ? projects.filter(
        (project) =>
            project.skillStack.indexOf(tag) >= 0 || project.experienceId === tag
    ) : projects

    return <Fragment>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
            <LeftButton to={"/resume"}>
                view my resume
            </LeftButton>

            <RightButton onClick={() => handleModal(true)}>
                search projects by skill
            </RightButton>
        </Box>
        <FilterSkills open={openModal} onClose={() => handleModal(false)}/>
        {
            displayExperience ?
                <Fragment>
                    <SectionHeader title={
                        "My History: " +
                        formatName(displayExperience.title ? `${displayExperience.title}` : "") +
                        formatName(displayExperience.where ? " @ " + displayExperience.where : "")

                    } icon={History}/>
                    <SectionItem textArray={displayExperience.description}/>
                </Fragment> : null
        }
        <SectionHeader title={"Projects"} icon={BusinessCenter}/>
        {
            displayProjects.map(
                (project, index) =>
                    <ProjectSection project={project} key={index}/>
            )
        }
    </Fragment>
}