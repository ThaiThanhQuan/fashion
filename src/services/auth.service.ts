import { sendRequest } from "../lib/api";
import { IAuth, IBackendRes, IUser } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
    login: (body: { username: string, password: string }) =>
        sendRequest<IBackendRes<IAuth>>({ url: `${API_URL}/auth/login`, method: 'POST', body }),

    register: (body: { username: string, password: string, email: string, dob: string, gender: boolean}) =>
        sendRequest<IBackendRes<IUser>>({ url: `${API_URL}/auth/register`, method: 'POST', body }),

    logout: (body: { token: string }) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/auth/logout`, method: 'POST', body }),

    refreshToken: (body: { refreshToken: string }) =>
        sendRequest<IBackendRes<IAuth>>({ url: `${API_URL}/auth/refresh`, method: 'POST', body }),

    forgotPassword: (email: string) =>
        sendRequest<IBackendRes<void>>({
            url: `${API_URL}/auth/forgot-password`,
            method: 'POST',
            body: { email }
        }),

    resetPassword: (token: string, newPassword: string) =>
    sendRequest<IBackendRes<void>>({
        url: `${API_URL}/auth/reset-password`,
        method: 'POST',
        body: {
            token,
            newPassword
        }
    }),
}