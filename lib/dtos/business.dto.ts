import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { BusinessStatusTypes } from "../enums/user.enum";
import { Currency, SupportedCountry } from "../enums/misc.enum";
import { PayrollFrequency } from "../enums/payroll.enum";
import { PhoneNumber, PhoneNumberDto } from "./misc.dto";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";

const BusinessStatusType = Object.values(BusinessStatusTypes);

export class CreateBusinessDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PhoneNumberDto)
  phoneNumber: PhoneNumber;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  country: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  website?: string;
}

export class UpdateBusinessDto extends CreateBusinessDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @Type(() => PhoneNumberDto)
  @ValidateNested()
  phoneNumber: PhoneNumber;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  companySize: number;

  @IsOptional()
  @IsString()
  @IsIn(Object.values(SupportedCountry))
  country: string;

  @IsNotEmpty()
  @IsString()
  industry: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  website: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  logo: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(BusinessStatusType)
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  registrationTypeId: string;
}

export class InviteEmployeesDto {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { each: true })
  emails: Array<string>;
}

// TODO: Get clarification on this
export class InvitiesDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  employeeEmail: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  status: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  expiryDate: number;

  constructor(
    key: string,
    employeeEmail: string,
    status = "pending",
    expiryDate: number
  ) {
    this.key = key;
    this.employeeEmail = employeeEmail;
    this.status = status;
    this.expiryDate = expiryDate;
  }
}

export class UpdateBusinessStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(BusinessStatusType)
  status: string;

  @ApiProperty()
  @ValidateIf((statusType) => statusType.status === "declined")
  @IsNotEmpty()
  comment: string;
}

export class BusinessSetting extends Document {
  @Prop({ type: String, default: 28 })
  preferredPayDate: number;

  @Prop({ type: String, enum: Object.values(Currency), default: Currency.NGN })
  payrollCurrency: Currency;

  @Prop({
    type: String,
    enum: Object.values(PayrollFrequency),
    default: PayrollFrequency.monthly,
  })
  payrollFrequency: PayrollFrequency;

  @Prop({
    type: Boolean,
    default: false,
  })
  autoPayroll: boolean;
}

export class UpdateBusinessSettingsDto implements Partial<BusinessSetting> {
  @ApiProperty()
  @IsOptional()
  @IsIn(Object.keys(Currency))
  payrollCurrency?: Currency;

  @ApiProperty()
  @IsOptional()
  @IsIn(Object.keys(PayrollFrequency))
  payrollFrequency?: PayrollFrequency;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  preferredPayDate?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  autoPayroll?: boolean;
}
