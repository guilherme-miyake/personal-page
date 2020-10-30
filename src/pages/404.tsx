import React, { Fragment } from "react";
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return <Fragment>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Fragment>
}

export default NotFoundPage
