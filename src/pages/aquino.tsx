import React, {Fragment, useEffect} from "react";
import SEO from "../components/seo";
import {Paper, Typography} from "@material-ui/core";


export default function About(props: { location: any }) {
    var go_to = () => {
        window.location.href = 'https://aquino-birthday.herokuapp.com/static/aquino.html'
    }
    useEffect(go_to)
    return <Fragment>
        <SEO
            title={"Parabens Aquino!"}
            description={"Ao melhor vizinho que só fui conhecer no role"}
        />
        <div onClick={go_to}>
            <Paper>
                <div style={{padding: "2em"}}>
                    <Typography>
                        Redirecionando...<br/>
                    </Typography>
                </div>
            </Paper>
        </div>
    </Fragment>
}
