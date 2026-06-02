import {type ReactElement, useContext} from "react";
import type {UserAccount} from "@/entities/user/model/types.ts";
import CorrectionIcon from '@shared/assets/icons/icon-pencil.svg?react';
import TrashIcon from '@shared/assets/icons/icon-trash.svg?react';
import s from './AccountCard.module.scss'
import {Button} from "@shared/components";
import {UserContext} from "@/entities/user";

const AccountCard = ({
     platform,
     phoneNumber,
     id
}: UserAccount & ReactElement): ReactElement => {
    const {deleteAccount} = useContext(UserContext);

    return (
        <li
            className={s[`account-card`]}
        >
            <img
                src={`../src/shared/assets/${platform}.png`}
                alt={platform}
                className={s['account-card__image']}
            />
            <p className={s['account-card__phone']}>
               {phoneNumber}
            </p>
            <div className={s["account-card__controls"]}>
                <Button
                    type={"button"}
                    color={"transparent"}
                    className={s['correction-button']}
                >
                    <CorrectionIcon/>
                </Button>
                <Button
                    type={"button"}
                    color={"transparent"}
                    className={s['delete-button']}
                    onClick={() => deleteAccount(id)}
                >
                    <TrashIcon/>
                </Button>
            </div>
        </li>
    )
}

export default AccountCard;