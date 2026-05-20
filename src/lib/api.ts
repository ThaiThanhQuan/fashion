import queryString from 'query-string';
import { IRequest } from '../types';
import { getAccessToken, handleRefreshToken, handleLogout } from './auth.helper';

export const sendRequest = async <T>(props: IRequest): Promise<T> => {
    let { url } = props;
    const {
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {}
    } = props;

    const accessToken = getAccessToken();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
        method,
        cache: 'no-store',
        headers: new Headers({
            'content-type': 'application/json',
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            ...headers
        }),
        body: body ? JSON.stringify(body) : null,
        ...nextOption
    };

    if (useCredentials) options.credentials = "include";
    if (queryParams) url = `${url}?${queryString.stringify(queryParams)}`;

    const res = await fetch(url, options);

    // 👈 xử lý 401
    if (res.status === 401) {
        const refreshed = await handleRefreshToken();
        if (refreshed) return sendRequest<T>(props);
        handleLogout();
        return {} as T;
    }

    if (res.ok) return res.json() as T;

    return res.json().then(json => ({
        statusCode: res.status,
        message: json?.message ?? "",
        error: json?.error ?? ""
    } as T));
};

export const sendRequestFile = async <T>(props: IRequest): Promise<T> => {
    let { url } = props;
    const {
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {}
    } = props;

    const accessToken = getAccessToken();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
        method,
        cache: 'no-store',
        headers: new Headers({
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            ...headers
        }),
        body: body ?? null,
        ...nextOption
    };

    if (useCredentials) options.credentials = "include";
    if (queryParams) url = `${url}?${queryString.stringify(queryParams)}`;

    const res = await fetch(url, options);

    if (res.status === 401) {
        const refreshed = await handleRefreshToken();
        if (refreshed) return sendRequestFile<T>(props);
        handleLogout();
        return {} as T;
    }

    if (res.ok) return res.json() as T;

    return res.json().then(json => ({
        statusCode: res.status,
        message: json?.message ?? "",
        error: json?.error ?? ""
    } as T));
};
