import { useState } from "react";
import { createContext } from "react";

const AuthConText = createContext();

//create Function component
export default function AuthContextProvider({children}){
    const [user,setUser] = useState(localStorage.getItem('accessToken') ? true : false);
    return <AuthConText.Provider value={{user,setUser}}>
        {children}
    </AuthConText.Provider>
}

export {AuthConText}