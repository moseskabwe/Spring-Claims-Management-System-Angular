import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

claims!: Claim[];
dashboardClaims!: Claim[];

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getDashboardClaims();
    this.getClaims();
  }

  private getClaims() {
    this.claimService.getClaimList().subscribe(data => {
      this.claims = data;
    });
  }

  private getDashboardClaims() {
    this.claimService.getDashboardClaimList().subscribe(data => {
      this.dashboardClaims = data;
    });
  }
}
