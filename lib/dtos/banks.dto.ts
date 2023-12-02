import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Currency, SupportedCountry } from "../enums/misc.enum";

export class VerifyBankDto {
  @ApiProperty()
  @MinLength(10)
  @IsString()
  accountNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountBank: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(Object.values(Currency))
  @IsString()
  currency: Currency;
}

export class GetAllBanksDto {
  @ApiProperty()
  @IsOptional()
  @IsIn(Object.values(SupportedCountry))
  @IsString()
  country: SupportedCountry;

  @ApiProperty()
  @IsOptional()
  @IsIn(Object.values(Currency))
  @IsString()
  currency: Currency;
}
