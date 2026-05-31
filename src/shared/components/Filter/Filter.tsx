import React from "react";
import clsx from "clsx";
import s from './Filter.module.scss'

type FilterProps = {
    selected: boolean;
    filterValue:
        | 'all'
        | 'inProcessing'
        | 'sorting'
        | 'delivering'
        | 'delivered';
}

const Filter = ({
    children,
    filterValue="all",
    selected=false
}: FilterProps & React.PropsWithChildren) => {
    return (
        <button
            type="button"
            className={clsx(s['filter-item'], selected && s[`selected`])}
        >
            {children}
        </button>
    )
}

export default Filter