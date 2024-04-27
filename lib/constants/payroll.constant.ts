import { RangeType } from "lib/enums/range.type.enum";

export const ATTEMPTS = 3; // number of retries
export const BACKOFF = 60000; //Seconds before retry
export const DELAY = 50000; //Seconds
export const MINIMUM_NET_SALARY = 100;

// title: string;
//   type: string;
//   value: number;
//   isActive: boolean;
//   isDefault: boolean;

export const DEFAULT_ALLOWANCES = [
  {
    title: "Medical Allowance",
    type: RangeType.PERCENTAGE,
    value: 15,
    isActive: true,
    isDefalut: true,
  },
  {
    title: "Housing Allowance",
    type: RangeType.PERCENTAGE,
    value: 5,
    isActive: true,
    isDefalut: true,
  },
  {
    title: "Transportation Allowance",
    type: RangeType.PERCENTAGE,
    value: 15,
    isActive: true,
    isDefalut: true,
  },
];
