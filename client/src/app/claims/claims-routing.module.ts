import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimAddComponent } from './claim-add/claim-add.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ClaimListComponent } from './claim-list/claim-list.component';

const routes: Routes = [
    {path: 'claims', component: ClaimListComponent},
    {path: 'claims/add/:policyholderNumber/:policyNumber', component: ClaimAddComponent},
    {path: 'claims/:claimNumber', component: ClaimDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
