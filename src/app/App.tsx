import React from 'react';

import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {cls} from "shared/lib/classNames";
import {AppRouter} from "app/providers/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', theme)}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;