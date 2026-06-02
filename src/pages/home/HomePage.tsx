import {PageWrapper} from "@shared/components";
import {FiltersBlock} from "@/features";
import {OrdersContext} from "@/entities/order";
import {useContext} from "react";
import {useMediaQuery} from "react-responsive";
import {OrderItem} from "@/entities/order/ui/OrderItem";
import s from './HomePage.module.scss'

const HomePage = (): React.JSX.Element => {
    const {userOrders, filteredOrders} = useContext(OrdersContext);
    const deviceType:string = useMediaQuery({query: 'screen and (max-width: 768px)'})
        ? 'mobile' : 'desktop';
    const orders = filteredOrders ?? userOrders;

    return (
        <PageWrapper>
            <div className={s.container}>
                <h1 className={s.heading}>
                    Ваши заказы
                </h1>
                <section className={s[`orders`]}>
                    <div className={s[`orders__filters`]}>
                        <FiltersBlock
                            className={s[`orders__filters-block`]}
                        />
                        {deviceType !== 'mobile' && (
                            <img
                                src="../src/shared/assets/box-image.png"
                                alt="Коробка"
                                loading="lazy"
                                className={s[`orders__filters-img`]}
                            />
                        )}
                    </div>
                    <div className={s[`orders__list`]}>
                        <h2 className={s[`orders__list-header`]}>
                            Текущие заказы:
                        </h2>
                        {orders?.length !== 0 ? (
                            <ul className={s[`orders__list-list`]}>
                                {orders?.map((order) => (
                                    <OrderItem
                                        platform={order.platform}
                                        status={order.status}
                                        trackNumber={order.trackNumber}
                                        navUrl={`/order/${order.id}`}
                                        key={order.id}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div className={s[`empty-message`]}>
                                <h3 className={s[`empty-message__title`]}>
                                    Нет активных заказов
                                </h3>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PageWrapper>
    )
}

export default HomePage;