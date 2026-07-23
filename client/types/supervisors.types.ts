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
  };

  active_days: number;

  isActive: boolean;

  paymentDue: boolean;

  paymentTomorrow: boolean;

  salaryPaid: boolean;
  amount: number;

  project: {
    _id: string;
    name: string;
    client: string;
    status: string;
  } | null;
}
