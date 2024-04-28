import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Matches,
  Min,
  MinLength,
} from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { Currency, SupportedCountry } from "../enums/misc.enum";
import { EmployeeTypes } from "../enums/user.enum";
import { Optional } from "@nestjs/common";

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber("NG")
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID("4")
  inviteToken: string;
}

export class AcceptEmployeeInviteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID("4")
  inviteToken: string;

  @ApiProperty()
  @IsNotEmpty()
  employeeId: string;
}

export class AcceptEmployeeWithEmailInviteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID("4")
  inviteToken: string;

  @ApiProperty()
  @IsNotEmpty()
  businessEmployeeId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class EmployeeUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  employeeEmail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  employerId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  employeeId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber("NG")
  // @Matches(/^[0-9]{11}$/, {
  //   message: 'Phone number must include only numbers',
  // })
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
    message: "password not strong enough",
  })
  password: string;
}

export class AddBankAccountDto {
  @ApiProperty()
  @IsString()
  accountName: string;

  @IsNotEmpty()
  accountNumber: string;

  @IsNotEmpty()
  bankName: string;

  @IsString()
  bankCode: string;

  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;

  @IsNotEmpty()
  country: string;
}

// export class UpdateBankAccountDto extends AddBankAccountDto {
//   @ApiProperty()
//   @IsBoolean()
//   active: boolean;

// }

export class UpdateBusinessEmployeeDTO {
  @ApiProperty()
  @IsIn(["active", "inactive"])
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Min(100)
  grossPayMonthly: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  endDate: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  position: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(Object.values(Object.values(EmployeeTypes)))
  @IsString()
  type: string;
}

export class PayslipDTO {
  @ApiProperty()
  // @IsDate()
  @Optional()
  startDate: Date;

  @ApiProperty()
  // @IsDate()
  @Optional()
  endDate: Date;

  @ApiProperty()
  // @IsDate()
  @IsNotEmpty()
  payDate: string;
}

export class TaxIdentificationDTO {
  @ApiProperty()
  @IsIn(Object.values(SupportedCountry))
  @IsString()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tin: string;

  metadata?: any;
}
