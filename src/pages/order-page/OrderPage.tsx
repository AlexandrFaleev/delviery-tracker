import {PageWrapper} from "@shared/components";
import {useParams} from "react-router";
import {useContext} from "react";
import {OrdersContext} from "@/entities/order";

const OrderPage = () => {
    const {id} = useParams();
    const {userOrders} = useContext(OrdersContext);

    const currentOrder = userOrders?.find(order => order.id === id)

    return (
        <PageWrapper>
            Тут страница заказа {currentOrder?.trackNumber}
        </PageWrapper>
    )
}

export default OrderPage