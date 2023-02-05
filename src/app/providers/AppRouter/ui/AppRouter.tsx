import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../lib/routes";

export const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {routes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Suspense>
    );
};
