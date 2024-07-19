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

  return (
    <nav
      className="fixed
                 w-full
                 bottom-0
                 bg-lightBlue
                 h-fit rounded-lg
                 flex space-x-7
                 pt-2
                 items-center
                 justify-center
                 z-[1]"
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
  );
};
