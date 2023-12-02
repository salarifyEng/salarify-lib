import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { RangeData } from "../interfaces/range.interface";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { GlobalConfigKey } from "../enums/global.setting.enum";
import { Types, Document } from "mongoose";

interface BusinessAppConfig {
  payrollRunWindowDays: number;
}

export class GlobalConfig extends Document {
  @Prop({
    type: String,
    enum: Object.values(GlobalConfigKey),
    required: true,
    index: true,
  })
  key: string;

  @Prop({
    type: Object,
    required: true,
  })
  value: BusinessAppConfig & RangeData & string;

  @Prop({
    type: String,
    default: null,
  })
  differentiator: string;

  @Prop({ type: Types.ObjectId, default: null })
  businessId: string;
}

export class GlobalConfigDto implements Partial<GlobalConfig> {
  @IsOptional()
  businessId: string;

  @IsOptional()
  differentiator: string;

  @IsNotEmpty()
  @IsIn(Object.values(GlobalConfigKey))
  key: string;

  @IsNotEmpty()
  value: any;
}

export class QueryGlobalConfigDto implements Partial<GlobalConfig> {
  @IsOptional()
  businessId?: string;

  @IsOptional()
  differentiator?: string;

  @IsOptional()
  @IsIn(Object.values(GlobalConfigKey))
  key?: string;
}
