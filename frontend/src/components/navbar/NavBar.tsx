import { useState } from "react";
import { MenuOptions } from "../../enums/NavigationBar.enum";
import { useNavigationBar } from "../../hooks/useNavigationBar";
import {
  ChatMenuLogo,
  HomeMenuLogo,
  MedicalHistoryMenuLogo,
  ScheduleMenuLogo,
  UserMenuLogo,
} from "../../svg";
import { NavLink } from "./NavLink";
import HamburguerIcon from "../../svg/HamburguerIcon";

const navLinkFields = [
  {
    to: "/",
    menuOption: MenuOptions.home,
    icon: <HomeMenuLogo />,
  },
  {
    to: "/profile",
    menuOption: MenuOptions.profile,
    icon: <UserMenuLogo />,
  },
  {
    to: "/chat",
    menuOption: MenuOptions.chat,
    icon: <ChatMenuLogo />,
  },
  {
    to: "/medicalHistory",
    menuOption: MenuOptions.medicalHistory,
    icon: <MedicalHistoryMenuLogo />,
  },
  {
    to: "/appointmentSchedule",
    menuOption: MenuOptions.appointmentSchedule,
    icon: <ScheduleMenuLogo />,
  },
];

export const NavBar = () => {
  const { menuOptions, setMenuOptions } = useNavigationBar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none fixed z-40 top-2 left-2"
      >
        <HamburguerIcon />
      </button>
      <nav
        className="fixed bottom-0 w-full bg-lightBlue p-4 z-30 flex justify-center items-center h-8 space-x-8 max-md:w-full"
      >
        {navLinkFields.map((linkField) => (
          <NavLink
            key={linkField.to}
            to={linkField.to}
            icon={linkField.icon}
            menuOptions={menuOptions}
            setMenuOptions={setMenuOptions}
            menuOption={linkField.menuOption}

          />
        ))}
      </nav>
    </div>

  );
};
