import { Container } from "../../components";
import { RecoveryPasswordForm } from "../../components/form/RecoveryPasswordForm";

export const RecoveryPasswordPage = () => {
  return (
    <section>
      <Container>
        <div
          className="flex w-full
                     flex-col
                     mt-[70px]
                     lg:mt-[121px]"
        >
          <div
            className="text-center
                       w-full
                       flex flex-col
                       items-center"
          >
            <h1
              className="text-xl font-[600]
                         leading-6 text-pinkDark
                         lg:text-[32px]"
            >
              Recuperar Contraseña
            </h1>
            <p
              className="w-[285px] lg:w-[455px]
                         mt-[24px]
                         lg:mt-[48px]
                         text-xs lg:text-base
                         leading-2"
            >
              Ingrese el email del usuario que quiera recuperar y presione el
              botón Recuperar Contraseña
            </p>
          </div>
          <div
            className="mt-[32px] lg:mt-[48px]
                       w-full
                       flex flex-col
                       items-center"
          >
            <RecoveryPasswordForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
