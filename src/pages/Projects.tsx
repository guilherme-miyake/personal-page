import React, {Fragment} from "react";
import {BusinessCenter, History} from "@material-ui/icons";
import {useParams} from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import SectionItem from "../components/SectionItem";

export default function Projects() {
    const {tag} = useParams()
    // const text = useText()
    return <Fragment>
        {tag}
        <SectionHeader title={"My experience with " + tag} icon={History}/>
        <SectionHeader title={"Projects as Position @ Company"} icon={BusinessCenter}/>
        <SectionItem title={"Project Name"} textArray={["Projects X"]}/>
    </Fragment>
}