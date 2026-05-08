import { sendRequest } from "../lib/api";
import { IBackendRes, ICategoryProduct } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const categoryProductService = {
    getAll: () =>
        sendRequest<IBackendRes<ICategoryProduct[]>>({ url: `${API_URL}/categories`, method: 'GET' }),

    create: (body: { name: string }) =>
        sendRequest<IBackendRes<ICategoryProduct>>({ url: `${API_URL}/categories`, method: 'POST', body }),

    update: (id: string, body: { name: string }) =>
        sendRequest<IBackendRes<ICategoryProduct>>({ url: `${API_URL}/categories/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/categories/${id}`, method: 'DELETE' }),
}