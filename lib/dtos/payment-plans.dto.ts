import {
  IsDate,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  PaymentPlanFrequency,
  PaymentPlanStatus,
  PaymentPlanType,
} from '../enums/payment-plan.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Currency } from '../enums/misc.enum';

const paymentPlanTypes = Object.values(PaymentPlanType);
const paymentPlanStatus = Object.values(PaymentPlanStatus);
const paymentPlanFrequencies = Object.values(PaymentPlanFrequency);

export class CreatePaymentPlanDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsMongoId()
  @IsOptional()
  employerId: string;

  @ApiProperty()
  @IsIn(paymentPlanTypes)
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  endDate: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  previousPayday: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  nextPayday: Date;

  @ApiProperty()
  @IsIn(paymentPlanFrequencies)
  @IsNotEmpty()
  frequency: string;

  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsString()
  @IsIn(Object.values(Currency))
  currency: string;
}

export class UpdatePaymentPlanDto {
  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsIn(paymentPlanTypes)
  @IsOptional()
  type: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  endDate: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  previousPayday: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  nextPayday: Date;

  @ApiProperty()
  @IsIn(paymentPlanFrequencies)
  @IsOptional()
  frequency: string;

  @ApiProperty()
  @IsOptional()
  amount: number;

  @ApiProperty()
  @IsString()
  @IsIn(Object.values(Currency))
  @IsOptional()
  currency: string;
}

export class GetPaymentPlansFilterDto {
  @ApiProperty()
  @IsString()
  @IsIn(paymentPlanStatus)
  @IsOptional()
  status: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  search: string;
}
