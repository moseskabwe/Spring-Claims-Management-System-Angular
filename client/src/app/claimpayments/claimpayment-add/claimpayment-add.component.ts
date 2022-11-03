import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimPayment } from '../claimpayment';
import { ClaimPaymentService } from '../claimpayment.service';

@Component({
  selector: 'app-claimpayment-add',
  templateUrl: './claimpayment-add.component.html',
  styleUrls: ['./claimpayment-add.component.css']
})
export class ClaimpaymentAddComponent implements OnInit {
  payment: ClaimPayment = new ClaimPayment();
  claimNumber!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private claimPaymentService: ClaimPaymentService) { }

  ngOnInit(): void {
    this.claimNumber = this.route.snapshot.params['claimNumber'];
  }

  onSubmit(payment: ClaimPayment) {
    this.claimPaymentService.createPayment(payment, this.claimNumber).subscribe(
      (newPayment) => {
        this.payment = newPayment;
        this.goToDashboard();
      }
    );
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
