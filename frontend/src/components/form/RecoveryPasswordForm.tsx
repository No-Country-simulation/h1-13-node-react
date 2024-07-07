import { ArrowIcon, RecoveryIcon } from "../../svg";
import { Input } from "./Input";

export const RecoveryPasswordForm = () => {
  return (
    <form className="w-full max-w-[347px]">
      <Input
        label={"Ingresar E-mail"}
        type={"text"}
        placeholder="ej: johndoe@gmail.com"
      />

      <div
        className="col-span-2 grid
                   grid-cols-2
                   gap-y-4
                   gap-x-4 mt-[42px]
                   lg:mt-[48px]"
      >
        <div className="col-span-2">
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
              <RecoveryIcon />
              <span>Recuperar Contraseña</span>
            </div>
          </button>
        </div>
        <div className="col-span-2">
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
    </form>
  );
};
