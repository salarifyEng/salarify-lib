import { AllowanceDTO } from "../dtos/payroll-setting.dto";
import { RangeType } from "../enums/range.type.enum";

export const ATTEMPTS = 3; // number of retries
export const BACKOFF = 60000; //Seconds before retry
export const DELAY = 50000; //Seconds
export const MINIMUM_NET_SALARY = 100;

export const DEFAULT_ALLOWANCES = [
  {
    title: "Medical Allowance",
    type: RangeType.PERCENTAGE,
    value: 15,
    isActive: true,
    isDefault: true,
  },
  {
    title: "Housing Allowance",
    type: RangeType.PERCENTAGE,
    value: 5,
    isActive: true,
    isDefault: true,
  },
  {
    title: "Transportation Allowance",
    type: RangeType.PERCENTAGE,
    value: 15,
    isActive: true,
    isDefault: true,
  },
] as AllowanceDTO[];
