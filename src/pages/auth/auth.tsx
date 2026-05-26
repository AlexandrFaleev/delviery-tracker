
import Logo from '@/assets/icon-logo.svg?react';
import {Typography} from "../../shared/components";

export const AuthPage = () => {
    return(
        <main className="authPage">
            <Logo className="logo" />
            <Typography
                tag="h1"
                variant="sub-heading"
                color="light-gray"
            >
                Все ваши заказы в одном приложении
            </Typography>
        </main>
    )
}