import type {User, UserCredentials} from "@/entities/user/model/types.ts";
import { MOCK_USERS } from "@/entities/user/mocks/users.ts";

type AuthResult = {success: true, user: User} | {success:false, error: string};

export const AuthUser = ({login, password}: UserCredentials): AuthResult  => {
    if(!login || login?.length === 0 || !password || password?.length === 0) {
        return {success: false, error: 'Login and password are required'};
    }

    try {
        const user: User | undefined = MOCK_USERS.find(
            (user: User) => user.login === login || user.email === login
        );

        if (!user) {
            return {success: false, error: 'No user with such login'};
        }

        if(user?.password !== password) {
            return {success: false, error: 'Password is incorrect'};
        }

        localStorage.setItem('token', user.token);
        return {success: true, user};
    } catch (err) {
        console.error(err);
        return {success: false, error: 'Something went wrong'};
    }
}