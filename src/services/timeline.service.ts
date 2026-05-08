import { sendRequest } from "../lib/api";
import { IBackendRes, ITimeline } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const timelineService = {
    getByService: (serviceId: string) =>
        sendRequest<IBackendRes<ITimeline[]>>({ url: `${API_URL}/timelines/service/${serviceId}`, method: 'GET' }),

    create: (body: { label: string, value: string, serviceId: string }) =>
        sendRequest<IBackendRes<ITimeline>>({ url: `${API_URL}/timelines`, method: 'POST', body }),

    update: (id: string, body: { label: string, value: string }) =>
        sendRequest<IBackendRes<ITimeline>>({ url: `${API_URL}/timelines/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/timelines/${id}`, method: 'DELETE' }),
}