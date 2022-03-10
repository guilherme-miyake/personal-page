import useText from "../hooks/useText";
import React, {Fragment} from "react";
import SectionHeader from "../components/SectionHeader";
import {Assignment, Code, GitHub, LinkedIn, ListAlt, Menu, Person} from "@material-ui/icons";
import HomeLink from "../components/HomeLink";
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Translation} from "../locales";
import SEO from "../components/seo";

const useStyles = makeStyles(() => ({
        links: {
            justifyContent: "space-evenly",
            flexDirection: "row",
            display: 'flex',
            flexWrap: "wrap"
        }
    }
));

export default function Home() {
    const text = useText<Translation["Home"]>("Home")
    const classes = useStyles()

    return <Fragment>
        <SEO
            title="Home"
            description={"A personal page built with React, Typescript and MaterialUI"}
        />

        <SectionHeader title={"Pages"} icon={Menu}/>
        <Box className={classes.links}>
            <HomeLink to="/about" title={text("about")} icon={Person}/>
            <HomeLink to="/resume" title={text("resume")} icon={Assignment}/>
            <HomeLink to="/projects" title={text("projects")} icon={ListAlt}/>
            <HomeLink to="https://github.com/guilherme-miyake" title={text("git link")} icon={GitHub}/>
            <HomeLink to="https://www.linkedin.com/in/guilhermemiyake/" title={"LinkedIn"} icon={LinkedIn}/>
            <HomeLink to="https://github.com/guilherme-miyake/personal-page" title={text("repo link")} icon={Code}/>
        </Box>
    </Fragment>
}