import * as bcryptjs from "bcryptjs";
import * as rs from "randomstring";
import * as StringSimilarity from "string-similarity";
import { BANKS } from "../constants/banks.constant";
import { PhoneNumber } from "../dtos/misc.dto";
import { IUser } from "lib/interfaces/user.interface";

export const generateRandomValues = (length: number): string => {
  let result = "e";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength: number = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const generateReference = (length = 10, prefixCount = 4) => {
  const prefix: string = rs.generate({
    charset: "alphabetic",
    length: prefixCount,
  });

  const suffix = rs.generate({
    charset: "alphanumeric",
    length,
  });
  return prefix.concat(suffix).toUpperCase();
};

export const camelCaseToWords = (text: string) => {
  return text.replace(/([a-z])([A-Z])/, "$1 $2");
};

export const hashPassword = async (user: IUser) => {
  const salt = await bcryptjs.genSalt(parseInt(process.env.ROUNDS as string));
  const hash = await bcryptjs.hashSync(user.password, salt);

  user.password = hash;
  return hash;
};

export const generateInviteKey = (businessId: string, email: string) => {
  return `invite--${businessId}-${email}`;
};

export const splitInviteKey = (string: string) => {
  const data = string.split("invite--")[1];

  if (!data) {
    return null;
  }

  const [businessId, email] = data.split("-");
  return { businessId, email };
};

export const successResponse = (message: any = null, data: any = null) => {
  return { success: true, message, data };
};

export const getBankFromNameAsync = async (name: string) => {
  const [match, aliasMatch] = await Promise.all([
    StringSimilarity.findBestMatch(
      name.toLowerCase(),
      BANKS.map((bank) => bank.name.toLowerCase())
    ),
    StringSimilarity.findBestMatch(
      name.toLowerCase(),
      BANKS.map((bank) => bank?.alias?.toLowerCase() || "")
    ),
  ]);

  const index =
    match.bestMatch.rating > aliasMatch.bestMatch.rating
      ? match.bestMatchIndex
      : aliasMatch.bestMatchIndex;

  return BANKS[index] || undefined;
};

export const getBankFromCode = (code: string) => {
  const bank = BANKS.find((bank) => bank.code === code);

  return bank || "";
};

export const getBankFromName = (name: string) => {
  const match = StringSimilarity.findBestMatch(
    name.toLowerCase(),
    BANKS.map((bank) => bank.name.toLowerCase())
  );

  const aliasMatch = StringSimilarity.findBestMatch(
    name.toLowerCase(),
    BANKS.map((bank) => bank?.alias?.toLowerCase() || "")
  );

  const index =
    match.bestMatch.rating > aliasMatch.bestMatch.rating
      ? match.bestMatchIndex
      : aliasMatch.bestMatchIndex;

  return BANKS[index] || undefined;
};

export const getFullPhoneNumber = (phone: PhoneNumber): string => {
  const full = `${phone.code}${phone.number}`
    .trim()
    .replaceAll("+", "")
    .replaceAll(" ", "");
  return "+" + full;
};

export const formatTo2Decimal = (value = 0): number => {
  value = Number(value);
  return parseFloat(value.toFixed(2));
};
