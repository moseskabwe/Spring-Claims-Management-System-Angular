import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/claims/claim';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

dashboardClaims!: Claim[];
stats!: Number[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardClaims();
    this.getDashboardStats();
  }

  private getDashboardClaims() {
    this.dashboardService.getDashboardClaimList().subscribe(data => {
      this.dashboardClaims = data;
    });
  }

  private getDashboardStats() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
  }
}
