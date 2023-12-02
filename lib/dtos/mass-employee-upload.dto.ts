import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Min,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { Transform } from 'class-transformer';

@ValidatorConstraint()
@Injectable()
class LastNameRequiredValidation implements ValidatorConstraintInterface {
  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    const names = value.split(' ');
    return !!names[1];
  }

  defaultMessage(args: ValidationArguments) {
    return 'last name is required';
  }
}

export class EmployeeMassUploadDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => {
    return value.replace(/\s+/g, ' ').trim();
  })
  @Validate(LastNameRequiredValidation)
  fullName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber('NG')
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  workEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  personalEmail: string;

  @ApiProperty()
  @IsNotEmpty()
  position: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(100)
  grossSalary: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  accountName: string;

  @ApiProperty()
  @IsNotEmpty()
  bankName: string;

  @ApiProperty()
  @IsNotEmpty()
  bankCode: string;
}
