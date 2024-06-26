import { Type } from "class-transformer";
import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsDate,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PayrollFrequency } from "../enums/payroll.enum";

export class AllowanceDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsBoolean()
  isDefault: boolean;
}

export class PayrollSettingDTO {
  @IsNotEmpty()
  @IsMongoId()
  businessId: string;

  @IsOptional()
  currency?: string;

  @IsOptional()
  @IsIn(Object.values(PayrollFrequency))
  frequency?: string;

  @IsOptional()
  @IsNumber()
  payDate?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => AllowanceDTO)
  @ArrayUnique((obj: AllowanceDTO) => obj.title) // Ensure unique titles
  allowances?: AllowanceDTO[];

  @IsOptional()
  @IsBoolean()
  shouldCalculateTax?: string;

  @IsOptional()
  @IsBoolean()
  shouldRemitTax?: string;
}
