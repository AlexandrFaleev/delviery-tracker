import s from './Field.module.scss'
import clsx from "clsx";

type FieldProps = {
    id:string,
    type?:string,
    title:string,
    className?:string
}

const Field = ({
   id,
   type="text",
   title,
   className
}: FieldProps): React.JSX.Element => {
    return (
        <div className={clsx(s.field, className)}>
            <input
                id={id}
                type={type}
                className={clsx(s.field__input)}
                autoComplete="off"
                placeholder=" "
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