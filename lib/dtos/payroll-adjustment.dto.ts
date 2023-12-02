import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinDate,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import {
  PayrollAdjustmentFrequency,
  PayrollAdjustmentType,
} from "../enums/payroll.adjustment.enum";
import { RangeType } from "../enums/range.type.enum";

export class PayrollAdjustmentRuleDTO {
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isAllEmployees: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsIn(Object.values(RangeType))
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  employeeIds: string;
}

export class PayrollAdjustmentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsIn(Object.values(PayrollAdjustmentType))
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsIn(Object.values(PayrollAdjustmentFrequency))
  @IsString()
  @IsOptional()
  frequency: string;

  @ApiProperty()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @IsOptional()
  @ValidateIf((type) => type.frequency === PayrollAdjustmentFrequency.YEARLY)
  @IsNotEmpty({
    message: "Date is needed if the frequency is yearly",
  })
  @MinDate(new Date())
  date: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isTaxable: boolean;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PayrollAdjustmentRuleDTO)
  rules: PayrollAdjustmentRuleDTO[];

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class CustomPayrollAdjustmentRuleDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsIn(Object.values(PayrollAdjustmentType))
  @IsString()
  @IsNotEmpty()
  type: PayrollAdjustmentType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isTaxable: boolean;
}

export class CustomPayrollAdjustmentDTO {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  employeeListId: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomPayrollAdjustmentRuleDTO)
  rules: CustomPayrollAdjustmentRuleDTO[];
}

export class TogglePayrollAdjustmentStatusDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

export class ToggleEmployeePayrolladjustmentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  payrollAdjustmentId: string;
}
