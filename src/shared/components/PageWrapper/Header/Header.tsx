import * as React from "react";
import Logo from '@shared/assets/icons/icon-logo.svg?react';
import {Link, useLocation} from "react-router";
import IconChat from '@shared/assets/icons/icon-chat.svg?react'
import NotificationsIcon from '@shared/assets/icons/icon-notifications.svg?react'
import ProfileIcon from '@shared/assets/icons/icon-profile.svg?react'
import clsx from "clsx";
import s from './Header.module.scss';


type HeaderProps = {
    type: string
}

const Header = ({type = "desktop"}: HeaderProps): React.JSX.Element => {
    const currentLocation = useLocation().pathname;
    const chatClass: string = currentLocation === '/chat' ||
        currentLocation === '/login' ? s.disabled : "";
    const notificationsClass: string = currentLocation === '/notifications' ||
        currentLocation === '/login' ? s.disabled : "";
    const profileClass: string = currentLocation === '/profile' ||
        currentLocation === '/login' ? s.disabled : "";

    if (type === "mobile") return <></>

    return (
        <header className={s.header}>
            <Link to="/" className={s[`header__logo`]}>
                <Logo className={s[`header__logo-icon`]}/>
            </Link>
            <nav className={clsx(s[`header__nav-bar`], s[`nav-bar`])}>
                <ul className={clsx(s[`nav-bar__list`])}>
                    <li className={clsx(s[`nav-bar__list-item`])}>
                        <Link
                            to="/chat"
                            className={chatClass}
                        >
                            <IconChat className={s[`chat-icon`]}/>
                        </Link>
                    </li>
                    <li className={clsx(s[`nav-bar__list-item`])}>
                        <Link
                            to="/notifications"
                            className={notificationsClass}
                        >
                            <NotificationsIcon/>
                        </Link>
                    </li>
                    <li className={clsx(s[`nav-bar__list-item`])}>
                        <Link
                            to="/profile"
                            className={profileClass}
                        >
                            <ProfileIcon/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;