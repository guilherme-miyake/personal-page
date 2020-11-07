import React, {Fragment} from "react";
import {AlternateEmail, QuestionAnswer} from "@material-ui/icons";
import SectionHeader from "../components/SectionHeader";
import SectionItem from "../components/SectionItem";
import Box from "@material-ui/core/Box";
import Linkedin from "../components/contactBadges/Linkedin";
import GitHub from "../components/contactBadges/Github";
import Steam from "../components/contactBadges/Steam";
import Phone from "../components/contactBadges/Phone";
import useText from "../hooks/useText";
import {Translation} from "../locales";
import ResumeSummarySection from "../components/ResumeSummarySection";
import AboutPhotoSection from "../components/AboutPhotoSection";


export default function About(props:{location:any}) {
    const text = useText<Translation["About"]>("About")

    const hobbies = [
        text("hobbies text 0"),
        text("hobbies text 1"),
        text("hobbies text 2")
    ]
    const software = [
        text("software text 0"),
        text("software text 1")
    ]
    const degree = [
        text("degree text 0"),
        text("degree text 1"),
        text("degree text 2")
    ]

    return <Fragment>

        <ResumeSummarySection startingVersion={0} location={props.location}/>
        <AboutPhotoSection/>

        <SectionHeader title={"FAQ"} icon={QuestionAnswer}/>
        <SectionItem title={text("hobbies title")} textArray={hobbies}/>
        <SectionItem title={text("software title")} textArray={software}/>
        <SectionItem title={text("degree title")} textArray={degree}/>

        <SectionHeader title={text("contact")} icon={AlternateEmail}/>
        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} flexWrap={"wrap"} overflow={"hidden"}>
            <Box display={"flex"} flexDirection={"column"} width={"39%"} minWidth={"335px"}
                 maxWidth={"100%"}>
                <Phone/>
                <Steam/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"30%"} minWidth={"335px"}
                 maxWidth={"100%"}>
                <Linkedin/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"30%"} minWidth={"335px"}
                 maxWidth={"100%"}>
                <GitHub/>
            </Box>
        </Box>
    </Fragment>
}