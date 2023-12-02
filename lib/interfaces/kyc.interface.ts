import { KycDocumentTypes } from "../enums/kyc.enum";

export interface IKYCData {
  documentType: KycDocumentTypes;
  documentName: string;
  value: string;
  userType: "business" | "personal";
  fileName: string;
}
