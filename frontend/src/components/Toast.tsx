import { useEffect } from "react";
import { ToastStatus } from "../enums/Toast.enum";
import { AlertLogo, BanLogo, CheckLogo, CloseLogo } from "../svg";
import { capitalizeWords } from "../utils/stringUtils";
import { useToastStore } from "../store/toast.store";

export const Toast = () => {
  const toastMessage = useToastStore((state) => state.toastMessage);
  const toastStatus = useToastStore((state) => state.toastStatus);
  const isToastShowing = useToastStore((state) => state.isToastShowing);
  const hideToast = useToastStore((state) => state.hideToast);

  useEffect(() => {
    if (isToastShowing) {
      const timer = setTimeout(() => {
        hideToast();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isToastShowing]);

  return (
    <>
      {isToastShowing && (
        <div
          className="fixed w-full
                     bottom-0 z-[900]
                     flex justify-center
                     pb-[20px] animate-slideInBottom"
        >
          <div
            className={`lg:w-[1000px] w-[90%]
                        ${toastStatus === ToastStatus.error && "bg-red"}
                        ${toastStatus === ToastStatus.warning && "bg-yellow"}
                        ${toastStatus === ToastStatus.success && "bg-green"}
                         rounded flex py-[20px]
                         px-[40px] ${
                           (toastStatus === ToastStatus.error ||
                             toastStatus === ToastStatus.success) &&
                           "text-white"
                         }`}
          >
            <div
              className="w-full flex
                           gap-x-[20px]"
            >
              <div className="w-[40px] lg:w-[50px]">
                {toastStatus === ToastStatus.error && <BanLogo />}
                {toastStatus === ToastStatus.warning && <AlertLogo />}
                {toastStatus === ToastStatus.success && <CheckLogo />}
              </div>
              <div className="flex flex-col">
                <h3 className="text-ls">{capitalizeWords(toastStatus)}</h3>
                <p className="text-sm lg:text-base">{toastMessage}</p>
              </div>
            </div>

            <div
              className="w-[40px] lg:w-[50px] cursor-pointer"
              onClick={() => hideToast()}
            >
              <CloseLogo
                color={
                  toastStatus == ToastStatus.error ||
                  toastStatus == ToastStatus.success
                    ? "white"
                    : "#556970"
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
