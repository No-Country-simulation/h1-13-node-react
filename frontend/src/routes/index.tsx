import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import RecoveryPasswordPage from "../pages/RecoveryPasswordPage";

export const router = createBrowserRouter([
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
]);
