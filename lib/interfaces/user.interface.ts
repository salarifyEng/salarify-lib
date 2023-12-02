import { Request } from "express";

export interface IUser {
  password: string;
}

export interface ILocation {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface UserRequest extends Request {
  user?: {
    id?: string;
  };
}
