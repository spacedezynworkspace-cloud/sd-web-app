export interface Expense {
  _id: string;
  project: string;
  amount: number;
  type: 'electrical' | 'wood' | 'tools' | 'material' | 'labor' | 'logistics';
  description: string;
  requestedBy: string;
  requestedDate: Date;
  approved: boolean;
  approvedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateExpenseRequest {
  project: string;
  amount: number;
  type: 'electrical' | 'wood' | 'tools' | 'material' | 'labor' | 'logistics';
  requestedDate: string;
  requestedBy: string;
  description: string;
}
