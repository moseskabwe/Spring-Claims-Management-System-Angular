import { Claim } from "../claims/claim";

export class User {
    userId!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;
    username!: string;
    //claims!: Claim[];
}