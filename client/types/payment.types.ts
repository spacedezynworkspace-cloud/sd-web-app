export interface Payment {
  _id: string;
  project?: string;
  amount: number;
  paymentDate: Date;
  method: 'cash' | 'bank_transfer' | 'cheque';
  reference?: string;
  receivedBy?: string;
  approved: boolean;
  notes?: string;
}

export interface CreatePaymentRequest {
  project?: string;
  amount: number;
  // paymentDate: Date;
  method: 'cash' | 'bank_transfer' | 'cheque';
  // reference?: string;
  // receivedBy?: string;
  notes?: string;
}
