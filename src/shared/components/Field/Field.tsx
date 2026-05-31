import * as React from 'react'
import clsx from "clsx";
import s from './Field.module.scss'

type FieldProps = {
    id:string,
    type?:string,
    title:string,
    valid:boolean
    className?:string,
    value:string,
    onInputChange: (value:string) => void,
}

const Field = ({
   id,
   type="text",
   title,
   valid,
   className,
   value,
   onInputChange
}: FieldProps): React.JSX.Element => {
    return (
        <div className={clsx(s.field, className)}>
            <input
                id={id}
                type={type}
                className={clsx(s.field__input, !valid && s.invalid)}
                autoComplete="off"
                placeholder=" "
                value={value}
                onInput={onInputChange}
            />
            <label
                htmlFor={id}
                className={s.field__label}
            >
                {title}
            </label>
        </div>
    )
}

export default Field;