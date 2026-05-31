import {PageWrapper} from "@shared/components";
import {UserAccounts, UserCard, UserContext} from "@/entities/user";

import s from './HomePage.module.scss'
import {useContext} from "react";
import {FiltersBlock} from "@/features";


const HomePage = (): React.JSX.Element => {
    const {user} = useContext(UserContext);
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
                        <img
                            src="src/shared/assets/box-image.png"
                            alt="Коробка"
                            loading="lazy"
                        />
                    </div>
                    <div className={s[`orders__list`]}>
                        <h2 className={s[`orders__list-header`]}>
                            Текущие заказы:
                        </h2>
                    </div>
                </section>
            </div>
        </PageWrapper>
    )
}

export default HomePage;