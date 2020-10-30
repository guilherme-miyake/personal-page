import SectionItem from "../SectionItem";
import React from "react";

export default function Steam() {
    return <SectionItem title={"Playing games on Steam:"}>
        <a href="https://steamprofile.com/sig/76561198006404104/">
            <img
                src="https://badges.steamprofile.com/profile/default/steam/76561198006404104.png"
                alt="Steam Profile badge for Robson, the Dark Bear: Get your our own Steam Signature at SteamProfile.com"
                title="Steam Profile badge for Robson, the Dark Bear: Get your our own Steam Signature at SteamProfile.com"
            />
        </a>
    </SectionItem>

}