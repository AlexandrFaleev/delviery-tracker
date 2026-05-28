import Logo from '@shared/assets/icons/icon-logo.svg?react';
import s from './auth.module.scss'
import {PageWrapper} from "@shared/components";

const AuthPage = () => {
    return(
        <PageWrapper>
            <main className="authPage">
                <header>
                    <Logo className={s.logo} />
                </header>

                <h1>
                    Все ваши заказы в одном месте!
                </h1>
            </main>
        </PageWrapper>
    )
}

export default AuthPage;