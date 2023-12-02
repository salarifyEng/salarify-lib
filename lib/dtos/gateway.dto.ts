import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { GlobalSettingType } from "../enums/global.setting.enum";
import { Currency } from "../enums/misc.enum";
import { RangeType } from "../enums/range.type.enum";
import { Types } from "mongoose";

export class GatewayDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}

class RangeData {
  @ApiProperty()
  @IsNotEmpty()
  min: number;

  @ApiProperty()
  @IsNotEmpty()
  max: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(RangeType))
  type: any;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  maxAmount?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  minAmount?: number;
}

export class GlobalSettingDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(GlobalSettingType))
  type: string;

  @ApiProperty()
  @ValidateIf((type) => type.type === GlobalSettingType.GATEWAY_FEE)
  @IsNotEmpty({
    message: "Gateway id is needed if the type selected is gateway fee",
  })
  @IsMongoId()
  gatewayId: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;

  @ApiProperty()
  @IsOptional()
  isPayout: boolean;

  @ApiProperty()
  @IsOptional()
  isFunding: boolean;

  @ApiProperty()
  @IsOptional()
  isVirtualAccount: boolean;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RangeData)
  ranges: RangeData[];
}

export class BusinessSalarifyDTO {
  @ApiProperty()
  @IsOptional()
  @IsMongoId()
  businessId: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RangeData)
  ranges: RangeData[];
}
