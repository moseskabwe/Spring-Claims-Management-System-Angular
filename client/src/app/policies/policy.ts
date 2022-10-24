import { Claim } from "../claims/claim";
import { Policyholder } from "../policyholders/policyholder";
import { Property } from "../properties/property";

export class Policy {
    policyNumber!: String;
    policyHolder!: Policyholder;
    property!: Property;
    inceptionDate!: Date;
    endDate!: Date;
    policyType!: String;
    inForce!: number;
    claims!: Claim[];
}