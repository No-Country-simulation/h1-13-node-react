import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastStatus } from "../enums/Toast.enum";

export const useSignUpForm = () => {

    const navigate = useNavigate();

    const showLoader = useAuthStore((state) => state.showLoader);
    const hideLoader = useAuthStore((state) => state.hideLoader);
    const showToast = useAuthStore((state) => state.showToast);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            registrationNumber: "",
            specialty: "",
            maritalStatus: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required(
                "No ha ingresado su nombre, por favor ingréselo"
            ),
            lastName: Yup.string().required(
                "No ha ingresado su apellido, por favor ingréselo"
            ),
            phoneNumber: Yup.string().required(
                "No ha ingresado su teléfono, por favor ingréselo"
            ),
            registrationNumber: Yup.string().required(
                "No ha ingresado su número de Matrícula, por favor ingrésela"
            ),
            email: Yup.string().required(
                "No ha ingresado su E-mail, por favor ingréselo"
            ),
            confirmEmail: Yup.string().required(
                "Debe confirmar su email."
            ),
            password: Yup.string().required(
                "No ha ingresado su contraseña, por favor ingrésela"
            ),
            confirmPassword: Yup.string().required(
                "Debe confirmar su contraseña."
            ),
        }),
        onSubmit: async (values) => {
            try {
                if (values.email !== values.confirmEmail) {
                    showToast("Los emails no coinciden.", ToastStatus.error);
                    return;
                }

                if (values.password !== values.confirmPassword) {
                    showToast("Las contraseñas no coinciden.", ToastStatus.error);
                    return;
                }

                showLoader();

                const requestObject = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phoneNumber,
                    registrationNumber: values.registrationNumber,
                    specialty: "Médico",
                    maritalStatus: "Casado",
                    email: values.email,
                    password: values.password,
                }
                await signUp(requestObject);

                hideLoader();
                showToast("Te has registrado exitosamente. Por favor, inicia sesión para continuar.", ToastStatus.success);

                navigate("/login");

            } catch (e: any) {
                const message = "Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde. Si el problema persiste, contacta con soporte para recibir asistencia."
                hideLoader();
                showToast(message, ToastStatus.error);
            }
        },
    });

    return {
        formik
    };
};

function signUp(requestObject: { firstName: string; lastName: string; phoneNumber: string; registrationNumber: string; specialty: string; maritalStatus: string; email: string; password: string; }) {
    throw new Error("Function not implemented.");
}
