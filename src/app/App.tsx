import React, {Suspense} from 'react';

import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {cls} from "shared/lib/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls('app', theme)}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/' element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;