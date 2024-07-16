import { create } from "zustand";
import { ToastStatus } from "../enums/Toast.enum";

interface AuthStateI {
    isLoading: boolean;
    token?: string;
    isToastShowing: boolean,
    toastMessage?: string,
    toastStatus?: ToastStatus,
    showLoader: () => void;
    hideLoader: () => void;
    showToast: (message: string, status: ToastStatus) => void;
    hideToast: () => void;
    setToken: (token: string) => void;
}


export const useAuthStore = create<AuthStateI>()((set) => ({
    isLoading: false,
    token: undefined,
    isToastShowing: false,
    toastStatus: undefined,
    toastMessage: undefined,


    showLoader: () => {
        set({
            isLoading: true,
            toastMessage: undefined
        });
    },

    hideLoader: () => {
        set({
            isLoading: false,
            toastMessage: undefined
        });
    },

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

    setToken: () => (token: string) => {
        set({
            token: token
        });
    }
}));