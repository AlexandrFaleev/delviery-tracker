import {Button} from "@/shared/components";
import HomeIcon from '@shared/assets/icons/icon-home.svg?react';
import clsx from "clsx";
import './UiKit.scss'


const UiKit = () => {
    return (
        <div className={clsx(`ui-kit`)}>
           <Button
                type="submit"
                color="transparent"
                className={`hello-button`}
           >
               Добавить
           </Button>
            <Button
                type="button"
                style="search-button"
                className={`hello-button`}
            >
                Найти
            </Button>
            <Button
                icon={<HomeIcon/>}
                aria-label={"Домой"}
                title="Домой"
            />
        </div>
    )
}

export default UiKit;