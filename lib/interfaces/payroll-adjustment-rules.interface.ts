import { PayrollAdjustmentType } from "../enums/payroll.adjustment.enum";
import { RangeType } from "../enums/range.type.enum";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";

export interface PayrollAdjustmentRules {
  amount: number;
  type: RangeType;
  description: string;
  isActive: boolean;
  isAllEmployees: boolean;
  employeeIds: String[];
}

export interface IPayrollAdjustment {
  amount: number;
  type: PayrollAdjustmentType;
  ruleType: RangeType;
}

export interface CustomPayrollAdjustments {
  type: PayrollAdjustmentType;
  title: string;
  amount: number;
  isTaxable: boolean;
}

export interface PayrollAdjustmentStatus {
  // payrollAdjustmentId: PayrollAdjustment;
  payrollAdjustmentId: IPayrollAdjustment;
  isActive: boolean;
}
