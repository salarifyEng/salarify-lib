import { ApiProperty } from "@nestjs/swagger";
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Currency } from "../enums/misc.enum";

export class CreateWalletDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;
}

export class TransferDto {
  @IsOptional()
  senderId?: string;

  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;

  @IsNotEmpty()
  @IsOptional()
  reason: string;
}

export class FundWalletDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: Currency;

  @ApiProperty()
  @IsNotEmpty()
  redirectUrl: string;

  walletId: string;
}

export class VirtualAccountDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: Currency;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bvn: string;
}
