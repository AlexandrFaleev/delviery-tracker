export interface UserAccount {
    id: string;
    platform: string;
    phoneNumber: string;
}

export interface User {
    id: string,
    login: string,
    password: string,
    email: string,
    role: 'user' | 'admin',
    name: string,
    lastname: string,
    avatar?: string,
    token: string,
    accounts: UserAccount[],
}

export type UserCredentials = Pick<User, 'login' | 'password'>