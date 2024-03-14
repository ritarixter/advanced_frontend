import { Country, Currency } from "shared/const/common";

export interface Profile {
    "lastname": string,
    "age": number,
    "currency": Currency,
    "country": Country,
    "city": string,
    "username": string,
    "avatar": string;
}

export interface IProfileSchema {
    data?:Profile;
    isLoading: boolean;
    error?:string;
    readonly: boolean;
}