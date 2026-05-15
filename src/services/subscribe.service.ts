import { sendRequest } from "../lib/api";
import { IBackendRes } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const subscribeService = {
    subscribe: (email: string) =>
        sendRequest<IBackendRes<void>>({ url: `${API_URL}/subscribers`, method: 'POST', queryParams: {email} }),
}