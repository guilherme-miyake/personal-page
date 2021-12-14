import SectionItem from "../SectionItem";
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import Steams from "../../assets/svg/Steam.svg";

export default function Steam() {
    return <SectionItem>

        <a href="https://steamcommunity.com/id/gtmiyake">
            <SvgIcon component={Steams} style={{width: "100%", height: "4rem"}} viewBox={"0 0 300 90"}/>
        </a>
    </SectionItem>

}