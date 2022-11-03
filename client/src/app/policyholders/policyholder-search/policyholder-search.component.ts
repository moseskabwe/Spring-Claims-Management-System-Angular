import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policyholder } from '../policyholder';
import { PolicyholderService } from '../policyholder.service';

@Component({
  selector: 'app-policyholder-search',
  templateUrl: './policyholder-search.component.html',
  styleUrls: ['./policyholder-search.component.css']
})
export class PolicyholderSearchComponent implements OnInit {
  policyholders!: Policyholder[];
  searchTerm!: string;

  constructor(private policyholderService: PolicyholderService,
              private router: Router) { }

  ngOnInit(): void {
    this.policyholderService.getPolicyholders().subscribe(data => {
      this.policyholders = data
    });
  }

  searchPolicyholders(searchTerm: string) {
    this.policyholderService.searchPolicyholders(searchTerm).subscribe(data => {
      this.policyholders = data
    });
  }

  onSelect(policyholder: Policyholder) {
    this.router.navigate(['/policyholders', policyholder.policyHolderNumber]);
  }
}
