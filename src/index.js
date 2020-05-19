import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {createBrowserHistory} from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from "react-i18next";
import {Router} from "react-router-dom";
import App from './App.tsx';
import i18n from "./i18n";
import './index.css';

const theme = createMuiTheme({
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

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <App/>
                </Router>
            </ThemeProvider></I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
