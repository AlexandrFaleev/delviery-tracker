import React from "react";
import {Button} from "@shared/components";
import IconPencil from "@shared/assets/icons/icon-pencil.svg?react"

import s from './UserCard.module.scss'
import type {User} from "@/entities/user/model/types.ts";

type UserCardProps = {
    user: User;
}

const UserCard = ({user}:UserCardProps):React.JSX.Element => {
    return(
        <div className={s[`user-card`]}>
            <Button
                type="button"
                style="default"
                color="transparent"
                className={s[`correction-button`]}
            >
                <IconPencil/>
            </Button>
            <img
                src={user.avatar ?? "../src/shared/assets/avatar.png"}
                loading="lazy"
                alt="Аватар"
                className={s[`user-avatar`]}
            />
            <button className={s['change-photo-btn']}>
                Изменить
            </button>
            <hr className={s.divider} />
            <section className={s[`user-info`]}>
                <p>Имя:</p>
                <p>{user?.name}</p>
                <p>Фамилия:</p>
                <p>{user?.lastname}</p>
                <p>Почта:</p>
                <p>{user?.email}</p>
            </section>
        </div>
    )
}

export default UserCard;