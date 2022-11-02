import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimAddComponent } from './claim-add/claim-add.component';
import { ClaimListComponent } from './claim-list/claim-list.component';

const routes: Routes = [
    {path: 'claims', component: ClaimListComponent},
    {path: 'claims/add/:policyholderNumber/:policyNumber', component: ClaimAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
