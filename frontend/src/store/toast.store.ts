import { create } from "zustand";
import { ToastStatus } from "../enums/Toast.enum";

interface ToastStateI {
    isToastShowing: boolean,
    toastMessage?: string,
    toastStatus?: ToastStatus,
    showToast: (message: string, status: ToastStatus) => void;
    hideToast: () => void;
}


export const useToastStore = create<ToastStateI>()((set) => ({
    isToastShowing: false,
    toastStatus: undefined,
    toastMessage: undefined,

    showToast: (message: string, status: ToastStatus) => {
        set({
            isToastShowing: true,
            toastStatus: status,
            toastMessage: message,
        });
    },

    hideToast: () => {
        set({
            isToastShowing: false,
            toastStatus: undefined,
            toastMessage: undefined,
        });
    },
}));