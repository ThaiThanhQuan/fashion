import { sendRequest, sendRequestFile } from "../lib/api";
import { IBackendRes, IProductImage } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const productImageService = {
    getByProduct: (productId: string) =>
        sendRequest<IBackendRes<IProductImage[]>>({ url: `${API_URL}/product-images/product/${productId}`, method: 'GET' }),

    upload: (body: FormData) =>
        sendRequestFile<IBackendRes<IProductImage[]>>({ url: `${API_URL}/product-images`, method: 'POST', body }),

    setThumbnail: (imageId: string) =>
        sendRequest<IBackendRes<IProductImage>>({ url: `${API_URL}/product-images/${imageId}/thumbnail`, method: 'PATCH' }),

    delete: (imageId: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/product-images/${imageId}`, method: 'DELETE' }),
}