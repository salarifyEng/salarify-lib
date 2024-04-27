export enum PayrollType {
  Regular = "regular",
  Contract = "contract",
  OffCycle = "offCycle",
}

export enum PayrollStatus {
  draft = "draft",
  approved = "approved",
  completed = "completed",
  cancelled = "cancelled",
  uncompleted = "uncompleted",
  processing = "processing",
}

export enum PayrollFrequency {
  monthly = "monthly",
  weekly = "weekly",
  biweekly = "biweekly",
  nocycle = "nocycle",
}
