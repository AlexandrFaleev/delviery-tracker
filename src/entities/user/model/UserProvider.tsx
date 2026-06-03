import React from "react"
import type {User} from "@/entities/user/model/types.ts";
import {MOCK_USERS} from "@/entities/user/mocks/users.ts";

interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    deleteAccount: (id: string) => void;
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);

const UserProvider = ({ children }:React.PropsWithChildren) => {
    const [user, setUser] = React.useState<User | null>(null)

    const token = localStorage.getItem('token');
    if(!user){
        const foundUser = MOCK_USERS.find(user => user.token === token)
        if(foundUser){
            setUser(foundUser)
        }
    }

    const deleteAccount = (id:string) => {
        if(!user){
            return;
        }
        const newUserAccounts = user?.accounts.filter(
            account => account?.id !== id
        );
        setUser({...user, accounts: newUserAccounts})
    }

    return(
        <UserContext.Provider value={{
            user,
            setUser,
            deleteAccount,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider