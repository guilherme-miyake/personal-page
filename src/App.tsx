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
    },
    background: {
        height: "100%",
        // minHeight: "1300px",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom"
    },
    background_credits: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "300px"
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
                <Box className={classes.background_credits}>
                    <Typography>Photo by Mahkeo on Unsplash</Typography>
                </Box>
            </Container>
        </div>
    );
}

export default App;
