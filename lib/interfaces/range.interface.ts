import { RangeType } from "../enums/range.type.enum";

export interface RangeData {
  min: number;
  max: number;
  type: RangeType;
  amount: number;
  minAmount?: number;
  maxAmount?: number;
}
