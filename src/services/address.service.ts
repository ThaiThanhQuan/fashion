import { sendRequest } from "../lib/api";
import { IAddress, IBackendRes, ICreateAddress } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addressService = {
    getMyAddresses: () =>
        sendRequest<IBackendRes<IAddress[]>>({ url: `${API_URL}/address`, method: 'GET' }),

    create: (body: ICreateAddress) =>
        sendRequest<IBackendRes<IAddress>>({ url: `${API_URL}/address`, method: 'POST', body }),

    update: (id: string, body: ICreateAddress) =>
        sendRequest<IBackendRes<IAddress>>({ url: `${API_URL}/address/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/address/${id}`, method: 'DELETE' }),
}