import { sendRequest, sendRequestFile } from "../lib/api";
import { IBackendRes, IPageable, IPageResponse, IService } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const serviceService = {
    getAll: (queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IService>>>({ url: `${API_URL}/services`, method: 'GET', queryParams }),

    getById: (id: string) =>
        sendRequest<IBackendRes<IService>>({ url: `${API_URL}/services/${id}`, method: 'GET' }),

    getBySlug: (slug: string) =>
        sendRequest<IBackendRes<IService>>({ url: `${API_URL}/services/slug/${slug}`, method: 'GET' }),

    create: (body: FormData) =>
        sendRequestFile<IBackendRes<IService>>({ url: `${API_URL}/services`, method: 'POST', body }),

    update: (id: string, body: FormData) =>
        sendRequestFile<IBackendRes<IService>>({ url: `${API_URL}/services/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/services/${id}`, method: 'DELETE' }),
}