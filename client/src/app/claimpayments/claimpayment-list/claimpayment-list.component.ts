import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/claims/claim';
import { ClaimPayment } from '../claimpayment';
import { ClaimPaymentService } from '../claimpayment.service';

@Component({
  selector: 'app-claimpayment-list',
  templateUrl: './claimpayment-list.component.html',
  styleUrls: ['./claimpayment-list.component.css']
})
export class ClaimpaymentListComponent implements OnInit {
  claimPaymentList!: ClaimPayment[];
  claim!: Claim;

  constructor(private claimpaymentService: ClaimPaymentService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPaymentList();
  }

  private getPaymentList() {
      this.claimpaymentService.getPaymentList().subscribe(data => {
        this.claimPaymentList = data;
      })
  }

  viewClaim(claimPaymentNumber: number) {
    this.claimpaymentService.getClaim(claimPaymentNumber).subscribe(
      claim => {
        this.claim = claim;
      }
    );
    this.router.navigate(['/claims/' + this.claim.claimNumber]);
  }
}
