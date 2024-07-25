import { createBrowserRouter } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "../components";
import {
  AppointmentSchedulePage,
  ChatPage,
  HomePage,
  LoginPage,
  MedicalHistoryPage,
  ProfilePage,
  RecoveryPasswordPage,
  SignUpPage,
} from "../pages";
import PatientListPage from "../pages/public/PatientListPage";

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
      {
        path: "/patient-list",
        element:<PatientListPage />
      }
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/medicalHistory",
        element: <MedicalHistoryPage />,
      },
      {
        path: "/appointmentSchedule",
        element: <AppointmentSchedulePage />,
      },
    ],
  },
]);
