import * as React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './types';
import SearchIcon from '@shared/assets/icons/icon-search.svg?react';
import s from './Button.module.scss';


const Button = ({
    children,
    type="button",
    className,
    color="default",
    style="default",
    icon,
    ...rest
}:React.PropsWithChildren<ButtonProps> & React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => {
    if(icon) {
        return (
            <button
                type={type}
                className={clsx(s[`icon-button`], className)}
                {...rest}
            >
                {icon}
            </button>
        )
    }

    return (
        <button
            type={type}
            className={clsx(
                s.button,
                s[`color-${color}`],
                (style == 'search-button' && s[`style-search-button`]),
                className
            )}
            {...rest}
        >
            {style == 'search-button' ? (
                <>
                    <SearchIcon className={s[`search-icon`]}/>
                    <span>{children}</span>
                </>
            ) : children}
        </button>
    )
}

export default Button;