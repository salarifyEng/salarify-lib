import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { KycStatus, KycStatusDto } from '../enums/kyc.enum';

const kycStatuses = Object.values(KycStatus);

class KYCDto {
  @ApiProperty()
  @IsString()
  documentType: string;

  @ApiProperty()
  @IsString()
  documentName: string;

  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsString()
  userType: string;

  @ApiProperty()
  @IsString()
  fileName: string;
}

export class SaveKycDto {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => KYCDto)
  kycData: KYCDto[];
}

export class UpdateKycDto {
  @ApiPropertyOptional()
  @IsOptional()
  text: any;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  files: string[];
}

export class UpdateKycStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(KycStatusDto))
  status: string;

  @ApiProperty()
  @ValidateIf((statusType) => statusType.status === KycStatusDto.DECLINE)
  @IsNotEmpty()
  comment: string;
}
