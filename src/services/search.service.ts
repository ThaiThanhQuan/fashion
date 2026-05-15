import { sendRequest } from '../lib/api';
import { IBackendRes } from '../types';
import { ISearchResponse } from '../types/search.type';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchService = {
    search: (q: string) =>
        sendRequest<IBackendRes<ISearchResponse>>({
            url: `${API_URL}/search`,
            method: 'GET',
            queryParams: { q }
        })
}