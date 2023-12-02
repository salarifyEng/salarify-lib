export enum KycStatus {
  APPROVED = 'approved',
  DECLINED = 'declined',
  DRAFT = 'draft',
  PENDING = 'pending',
}

export enum KycDocumentTypes {
  text = 'text',
  file = 'file',
}

export enum KycStatusDto {
  APPROVE = 'approve',
  DECLINE = 'decline',
}
