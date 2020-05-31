import Button from "@material-ui/core/Button";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import React, {ReactNode} from "react";
import {Link, useLocation} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    right: {
        justifyContent: "flex-end",
        margin: "10px",
        minHeight: "4em",
        minWidth: "30%",
    },
    left: {
        justifyContent: "flex-start",
        margin: "10px",
        minHeight: "4em",
        minWidth: "30%",
    }
}))

export function LeftButton(props: { children: ReactNode, to?: string, onClick?: () => any, disabled?: boolean }) {
    const location = useLocation()
    const classes = useStyles()
    const disabled = props.disabled === null ? false : props.disabled
    const path_to = props.to ? props.to : location

    return <Button color={"primary"}
                   className={classes.left}
                   variant={"contained"}
                   onClick={props.onClick}
                   startIcon={<ChevronLeft/>}
                   component={Link}
                   to={path_to}
                   disabled={disabled}
    >
        {props.children}
    </Button>

}

export function RightButton(props: { children: ReactNode, to?: string, onClick?: () => any, disabled?: boolean }) {
    const location = useLocation()
    const classes = useStyles()
    const disabled = props.disabled === null ? false : props.disabled
    const path_to = props.to ? props.to : location

    return <Button color={"primary"}
                   className={classes.right}
                   variant={"contained"}
                   onClick={props.onClick}
                   endIcon={<ChevronRight/>}
                   component={Link}
                   to={path_to}
                   disabled={disabled}
    >
        {props.children}
    </Button>

}