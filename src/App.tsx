import {Route, Switch} from "react-router-dom";
import React from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

const useStyles = makeStyles(() => ({
    app: {
        height: "100%",
        display: 'flex',
        flexDirection:"column",
        padding: "10px",
        justifyContent: 'center',
    }
}));
function App() {
    const classes = useStyles()
    return (
        <Container className={classes.app}>
            <CssBaseline/>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/projects/:tag">
                        <Projects/>
                    </Route>
                </Switch>
        </Container>
    );
}

export default App;
