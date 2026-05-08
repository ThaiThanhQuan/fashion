import { sendRequest } from "../lib/api";
import { IBackendRes, IWorkflow } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const workflowService = {
    getByService: (serviceId: string) =>
        sendRequest<IBackendRes<IWorkflow[]>>({ url: `${API_URL}/workflows/service/${serviceId}`, method: 'GET' }),

    create: (body: { no: string, title: string, content: string, serviceId: string }) =>
        sendRequest<IBackendRes<IWorkflow>>({ url: `${API_URL}/workflows`, method: 'POST', body }),

    update: (id: string, body: { no: string, title: string, content: string }) =>
        sendRequest<IBackendRes<IWorkflow>>({ url: `${API_URL}/workflows/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/workflows/${id}`, method: 'DELETE' }),
}