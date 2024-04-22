"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

type UserProviderProps = {
    children: React.ReactNode;
}

const UserProvider = ({children}: UserProviderProps) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;