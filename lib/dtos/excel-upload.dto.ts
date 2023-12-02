import { Email } from 'read-excel-file';

export const schema = {
  FULLNAME: {
    prop: 'fullname',
    type: String,
    required: true,
  },
  EMAIL: {
    prop: 'email',
    required: true,
    type: Email,
  },
  PHONE_NUMBER: {
    prop: 'phone_no',
    required: true,
    type: Number,
  },
  EMPLOYEE_EMAIL: {
    prop: 'employee_email',
    required: true,
    type: Email,
  },
  POSITION: {
    prop: 'position',
    required: true,
    type: String,
  },
  GROSS_SALARY: {
    prop: 'salary',
    required: true,
    type: Number,
  },
  ACCOUNT_NAME: {
    prop: 'account_name',
    required: true,
    type: String,
  },
  ACCOUNT_NO: {
    prop: 'account_no',
    required: true,
    type: Number,
  },
  BANK_NAME: {
    prop: 'bank_name',
    required: true,
    type: String,
  },
  BANK_CODE: {
    prop: 'bank_code',
    required: true,
    type: Number,
  },
};
