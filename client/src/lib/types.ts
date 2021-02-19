export interface LoginResponse {
  user: User;
  success: boolean;
}

export interface User {
  createdAt: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
