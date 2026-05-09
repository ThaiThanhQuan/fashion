import Cookies from 'js-cookie';
import { authService } from '../services';

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");

export const handleRefreshToken = async (): Promise<boolean> => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;

   try {
        const res = await authService.refreshToken({ token: refreshToken });
        if (!res?.result) return false;

        // Lưu token mới vào cookie
        Cookies.set("access_token", res.result.token, { expires: 1/24, secure: true, sameSite: 'strict' });
        Cookies.set("refresh_token", res.result.refreshToken, { expires: 1, secure: true, sameSite: 'strict' });
        return true;
    } catch {
        return false;
    }

};

export const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    
       if (typeof window !== 'undefined') {
        window.location.href = "/login";
    }
};