import LogoIcon from '@/shared/assets/icons/icon-logo.svg?react';
import {PageWrapper} from "@shared/components";
import {useMediaQuery} from "react-responsive";
import s from './auth.module.scss'
import {AuthForm} from "@/widgets";

const AuthPage = () => {
    const deviceType:string = useMediaQuery({query: 'screen and (max-width: 768px)'})
        ? 'mobile' : 'desktop';

    return(
        <PageWrapper>
            {deviceType === 'mobile' && (
                <LogoIcon className={s.logo}/>
            )}
            <div className={s.container}>
                <h1 className={s.heading}>
                    Все ваши заказы в одном <br/> приложении
                </h1>
                <AuthForm/>
            </div>
        </PageWrapper>
    )
}

export default AuthPage;