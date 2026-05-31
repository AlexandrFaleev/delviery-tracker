import {Field} from "@shared/components";
import {AuthButton} from "@/features";
import {Link} from "react-router";
import s from './AuthForm.module.scss';

const AuthForm = (): React.JSX.Element => {
    return (
        <form className={s["auth-form"]}>
            <Field
                id="login-field"
                title="Логин или почта"
            />
            <Field
                id="pass-field"
                title="Пароль"
                type="password"
                className={s[`pass-field`]}
            />
            <AuthButton className={s[`auth-button`]}/>
            <Link to="/" className={s.registration}>
                Регистрация
            </Link>
        </form>
    )
}

export default AuthForm
