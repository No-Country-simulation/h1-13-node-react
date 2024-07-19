import date from "../assets/iconos/date.svg";
import cht from "../assets/iconos/cht.svg";
import historia from "../assets/iconos/historia.svg";
import user from "../assets/iconos/user.svg";
import { HomeMenuLogo } from "../svg";

export const NavigationBar = () => {
  return (
    <div className="fixed w-full bottom-0 bg-lightBlue h-fit rounded-lg flex space-x-7 pt-2 items-center justify-center z-[1]">
      <HomeMenuLogo />
      <img src={user} alt="" />
      <img src={cht} alt="" />
      <img src={historia} alt="" />
      <img src={date} alt="" />
    </div>
  );
};
