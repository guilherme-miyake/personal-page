import {Breadcrumbs, Typography} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom"
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";


const textVariant = "h5"
const useStyle = makeStyles(() => ({
    link: {
        textDecoration: "none"
    }
}))

function formatLink(path: String) {
    return path.charAt(0).toUpperCase() + path.slice(1);
}

function Breadcrumb(props: { pathArray: string[], index: number, pathValue: string }) {
    const classes = useStyle()
    const last = props.index === props.pathArray.length - 1;
    const to = "/" + props.pathArray.slice(0, props.index + 1).join('/');

    return last ? (
        <Typography variant={textVariant} color="textPrimary" key={to}>
            {formatLink(props.pathValue)}
        </Typography>
    ) : (
        <Link className={classes.link} color="inherit" to={to} key={to}>
            <Typography variant={textVariant} color="textPrimary" key={to}>
                {formatLink(props.pathValue)}
            </Typography>
        </Link>
    )
}

export default function DynamicBreadcrumbs() {
    const classes = useStyle()
    const location = useLocation()
    const pathArray = location.pathname.split('/').filter((x) => x);
    return <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.link} color="inherit" to="/">
            <Typography variant={textVariant} color="textPrimary">{"> Home"}</Typography>
        </Link>

        {
            pathArray.map((value, index) => {
                    return <Breadcrumb pathValue={value} index={index} pathArray={pathArray}/>
                }
            )
        }

    </Breadcrumbs>
}
