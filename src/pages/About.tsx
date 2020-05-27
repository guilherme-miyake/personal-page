// import useText from "../hooks/useText";
import React, {Fragment} from "react";
import SectionHeader from "../components/SectionHeader";
import {Call, LiveHelp, Person} from "@material-ui/icons";
import PhotoSection from "../components/PhotoSection";
import SectionItem from "../components/SectionItem";
import {Box} from "@material-ui/core";
import GitHubButton from 'react-github-btn';
import Typography from "@material-ui/core/Typography";
import number from "../assets/phone.png"
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function About() {

    return <Fragment>
        <Button color={"primary"} style={
            {
                width: "400px",
                maxWidth: "100%",
                bottom: "-20px",
                position: "relative",
                // right: 0,
                alignSelf: "flex-end"
            }
        }
                variant={"contained"} to={"/resume"} component={Link}>
            {"Looking for my professional profile?"}<br/>{"Go to my resume >>>"}
        </Button>
        <SectionHeader title={"Bio"} icon={Person}/>
        <Typography variant={"h5"} paragraph>
            Brazilian born and raised, I got a degree in Civil Engineering, but started working with software
            development
            at a start-up just as I was leaving college in 2017. I've learned much about programming ever since, and
            even
            more about working together with people.
        </Typography>
        <Typography variant={"h5"} paragraph>
            My areas of expertise are data engineering, back-end development, '90s jokes and references, lyrics of songs
            I don't know, general trivia and information, failing and learning fast, dynamic reading and being a little
            too literal or concise at times.
        </Typography>

        <PhotoSection>
            <br/>
            <Typography variant={"h5"}>Beautiful is better than ugly. </Typography>
            <Typography variant={"h5"}>Explicit is better than implicit. </Typography>
            <Typography variant={"h5"}>Simple is better than complex. </Typography>
            <Typography variant={"h5"}>Complex is better than complicated. </Typography>
            <Typography variant={"h5"}>In the face of ambiguity, refuse the temptation to guess.</Typography>
            <Typography variant={"h5"}>Now is better than never.</Typography>
            <Typography variant={"h5"}>Although never is often better than *right* now.</Typography>
            <Typography variant={"h6"} align={"right"}>My favorites parts of The Zen of Python</Typography>
        </PhotoSection>
        <SectionHeader title={"FAQ"} icon={LiveHelp}/>
        <SectionItem title={"What are my hobbies?"} noPaper>
            <Typography variant={"h5"} paragraph>I love to play all kind of games, ranging from tabletop RPG to action
                shooters on my gaming rig. When not playing anything tabletop or otherwise, I have an unhealthy habit of
                binge reading anything that manages to grab my attention.
            </Typography>
            <Typography variant={"h5"} paragraph>
                When feeling more social I usually enjoy drinking and talking the night away with friends, the more
                absurd or complex the subject the better.
            </Typography>
            <Typography variant={"h5"} paragraph>
                Also, Music. All of the time. When doing most of my stuff I will usually be listening to a playlist
                composed of Ska/Punk/Rock/Reggae/Indie/Folk/Pop.
            </Typography>
        </SectionItem>

        <SectionItem title={"Why do you work in Software Development?"}>
            <Typography variant={"h5"} paragraph>I remember playing computer games just as I was learning to read, I
                remember
                writing my first webpage on plain HTML shortly after, and I have been breaking and fixing many computer
                and software related issues ever since
            </Typography>
            <Typography variant={"h5"} paragraph>
                All in all, getting to work in the area was just a matter of improving and becoming an professional at
                what I used to do for fun.
            </Typography>
        </SectionItem>

        <SectionItem title={"What about your degree in Civil Engineering?"} noPaper>
            <Typography variant={"h5"} paragraph>
                Engineers will be engineers, even if the specifics differ the essential skills and knowledge are
                the same for many engineering careers,
                Even if at times I feel like a from formal education on Computer Science or Engineering would be nice.
            </Typography>
            <Typography variant={"h5"} paragraph>
                Professionally, I wouldn't mind returning to the area in order to help research and develop
                exciting new technologies and solutions, but the usual job in this area does not fit this criteria and
                I'm not fit for the ones that do, on that note, I do believe that nowadays both professions overlap a
                great deal
            </Typography>
        </SectionItem>

        <SectionHeader title={"Where to find me?"} icon={Call}/>
        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} flexWrap={"wrap"} overflow={"hidden"}>
            <Box display={"flex"} flexDirection={"column"}>

                <SectionItem title={"Messaging on WhatsApp:"}>
                    <Box width={"400px"} height={"40px"} alignContent={"center"}>
                        <img src={number} alt={"Phone Number"}/>
                    </Box>
                    <Typography variant={"h6"}>I reject calls from unknown numbers!</Typography>
                </SectionItem>

                <SectionItem title={"Playing games on Steam:"}>
                    <a href="https://steamprofile.com/sig/76561198006404104/">
                        <img
                            src="https://badges.steamprofile.com/profile/default/steam/76561198006404104.png"
                            alt="Steam Profile badge for Robson, the Dark Bear: Get your our own Steam Signature at SteamProfile.com"
                            title="Steam Profile badge for Robson, the Dark Bear: Get your our own Steam Signature at SteamProfile.com"
                        />
                    </a>
                </SectionItem>

            </Box>
            <SectionItem title={"Not replying on LinkedIn:"}>
                <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                     data-type="horizontal" data-theme="dark" data-vanity="guilhermemiyake">
                    <a className="LI-simple-link"
                       href='https://br.linkedin.com/in/guilhermemiyake/en-us?trk=profile-badge'>
                        Guilherme Toshio Miyake
                    </a>
                </div>
            </SectionItem>
            <Box display={"flex"} flexDirection={"column"}>


                <SectionItem title={"Coding on GitHub:"}>
                    <GitHubButton href="https://github.com/guilherme-miyake"
                                  data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                                  data-size="large"
                                  aria-label="Follow @guilherme-miyake on GitHub">Follow
                        @guilherme-miyake</GitHubButton>
                </SectionItem>
            </Box>

        </Box>
    </Fragment>
}