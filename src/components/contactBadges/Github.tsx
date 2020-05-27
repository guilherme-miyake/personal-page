import SectionItem from "../SectionItem";
import React from "react";
import GitHubButton from "react-github-btn";

export default function GitHub() {
    return <SectionItem title={"Coding on GitHub:"}>
        <GitHubButton href="https://github.com/guilherme-miyake"
                      data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                      data-size="large"
                      aria-label="Follow @guilherme-miyake on GitHub">Follow
            @guilherme-miyake</GitHubButton>
    </SectionItem>

}