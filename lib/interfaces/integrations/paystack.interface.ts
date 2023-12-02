import { ICustomer } from '../payment.interface';



export interface PaysackTransferRequest {
    amount: number,
    reference: string,
    reason: string,
    recipient: string
}
export interface PaystackBulkTransferRequest {
    currency: string;
    source: string,
    transfers: PaysackTransferRequest[];
}


export interface PaystackTransferResponse {
    reference: string,
    recipient: string,
    amount: number,
    transfer_code: string,
    currency: string,
    status: string
}

export interface PaystackBulkTransferResponse {
    status: boolean,
    message: string,
    data: PaystackTransferResponse[]
}

export interface PaystackPaymentResponse {
    id: string,
    status: string,
    reference: string,
    amount: number,
    message: string | null,
    gateway_response: string,
    channel: string,
    currency: string,
}