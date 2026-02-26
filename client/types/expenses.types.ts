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
  urgencyLevel?: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'declined';
}
export interface CreateExpenseRequest {
  projectId?: string;
  amount: number;
  type: 'electrical' | 'wood' | 'tools' | 'material' | 'labor' | 'logistics';
  requestedDate: string;
  urgencyLevel: 'low' | 'medium' | 'high';
  requestedBy?: string;
  description: string;
}
