export enum AccountRoutingTypes {
  ABA = "ABA",
}

export enum ClearingSystems {
  ACH = "ACH",
  RTGS = "RTGS",
}

export enum TransactionTypes {
  fund = "fund",
  payout = "payout",
  fee = "fee",
}

export enum WalletTopUpMethods {
  bank = "bank",
  gateway = "gateway",
}

export enum PaymentStatus {
  success = "success",
  pending = "pending",
  failed = "failed",
}

export enum PaymentChannel {
  fincra = "fincra",
  flutterwave = "flutterwave",
  paystack = "paystack",
  // airwallex = 'airwallex',
  // clearjunction = 'clearjunction',
  // fliqpay = 'fliqpay',
}
//Payment action naming pattern action:globalKey
export enum PaymentAction {
  /* Payout Actions */
  Payout = "payout",
  GetPayout = "get-payout",
  GetPayoutByRef = "get-payout-ref",
  BulkPayout = "bulk-payout",
  GetBulkPayout = "get-bulk-payout",
  RetryPayout = "retry-payout",

  /* Funding Actions */
  CreateVirtualAccount = "create-va",
  GetVirtualAccount = "get-va",
  CreatePayment = "create-payment",
  GetPayment = "get-payment",
  GetPaymentByRef = "get-payment-ref",

  ResolveBankAccount = "resolve-bank-account",
}

// export type PaymentsConfig = {
//   [key in PaymentAction]: {
//     globalConfigKey: string;
//     transformers: {
//       request: (data, channel) => any;
//       response: (data, channel) => any;
//     };
//     providerMethod: Function
//   };
// };

export type IPaymentsConfig = {
  globalConfigKey: string;
  transformers: {
    request: (data: unknown, channel: unknown) => any;
    response: (data: unknown, channel: unknown) => any;
  };
  providerMethods: Record<string, any>;
};
