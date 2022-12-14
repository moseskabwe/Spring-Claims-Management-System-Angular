import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyholdersRoutingModule } from './policyholders-routing.module';
import { PolicyholderSearchComponent } from './policyholder-search/policyholder-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PolicyholderDetailsComponent } from './policyholder-details/policyholder-details.component';
import { PolicyholderService } from './policyholder.service';


@NgModule({
  declarations: [
    PolicyholderSearchComponent,
    PolicyholderDetailsComponent
  ],
  imports: [
    CommonModule,
    PolicyholdersRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [PolicyholderService]
})
export class PolicyholdersModule { }
