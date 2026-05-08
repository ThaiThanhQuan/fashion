import Cookies from 'js-cookie';

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");

export const setTokens = (accessToken: string, refreshToken: string) => {
    // 1. Access Token: 3600s = 1 giờ = 1/24 ngày
    Cookies.set("access_token", accessToken, {
        expires: 1/24,      // Đúng 1 giờ (60 phút)
        secure: true,
        sameSite: 'strict'
    });

    // 2. Refresh Token: 86400s = 24 giờ = 1 ngày
    Cookies.set("refresh_token", refreshToken, {
        expires: 1,         // Đúng 1 ngày (24 giờ)
        secure: true,
        sameSite: 'strict'
    });
};

export const clearTokens = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
};

export const handleRefreshToken = async (): Promise<boolean> => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ token: refreshToken })
        });

        if (!res.ok) return false;

        const data = await res.json();
        setTokens(data.result.token, data.result.refreshToken);

        return true;
    } catch {
        return false;
    }

};

export const handleLogout = () => {
    clearTokens();
    window.location.href = "/login";
};