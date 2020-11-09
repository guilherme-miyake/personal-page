import React, {Fragment, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
// @ts-ignore
import {useTranslation} from "react-i18next/src/useTranslation";
import {withTranslation} from "react-i18next";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import BR from "../assets/svg/BR.svg"
import US from "../assets/svg/US.svg"


const useStyle = makeStyles((theme) => ({
    select: {
        backgroundColor: theme.palette.background.paper,
        padding: "7px",
        borderRadius: "5px",
        boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "& *": {
            border: "black"
        },
    }
}));

const LanguageController = (props:{i18n:any}) => {
    const theme = useTheme()
    const classes = useStyle(theme)
    const {i18n} = useTranslation('Home', props)
    const [language, setLanguage] = useState("en")
    const languages: string[] = ['pt', 'en']

    const handleChange = (event: { target: { value: unknown } }) => {
        let parsed_language: string = (event.target.value as string).substring(0, 2)
        parsed_language = languages.indexOf(parsed_language) >= 0 ? parsed_language : 'en'
        if (parsed_language !== language) {
            i18n.changeLanguage(parsed_language)
            setLanguage(parsed_language)
        }
    }

    useEffect(() => handleChange({target: {value: i18n.language}}), [i18n.language])


    return <Fragment>
        <Box className={classes.select}>
            <Select
                // native
                // variant={"outlined"}
                value={language}
                onChange={handleChange}
                name="language"
                label="Language:"
            >
                <MenuItem value={"en"}><US
                    style={{height: "1em", width: "1.4em", marginRight: "5px"}}/>English</MenuItem>
                <MenuItem value={"pt"}><BR
                    style={{height: "1em", width: "1.4em", marginRight: "5px"}}/>Português</MenuItem>
            </Select>
        </Box>
    </Fragment>
}

export default withTranslation()(LanguageController)