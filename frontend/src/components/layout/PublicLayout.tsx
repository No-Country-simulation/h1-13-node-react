import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useEffect } from "react";
import { Loader } from "../Loader";
import { Toast } from "../Toast";
import { ACCESS_TOKEN } from "../../constants";

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
