import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";
import { Toast } from "../Toast";
import { ACCESS_TOKEN } from "../../constants";
import { Loader } from "../loader/Loader";

export const PublicLayout = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const setToken = useAuthStore((state) => state.setToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setToken(token);
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <Loader />
      <Toast />
      <Outlet />
    </>
  );
};
