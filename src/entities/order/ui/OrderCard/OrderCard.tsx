import * as React from "react";
import type {Order} from "@/entities/order/model/types.ts";
import InProcessIcon from '@shared/assets/icons/icon-in-process.svg?react';
import InTheWayIcon from '@shared/assets/icons/icon-in-the-way.svg?react';
import IsDeliveredIcon from '@shared/assets/icons/icon-deliverd.svg?react';
import clsx from "clsx";

import s from './OrderCard.module.scss';


type OrderCardProps = {
    order: Order | undefined
};
const OrderCard = ({
   order
}:OrderCardProps): React.JSX.Element => {
    return (
        <div className={s[`order-card`]}>
            <div className={s[`order-card__header`]}>
                <div className={s[`order-card__number`]}>
                    {order?.trackNumber}
                </div>
                <img
                    src={`../../../public/${order?.platform}.png`}
                    alt={order?.platform}
                    className={clsx(s[`order-card__img`], s[`${order?.platform}`])}
                />
                <div className={s[`order-card__status`]}>
                    <span>{
                        order?.status === 'inProcessing'
                            ? 'В обработке' : order?.status === 'delivering'
                            ? 'В пути' : order?.status === 'delivered'
                            ? 'Доставлено' : ''
                    }</span>
                    {order?.status === 'inProcessing'
                        ? (<InProcessIcon className={s[`${order?.status}`]}/>) : order?.status === 'delivering'
                        ? (<InTheWayIcon className={s[`${order?.status}`]}/>) : order?.status === 'delivered'
                        ? (<IsDeliveredIcon className={s[`${order?.status}`]}/>) : (<></>)
                    }
                </div>
            </div>
            <div className={s[`order-card__info`]}>
                <ul className={s[`statuses__list`]}>
                    <li className={s[`statuses__item`]}>
                        <InProcessIcon
                            className={clsx(
                                s[`statuses__item-icon`],
                                s[`inProcessing-icon`],
                                order?.status === 'inProcessing' && s.active
                            )}
                        />
                        <span>В обработке</span>
                    </li>
                    <li className={s[`statuses__item`]}>
                        <InTheWayIcon
                            className={clsx(
                                s[`statuses__item-icon`],
                                s[`delivering-icon`],
                                order?.status === 'delivering' && s.active
                            )}
                        />
                        <span>В пути</span>
                    </li>
                    <li className={s[`statuses__item`]}>
                        <IsDeliveredIcon
                            className={clsx(
                                s[`statuses__item-icon`],
                                s[`delivered-icon`],
                                order?.status === 'delivered' && s.active
                            )}
                        />
                        <span>Доставлено</span>
                    </li>
                </ul>
                <div className={s.info__date}>
                    {order?.status !== 'delivered'
                        ? (<>Примерная дата доставки: <span>{order?.waitingDate}</span></>)
                        : (<>Доставлено: <span>{order?.waitingDate}</span></>)
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderCard;