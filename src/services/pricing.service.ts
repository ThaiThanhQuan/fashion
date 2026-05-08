import { sendRequest } from "../lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const pricingService = {
    getByService: (serviceId: string) =>
        sendRequest<IBackendRes<IPricing[]>>({ url: `${API_URL}/pricing/service/${serviceId}`, method: 'GET' }),

    create: (body: { label: string, price: string, serviceId: string }) =>
        sendRequest<IBackendRes<IPricing>>({ url: `${API_URL}/pricing`, method: 'POST', body }),

    update: (id: string, body: { label: string, price: string }) =>
        sendRequest<IBackendRes<IPricing>>({ url: `${API_URL}/pricing/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/pricing/${id}`, method: 'DELETE' }),
}