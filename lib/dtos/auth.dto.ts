import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';
import { MFAType } from '../enums/misc.enum';

export class RequestPasswordResetDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class ResendEmailVerificationDTo {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  token: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class ChangePasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  oldPassword: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}

export class Enroll2FADto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(MFAType))
  type: MFAType;

  @ApiProperty()
  @IsNotEmpty()
  code: string;
}

export class Initiate2FADto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(MFAType))
  type: MFAType;
}

export class Disable2FADto {
  @ApiProperty()
  @IsNotEmpty()
  code: string;
}
