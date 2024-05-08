/* Consolidated Relief Allowance (CRA)*/
export const NG_TAX_SYSTEM = {
  NG_MIN_TAXABLE_INCOME: 360000,
  NG_TAX_RATES: [
    { percentage: 7, amount: 300000, shouldDeduct: false },
    { percentage: 11, amount: 300000, shouldDeduct: false },
    { percentage: 15, amount: 500000, shouldDeduct: false },
    { percentage: 19, amount: 500000, shouldDeduct: false },
    { percentage: 21, amount: 1600000, shouldDeduct: false },
    { percentage: 24, amount: 3200000, shouldDeduct: true },
  ],
  NG_CRA_ALLOWANCES: [
    {
      percentage: 1,
      minAmount: 200000,
      maxAmount: Infinity,
    },
    {
      percentage: 20,
      minAmount: 0,
      maxAmount: Infinity,
    },
  ],
};
