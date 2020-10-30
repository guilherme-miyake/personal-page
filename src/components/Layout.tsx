import React, {Fragment, ReactNode} from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import StyledBackgroundSection from "./Background";

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

function Layout(props:{children: ReactNode, location: any}) {
    const classes = useStyles()

    return (
        <Fragment>
            <Box className={classes.background}>
                <StyledBackgroundSection className={classes.background}/>
            </Box>
            <Container className={classes.app}>
                <Header location={props.location}/>
                {props.children}
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

export default Layout;
