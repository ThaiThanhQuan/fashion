import { sendRequest, sendRequestFile } from "../lib/api";
import { IArtist, IBackendRes, IPageable, IPageResponse } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const artistService = {
    getAll: (queryParams?: IPageable) =>
        sendRequest<IBackendRes<IPageResponse<IArtist>>>({ url: `${API_URL}/artists`, method: 'GET', queryParams }),

    getById: (id: string) =>
        sendRequest<IBackendRes<IArtist>>({ url: `${API_URL}/artists/${id}`, method: 'GET' }),

    create: (body: FormData) =>
        sendRequestFile<IBackendRes<IArtist>>({ url: `${API_URL}/artists`, method: 'POST', body }),

    update: (id: string, body: FormData) =>
        sendRequestFile<IBackendRes<IArtist>>({ url: `${API_URL}/artists/${id}`, method: 'PUT', body }),

    delete: (id: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/artists/${id}`, method: 'DELETE' }),
}