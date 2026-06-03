import type {ReactElement} from "react";
import type {UserAccount} from "@/entities/user/model/types.ts";
import {Button} from "@shared/components";
import clsx from "clsx";
import {AccountCard} from "@/entities/user/ui/UserAccounts/AccountCard";
import s from './UserAccounts.module.scss';

type UserAccountProps = {
    accounts: UserAccount[] | undefined;
    className?: string;
}

const UserAccounts = ({
    accounts,
    className,
}: UserAccountProps): ReactElement => {


    return (
        <div className={clsx(s.accounts, className)}>
            <div className={s[`user-accounts__header`]}>
                <h2 className={s[`user-accounts__title`]}>
                    Привязанные учетные записи:
                </h2>
                <Button
                    type="button"
                    style="default"
                    color="transparent"
                    className={s[`user-accounts__button`]}
                >
                    Добавить
                </Button>
            </div>
            <ul className={s.accounts__list}>
                {accounts?.map(({id, phoneNumber, platform}: UserAccount) => (
                    <AccountCard
                        platform={platform}
                        phoneNumber={phoneNumber}
                        id={id}
                        key={id} type={""} props={undefined}
                    />
                ))}
            </ul>
        </div>
    )
}

export default UserAccounts;