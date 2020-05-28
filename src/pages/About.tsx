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

        <SectionHeader title={"Bio"} icon={Person}/>

        <SectionItem textArray={bio}/>
        <Box alignSelf={"flex-end"} padding="0px 10px">
            <Button color={"primary"} variant={"contained"} to={"/resume"} component={Link}>
                {text("go to resume 0")}<br/>{text("go to resume 1")}
            </Button>
        </Box>


        <PhotoSection>
            <br/>
            {tzp.map((text, index) => <Typography key={index} variant={"h5"}>{text}</Typography>)}
            <Typography variant={"h6"} align={"right"}>{text("the zen of python footer")}</Typography>
        </PhotoSection>

        <SectionHeader title={"FAQ"} icon={LiveHelp}/>
        <SectionItem title={text("hobbies title")} textArray={hobbies}/>
        <SectionItem title={text("software title")} textArray={software}/>
        <SectionItem title={text("degree title")} textArray={degree}/>

        <SectionHeader title={text("contact")} icon={Call}/>
        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} flexWrap={"wrap"} overflow={"hidden"}>
            <Box display={"flex"} flexDirection={"column"} width={"calc(100%/3 - 10px)"} minWidth={"450px"}
                 maxWidth={"100%"}>
                <Phone/>
                <Steam/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"calc(50% - 260px)"} minWidth={"350px"}
                 maxWidth={"100%"}>
                <Linkedin/>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"calc(50% - 260px)"} minWidth={"350px"}
                 maxWidth={"100%"}>
                <GitHub/>
            </Box>
        </Box>
    </Fragment>
}