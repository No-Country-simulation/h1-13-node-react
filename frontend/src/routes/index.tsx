import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import RecoveryPasswordPage from "../pages/RecoveryPasswordPage";
import { PrivateLayout, PublicLayout } from "../components";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/recoveryPassword",
        element: <RecoveryPasswordPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
]);
