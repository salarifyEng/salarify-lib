import { Job } from 'bull';

export interface PayrollPayload extends Job {
  employee: any;
  currency: string;
}
