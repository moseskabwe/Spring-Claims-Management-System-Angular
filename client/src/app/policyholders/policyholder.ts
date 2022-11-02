import { Claim } from "../claims/claim";
import { Policy } from "../policies/policy";

export class Policyholder {
    policyHolderNumber!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;
    address!: string;
    policies!: Policy[];
    claims!: Claim[];
}