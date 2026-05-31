import {PageWrapper} from "@shared/components";
import {UserAccounts, UserCard, UserContext} from "@/entities/user";
import {Link} from "react-router";

import s from './Profile.module.scss'
import {useContext} from "react";


const ProfilePage = (): React.JSX.Element => {

    const {user} = useContext(UserContext);

    return (
        <PageWrapper>
            <div className={s.container}>
                <section className={s.header}>
                    <Link to=".." className={s[`back-url`]}>
                        &lt;  Назад
                    </Link>
                    <h1 className={s.heading}>
                        Личный кабинет
                    </h1>
                </section>
                <section className={s[`user-info`]}>
                    <UserCard user={user} />
                    <UserAccounts
                        accounts={user.accounts}
                        className={s[`user-accounts`]}
                    />
                </section>
            </div>
        </PageWrapper>
    )
}

export default ProfilePage;