import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyholderDetailsComponent } from './policyholder-details/policyholder-details.component';
import { PolicyholderSearchComponent } from './policyholder-search/policyholder-search.component';

const routes: Routes = [
  {path: 'policyholders', component: PolicyholderSearchComponent},
  {path: 'policyholders/:id', component: PolicyholderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyholdersRoutingModule { }
