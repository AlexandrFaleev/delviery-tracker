import type {ReactElement} from "react";

type ButtonColors =
    | 'default'
    | 'transparent';

type ButtonStyles = 'default' | 'search-button';

type ButtonTypes = 'submit' | 'button';


export type ButtonProps = {
    type?: ButtonTypes,
    className?: string,
    color?: ButtonColors,
    style?: ButtonStyles,
    icon?: ReactElement
};