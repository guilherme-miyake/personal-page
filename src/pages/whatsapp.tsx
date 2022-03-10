import React, {Fragment} from "react";
import Phone from "../components/contactBadges/Phone";
import {navigate} from "gatsby";
import useText from "../hooks/useText";
import {Translation} from "../locales";


export default function About(props: { location: any }) {
    const text = useText<Translation["Home"]>("Home")
    let link = Buffer.from("aHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQvP3Bob25lPTU1MTE5OTQ4NTkzMDImdGV4dD0=").toString('base64')
    let message = encodeURIComponent(text("greetings"))
    navigate(link + message)

    return <Fragment>
        <Phone/>
    </Fragment>
}