import { User } from "../users/user";
import { Policyholder } from "../policyholders/policyholder";
import { Policy } from "../policies/policy";
import { DeclinedClaim } from "../declinedclaims/declinedclaim";
import { ClaimPayment } from "../claimpayments/claimpayment";

export class Claim {
   claimNumber!: number;
   adjuster!: User;
   policyHolder!:  Policyholder;
   policy!: Policy;
   lossType!: string;
   incidentDate!: Date;
   filingDate!: Date;
   status!: string;
   notes!: string;
   declinedClaim!: DeclinedClaim;
   payments!: ClaimPayment[];
}