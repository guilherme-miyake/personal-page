import SectionItem from "../SectionItem";
import React from "react";
import {Link} from "gatsby";
import WhatsApp from "../../assets/svg/WhatsApp.svg"
import SvgIcon from '@material-ui/core/SvgIcon';

export default function Phone() {
    return <SectionItem>
        <Link to={"/whatsapp"}>
            <SvgIcon component={WhatsApp} style={{width: "100%", height: "4rem"}} viewBox={"0 0 500 150"}/>
        </Link>
    </SectionItem>
}