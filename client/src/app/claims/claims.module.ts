import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ClaimService } from './claim.service';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ClaimAddComponent } from './claim-add/claim-add.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DeclinedclaimAddComponent } from '../declinedclaims/declinedclaim-add/declinedclaim-add.component';
import { DeclinedclaimsModule } from '../declinedclaims/declinedclaims.module';
import { ClaimpaymentsModule } from '../claimpayments/claimpayments.module';

@NgModule({
  declarations: [
    ClaimListComponent,
    ClaimDetailsComponent,
    ClaimAddComponent
  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule, DeclinedclaimsModule,
    ClaimpaymentsModule
  ],
  providers: [ClaimService]
})
export class ClaimsModule { }
