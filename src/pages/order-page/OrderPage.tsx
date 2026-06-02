import {PageWrapper} from "@shared/components";
import {Link, useParams} from "react-router";
import {useContext} from "react";
import {OrdersContext} from "@/entities/order";
import {OrderCard} from "@/entities/order/ui/OrderCard";

import s from './OrderPage.module.scss';

const OrderPage = () => {
    const {id} = useParams();
    const {userOrders} = useContext(OrdersContext);
    const currentOrder = userOrders?.find(order => order.id === id)

    return (
        <PageWrapper>
            <div className={s.container}>
                <section className={s.header}>
                    <Link to=".." className={s[`header__back-url`]}>
                        &lt;  Назад
                    </Link>
                    <h1 className={s.header__title}>
                        Заказ<br/>{currentOrder?.trackNumber}
                    </h1>
                    <button className={s[`header__delete-button`]}>
                        Удалить
                    </button>
                </section>
                <section className={s.content}>
                    <OrderCard
                        order={currentOrder}
                    />
                </section>
            </div>
        </PageWrapper>
    )
}

export default OrderPage