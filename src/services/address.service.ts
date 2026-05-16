import { sendRequest } from "../lib/api";
import { IAddress, IBackendRes, ICreateAddress, IPageResponse } from "../types";
import { userService } from "./user.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addressService = {
    getMyAddresses: async () => {
        const userRes = await userService.getMe();
        const userId = userRes?.result?.id;

        return sendRequest<IBackendRes<IPageResponse<IAddress>>>({
            url: `${API_URL}/address/${userId}`,
            method: 'GET'
        });
    },

    create: (body: ICreateAddress) =>
        sendRequest<IBackendRes<IAddress>>({ url: `${API_URL}/address`, method: 'POST', body }),

    update: (id: string, body: ICreateAddress) =>
        sendRequest<IBackendRes<IAddress>>({ url: `${API_URL}/address/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/address/${id}`, method: 'DELETE' }),
}