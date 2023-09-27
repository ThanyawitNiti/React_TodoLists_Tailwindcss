import { useContext } from "react";
import { AuthConText } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Authenticated({children}) {
    const ctx = useContext(AuthConText)
    if(!ctx.user){
        return <Navigate to ="/login" />
    }
    return children
}