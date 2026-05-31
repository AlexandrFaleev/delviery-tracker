import {Button, Field} from "@shared/components";
import {Link, Navigate} from "react-router";
import {AuthUser} from './../model/useUser.ts';
import * as React from "react";
import {UserContext} from "@/entities/user";
import s from './AuthForm.module.scss';

const AuthForm = (): React.JSX.Element => {
    const [login, setLogin] = React.useState<string>("");
    const [loginValid, setLoginValid] = React.useState<boolean>(true);
    const [password, setPassword] = React.useState<string>("");
    const [passwordValid, setPasswordValid] = React.useState<boolean>(true);
    const { user, setUser } = React.useContext(UserContext);

    const onLoginInput = ({target}:any) => {
        setLogin(target.value);
        setLoginValid(true);
    }

    const onPasswordInput = ({target}:any) => {
        setPassword(target.value);
        setPasswordValid(true);
    }

    const onAuthFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = AuthUser({login, password});
        if(userData.success === true) {
            setUser(userData.user);
        } else {
            if (userData.error === 'Login and password are required') {
                setLoginValid(false);
                setPasswordValid(false);
            }
            if(userData.error === 'No user with such login') {
                setLoginValid(false);
            }
            if(userData.error === 'Password is incorrect') {
                setPasswordValid(false);
            }
        }
    }

    if(user){ return <Navigate to={'/'} replace /> }

    return (
        <form className={s["auth-form"]} onSubmit={onAuthFormSubmit} >
            <Field
                id="login-field"
                title="Логин или почта"
                valid={loginValid}
                value={login}
                onInputChange={onLoginInput}
            />
            <Field
                id="pass-field"
                title="Пароль"
                valid={passwordValid}
                type="password"
                className={s[`pass-field`]}
                value={password}
                onInputChange={onPasswordInput}
            />
            <Button
                type="submit"
                className={s[`auth-button`]}
            >
                Войти
            </Button>
            <Link to="/login" className={s.registration}>
                Регистрация
            </Link>
        </form>
    )
}

export default AuthForm
