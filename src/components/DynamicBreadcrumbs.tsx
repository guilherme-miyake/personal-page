import {Breadcrumbs, Typography} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "gatsby";


const textVariant = "h5"
const useStyle = makeStyles(() => ({
    link: {
        textDecoration: "none",
    }
}))

export function formatName(path: String) {
    const clean = path
        .split("-")[0]
        .split("+").join(" ")
        .split("_").join("-")
    return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function Breadcrumb(props: { pathArray: string[], index: number, pathValue: string}) {
    const classes = useStyle()
    const last = props.index === props.pathArray.length - 1;
    const to = "/" + props.pathArray.slice(0, props.index + 1).join('/');

    return last ? (
        <Typography variant={textVariant} color="textPrimary" style={{textTransform: "capitalize"}}>
            {formatName(props.pathValue)}
        </Typography>
    ) : (
        <Link className={classes.link} color="inherit" to={to}>
            <Typography variant={textVariant} color="textPrimary" style={{textTransform: "capitalize"}}>
                {formatName(props.pathValue)}
            </Typography>
        </Link>
    )
}

export default function DynamicBreadcrumbs(props:{location: any}) {
    const classes = useStyle()
    const pathArray = props.location.pathname.split('/').filter((x) => x);
    return <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.link} color="inherit" to="/">
            <Typography variant={textVariant} color="textPrimary">{"> Home"}</Typography>
        </Link>

        {
            pathArray.map((value, index) => {
                    return <Breadcrumb pathValue={value} index={index} pathArray={pathArray} key={value}/>
                }
            )
        }

    </Breadcrumbs>
}
