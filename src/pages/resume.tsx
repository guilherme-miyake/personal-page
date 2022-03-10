import React, {Fragment} from "react";
import {Business, EmojiObjects, Language, PlaylistAddCheck, School} from "@material-ui/icons";
import SectionHeader from "../components/SectionHeader";
import useText from "../hooks/useText";
import {Translation} from "../locales";
import SectionItem from "../components/SectionItem";
import ResumeSummarySection from "../components/ResumeSummarySection";
import ExperienceSection from "../components/ExperienceSection";
import {educationExperiences, workExperiences} from "../assets/experienceData";
import {AllSkillTags} from "../components/SkillTag";
import ProjectSection from "../components/ProjectSection";
import {projects} from "../assets/projectsData";
import SEO from "../components/seo";

export default function Resume(props:{location:any}) {
    const text = useText<Translation["Resume"]>("Resume")

    const languageText = [
        text("language text portuguese"),
        text("language text english"),
        text("language text spanish"),
        text("language text german")
    ]

    return <Fragment>
        <SEO
            title="Resume"
            description="My professional resume"
        />
        <ResumeSummarySection startingVersion={1} location={props.location}/>
        <SectionHeader title={text("work title")} icon={Business}/>
        {
            Object.keys(workExperiences).map(
                (key) =>
                    <ExperienceSection experience={workExperiences[key]} key={key}/>)
        }
        <SectionHeader title={text("skills title")} icon={PlaylistAddCheck}/>
        <AllSkillTags/>
        <SectionHeader title={text("education title")} icon={School}/>
        {
            Object.keys(educationExperiences).map(
                (key) =>
                    <ExperienceSection experience={educationExperiences[key]} key={key}/>)
        }
        <SectionHeader title={text("personal title")} icon={EmojiObjects}/>
        <ProjectSection project={projects[0]}/>
        <SectionHeader title={text("language title")} icon={Language}/>
        <SectionItem textArray={languageText}/>

    </Fragment>
}