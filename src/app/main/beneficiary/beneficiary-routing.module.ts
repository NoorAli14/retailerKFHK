import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiaryCreateComponent } from './beneficiary-create/beneficiary-create.component';
import { BeneficiaryEditComponent } from './beneficiary-edit/beneficiary-edit.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';

const routes: Routes = [
  {
    path     : 'beneficiary/list',
    component: BeneficiaryListComponent,
  },
  {
    path     : 'beneficiary',
    component: BeneficiaryCreateComponent,
  },
  {
    path     : 'beneficiary/:id',
    component: BeneficiaryEditComponent,
  },
  {
    path: '',
    redirectTo: 'beneficiary/list',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryRoutingModule { }
