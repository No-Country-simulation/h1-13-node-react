import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";

export const PublicLayout = () => {
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();


    useEffect(() => {
        //si está el token
        if(token) 
        //redirigir a "/" 
        navigate("/");


    },[token])

    return <Outlet />
}
