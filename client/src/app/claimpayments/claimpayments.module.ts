import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimpaymentsRoutingModule } from './claimpayments-routing.module';
import { ClaimpaymentListComponent } from './claimpayment-list/claimpayment-list.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ClaimpaymentListComponent
  ],
  imports: [
    CommonModule,
    ClaimpaymentsRoutingModule,
    MatTableModule
  ]
})
export class ClaimpaymentsModule { }
