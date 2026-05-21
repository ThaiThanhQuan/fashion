import { sendRequest, sendRequestFile } from "../lib/api";
import { IBackendRes, ICollection, ICollectionFilter, IPageable, IPageResponse } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const collectionService = {
    filter: (queryParams?: ICollectionFilter) =>
        sendRequest<IBackendRes<IPageResponse<ICollection>>>({ url: `${API_URL}/collections/filters`, method: 'GET', queryParams }),

    getAll: (queryParams?: IPageable) =>
            sendRequest<IBackendRes<IPageResponse<ICollection>>>({ url: `${API_URL}/collections`, method: 'GET', queryParams }),
    getById: (id: string) =>
        sendRequest<IBackendRes<ICollection>>({ url: `${API_URL}/collections/${id}`, method: 'GET' }),

    getBySlug: (slug: string) =>
        sendRequest<IBackendRes<ICollection>>({ url: `${API_URL}/collections/slug/${slug}`, method: 'GET' }),

    create: (body: FormData) =>
        sendRequestFile<IBackendRes<ICollection>>({ url: `${API_URL}/collections`, method: 'POST', body }),

    update: (id: string, body: FormData) =>
        sendRequestFile<IBackendRes<ICollection>>({ url: `${API_URL}/collections/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/collections/${id}`, method: 'DELETE' }),

    addProduct: (collectionId: string, productId: string) =>
        sendRequest<IBackendRes<ICollection>>({ url: `${API_URL}/collections/${collectionId}/products/${productId}`, method: 'POST' }),

    removeProduct: (collectionId: string, productId: string) =>
        sendRequest<IBackendRes<ICollection>>({ url: `${API_URL}/collections/${collectionId}/products/${productId}`, method: 'DELETE' }),
}