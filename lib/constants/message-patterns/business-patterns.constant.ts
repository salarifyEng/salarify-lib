import { Pattern } from '../../classes/pattern.class';

const businessPattern = new Pattern('business');

const BUSINESS_PATTERNS = {
  GET_BY_ID: businessPattern.generate('getById'),
  GET_BY_EMPLOYEE_ID: businessPattern.generate('getByEmployeeId'),
  GET_BY_USER_ID: businessPattern.generate('getByUserId'),
  UPDATE_BUSINESS: businessPattern.generate('updateBusiness'),
  UPDATE_BUSINESS_STATUS: businessPattern.generate('updateBusinessStatus'),
  SEND_INVITE: businessPattern.generate('sendInvite'),
  CHECK_INVITE_VALIDITY: businessPattern.generate('checkInviteValidity'),
  COMPLETE_SIGN_UP: businessPattern.generate('completeSignUp'),
};

export default BUSINESS_PATTERNS;
