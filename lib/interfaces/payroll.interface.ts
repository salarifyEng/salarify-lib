export interface IPayrollJobPayload {
  payrolls: any[];
}

interface IEmploye {
  employeeId: string;
  deductions: any[];
}

export interface IEmployeePayrollJobPayload {
  payrollId: string;
  businessEmployees: any[];
  payrollAdjustmentIds: string[];
}

export interface IPayrollSuccessUpdate {
  transaction: any;
  body: Record<string, any>;
  payoutId: string;
  amount: number;
}

export interface IPayrollFailedUpdate {
  transaction: any;
  body: Record<string, any>;
  payoutId: string;
}
