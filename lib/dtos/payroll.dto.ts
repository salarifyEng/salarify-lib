import {
  IsArray,
  IsDate,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinDate,
} from "class-validator";
import { Currency } from "../enums/misc.enum";
import { PayrollFrequency, PayrollStatus } from "../enums/payroll.enum";
import { Transform } from "class-transformer";

class Employee {
  @IsNotEmpty()
  @IsMongoId()
  employeeId: string;

  @IsArray()
  deductions: any[];
}

export class CreatePayrollDto {
  businessId: string;

  @IsNotEmpty()
  payrollAdjustmentIds: string[];

  @IsIn(Object.values(Currency))
  @IsString()
  @IsNotEmpty()
  currency: string;

  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  payDate: string;

  @IsIn(Object.values(PayrollFrequency))
  @IsString()
  @IsNotEmpty()
  frequency: string;
}

export class UpdatePayrollDto {
  @IsMongoId()
  @IsNotEmpty()
  businessId: string;

  // @IsArray()
  // addPayrollAdjustmentIds: string[];

  // @IsArray()
  // removePayrollAdjustmentIds: string[]

  @IsOptional()
  addEmployeeList: string[];

  @IsOptional()
  removeEmployeeList: string[];

  @IsArray()
  payrollAdjustmentIds: string[];

  // @IsIn(Object.values(PayrollTypes))
  // @IsString()
  // @IsNotEmpty()
  // type: string;

  // @IsIn(Object.values(Currencies))
  // @IsString()
  // @IsNotEmpty()
  // currency: string;

  @IsIn([PayrollStatus.draft, PayrollStatus.created])
  @IsString()
  status: string;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @MinDate(new Date())
  payDate: string;
}
