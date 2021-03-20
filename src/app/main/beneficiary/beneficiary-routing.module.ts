import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiaryCreateComponent } from './beneficiary-create/beneficiary-create.component';
import { BeneficiaryEditComponent } from './beneficiary-edit/beneficiary-edit.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';

const routes: Routes = [
  {
    path     : 'beneficiary',
    component: BeneficiaryListComponent,
  },
  {
    path     : 'beneficiary/create',
    component: BeneficiaryCreateComponent,
  },
  {
    path     : 'beneficiary/edit/:id',
    component: BeneficiaryEditComponent,
  },
  {
    path: '',
    redirectTo: 'beneficiary',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryRoutingModule { }
