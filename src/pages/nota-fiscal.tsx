import React, {Fragment, useEffect} from "react";
import SEO from "../components/seo";
import {Paper, Typography} from "@material-ui/core";


export default function About(props: { location: any }) {
    var go_to = () => {
        window.location.href = 'https://nfe.prefeitura.sp.gov.br/contribuinte/notaprint.aspx?inscricao=72535130' + location.search.replace("?", "&")
    }
    useEffect(go_to)
    return <Fragment>
        <SEO
            title={"Nota Fiscal"}
            description={"Start a conversation on WhatsApp"}
        />
        <div onClick={go_to}>
            <Paper>
                <div style={{padding: "2em"}}>
                    <Typography>
                        Redirecionando...<br/>
                        Clique aqui para acessar a nota no site da prefeitura
                    </Typography>
                </div>
            </Paper>
        </div>
    </Fragment>
}
