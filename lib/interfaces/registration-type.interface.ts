import { KycDocumentTypes } from "../enums/kyc.enum";

export interface IDocs {
  docsTitle: string;
  description: string;
  type: KycDocumentTypes;
}
