import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { KycDocumentTypes } from "../enums/kyc.enum";
import { RegistationStatusTypes } from "../enums/admin/registration-type.enum";

const RegistationStatusType = Object.values(RegistationStatusTypes);

class DocsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  docsTitle: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsIn(Object.values(KycDocumentTypes))
  @IsString()
  @IsNotEmpty()
  type: string;
}

export class CreateRegistrationTypeDto {
  @ApiProperty()
  @IsNotEmpty()
  registrationName: string;

  @ApiProperty()
  @IsNotEmpty()
  minHolders: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocsDto)
  businessDocs: DocsDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocsDto)
  partnerDocs: DocsDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  businessSubHeader: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  partnerSubHeader: string;

  @ApiProperty()
  @IsOptional()
  @IsIn(RegistationStatusType)
  status: string;
}

export class RegistrationTypeStatusDto {
  @ApiProperty()
  @IsOptional()
  @IsIn(RegistationStatusType)
  status: string;
}
