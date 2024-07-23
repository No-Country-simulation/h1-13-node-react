import { Container, SignUpForm } from "../../components";

export const SignUpPage = () => {
  return (
    <section>
      <Container>
        <div className="w-full flex flex-col">
          <h1
            className="text-xl font-[600]
                       leading-6 text-pinkDark
                       mt-[70px]
                       lg:mt-[38px]
                       lg:text-[32px]"
          >
            Registro de usuarios
          </h1>
          <SignUpForm />
          <p
            className="mt-[24px]
                       lg:mt-[30px] text-center
                       text-xs leading-5
                       text-greyLightText"
          >
            Al hacer clic en&nbsp; Registrarse aceptas nuestros
            <br />
            <a href="#" className="text-black font-[600]">
              Términos de Servicio
            </a>
            &nbsp;y&nbsp;
            <a href="#" className="text-black font-[600]">
              Política de Privacidad
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
};
