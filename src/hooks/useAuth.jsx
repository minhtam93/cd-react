import { avatarGroupClasses } from "@mui/material";
import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({a:1})

export const AuthProvider = ({children})=> {
    const [user,setUser] = useState()

    const onLogin = ()=> {
        setUser({
            name: 'Đặng Vương',
            avatar: 'https://cfdcircle.vn/files/teachers/vuong.jpg'
        })
    }

    const onLogout = () =>{
        setUser()
    }
  
    return <AuthContext.Provider value={ {user, onLogin, onLogout} }>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)