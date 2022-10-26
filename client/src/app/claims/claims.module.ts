import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UsersModule } from '../users/users.module';
import { ClaimService } from './claim.service';


@NgModule({
  declarations: [
    ClaimListComponent
  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ClaimService]
})
export class ClaimsModule { }
