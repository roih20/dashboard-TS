export interface IUser {
    _id: string
    name: string;
}

export interface IProfile {
    result: {
        name: string,
        email: string,
    }
    token: string
}

export interface IFormRegistration {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}


export interface IFormLogin {
    email: string;
    password: string;
}
