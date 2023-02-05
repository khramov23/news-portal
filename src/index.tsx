import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {App} from "app";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)