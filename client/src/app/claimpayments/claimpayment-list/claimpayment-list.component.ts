import { Component, OnInit } from '@angular/core';
import { ClaimPayment } from '../claimpayment';
import { ClaimPaymentService } from '../claimpayment.service';

@Component({
  selector: 'app-claimpayment-list',
  templateUrl: './claimpayment-list.component.html',
  styleUrls: ['./claimpayment-list.component.css']
})
export class ClaimpaymentListComponent implements OnInit {

  claimPaymentList!: ClaimPayment[];

  constructor(private claimpaymentService: ClaimPaymentService) { }

  ngOnInit(): void {
    this.getPaymentList();
  }

  private getPaymentList() {
      this.claimpaymentService.getPaymentList().subscribe(data => {
        this.claimPaymentList = data;
      })
  }

}
