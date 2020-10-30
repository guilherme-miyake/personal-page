/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import React from 'react';
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "./src/locales/English";
import Portuguese from "./src/locales/Portuguese";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        US: English,
        BR: Portuguese
    },
    fallbackLng: "US",
    debug: true,

    // have a common namespace used around the full app
    ns: Object.keys(English),
    defaultNS: "Home",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

let theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 860,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        type: 'dark',
        primary: {
            light: '#718792',
            main: '#455a64',
            dark: '#1c313a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#63a3ff',
            main: '#1875d1',
            dark: '#004a9f',
            contrastText: '#000',
        },
    },
});
theme = responsiveFontSizes(theme)

export const wrapRootElement = ({ element }) => {
    return (
        <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    {element}
                </ThemeProvider>
            </I18nextProvider>
        </React.StrictMode>
    )
}

const Layout = require("./src/components/Layout").default

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>
        <CssBaseline/>
        {element}
    </Layout>
}