import { sendRequest } from "../lib/api";
import { IAuth, IBackendRes, IUser } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
    login: (body: { username: string, password: string }) =>
        sendRequest<IBackendRes<IAuth>>({ url: `${API_URL}/auth/login`, method: 'POST', body }),

    register: (body: { username: string, password: string, email: string }) =>
        sendRequest<IBackendRes<IUser>>({ url: `${API_URL}/auth/register`, method: 'POST', body }),

    logout: (body: { token: string }) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/auth/logout`, method: 'POST', body }),

    refreshToken: (body: { token: string }) =>
        sendRequest<IBackendRes<IAuth>>({ url: `${API_URL}/auth/refresh`, method: 'POST', body }),
}