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
import { PayrollFrequency } from "lib/enums/payroll.enum";

class AllowanceDTO {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  percentage: number;

  @IsOptional()
  isActive: boolean;
}

export class PayrollSettingsDTO {
  @IsOptional()
  @IsMongoId()
  businessId: string;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  @IsIn(Object.values(PayrollFrequency))
  frequency: string;

  @IsNotEmpty()
  @IsDate()
  payDate: string;

  @IsArray()
  @ValidateNested()
  @Type(() => AllowanceDTO)
  @ArrayUnique((obj: AllowanceDTO) => obj.title) // Ensure unique titles
  allowances: AllowanceDTO;

  @IsNotEmpty()
  @IsBoolean()
  shouldCalculateTax: string;

  @IsNotEmpty()
  @IsBoolean()
  shouldRemitTax: string;
}
