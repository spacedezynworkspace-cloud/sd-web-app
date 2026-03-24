export interface projectStages {
  name: string;
  completed: boolean;
}
export interface Project {
  _id: string;
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  budget: number;
  assignedTo: { _id: string; email: string }[];
  phase: string;
  status: number;
  startDate: string; // comes as ISO string from backend
  endDate: string;
  // paymentStatus: 'pending' | 'paid' | 'refunded';
  location: {
    state: string;
    address: string;
  };
  stages: projectStages[];
  // createdAt: string;
  // updatedAt: string;
}

export interface CreateProjectRequest {
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  assignedTo?: string; // will be set in backend for now
  budget?: number;
  startDate: string; // comes as ISO string from backend
  endDate: string;
  // paymentStatus: 'pending' | 'paid' | 'refunded';
  location: {
    state: string;
    address: string;
  };
  stages: projectStages[];
  description: string;
  // createdAt: string;
  // updatedAt: string;
}

export interface UpdateProjectRequest {
  id: string;
  data: {
    status?: number;
    phase?: string;
    stages: projectStages[];
  };
}
