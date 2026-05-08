import { sendRequest } from "../lib/api";
import { IBackendRes, ICategoryCollection } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const categoryCollectionService = {
    getAll: () =>
        sendRequest<IBackendRes<ICategoryCollection[]>>({ url: `${API_URL}/category-collections`, method: 'GET' }),

    create: (body: { name: string }) =>
        sendRequest<IBackendRes<ICategoryCollection>>({ url: `${API_URL}/category-collections`, method: 'POST', body }),

    update: (id: string, body: { name: string }) =>
        sendRequest<IBackendRes<ICategoryCollection>>({ url: `${API_URL}/category-collections/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/category-collections/${id}`, method: 'DELETE' }),
}