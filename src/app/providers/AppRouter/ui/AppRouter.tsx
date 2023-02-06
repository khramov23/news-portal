import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../lib/routes";
import {useTranslation} from "react-i18next";

export const AppRouter = () => {
    const {t} = useTranslation()

    return (
        <Suspense fallback={<h1>{t('Загрузка...')}</h1>}>
            <Routes>
                {routes.map(({path, element}) =>
                    <Route key={path} path={path} element={
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    }/>
                )}
            </Routes>
        </Suspense>
    );
};
