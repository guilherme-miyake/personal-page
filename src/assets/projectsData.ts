import {Project} from "../components/ProjectSection";

export const languageTags = [
    "kotlin-language",
    "python-language",
    "spark-language",
]
export const frameworkTags = [
    "kotlin-language",
    "python-language",
    "spark-language",
]

export const toolTags = [
    "kotlin-language",
    "python-language",
    "spark-language",
]

export const otherTags = [
    "kotlin-language",
    "python-language",
    "spark-language",
]

export type allTags =
    typeof languageTags[number]
    & typeof frameworkTags[number]
    & typeof toolTags[number]
    & typeof otherTags[number]

export const projects: Project[] = [
    {
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
        experienceId: "software+engineer+@+creditas"
    }

]


