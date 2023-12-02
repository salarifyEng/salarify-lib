import {
  IsArray,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { TransactionTypes, PaymentStatus } from "../enums/payment.enum";

import { ApiProperty } from "@nestjs/swagger";
import { Currency } from "../enums/misc.enum";
import { ICustomer } from "../interfaces/payment.interface";
import { Type } from "class-transformer";
import { PaystackTransferResponse } from "../interfaces/integrations/paystack.interface";

class WithProvider {
  _provider?: string;
  _providerResponse?: string;
}

export class CreateTransactionDto {
  @ApiProperty()
  @IsMongoId()
  walletId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  provider: string;

  @ApiProperty()
  @IsIn(Object.values(TransactionTypes))
  type: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsIn(Object.values(PaymentStatus))
  status?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  reference?: any;

  @ApiProperty()
  @IsOptional()
  metadata?: any;
}

export class UpdateTransactionDto {
  @ApiProperty()
  @IsIn(Object.values(PaymentStatus))
  status: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  metadata?: any;

  @ApiProperty()
  @IsOptional()
  providerInfo?: any;

  @ApiProperty()
  @IsOptional()
  parentTransaction?: any;

  @ApiProperty()
  @IsOptional()
  reference?: string;

  @ApiProperty()
  @IsOptional()
  failedCount?: number;

  @ApiProperty()
  @IsOptional()
  amount?: number;
}

export class CreateVirtualAccountDTO {
  name: string;
  businessName: string;
  isPermanent?: boolean;
  currency: Currency;
  amount?: number;
  email: string;
  bvn: string;
  narration?: string;
  reference: string;
}

export class GetVirtualAccountDTO extends WithProvider {
  reference: string;
}

export class CreatePaymentResponse extends WithProvider {
  link?: string;
  authorization_url?: string;
}

export class GetPaymentResponse {
  id: string;
  reference: string;
  amount: number;
  status: string;
  currency: string;
}

export class CreateVirtualAccountResponse extends WithProvider {
  accountNumber: string;
  bankName: string;
  bankCode?: string;
  reference?: string;
}

export class ResolveAccountNumberDTO {
  accountNumber: string;
  bankCode: string;
}

export class ResolveAccountNumberResponse {
  accountNumber: string;
  accountName: string;
}

export interface CreatePaymentDTO {
  reference: string;
  email?: string;
  amount: number;
  currency: string;
  redirectUrl: string;
  paymentOptions: string[];
  customer: ICustomer;
}

export class GetPaymentDTO {
  @IsString()
  @IsOptional()
  @ValidateIf((type) => type.paymentId === null)
  paymentId?: string | null;

  @IsString()
  reference: string;

  @IsOptional()
  @IsString()
  _provider?: string;
}

export class GetPayoutDTO {
  @IsOptional()
  @IsNumber()
  payoutId: string;

  @IsString()
  reference: string;

  @IsOptional()
  @IsString()
  _provider?: string;
}

export class MakePayoutDTO {
  @IsString()
  currency: Currency;

  @IsNumber()
  amount: number;
  @IsString()
  @IsString()
  accountNumber: string;

  @IsString()
  accountName: string;

  @IsString()
  bankCode: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsString()
  recipient?: string;

  @IsString()
  reference: string;

  @IsOptional()
  @IsString()
  narration?: string;

  @IsOptional()
  @IsString()
  _provider?: string;
}

export interface PayoutResponse {
  id: string;
  reference: string;
  status: string;
}

export interface BulkPayoutResponse {
  batchId?: string | null;
  payoutRefs?: string[];
  status?: boolean;
  message?: string;
  data?: PaystackTransferResponse[];
}

export class BulkPayoutDTO {
  @IsString()
  title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MakePayoutDTO)
  bulkData: MakePayoutDTO[];

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  _provider?: string;
}

export class GetBulkPayoutDTO {
  @IsString()
  batchId: string;

  @IsString()
  payoutIds: string[];

  @IsArray()
  references: string[];

  @IsOptional()
  @IsString()
  _provider?: string;
}

export class RetryPayoutDTO {
  @IsString()
  userId: string;

  @IsString()
  employeeListId: string;

  @IsString()
  reference: string;

  @IsOptional()
  @IsString()
  provider?: string;
}
