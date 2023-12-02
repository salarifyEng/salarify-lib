import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { EntityTypes } from '../enums/file.enum';

export class UploadFileDto {
  @ApiPropertyOptional()
  @IsOptional()
  entityId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(Object.values(EntityTypes))
  entityType: string;
}
