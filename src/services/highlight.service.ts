import { sendRequest } from "../lib/api";
import { IBackendRes, IHighlight } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const highlightService = {
    getByService: (serviceId: string) =>
        sendRequest<IBackendRes<IHighlight[]>>({ url: `${API_URL}/highlights/service/${serviceId}`, method: 'GET' }),

    create: (body: { content: string, serviceId: string }) =>
        sendRequest<IBackendRes<IHighlight>>({ url: `${API_URL}/highlights`, method: 'POST', body }),

    update: (id: string, body: { content: string }) =>
        sendRequest<IBackendRes<IHighlight>>({ url: `${API_URL}/highlights/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/highlights/${id}`, method: 'DELETE' }),
}