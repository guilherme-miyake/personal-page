import SectionItem from "../SectionItem";
import React from "react";

export default function Steam() {
    return <SectionItem title={"Playing games on Steam:"}>

        <a href="https://steamcommunity.com/id/gtmiyake" style={{
            width:"100%",
            height: "105px",
            backgroundImage: "url(https://steamsignature.com/card/0/76561198006404104.png)"
        }}>
        </a>
    </SectionItem>

}