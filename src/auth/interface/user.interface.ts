export type code = string;
export type accessToken = {}; 

export interface User {
    id? : string;
    pin : string;
    active: boolean;
    last_login: Date;
    createdAt? : Date;
    updatedAt? : Date;
}