import { sendRequest } from "../lib/api";
import { IBackendRes, ICreateOrder, IOrder, IPageable, IPageResponse } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const orderService = {
    create: (body: ICreateOrder) =>
        sendRequest<IBackendRes<IOrder>>({ url: `${API_URL}/orders`, method: 'POST', body }),

    getMyOrders: (queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IOrder>>>({ url: `${API_URL}/orders`, method: 'GET', queryParams }),

    getById: (id: string) =>
        sendRequest<IBackendRes<IOrder>>({ url: `${API_URL}/orders/${id}`, method: 'GET' }),

    cancel: (id: string) =>
        sendRequest<IBackendRes<IOrder>>({ url: `${API_URL}/orders/${id}/cancel`, method: 'PATCH' }),
}