import { ICustomer } from '../payment.interface';

export interface FlutterwaveTransferRequest {
  account_bank: string;
  account_number: string;
  amount: number;
  narration: string;
  currency: string;
  reference: string;
}

export interface FlutterwaveBulkTransferRequest {
  title: string;
  bulk_data: FlutterwaveTransferRequest[];
}

export interface FlutterwaveTransferResponse {
  id: string;
  reference: string;
  status: string
}

export interface FlutterwaveBulkTransferResponse {
  id: string;
}

export interface FlutterwaveInitiateCheckout {
  tx_ref: string;
  amount: number;
  currency: string;
  redirect_url: string;
  payment_options?: string;
  customer?: ICustomer;
  customizations?: {
    title: string;
    description: string;
    logo: string;
  };
}

export interface FlutterwaveCreateVirtualAccount {
  bvn?: string;
  currency?: string;
  email: string;
  is_permanent: boolean;
  tx_ref: string;
  duration?: number;
  frequency?: number;
  amount?: number;
  narration?: string;
}

export interface FlutterwavePaymentResponse {
  id: string;
  tx_ref: string;
  amount: number;
  currency: string;
  charged_amount: string;
  app_fee: number;
  narration: string;
  status: 'successful' | 'failed';
  payment_type: 'card';
  amount_settled: string;
  customer: {
    name: string;
    phone_number: string;
    email: string;
  };
}
