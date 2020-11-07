import ReactFlagsSelect from "react-flags-select";
import React, {useContext, useState, Fragment} from "react";
import 'react-flags-select/css/react-flags-select.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
// @ts-ignore
import {useTranslation} from "react-i18next/src/useTranslation";
import {withTranslation} from "react-i18next";
import {InputLabel} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";


const useStyle = makeStyles((theme) => ({
    select: {
        backgroundColor: theme.palette.background.paper,
        // color: theme.palette.text.primary,
        // height: "max-content",
        padding: "7px",
        borderRadius: "5px",
        boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "& *":{
            // backgroundColor: theme.palette.background.paper,
            // color: theme.palette.text.primary,
            border: "black"
        },
        // "& li:hover":{
        //     background: "rgba(0, 0, 0, 0.1) !important"
        // },
        // "& ul":{
        //     boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
        // }
    }
}));

const LanguageController = (props:{i18n:any}) => {
    const theme = useTheme()
    const classes = useStyle(theme)
    const {i18n} = useTranslation('Home' , props)
    const [country, setCountry] = useState(i18n.language)

    // const onChangeLanguage = (country: "BR"|"US") => {
    //     if (selectedCountry !== country){
    //         i18n.changeLanguage(mapa[country])
    //         setLang(country)
    //     }}
    //
    // onChangeLanguage(i18nCountry ? i18nCountry : "US")

    return <Fragment>
        <Box className={classes.select}>
            <Select
                // native
                // variant={"outlined"}
                value={country}
                onChange={handleChange}
                name="language"
                label="Language:"
            >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"pt"}>Portuguese</MenuItem>
            </Select>
        </Box>
    </Fragment>
}

export default withTranslation()(LanguageController)