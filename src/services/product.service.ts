import { sendRequest, sendRequestFile } from "../lib/api";
import { IBackendRes, IPageable, IPageResponse, IProduct, IProductFilter } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const productService = {
    filter: (queryParams?: IProductFilter) =>
        sendRequest<IBackendRes<IPageResponse<IProduct>>>({ url: `${API_URL}/product`, method: 'GET', queryParams }),

    getById: (id: string) =>
        sendRequest<IBackendRes<IProduct>>({ url: `${API_URL}/product/${id}`, method: 'GET' }),

    getBySlug: (slug: string) =>
        sendRequest<IBackendRes<IProduct>>({ url: `${API_URL}/product/slug/${slug}`, method: 'GET' }),

    getRelated: (productId: string, queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IProduct>>>({ url: `${API_URL}/product/${productId}/related`, method: 'GET', queryParams }),

    create: (body: FormData) =>
        sendRequestFile<IBackendRes<IProduct>>({ url: `${API_URL}/product`, method: 'POST', body }),

    update: (id: string, body: FormData) =>
        sendRequestFile<IBackendRes<IProduct>>({ url: `${API_URL}/product/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/product/${id}`, method: 'DELETE' }),
}