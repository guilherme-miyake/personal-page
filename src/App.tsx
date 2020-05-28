import {Route, Switch} from "react-router-dom";
import React from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import background from "./assets/background.jpg"
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    app: {
        height: "100%",
        display: 'flex',
        flexDirection: "column",
        padding: "10px",
        justifyContent: 'center',
        zIndex: 2
    },
    background: {
        height: "100%",
        width: "100%",
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
        zIndex: -1
    }
}));

function App() {
    const classes = useStyles()
    return (
        <div className={classes.background}>
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
                </Switch>
            </Container>
            <Box height={"30px"}/>
            <Box className={classes.background_credits}>
                <Typography>Photo by Mahkeo on Unsplash</Typography>
            </Box>
        </div>
    );
}

export default App;
