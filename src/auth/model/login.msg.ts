import { User } from "./user";

export interface LoginMsg{
    status: boolean,
    message: string,
    user: User
}