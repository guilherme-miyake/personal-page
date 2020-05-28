// import useText from "../hooks/useText";
import React, {Fragment} from "react";
import {useParams} from "react-router-dom";

export default function Projects() {
    const {tag} = useParams()
    // const text = useText()
    return <Fragment>
        {tag}
        {/*<SectionHeader title={"My experience with X"} icon={}/>*/}
        {/*<SectionHeader title={"Projects X"} icon={}/>*/}
        {/*<SectionItem  title={"Project Name"} textArray={"Projects X"}/>*/}
    </Fragment>
}