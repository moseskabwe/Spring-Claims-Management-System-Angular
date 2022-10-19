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

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  private getClaims() {
    this.claimService.getClaimList().subscribe(data => {
      this.claims = data;
    });
  }
}
