import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclinedclaimsRoutingModule } from './declinedclaims-routing.module';
import { DeclinedclaimAddComponent } from './declinedclaim-add/declinedclaim-add.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeclinedClaimService } from './declinedclaim.service';


@NgModule({
  declarations: [
     DeclinedclaimAddComponent
  ],
  imports: [
    CommonModule,
    DeclinedclaimsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    DeclinedclaimAddComponent
  ],
  providers: [DeclinedClaimService]
})
export class DeclinedclaimsModule { }
