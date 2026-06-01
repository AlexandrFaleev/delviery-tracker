import React, {useContext} from "react";
import clsx from "clsx";
import type {filterValueType} from "@/entities/order/model/types.ts";
import s from './Filter.module.scss'
import {OrdersContext} from "@/entities/order";

type FilterProps = {
    filterValue: filterValueType
}

const Filter = ({
    children,
    filterValue="all"
}: FilterProps & React.PropsWithChildren) => {

    const { selectedFilter, onFilterClick } = useContext(OrdersContext)

    return (
        <button
            type="button"
            className={clsx(s['filter-item'], (selectedFilter === filterValue) && s[`selected`])}
            onClick={() => {onFilterClick(filterValue)}}
        >
            {children}
        </button>
    )
}

export default Filter