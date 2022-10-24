import { Claim } from "../claims/claim";

export class Policyholder {
    policyHolderNumber!: String;
    firstName!: String;
    lastName!: String;
    email!: String;
    phoneNumber!: String;
    address!: String;
    //policies!: Policy;
    claims!: Claim[];
}