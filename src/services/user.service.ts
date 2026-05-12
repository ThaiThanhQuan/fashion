import { sendRequest, sendRequestFile } from "../lib/api";
import { IBackendRes, IPageResponse, IUser } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const userService = {
    // ==================== MY INFO ====================
    getMe: () =>
        sendRequest<IBackendRes<IUser>>({
            url: `${API_URL}/users/myInfo`,
            method: 'GET'
        }),

    updateMe: (body: FormData) =>
        sendRequestFile<IBackendRes<IUser>>({
            url: `${API_URL}/users/myInfo`,
            method: 'PUT',
            body
        }),

    // ==================== ADMIN ====================
    getAll: (queryParams?: { page?: number, size?: number }) =>
        sendRequest<IBackendRes<IPageResponse<IUser>>>({
            url: `${API_URL}/users`,
            method: 'GET',
            queryParams
        }),

    getById: (userId: string) =>
        sendRequest<IBackendRes<IUser>>({
            url: `${API_URL}/users/${userId}`,
            method: 'GET'
        }),

    adminUpdate: (userId: string, body: {
        name?: string
        dob?: string
        gender?: boolean
        password?: string
    }) =>
        sendRequest<IBackendRes<IUser>>({
            url: `${API_URL}/users/${userId}`,
            method: 'PUT',
            body
        }),

    delete: (userId: string) =>
        sendRequest<IBackendRes<string>>({
            url: `${API_URL}/users/${userId}`,
            method: 'DELETE'
        }),
}