import ReactFlagsSelect from "react-flags-select";
import React from "react";
import 'react-flags-select/css/react-flags-select.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
// @ts-ignore
import {useTranslation} from "react-i18next/src/useTranslation";


const useStyle = makeStyles((theme) => ({
    select: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        height: "max-content",
        padding: "7px",
        borderRadius: "5px",
        boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "& *":{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: "black"
        },
        "& li:hover":{
            background: "rgba(0, 0, 0, 0.1) !important"
        },
        "& ul":{
            boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
        }
    }
}));

export default function LanguageController() {
    const theme = useTheme()
    const classes = useStyle(theme)
    const {i18n} = useTranslation()
    const onChangeLanguage = (country: string) => i18n.changeLanguage(country)

    return <ReactFlagsSelect
        className={classes.select}
        countries={["US", "BR"]}
        customLabels={{"US": "English","BR": "Português"}}
        placeholder="Select Language"
        onSelect={onChangeLanguage}/>
}