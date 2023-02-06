import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {App} from "app";
import "./shared/config/i18n/i18n.config";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)