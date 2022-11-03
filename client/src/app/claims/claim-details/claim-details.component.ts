import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeclinedClaim } from 'src/app/declinedclaims/declinedclaim';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {

  claim!: Claim;
  claimNumber!: string;
  declinedClaim!: DeclinedClaim;
  isVisibleDeclinedClaim = false;
  isVisibleClaimPayment = false;

  constructor(private route: ActivatedRoute,
              private claimService: ClaimService) { }

  ngOnInit(): void {
    const claimNumber = this.route.snapshot.params['claimNumber'];
    this.claimService.getClaim(claimNumber).subscribe(claim => {
      this.claim = claim;
    })
  }

  showDeclineClaimComponent() {
    this.isVisibleDeclinedClaim = !this.isVisibleDeclinedClaim;
    this.isVisibleClaimPayment = false;
  }

  showClaimPaymentComponent() {
    this.isVisibleClaimPayment = !this.isVisibleClaimPayment;
    this.isVisibleDeclinedClaim = false;
  }
  // onNewDeclinedClaim(newDeclinedClaim: DeclinedClaim) {
  //   this.declinedClaim = newDeclinedClaim;
  //   this.showDeclineClaimComponent();
  // }
}
