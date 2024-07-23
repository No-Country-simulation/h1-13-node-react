import { useLocation } from "react-router-dom";
import { MenuOptions } from "../enums/NavigationBar.enum";
import { useEffect, useState } from "react";

export const useNavigationBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOptions, setMenuOptions] = useState<MenuOptions>(MenuOptions.home);

    useEffect(() => {
        switch (currentPath) {
            case "/":
                setMenuOptions(MenuOptions.home);
                break;
            case "/profile":
                setMenuOptions(MenuOptions.profile);
                break;
            case "/chat":
                setMenuOptions(MenuOptions.chat);
                break;
            case "/medicalHistory":
                setMenuOptions(MenuOptions.medicalHistory);
                break;
            case "/appointmentSchedule":
                setMenuOptions(MenuOptions.appointmentSchedule);
                break;
            default:
                setMenuOptions(MenuOptions.home);
                break;
        }
    }, []);

    return {
        menuOptions,
        setMenuOptions
    }


}
