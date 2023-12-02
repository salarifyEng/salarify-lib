import { FlutterwaveCreateVirtualAccount } from "./integrations";

export type VirtualAccountType = FlutterwaveCreateVirtualAccount;

export enum IntegrationAction {
  Payout = 'payout',
  Funding = 'funding',
  AccountResolve = 'accountResolve',
}


export interface IPaystackInitiateCollection {
  reference: string;
  amount: string;
  currency: string;
  callback_url: string;
  email: string;
  metadata?: any;
}

export class ICustomer {
  id?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
}

export class IBank {
  id?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
}
