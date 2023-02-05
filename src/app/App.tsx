import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {cls} from "shared/lib/classNames";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', theme)}>
            <Navbar />
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter />
        </div>
    );
};

export default App;