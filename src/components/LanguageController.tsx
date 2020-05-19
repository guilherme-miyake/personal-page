import ReactFlagsSelect from "react-flags-select";
import React from "react";
import {useTranslation} from "react-i18next";
import 'react-flags-select/css/react-flags-select.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyle = makeStyles((theme) => ({
    select: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: "7px",
        borderRadius: "5px",
        "& *":{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
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