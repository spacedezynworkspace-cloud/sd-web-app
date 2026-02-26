export interface Payment {
  _id: string;
  project?: {
    budget: number;
    client: string;
    name: string;
    serviceType: string;
    _id: string;
  };
  amount: number;
  paymentDate: Date;
  method: 'cash' | 'bank_transfer' | 'cheque';
  reference?: string;
  receivedBy?: string;
  approved: boolean;
  notes?: string;
}

export interface CreatePaymentRequest {
  projectId?: string;
  amount: number;
  // paymentDate: Date;
  method: 'cash' | 'bank_transfer' | 'cheque';
  // reference?: string;
  // receivedBy?: string;
  notes?: string;
}
