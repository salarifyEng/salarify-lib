export enum Processor {
  Flutterwave = 'flutterwave',
  Fincra = 'fincra',
  Lenco = 'lenco',
  Paystack = 'paystack'
}

export enum WebhookStatus {
  Successful = 'succesful',
  Failed = 'failed',
  Pending = 'pending',
  Processing = 'processing',
}

export enum FlutterwaveEventTypes {
  CHARGE_COMPLETED = 'charge.completed',
  TRANSFER_COMPLETED = 'transfer.completed',
}

export enum FincraEventTypes {
  PAYOUT_SUCCESSFUL = 'payout.successful',
  PAYOUT_FAILED = 'payout.failed',
  COLLECTION_SUCCESSFUL = 'collection.successful',
  COLLECTION_FAILED = 'collection.failed',
  CHARGE_FAILED = 'charge.failed',
  CHARGE_SUCCESSFUL = 'charge.successful',
}


export enum PaystackEventTypes {
  CHARGE_SUCCESS = "charge.success",
  TRANSFER_SUCCESS = "transfer.success"
}
