export interface IWalletsQuery {
  currency?: string;
  _id?: string;
}

export interface IWalletHistoryQuery {
  type?: string;
  _id?: string;
  page?: number;
  limit?: number;
}
