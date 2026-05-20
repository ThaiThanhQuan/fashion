import { sendRequest } from "../lib/api";
import type { IBackendRes, IPageable, IPageResponse, IProductVariant } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const variantService = {
    getByProduct: (productId: string, queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IProductVariant>>>({
            url: `${API_URL}/product_variants/${productId}`,
            method: 'GET',
            queryParams
        }),

    create: (body: { product_id: string, size: string, stock: number }) =>
        sendRequest<IBackendRes<IProductVariant>>({ url: `${API_URL}/product_variants`, method: 'POST', body }),

    update: (id: string, body: { size: string, stock: number }) =>
        sendRequest<IBackendRes<IProductVariant>>({ url: `${API_URL}/product_variants/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/product_variants/${id}`, method: 'DELETE' }),
}
