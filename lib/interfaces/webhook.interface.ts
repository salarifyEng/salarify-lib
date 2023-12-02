import { Processor } from "../enums/webhooks.enum";

export interface ISuccessCharge {
  //Update transaction to transaction type
  transaction: Record<string, any>;
  // settlementAmount: number;
  amount: number;
  reference: string;
  currency: string;
  reason: string;
  providerInfo: Record<string, any>;
  provider: string;
}

export interface IWebhookBankTransfer {
  currency: string;
  provider: Processor;
  reference: string;
}
