import { Container, LoginForm } from "../../components";

export const LoginPage = () => {
  return (
    <Container>
      <div
        className="w-full
                   flex flex-col
                   items-center
                   mt-[201px]
                   lg:mt-[48px]"
      >
        <div
          className="w-[324px] h-[205px]
                     lg:w-[368px]
                     lg:h-[252px]"
        >
          <img
            src="https://res.cloudinary.com/djarwlymo/image/upload/v1720115272/715c840af019d89849662371679cc826_p1tmsx.png"
            className="w-full h-full"
            alt="Justina.io logo"
          />
        </div>
        <LoginForm />
      </div>
    </Container>
  );
};
