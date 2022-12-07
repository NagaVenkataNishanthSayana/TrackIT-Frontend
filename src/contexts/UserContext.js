import { createContext, useState } from "react";

//Context Variables
export const UserContext = new createContext({
    user: {},
    setUser: () => null,
});

//Provider Function to Let Children Use Context Variables
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const value = { user, setUser }

    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}
