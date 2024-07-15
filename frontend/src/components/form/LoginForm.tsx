
import { LockIcon, UserIcon } from "../../svg";
import { LoginInput } from "./LoginInput";
import { useFormik } from "formik";
import * as Yup from 'yup';

export const LoginForm = () => { 

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema: Yup.object({
      user: Yup.string().required('No ha ingresado su usuario, por favor ingrese su usuario'),
      password: Yup.string().required('No ha ingresado su contraseña, por favor ingrese su contraseña'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log('Success:', data);
        // Manejar el éxito de la solicitud
      } catch (error) {
        console.error('Error:', error);
        // Manejar el error de la solicitud
      }
    },
  });

  return (
    <form
      className="w-full
                 mt-[117px]
                 lg:mt-[52px]
                 max-w-[525px]"
      onSubmit={formik.handleSubmit}
    >
      <div
        className="w-full flex
                   flex-col gap-y-2
                   lg:gap-y-[13px]
                   items-end"
      >
        <LoginInput 
          handleChange={formik.handleChange} 
          name="user" 
          value={formik.values.user} 
          type={"text"} 
          icon={UserIcon} 
          placeholder="Usuario"
        />
        {formik.touched.user && formik.errors.user ? (
          <div className="text-red-500">{formik.errors.user}</div>
        ) : null}
        <LoginInput
          handleChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          type={"password"}
          icon={LockIcon}
          placeholder="Contraseña"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
      </div>
      <div
        className="flex relative
                   mt-2"
      >
        <a
          href="/recoveryPassword"
          className="text-sm text-pinkDark
                     lg:text-base
                     font-[600]
                     absolute
                     right-0
                     hover:text-pinkDarkHover
                     duration-300
                     ease-in-out"
          aria-label="Recuperar contraseña"
          title="Recuperar contraseña"
        >
          Olvidé mi contraseña
        </a>
      </div>
      <button
        className="w-full h-[43px]
                   bg-pinkDark
                   mt-[94px]
                   lg:mt-[60px]
                   text-white
                   text-base
                   rounded-lg
                   hover:bg-pinkDarkHover
                   duration-300
                   ease-in-out"
        type="submit"
      >
        Ingresar
      </button>
      <p
        className="w-full flex
                   justify-center
                   text-xs
                   lg:text-base
                   mt-[24px]
                   lg:mt-[29px]
                   font-[600]"
      >
        ¿No tienes una cuenta? &nbsp;
        <a
          className="text-pinkDark
                     hover:text-pinkDarkHover
                     duration-300
                     ease-in-out"
          href="/signup"
          aria-label="Registrarse en el sitio"
          title="Registrarse en el sitio"
        >
          Regístrate aquí
        </a>
      </p>
    </form>
  );
};
