export interface Project {
  _id: string;
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  budget: number;
  phase: 0 | 1 | 2 | 3;
  status: 1 | 2 | 3 | 4 | 5;
  startDate: string; // comes as ISO string from backend
  // endDate?: string;
  // paymentStatus: 'pending' | 'paid' | 'refunded';
  location: {
    state: string;
    address: string;
  };
  // createdAt: string;
  // updatedAt: string;
}

export interface CreateProjectRequest {
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  budget: number;
  startDate: string; // comes as ISO string from backend
  // endDate?: string;
  // paymentStatus: 'pending' | 'paid' | 'refunded';
  location: {
    state: string;
    address: string;
  };
  // createdAt: string;
  // updatedAt: string;
}
