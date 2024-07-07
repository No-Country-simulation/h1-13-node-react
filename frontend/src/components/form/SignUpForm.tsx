import { ArrowIcon, NewUserIcon } from "../../svg";
import { Input } from "./Input";
import { Select } from "./Select";

export const SignUpForm = () => {
  return (
    <form className="mt-[27px] lg:mt-[38px]">
      <div
        className="grid grid-cols-2
                   gap-x-2 gap-y-3
                   lg:gap-x-4"
      >
        <div className="col-span-2 lg:col-span-1">
          <Input label={"Nombre"} type={"text"} placeholder="ej: John" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input label={"Apellido"} type={"text"} placeholder="ej: Doe" />
        </div>
        <Input label={"Teléfono"} type={"text"} placeholder="ej: 456789" />
        <Input
          label={"Nº Matrícula"}
          type={"text"}
          placeholder="ej: 123456789"
        />
        <div className="col-span-2 lg:col-span-1">
          <Select label={"Especialidad"} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Select label={"Estado civil"} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            label={"E-mail"}
            type={"text"}
            placeholder="ej: johndoe@gmail.com"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            label={"Confirmar e-mail"}
            type={"text"}
            placeholder="ej: johndoe@gmail.com"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input label={"Contraseña"} type={"password"} placeholder="" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input
            label={"Confirmar contraseña"}
            type={"password"}
            placeholder=""
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
