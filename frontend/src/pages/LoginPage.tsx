import { Container, LoginForm } from "../components";
import { useAuthStore } from "../store/auth.store";

const LoginPage = () => {

  const loading = useAuthStore((state) => state.loading);

  if(loading) return <h1>Loading...</h1>;

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

export default LoginPage;
