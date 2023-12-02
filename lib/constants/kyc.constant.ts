import { KycDocumentTypes } from '../enums/kyc.enum';

export const BUSINESS_KYC_DOCUMENTS: any = [
  {
    name: 'business_name_certificate',
    type: KycDocumentTypes.file,
    isRequired: true,
  },
  {
    name: 'tax_identification_number',
    type: KycDocumentTypes.text,
    isRequired: true,
  },
];

export const EMPLOYEE_KYC_DOCUMENTS: any = [
  {
    name: 'tax_identification_number',
    type: KycDocumentTypes.text,
    isRequired: true,
  },
];
