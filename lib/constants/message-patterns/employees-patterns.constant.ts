import { Pattern } from '../../classes/pattern.class';

const employeesPattern = new Pattern('employees');

const EMPLOYEES_PATTERNS = {
  GET_EMPLOYEES: employeesPattern.generate('getEmployees'),
  GET_BY_ID: employeesPattern.generate('getById'),
  GET_BY_EMAIL: employeesPattern.generate('getByEmail'),
  UPDATE_EMPLOYEE_STATUS: employeesPattern.generate('getEmployeeStatus'),
  CHECK_INVITE_VALIDITY: employeesPattern.generate('checkInviteValidity'),
  COMPLETE_SIGN_UP: employeesPattern.generate('completeSignUp'),
  CREATE_EMPLOYEE: employeesPattern.generate('createEmployee'),
};

export default EMPLOYEES_PATTERNS;
