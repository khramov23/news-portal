import {RouteProps} from "react-router-dom";
import {RoutePath} from "shared/config/routes/routes.config";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const routes: RouteProps[] = [
    {path: RoutePath.main, element: <MainPage />},
    {path: RoutePath.about, element: <AboutPage />},
]