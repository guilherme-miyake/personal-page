import React, {Fragment} from "react";
import SectionHeader from "../components/SectionHeader";
import {Call, LiveHelp, Person} from "@material-ui/icons";
import PhotoSection from "../components/PhotoSection";
import SectionItem from "../components/SectionItem";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Linkedin from "../components/contactBadges/Linkedin";
import GitHub from "../components/contactBadges/Github";
import Steam from "../components/contactBadges/Steam";
import Phone from "../components/contactBadges/Phone";
import useText from "../hooks/useText";
import {Translation} from "../locales";

export default function About() {
    const text = useText<Translation["About"]>("About")
    const bio = [
        text("bio text 0"),
        text("bio text 1")
    ]

    const tzp = [
        text("the zen of python 0"),
        text("the zen of python 1"),
        text("the zen of python 2"),
        text("the zen of python 3"),
        text("the zen of python 4"),
        text("the zen of python 5"),
        text("the zen of python 6"),
    ]
    const hobbies = [
        text("hobbies text 0"),
        text("hobbies text 1"),
        text("hobbies text 1")
    ]
    const software = [
        text("software text 0"),
        text("software text 1")
    ]
    const degree = [
        text("degree text 0"),
        text("degree text 1")
    ]

    return <Fragment>

        <Box padding={"10px 0px"} alignSelf={"flex-end"}>
            <Button color={"primary"} variant={"contained"} to={"/resume"} component={Link}>
                {"Looking for my professional profile?"}<br/>{"Go to my resume >>>"}
            </Button>
        </Box>

        <SectionHeader title={"Bio"} icon={Person}/>

        <SectionItem noPaper textArray={bio}/>

        <PhotoSection>
            <br/>
            {tzp.map((text) => <Typography variant={"h5"}>{text}</Typography>)}
            <Typography variant={"h6"} align={"right"}>My favorites parts of The Zen of Python</Typography>
        </PhotoSection>

        <SectionHeader title={"FAQ"} icon={LiveHelp}/>
        <SectionItem title={"What are my hobbies?"} noPaper textArray={hobbies}/>
        <SectionItem title={"Why do you work in Software Development?"} textArray={software}/>
        <SectionItem title={"What about your degree in Civil Engineering?"} noPaper textArray={degree}/>

        <SectionHeader title={"Where to find me?"} icon={Call}/>
        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} flexWrap={"wrap"} overflow={"hidden"}>
            <Box display={"flex"} flexDirection={"column"}>
                <Phone/>
                <Steam/>
            </Box>
            <Linkedin/>
            <Box display={"flex"} flexDirection={"column"}>
                <GitHub/>
            </Box>
        </Box>
    </Fragment>
}