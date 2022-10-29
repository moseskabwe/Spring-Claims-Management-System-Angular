import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyholderSearchComponent } from './policyholder-search/policyholder-search.component';

const routes: Routes = [
  {path: 'search-policyholders', component: PolicyholderSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyholdersRoutingModule { }
