import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimpaymentsRoutingModule } from './claimpayments-routing.module';
import { ClaimpaymentListComponent } from './claimpayment-list/claimpayment-list.component';
import { MatTableModule } from '@angular/material/table';
import { ClaimpaymentAddComponent } from './claimpayment-add/claimpayment-add.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClaimpaymentListComponent,
    ClaimpaymentAddComponent
  ],
  imports: [
    CommonModule,
    ClaimpaymentsRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ClaimpaymentAddComponent
  ]
})
export class ClaimpaymentsModule { }
