import { Currency, ICustomer } from "../..";

export interface FincraTransferRequest {
  business: string;
  sourceCurrency: string;
  destinationCurrency: string;
  amount: number;
  description: string;
  customerReference: string;
  beneficiary: {
    firstName: string;
    lastName: string;
    accountHolderName: string;
    accountNumber: string;
    type: "individual" | "corporate";
    bankCode: string;
    country: string;
  };
  paymentDestination: string;
}

export interface FincraInitiateCheckout {
  reference: string;
  amount: number;
  currency: string;
  redirectUrl: string;
  paymentMethods: string[];
  customer?: ICustomer;
}

export interface PaystackInitiateCheckout {
  reference: string;
  amount: number;
  email: string;
  currency: string;
  callback_url: string;
  channels: string[];
  customer?: ICustomer;
}

export interface FincraTransferResponse {
  id: string;
  reference: string;
  status: string;
}

export interface IFincraCreateVirtualAccountPayload {
  currency: Currency;
  channel?: "wema" | "providus" | "globus";
  KYCInformation: {
    firstName?: string;
    lastName?: string;
    businessName?: string;
    bvn: string;
    bvnName: string;
  };
  merchantReference: string;
  accountType: "individual" | "corporate";
}

export interface IFincraCreateVirtualAccountResponse {
  status: string;
  isActive: boolean;
  accountNumber: string;
  merchantReference: null;
  KYCInformation: {
    firstName: string;
    lastName: string;
  };
  accountInformation: {
    accountNumber: string;
    accountName: string;
    bankName: string;
    reference: string;
  };
  accountOpeningFee: 0;
  pendingAdditionalInfoCount: 0;
  isPermanent: boolean;
  expiresAt: null;
  isCheckoutVa: boolean;
  isBankTransferVa: boolean;
  reason: string;
  monthlyVolume: null;
  entityName: null;
  paymentFlowDescription: null;
  attachments: [];
  meansOfId: [];
  utilityBill: [];
  virtualAccountType: "additional";
  _id: string;
  business: string;
  currency: string;
  accountType: "individual" | "corporate";
  entityType: "main_account";
  currencyType: "fiat";
  createdAt: string;
  updatedAt: string;
}

export interface FincraPaymentResponse {
  id: string;
  reference: string;
  merchantReference: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethods: string[];
}
