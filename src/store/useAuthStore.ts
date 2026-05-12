import { create } from 'zustand';
import Cookies from 'js-cookie';
import { authService } from '../services';
import { useWishlistStore } from './useWishlistStore';

interface AuthStore {
    isLoggedIn: boolean
    login: (token: string, refreshToken: string) => void
    logout: () => void
    checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: !!Cookies.get("access_token"),

    login: (token, refreshToken) => {
        Cookies.set("access_token", token, { expires: 1/24, secure: true, sameSite: 'strict' });
        Cookies.set("refresh_token", refreshToken, { expires: 1, secure: true, sameSite: 'strict' });
        set({ isLoggedIn: true });
        useWishlistStore.getState().fetchWishlist(); 
    },

    logout: () => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        set({ isLoggedIn: false });
        useWishlistStore.getState().clearWishlist();
    },

     // Check khi app khởi động
    checkAuth: async () => {
        const accessToken = Cookies.get("access_token");
        const refreshToken = Cookies.get("refresh_token");

        // Còn access token → vẫn login
        if (accessToken) {
            set({ isLoggedIn: true });
            return;
        }

        // Hết access token nhưng còn refresh token → refresh
        if (refreshToken) {
            try {
                const res = await authService.refreshToken({ refreshToken: refreshToken });
                if (res?.result) {
                    Cookies.set("access_token", res.result.token, { expires: 1/24, secure: true, sameSite: 'strict' });
                    Cookies.set("refresh_token", res.result.refreshToken, { expires: 1, secure: true, sameSite: 'strict' });
                    set({ isLoggedIn: true });
                    return;
                }
            } catch {
                // Refresh thất bại → logout
            }
        }

        // Không có token nào → logout
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        set({ isLoggedIn: false });
    }
}));