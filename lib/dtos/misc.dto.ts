import {
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from "class-validator";
import { Currency } from "../enums/misc.enum";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class JoinWaitlistDto {
  @IsNotEmpty()
  email: string;

  @IsOptional()
  name: string;
}

export class ChannelDto {
  @IsNotEmpty()
  channel: string;
}

export class CountryDto {
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  twoISOCode: string;

  @IsNotEmpty()
  threeISOCode: string;

  @IsNotEmpty()
  @IsIn(Object.values(Currency))
  currency: string;

  @IsNotEmpty()
  @IsMongoId()
  banksChannelId: string;

  @IsNotEmpty()
  @IsMongoId()
  localPayoutsChannelId: string;

  @IsNotEmpty()
  @IsMongoId()
  internationalPayoutsChannelId: string;

  @IsNotEmpty()
  @IsMongoId()
  cardFundingChannelId: string;

  @IsNotEmpty()
  @IsMongoId()
  virtualAccountsChannelId: string;
}

export class EmailDto {
  @IsNotEmpty()
  mailType: string;

  @IsNotEmpty()
  mailData: any;
}

export class PhoneNumberDto implements Partial<PhoneNumber> {
  @IsNotEmpty()
  @IsNumberString()
  code: string;

  @IsNotEmpty()
  number: string;
}

@Schema({ _id: false })
export class PhoneNumber extends Document {
  @Prop({ type: String, default: "" })
  code: string;

  @Prop({ type: String, default: "" })
  number: string;
}

export const PhoneNumberSchema = SchemaFactory.createForClass(PhoneNumber);
