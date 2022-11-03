import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeclinedClaim } from '../declinedclaim';
import { DeclinedClaimService } from '../declinedclaim.service';

@Component({
  selector: 'app-declinedclaim-add',
  templateUrl: './declinedclaim-add.component.html',
  styleUrls: ['./declinedclaim-add.component.css']
})
export class DeclinedclaimAddComponent implements OnInit {

  declinedClaim: DeclinedClaim = new DeclinedClaim();
  claimNumber!: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private declinedClaimService: DeclinedClaimService) { }

  ngOnInit(): void {
    this.claimNumber = this.route.snapshot.params['claimNumber'];
  }

  onSubmit(declinedClaim: DeclinedClaim) {
    this.declinedClaimService.declineClaim(declinedClaim, this.claimNumber).subscribe(
      (newDeclinedClaim) => {
        console.log(newDeclinedClaim);
        this.declinedClaim = newDeclinedClaim;
        this.goToDashboard();
      }
    );
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
