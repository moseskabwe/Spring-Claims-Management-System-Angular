import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policyholder } from '../policyholder';
import { PolicyholderService } from '../policyholder.service';

@Component({
  selector: 'app-policyholder-details',
  templateUrl: './policyholder-details.component.html',
  styleUrls: ['./policyholder-details.component.css']
})
export class PolicyholderDetailsComponent implements OnInit {
  policyholder!: Policyholder;
  policyholderNumber!: string;
  constructor(private policyholderService: PolicyholderService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const policyholderNumber = this.route.snapshot.params['id'];
    this.policyholderService.getPolicyholder(policyholderNumber).subscribe(
      policyholder => this.policyholder = policyholder
    );
  }
}
