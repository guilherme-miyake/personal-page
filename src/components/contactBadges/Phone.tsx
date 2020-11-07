import SectionItem from "../SectionItem";
import React from "react";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PhoneImage from "../PhoneImage";

export default function Phone() {
    return <SectionItem title={"Messaging on WhatsApp:"}>
        <PhoneImage />
        <Typography variant={"h6"}>I reject calls from unknown numbers!</Typography>
    </SectionItem>
}