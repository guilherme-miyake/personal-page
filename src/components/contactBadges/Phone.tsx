import SectionItem from "../SectionItem";
import React from "react";
import {navigate} from "gatsby";
import WhatsApp from "../../assets/svg/WhatsApp.svg"
import SvgIcon from '@material-ui/core/SvgIcon';

export default function Phone() {
    function message() {
        let link = atob("aHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQvP3Bob25lPTU1MTE5OTQ4NTkzMDImdGV4dD0=")
        let message = escape("Hello, I saw your personal page on github and decided to reach out o/")
        return navigate(link + message)
    }

    return <SectionItem>
        <a href={"#whatsapp"} onClick={message}>
            <SvgIcon component={WhatsApp} style={{width: "100%", height: "4rem"}} viewBox={"0 0 500 150"}/>
        </a>
    </SectionItem>
}