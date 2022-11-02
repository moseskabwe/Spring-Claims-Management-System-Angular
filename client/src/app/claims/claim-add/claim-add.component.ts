import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/policies/policy';
import { PolicyService } from 'src/app/policies/policy.service';
import { Policyholder } from 'src/app/policyholders/policyholder';
import { PolicyholderService } from 'src/app/policyholders/policyholder.service';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-add',
  templateUrl: './claim-add.component.html',
  styleUrls: ['./claim-add.component.css']
})
export class ClaimAddComponent implements OnInit {
  policyholder!: Policyholder;
  policy!: Policy;
  policyholderNumber!: string;
  policyNumber!: string;
  claim: Claim = new Claim();

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private policyholderService: PolicyholderService,
              private policyService: PolicyService,
              private claimService: ClaimService) { }

  ngOnInit(): void {
    const policyholderNumber = this.route.snapshot.params['policyholderNumber'];
    const policyNumber = this.route.snapshot.params['policyNumber'];

    this.policyholderService.getPolicyholder(policyholderNumber).subscribe(
      policyholder => this.policyholder = policyholder
    );

    this.policyService.getPolicy(policyNumber).subscribe(
      policy => this.policy = policy
    );
  }

  onSubmit(claim: Claim) {
    this.claimService.createClaim(claim, this.policyholder.policyHolderNumber, 
        this.policy.policyNumber).subscribe(newClaim => { 
          console.log(newClaim);
          this.goToDashboard();}
          )
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
