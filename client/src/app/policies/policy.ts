import { Claim } from "../claims/claim";
import { Policyholder } from "../policyholders/policyholder";
import { Property } from "../properties/property";

export class Policy {
    policyNumber!: string;
    policyHolder!: Policyholder;
    property!: Property;
    inceptionDate!: Date;
    endDate!: Date;
    policyType!: string;
    inForce!: number;
    claims!: Claim[];
}