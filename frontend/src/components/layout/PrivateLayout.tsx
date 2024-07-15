import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";

export const PrivateLayout = () => {
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();


    useEffect(() => {
        //si es no tá el token
        if(!token) 
        //redirigir a "/login" 
        navigate("/login");


    },[token])

    return <Outlet />
}
