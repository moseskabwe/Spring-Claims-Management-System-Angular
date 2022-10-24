import { Claim } from "../claims/claim";

export class ClaimPayment {
    paymentNumber!: number;
    claim!: Claim;
    paymentAmount!: number;
    paymentDate!: Date;
    notes!: string;
}