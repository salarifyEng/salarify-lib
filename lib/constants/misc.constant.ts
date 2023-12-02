import { ICountry } from '../interfaces/misc.interface';
import { Currency, SupportedCountry } from '../enums/misc.enum';

export const COUNTRIES: ICountry[] = [
  { name: 'Nigeria', code: SupportedCountry.NG, currency: Currency.NGN },
  { name: 'United States of America', code: 'US', currency: Currency.USD },
];
