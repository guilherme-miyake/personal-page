import React, {Fragment} from "react";
import {Business, EmojiObjects, Language, Person, PlaylistAddCheck, School} from "@material-ui/icons";
import SectionHeader from "../components/SectionHeader";

export default function Resume() {
    return <Fragment>
        <SectionHeader title={"Summary"} icon={Person}/>
        <SectionHeader title={"Work Experience"} icon={Business}/>
        <SectionHeader title={"Main Skills"} icon={PlaylistAddCheck}/>
        <SectionHeader title={"Education"} icon={School}/>
        <SectionHeader title={"Volunteer Work & Personal Projects"} icon={EmojiObjects}/>
        <SectionHeader title={"Language Skills"} icon={Language}/>
    </Fragment>
}