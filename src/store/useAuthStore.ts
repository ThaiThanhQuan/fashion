import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthStore {
    isLoggedIn: boolean
    login: (token: string, refreshToken: string) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: !!Cookies.get("access_token"),

    login: (token, refreshToken) => {
        Cookies.set("access_token", token, { expires: 1/24, secure: true, sameSite: 'strict' });
        Cookies.set("refresh_token", refreshToken, { expires: 1, secure: true, sameSite: 'strict' });
        set({ isLoggedIn: true });
    },

    logout: () => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        set({ isLoggedIn: false });
    }
}));