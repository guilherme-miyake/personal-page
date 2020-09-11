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

export default function Resume() {
    const text = useText<Translation["Resume"]>("Resume")

    const languageText = [
        text("language text portuguese"),
        text("language text english"),
        text("language text spanish"),
        text("language text german")
    ]

    return <Fragment>
        <ResumeSummarySection startingVersion={1}/>
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
        <ProjectSection project={{
            title: "My Personal Webapp",
            purpose: ["is to have a showcase for both my experience and skills using an webpage interface"],
            solution: ["have created a webpage using Typescript as the source language and React as the framework, " +
            "I could give more details, but this is an axample",
                `Erat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
             esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`],
            contribution: ["was responsible to doing pretty much everything, but I need to test how this goes with" +
            "longer text, so here comes some more latin"],
            results: ["this super awesome webpage where you can read stuff about me and judge me based on things I wrote"],
            skillStack: ['python-language', 'kotlin-language'],
        }}/>

        <SectionHeader title={text("language title")} icon={Language}/>
        <SectionItem textArray={languageText}/>

    </Fragment>
}