import SectionItem from "../SectionItem";
import React from "react";
import {Box} from "@material-ui/core";
import number from "../../assets/phone.png";
import Typography from "@material-ui/core/Typography";

export default function Phone() {
    return <SectionItem title={"Messaging on WhatsApp:"}>
        <Box width={"400px"} height={"40px"} alignContent={"center"}>
            <img src={number} alt={"Phone Number"}/>
        </Box>
        <Typography variant={"h6"}>I reject calls from unknown numbers!</Typography>
    </SectionItem>
}