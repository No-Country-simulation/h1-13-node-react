import { Link } from "react-router-dom";
import { MenuOptions } from "../../enums/NavigationBar.enum";

interface NavigationOptionProps {
  to: string;
  icon: React.ReactNode;
  menuOptions: MenuOptions;
  setMenuOptions: (option: MenuOptions) => void;
  menuOption: MenuOptions;
}

export const NavLink = ({
  to,
  icon,
  menuOptions,
  setMenuOptions,
  menuOption,
}: NavigationOptionProps) => {
  return (
    <Link
      to={to}
      className={`${menuOptions === menuOption ? `fill-black` : `fill-white`}
  ${menuOptions !== menuOption && `hover:fill-greyButton`}
               transition
               ease-in-out
               delay-100`}
      onClick={() => setMenuOptions(menuOption)}
    >
      {icon}
    </Link>
  );
};
