import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../../constants";
import { NavBar } from "../navbar/NavBar";

export const PrivateLayout = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setToken(token);
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
