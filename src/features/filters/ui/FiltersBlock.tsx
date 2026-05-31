import React, {useState} from "react";
import clsx from "clsx";
import s from './FiltersBlock.module.scss';
import {Button, Field, Filter} from "@shared/components";

type FiltersBlockProps = {
    className?: string;
}

const FiltersBlock = ({
    className
}: FiltersBlockProps): React.ReactElement => {
    const [search, setSearch] = useState("");

    return (
        <form className={clsx(s[`filters`], className)} onSubmit={(e) => e.preventDefault()}>
            <div className={s[`search-block`]}>
                <Field
                    id="search-field"
                    title="Веедите трек-номер"
                    type="search"
                    valid={true}
                    value={search}
                    onInputChange={({target}:any) => setSearch(target.value)}
                    className={s[`search-block__field`]}
                />
                <Button
                    type="submit"
                    style="search-button"
                    className={s[`search-block__button`]}
                >
                    Найти
                </Button>
            </div>
            <hr className={s.divider}/>
            <div className={s[`filters-block`]}>
                <h3 className={s[`filters-block__header`]}>Фильтры:</h3>
                <ul className={s[`filters-block__filters`]}>
                    <li
                        className={clsx(s[`filters-block__item`])}
                    >
                        <Filter filterValue={"all"} selected={true}>Все</Filter>
                    </li>
                    <li
                        className={clsx(s[`filters-block__item`])}
                    >
                        <Filter filterValue={"inProcessing"}>В обработке</Filter>
                    </li>
                    <li
                        className={clsx(s[`filters-block__item`])}
                    >
                        <Filter filterValue={"sorting"}>На сортировке</Filter>
                    </li>
                    <li
                        className={clsx(s[`filters-block__item`])}
                    >
                        <Filter filterValue={"delivering"}>В пути</Filter>
                    </li>
                    <li
                        className={clsx(s[`filters-block__item`])}
                    >
                        <Filter filterValue={"delivered"}>Доставлено</Filter>
                    </li>
                </ul>
            </div>

        </form>
    )
}

export default FiltersBlock