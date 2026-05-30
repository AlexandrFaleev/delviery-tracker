import {Button} from "@shared/components";

type AuthButtonProps = {className?:string}
const AuthButton = ({className}:AuthButtonProps): React.JSX.Element => {
    return (
        <Button
            type="submit"
            className={className}
            onClick={() => console.log('Авторизация!')}
        >
            Войти
        </Button>
    )
}

export default AuthButton;