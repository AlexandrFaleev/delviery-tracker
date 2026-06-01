import * as React from "react";
import type {filterValueType, Order} from "@/entities/order/model/types.ts";
import {UserContext} from "@/entities/user";
import {MOCK_ORDERS} from "@/entities/order/mocks/orders.ts";
import {useEffect} from "react";

export interface OrdersContextType {
    userOrders: Order[] | null;
    filteredOrders: Order[] | null;
    selectedFilter: filterValueType;
    onFilterClick: (value:filterValueType) => void;
    search:string,
    onSearchChange:({target}) => void;
    onSearchButtonClick:() => void;
}

export const OrdersContext: React.Context<OrdersContextType> =
    React.createContext<OrdersContextType>({} as OrdersContextType);

const OrdersProvider = ({children}:React.PropsWithChildren) => {
    const {user} = React.useContext(UserContext);

    const [userOrders, setUserOrders] = React.useState<Order[] | []>(() => MOCK_ORDERS.filter(
        order => order.userId === user.id
    ));
    const [search, setSearch] = React.useState("");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedFilter, setSelectedFilter] = React.useState<filterValueType>("all");

    const onFilterClick = (filterValue:filterValueType) => {
        setSelectedFilter(filterValue);
    }

    const onSearchChange = ({target}:{target:any}) => {
        setSearch(target.value);
        if(target.value === ''){
            setSearchQuery('')
        }
    }

    const [filteredOrders, setFilteredOrders] = React.useState<Order[] | []>(userOrders
        .filter(order => selectedFilter !== 'all'
            ? order.status === selectedFilter : order));

    const onSearchButtonClick = () => {
        setSearchQuery(search)
    }

    useEffect(() => {
        setFilteredOrders(userOrders
            .filter(order => selectedFilter !== 'all'
                ? order.status === selectedFilter : order)
            .filter(order =>
                order.trackNumber.toLowerCase().includes(
                    searchQuery.trim().toLowerCase())))
    },[selectedFilter, searchQuery])

    return (
        <OrdersContext.Provider value={{
            userOrders,
            filteredOrders,
            selectedFilter,
            onFilterClick,
            search,
            onSearchChange,
            onSearchButtonClick
        }}>
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider;