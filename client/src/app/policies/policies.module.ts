import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PolicyService } from './policy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoliciesRoutingModule
  ],
  providers: [PolicyService]
})
export class PoliciesModule { }
