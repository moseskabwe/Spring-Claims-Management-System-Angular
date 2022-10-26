import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimpaymentListComponent } from './claimpayment-list/claimpayment-list.component';

const routes: Routes = [
  {path: 'payments', component: ClaimpaymentListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimpaymentsRoutingModule { }
