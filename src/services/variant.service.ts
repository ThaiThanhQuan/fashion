import { sendRequest } from "../lib/api";
import { IBackendRes, IProductVariant } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const variantService = {
    getByProduct: (productId: string) =>
        sendRequest<IBackendRes<IProductVariant[]>>({ url: `${API_URL}/variants/product/${productId}`, method: 'GET' }),

    create: (body: { productId: string, size: string, stock: number }) =>
        sendRequest<IBackendRes<IProductVariant>>({ url: `${API_URL}/variants`, method: 'POST', body }),

    update: (id: string, body: { size: string, stock: number }) =>
        sendRequest<IBackendRes<IProductVariant>>({ url: `${API_URL}/variants/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/variants/${id}`, method: 'DELETE' }),
}