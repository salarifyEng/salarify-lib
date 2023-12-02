import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsISO31661Alpha2,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  isURL,
  IsUUID,
  Matches,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { SupportedCountry } from '../enums/misc.enum';
import { UserTypes } from '../enums/user.enum';
import { PhoneNumber, PhoneNumberDto } from './misc.dto';
import { Type } from 'class-transformer';

const userTypes = Object.values(UserTypes);
const supportedCountries = Object.values(SupportedCountry);

export class CreateAdminDto {
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
  @IsBoolean()
  active: boolean;
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @ApiProperty()
  @IsIn(userTypes)
  userType: string;

  @ApiPropertyOptional()
  @ValidateIf((userType) => userType.userType === UserTypes.business)
  @IsNotEmpty({
    message:
      'Business name cannot be empty if the selected user type is business',
  })
  @MinLength(4)
  businessName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => PhoneNumberDto)
  @ValidateNested()
  phoneNumber: PhoneNumber;

  @ApiProperty()
  @IsNotEmpty()
  @IsISO31661Alpha2()
  @IsIn(supportedCountries)
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
    message: 'password not strong enough',
  })
  password: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID('4')
  inviteToken?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  displayPicture?: string;
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsOptional()
  @MinLength(4)
  name: string;

  // @ApiProperty()
  // @IsIn(userTypes)
  // userType: string;

  // @ApiPropertyOptional()
  // @ValidateIf((userType) => userType.userType === UserTypes.business)
  // @IsNotEmpty({
  //   message:
  //     'Business name cannot be empty if the selectd user type is business',
  // })
  // @MinLength(4)
  // businessName: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEmail()
  // email: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => PhoneNumberDto)
  @ValidateNested()
  phoneNumber: PhoneNumber;

  @ApiProperty()
  @IsOptional()
  @IsISO31661Alpha2()
  @IsIn(supportedCountries)
  country: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @MinLength(8)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
  //   message: 'password not strong enough',
  // })
  // password: string;

  // @ApiPropertyOptional()
  // @IsOptional()
  // @IsUUID('4')
  // inviteToken?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  displayPicture?: string;
}

export class EmployeeEmployerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  employerId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  employeeEmail: string;
}

// export class CreateEmployeeDto {
//   @ApiProperty()
//   @IsArray()
//   @ValidateNested({ each: true })
//   // @Type(() => InviteEmployeeDto)
//   employers: InviteEmployeeDto[];
// }

export class KeyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  key: string;
}

export class ExcelUploadDto {
  @ApiProperty()
  @IsNotEmpty()
  file: string;
}
