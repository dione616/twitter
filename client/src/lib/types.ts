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
  img?: string;
}

export interface AuthState {
  user: User | null;
}
export interface Twitt {
  _id: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface TwittsState {
  twitts: Twitt[];
}

export interface Comment {
  _id: string;
  text: string;
  author: string;
  likes: number;
}
