import type {filterValueType} from "@/entities/order/model/types.ts";
import ProcessingIcon from '@shared/assets/icons/icon-in-process.svg?react';
import DeliveringIcon from '@shared/assets/icons/icon-in-the-way.svg?react';
import DeliveredIcon from '@shared/assets/icons/icon-deliverd.svg?react';

import s from './OrderItem.module.scss';
import clsx from "clsx";
import {Link} from "react-router";

type OrderItemProps = {
    platform: string;
    status: filterValueType,
    trackNumber: string;
    navUrl: string
};

const OrderItem = ({
    platform,
    status,
    trackNumber,
    navUrl
}: OrderItemProps) => {

    return (
        <Link to={navUrl} className={s.link}>
            <li className={s[`order-item`]}>
                <p className={s[`order-item__number`]}>
                    {trackNumber}
                </p>
                <img
                    src={`src/shared/assets/${platform}.png`}
                    alt={platform}
                    className={clsx(s[`order-item__img`], s[platform])}
                />
                <div className={s[`order-item__status`]}>
                    <p className={s[`order-item__status-title`]}>
                        {
                            status === 'delivering'
                                ? 'В пути' : status === 'inProcessing'
                                    ? 'В обработке' : status === 'delivered'
                                        ? 'Доставлено' : ''
                        }
                    </p>
                    <div>{
                        status === 'delivering'
                            ? (<DeliveringIcon
                                className={clsx(s['status-icon'], s[status])}
                            />) : status === 'inProcessing'
                                ? (<ProcessingIcon
                                    className={clsx(s['status-icon'], s[status])}
                                />) : status === 'delivered'
                                    ? (<DeliveredIcon
                                        className={clsx(s['status-icon'], s[status])}
                                    />) : ''
                    }</div>
                </div>
            </li>
        </Link>
    )
}

export default OrderItem;