import { useSignUpForm } from "../../hooks/useSignUpForm";
import { ArrowIcon, NewUserIcon } from "../../svg";
import { Input } from "./Input";
import { Select } from "./Select";

export const SignUpForm = () => {
  const { formik } = useSignUpForm();

  return (
    <form className="mt-[27px] lg:mt-[38px]" onSubmit={formik.handleSubmit}>
      <div
        className="grid grid-cols-2
                   gap-x-2 gap-y-3
                   lg:gap-x-4"
      >
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="firstName"
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            label={"Nombre"}
            type={"text"}
            placeholder="ej: John"
            errorMessage={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : null
            }
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="lastName"
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            label={"Apellido"}
            type={"text"}
            placeholder="ej: Doe"
            errorMessage={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : null
            }
          />
        </div>
        <Input
          name="phoneNumber"
          value={formik.values.phoneNumber}
          handleChange={formik.handleChange}
          label={"Teléfono"}
          type={"text"}
          placeholder="ej: 446789"
          errorMessage={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : null
          }
        />
        <Input
          name="registrationNumber"
          value={formik.values.registrationNumber}
          handleChange={formik.handleChange}
          label={"Nº Matrícula"}
          type={"text"}
          placeholder="ej: 123456789"
          errorMessage={
            formik.touched.registrationNumber &&
            formik.errors.registrationNumber
              ? formik.errors.registrationNumber
              : null
          }
        />
        <div className="col-span-2 lg:col-span-1">
          <Select label={"Especialidad"} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Select label={"Estado civil"} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            label={"E-mail"}
            type={"text"}
            placeholder="ej: johndoe@gmail.com"
            errorMessage={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="confirmEmail"
            value={formik.values.confirmEmail}
            handleChange={formik.handleChange}
            label={"Confirmar E-mail"}
            type={"text"}
            placeholder="ej: johndoe@gmail.com"
            errorMessage={
              formik.touched.confirmEmail && formik.errors.confirmEmail
                ? formik.errors.confirmEmail
                : null
            }
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            label={"Contraseña"}
            type={"password"}
            placeholder=""
            errorMessage={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            name="confirmPassword"
            value={formik.values.confirmPassword}
            handleChange={formik.handleChange}
            label={"Confirmar contraseña"}
            type={"password"}
            placeholder=""
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
          />
        </div>
        <div
          className="col-span-2 grid
                     grid-cols-2
                     gap-x-4
                     gap-y-4
                     mt-[23px]
                     lg:mt-[42px]"
        >
          <div
            className="col-span-2
                       lg:col-span-1
                       lg:order-2
                       order-1"
          >
            <button
              className="w-full h-[43px]
                         bg-pinkDark
                         text-white
                         text-base
                         rounded-lg
                         hover:bg-pinkDarkHover
                         duration-300
                         ease-in-out"
              type="submit"
            >
              <div
                className="w-full h-full flex
                           justify-center
                           items-center gap-x-2"
              >
                <NewUserIcon />
                <span>Registrarse</span>
              </div>
            </button>
          </div>
          <div
            className="col-span-2
                       lg:col-span-1
                       lg:order-1
                       order-2
                       lg:flex"
          >
            <a
              href="/login"
              className="w-full h-[43px]
                         bg-greyButton
                         text-greyDarkText
                         text-base
                         font-[600]
                         rounded-lg
                         hover:bg-greyButtonHover
                         duration-300
                         ease-in-out
                         flex
                         justify-center
                         items-center
                         gap-x-2"
              aria-label="Volver al inicio de sesión"
              title="Volver al inicio de sesión"
            >
              <ArrowIcon />
              <span>Atrás</span>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
