import { create } from "zustand";

interface AuthStateI {
    token?: string;
    setToken: (token: string) => void;
}

export const useAuthStore = create<AuthStateI>()((set) => ({

    loading: false,

    token: undefined,


    setToken: () => (token: string) => {
        set({
            token: token
        });
    }
}));