import { Pattern } from '../../classes/pattern.class';

const kycPattern = new Pattern('kyc');

const KYC_PATTERNS = {
  CREATE: kycPattern.generate('create'),
  GET_ALL: kycPattern.generate('getAll'),
  GET_BY_ID: kycPattern.generate('getById'),
  UPDATE: kycPattern.generate('update'),
  UPLOAD: kycPattern.generate('upload'),
};

export default KYC_PATTERNS;
