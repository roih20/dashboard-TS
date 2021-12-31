import { IUser } from ".";

export interface IState {
    users: IUser[]
    modalContent: string;
    isOpen: boolean;
    status: string;
    style: string;
}

export interface IAuth {
    authData: any,
    modalContent: string;
    isOpen: boolean;
    style: string;
    status: string;
}