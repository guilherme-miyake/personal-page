import SectionItem from "../SectionItem";
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Github from "../../assets/svg/Github.svg";

export default function GitHub() {
    return <SectionItem>
        <a href="https://github.com/guilherme-miyake">
            <SvgIcon component={Github} style={{width: "100%", height: "4rem"}} viewBox={"0 -20 600 200"}/>
        </a>
    </SectionItem>

}