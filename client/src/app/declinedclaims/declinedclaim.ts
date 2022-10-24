import { Claim } from "../claims/claim";

export class DeclinedClaim {
    declinedClaimNumber!: number;
    claim!: Claim;
    declinedDate!: Date;
    reason!: string;
}