import { sendRequest } from "../lib/api";
import { IBackendRes, IWorkflow } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const appointmentService = {
    createAppointments: (body: { customerName: string, customerEmail: string, customerPhone: string, specialRequest: string, appointmentDate: string, appointmentTime: string, serviceId: string, artistId: string }) =>
        sendRequest<IBackendRes<IWorkflow[]>>({ url: `${API_URL}/appointments`, method: 'POST', body  }),

}