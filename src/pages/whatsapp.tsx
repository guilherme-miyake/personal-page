import React, {Fragment, useEffect} from "react";
import Phone from "../components/contactBadges/Phone";
import useText from "../hooks/useText";
import {Translation} from "../locales";
import {Buffer} from "buffer";
import SEO from "../components/seo";


export default function About(props: { location: any }) {
    const text = useText<Translation["Home"]>("Home")
    let link = Buffer.from("aHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQvP3Bob25lPTU1MTE5OTQ4NTkzMDImdGV4dD0=", 'base64').toString()
    let message = encodeURIComponent(text("greetings"))
    useEffect(()=> { window.location.href = link + message})
    return <Fragment>
        <SEO
            title={"WhatsApp"}
            description={"Start a conversation on WhatsApp"}
        />
        <Phone/>
    </Fragment>
}
