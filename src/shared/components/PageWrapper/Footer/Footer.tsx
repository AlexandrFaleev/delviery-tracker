import * as React from "react";
import HomeIcon from '@shared/assets/icons/icon-home.svg?react';
import ChatIcon from '@shared/assets/icons/icon-chat.svg?react';
import NotificationsIcon from '@shared/assets/icons/icon-notifications.svg?react';
import ProfileIcon from '@shared/assets/icons/icon-profile.svg?react';
import clsx from "clsx";
import {Link, useLocation} from "react-router";
import s from './Footer.module.scss'

type FooterProps = {
    type: string
};

const Footer = ({type}:FooterProps): React.JSX.Element => {
    const currentLocation = useLocation().pathname;
    const homeIconClass = currentLocation === '/login' ? s.disabled : '';
    const chatIconClass = currentLocation === '/chat' || currentLocation === '/login' ? s.disabled : '';
    const notificationsIconClass = currentLocation === '/notifications' || currentLocation === '/login' ? s.disabled : '';
    const profileIconClass = currentLocation === '/profile' || currentLocation === '/login' ? s.disabled : '';


    return (
        <footer className={s.footer}>
            {type=="mobile" ? (
                <nav className={clsx(s[`footer__nav`], s.nav)}>
                    <ul className={s.nav__list}>
                        <li className={s[`nav__list-item`]}>
                            <Link
                                to="/"
                                className={homeIconClass}
                            >
                                <HomeIcon className={s[`home-icon`]}/>
                            </Link>
                        </li>
                        <li className={s[`nav__list-item`]}>
                            <Link
                                to="/chat"
                                className={chatIconClass}
                            >
                                <ChatIcon className={s[`chat-icon`]}/>
                            </Link>
                        </li>
                        <li className={s[`nav__list-item`]}>
                            <Link
                                to="/notifications"
                                className={notificationsIconClass}
                            >
                                <NotificationsIcon/>
                            </Link>
                        </li>
                        <li className={s[`nav__list-item`]}>
                            <Link
                                to="/profile"
                                className={profileIconClass}
                            >
                                <ProfileIcon/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                <>
                    <div className={s[`footer__company-name`]}>
                        © 2026, «Где Посылка?»
                    </div>
                    <div className={clsx(s[`footer__company-info`], s[`company-info`])}>
                        <ul className={s[`company-info__list`]}>
                            <li className={s[`company-info__item`]}>
                                ИНН: 1234567890
                            </li>
                            <li className={s[`company-info__item`]}>
                                ОГРН: 1234567890123
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </footer>
    )
}

export default Footer;