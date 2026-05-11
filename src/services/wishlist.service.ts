import { sendRequest } from "../lib/api";
import { IBackendRes, IWishlist } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const wishlistService = {
    add: (body: { productId: string }) =>
        sendRequest<IBackendRes<IWishlist>>({ url: `${API_URL}/wishlists`, method: 'POST', body }),

    getMyWishlist: () =>
        sendRequest<IBackendRes<IWishlist[]>>({ url: `${API_URL}/wishlists`, method: 'GET'}),

    remove: (productId: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/wishlists/${productId}`, method: 'DELETE' }),

    check: (productId: string) =>
        sendRequest<IBackendRes<boolean>>({ url: `${API_URL}/wishlists/${productId}`, method: 'GET' }),
}
