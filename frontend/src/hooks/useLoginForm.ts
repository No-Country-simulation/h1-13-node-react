import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { login } from "../utils/APIUtils";
import { ACCESS_TOKEN } from "../constants";
import { ToastStatus } from "../enums/Toast.enum";

export const useLoginForm = () => {

  const navigate = useNavigate();

  const showLoader = useAuthStore((state) => state.showLoader);
  const hideLoader = useAuthStore((state) => state.hideLoader);
  const showToast = useAuthStore((state) => state.showToast)

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required(
        "No ha ingresado su usuario, por favor ingrese su usuario"
      ),
      password: Yup.string().required(
        "No ha ingresado su contraseña, por favor ingrese su contraseña"
      ),
    }),
    onSubmit: async (values) => {
      try {
        showLoader();

        const response = await login(values)
        localStorage.setItem(ACCESS_TOKEN, response.token);

        hideLoader();
        showToast("La autenticación fue exitosa.", ToastStatus.success);

        navigate("/");

      } catch (e: any) {
        let message = "Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde. Si el problema persiste, contacta con soporte para recibir asistencia."
        if (e.status === 400) {
          message = "El nombre de usuario que ingresaste no existe. Por favor, verifica e inténtalo de nuevo, o contacta con soporte para recibir asistencia."
        }
        hideLoader();
        showToast(message, ToastStatus.error);
      }
    },
  });

  return {
    formik
  };
};