import SectionItem from "../SectionItem";
import React from "react";

export default function Linkedin() {
    return <SectionItem title={"Not replying on LinkedIn:"}>
        <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
             data-type="horizontal" data-theme="dark" data-vanity="guilhermemiyake">
            <a className="LI-simple-link"
               href='https://br.linkedin.com/in/guilhermemiyake/en-us?trk=profile-badge'>
                Guilherme Toshio Miyake
            </a>
        </div>
    </SectionItem>
}