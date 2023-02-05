import {FC} from 'react';

import styles from './AppLink.module.scss'
import {cls} from "shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps} = props

    return (
        <Link
            className={cls(styles.appLink, className, styles[theme])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
