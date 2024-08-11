export interface IMeta {
    limit: number;
    page: number;
    total: number;
}

export type ResponseSuccessType = {
    data: any,
    meta?: IMeta
}

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

export enum Status {
    Available = "Available",
    Unavailable = "Unavailable",
}

export type ITask = {
    id: string;
    title: string;
    desc: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user: IUser;
};

export type IProduct = {
    id: string;
    title: string;
    price: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user: IUser;
};

export type IUser = {
    id: string;
    name: string;
    password: string;
    email: string;
    contactNum: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    products: IProduct[];
    tasks: ITask[];
};




