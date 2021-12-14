import React, {Fragment} from "react";
import SEO from "../components/seo"
import {Box} from "@material-ui/core";

const NotFoundPage = () => {
    return <Fragment>
        <SEO title="404: Not found"/>
        <Box>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn't exist... the sadness.</p>
        </Box>
    </Fragment>
}

export default NotFoundPage
