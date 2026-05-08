import { sendRequest } from "../lib/api";
import { IBackendRes, IPageable, IPageResponse, IWishlist } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const wishlistService = {
    add: (body: { productId: string }) =>
        sendRequest<IBackendRes<IWishlist>>({ url: `${API_URL}/wishlists`, method: 'POST', body }),

    getMyWishlist: (queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IWishlist>>>({ url: `${API_URL}/wishlists`, method: 'GET', queryParams }),

    remove: (productId: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/wishlists/${productId}`, method: 'DELETE' }),

    check: (productId: string) =>
        sendRequest<IBackendRes<boolean>>({ url: `${API_URL}/wishlists/check/${productId}`, method: 'GET' }),
}