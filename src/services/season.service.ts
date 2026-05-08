import { sendRequest } from "../lib/api";
import { IBackendRes, ISeason } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const seasonService = {
    getAll: () =>
        sendRequest<IBackendRes<ISeason[]>>({ url: `${API_URL}/seasons`, method: 'GET' }),

    create: (body: { name: string }) =>
        sendRequest<IBackendRes<ISeason>>({ url: `${API_URL}/seasons`, method: 'POST', body }),

    update: (id: string, body: { name: string }) =>
        sendRequest<IBackendRes<ISeason>>({ url: `${API_URL}/seasons/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/seasons/${id}`, method: 'DELETE' }),
}