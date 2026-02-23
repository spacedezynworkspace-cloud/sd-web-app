export interface CreateProjectRequest {
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  budget: number;
  location: {
    state: string;
    address?: string;
  };
  startDate: string;
}
