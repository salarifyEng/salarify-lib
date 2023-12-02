export enum PayrollTypes {
  regular = 'regular',
  contract = 'contract',
}

export enum PayrollStatus {
  draft = 'draft',
  created = 'created',
  completed = 'completed',
  cancelled = 'cancelled',
  uncompleted = 'uncompleted',
  processing = 'processing',
}

export enum PayrollFrequency {
  monthly = 'monthly',
  weekly = 'weekly',
  biweekly = 'biweekly',
  nocycle = 'nocycle',
}
