import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastStatus } from "../enums/Toast.enum";
import { signup } from "../utils/APIUtils";
import { useToastStore } from "../store/toast.store";
import { useLoaderStore } from "../store/loader.store";

export const useSignUpForm = () => {

    const navigate = useNavigate();

    const showLoader = useLoaderStore((state) => state.showLoader);
    const hideLoader = useLoaderStore((state) => state.hideLoader);
    const showToast = useToastStore((state) => state.showToast);

    const requiredString = Yup.string().required("Debe completar este campo.");
    const requiredEmail = Yup.string().email("Debe ser un email válido.").required("Debe completar este campo.");
    const requiredOption = Yup.string().required("Debe elegir una opción.");

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
            firstName: requiredString,
            lastName: requiredString,
            phoneNumber: requiredString,
            registrationNumber: requiredString,
            specialty: requiredOption,
            maritalStatus: requiredOption,
            email: requiredEmail,
            confirmEmail: requiredEmail,
            password: requiredString,
            confirmPassword: requiredString,
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
                    specialty: values.specialty,
                    maritalStatus: values.maritalStatus,
                    email: values.email,
                    password: values.password,
                }
                await signup(requestObject);

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
