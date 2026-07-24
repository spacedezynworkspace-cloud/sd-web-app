export interface Supervisor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'supervisor';
}

export interface PayrollSupervisor {
  _id: string;
  supervisor: {
    name?: string;
    email: string;
    phone?: string;
    role?: string;
    lastActiveIncrement: string;
  };

  active_days: number;

  isActive: boolean;

  paymentDue: boolean;
  paymentOverDue: boolean;

  paymentTomorrow: boolean;

  salaryPaid: boolean;
  amount: number;

  project: {
    _id: string;
    name: string;
    client: string;
    status: string;
    description: string;
    location: {
      state: string;
      address: string;
    };
  } | null;
}

export type PaymentMethod = 'cash' | 'bank_transfer' | 'cheque';

export type PaymentType = 'salary' | 'project' | 'bonus' | 'reimbursement';

export interface SupervisorPayment {
  _id: string;

  project?: {
    _id: string;
    name: string;
    client: string;
  };

  amount: number;

  paymentDate: string;

  method: PaymentMethod;

  type: PaymentType;

  reference?: string;

  receivedBy?: {
    _id: string;
    name: string;
    email: string;
  };

  approved: boolean;

  activeDays?: number;

  notes?: string;

  createdAt: string;

  updatedAt: string;
}
