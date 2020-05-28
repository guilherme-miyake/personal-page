import {Route, Switch} from "react-router-dom";
import React, {Fragment} from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import background from "./assets/background.jpg"
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Resume from "./pages/Resume";

const useStyles = makeStyles(() => ({
    app: {
        height: "100%",
        display: 'flex',
        flexDirection: "column",
        // padding: "10px",
        position: "relative",
        zIndex: 2
    },
    background: {
        height: "100%",
        width: "100%",
        position: "fixed",
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        zIndex: 0
    },
    background_credits: {
        position: "fixed",
        right: "10px",
        bottom: "10px",
        zIndex: 0
    },
    blank_space: {
        height: "100%",
        width: "auto"
    }
}));

function App() {
    const classes = useStyles()
    return (
        <Fragment>
            <Box className={classes.background}>
            </Box>
            <Container className={classes.app}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects/:tag">
                        <Projects/>
                    </Route>
                    <Route path="/resume">
                        <Resume/>
                    </Route>
                </Switch>
                <svg
                    className={classes.blank_space}
                    xmlns="http://www.w3.org/2000/svg"
                    height="120px"
                    width="100px"/>
            </Container>
            <Box className={classes.background_credits}>
                <Typography>Photo by Mahkeo on Unsplash</Typography>
            </Box>
        </Fragment>
    );
}

export default App;
