import { create } from "zustand";

interface AuthStateI {
    loading: boolean;
    token?: string;
    login: () => void;
}


export const useAuthStore = create<AuthStateI>()((set) => ({
    loading: false,
    token: "weewew",

    login: () => {
        set({
            loading: false,
            token: undefined
        });
    },
}));