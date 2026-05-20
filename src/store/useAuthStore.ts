import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { authService } from "../services";
import { useWishlistStore } from "./useWishlistStore";

interface DecodedToken {
    scope?: string;
    exp?: number;
}

interface AuthStore {
    isLoggedIn: boolean;
    isAdmin: boolean;

    login: (token: string, refreshToken: string) => void;
    logout: () => void;
    checkAuth: () => Promise<void>;
}

// Helper decode token
const getDecodedToken = (): DecodedToken | null => {
    const token = Cookies.get("access_token");

    if (!token) return null;

    try {
        return jwtDecode<DecodedToken>(token);
    } catch {
        return null;
    }
};

// Helper check admin
const checkIsAdmin = (): boolean => {
    const decoded = getDecodedToken();

    return decoded?.scope?.includes("ROLE_ADMIN") ?? false;
};

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: !!Cookies.get("access_token"),
    isAdmin: checkIsAdmin(),

    login: (token, refreshToken) => {
        Cookies.set("access_token", token, {
            expires: 1 / 24,
            secure: true,
            sameSite: "strict",
        });

        Cookies.set("refresh_token", refreshToken, {
            expires: 1,
            secure: true,
            sameSite: "strict",
        });

        const decoded = jwtDecode<DecodedToken>(token);

        set({
            isLoggedIn: true,
            isAdmin: decoded?.scope?.includes("ROLE_ADMIN") ?? false,
        });

        useWishlistStore.getState().fetchWishlist();
    },

    logout: () => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");

        set({
            isLoggedIn: false,
            isAdmin: false,
        });

        useWishlistStore.getState().clearWishlist();
    },

    checkAuth: async () => {
        const accessToken = Cookies.get("access_token");
        const refreshToken = Cookies.get("refresh_token");

        // còn access token
        if (accessToken) {
            set({
                isLoggedIn: true,
                isAdmin: checkIsAdmin(),
            });

            return;
        }

        // refresh token
        if (refreshToken) {
            try {
                const res = await authService.refreshToken({
                    refreshToken,
                });

                if (res?.result) {
                    Cookies.set("access_token", res.result.token, {
                        expires: 1 / 24,
                        secure: true,
                        sameSite: "strict",
                    });

                    Cookies.set("refresh_token", res.result.refreshToken, {
                        expires: 1,
                        secure: true,
                        sameSite: "strict",
                    });

                    const decoded = jwtDecode<DecodedToken>(
                        res.result.token
                    );

                    set({
                        isLoggedIn: true,
                        isAdmin:
                            decoded?.scope?.includes("ROLE_ADMIN") ?? false,
                    });

                    return;
                }
            } catch {
                // refresh fail
            }
        }

        Cookies.remove("access_token");
        Cookies.remove("refresh_token");

        set({
            isLoggedIn: false,
            isAdmin: false,
        });
    },
}));