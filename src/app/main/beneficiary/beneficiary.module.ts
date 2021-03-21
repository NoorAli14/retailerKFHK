import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { BeneficiaryCreateComponent } from './beneficiary-create/beneficiary-create.component';
import { BeneficiaryEditComponent } from './beneficiary-edit/beneficiary-edit.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';
import { BeneficiaryTableComponent } from './beneficiary-table/beneficiary-table.component';
import { BankInfoComponent } from './tabs/bank-info/bank-info.component';
import { BeneficiaryInfoComponent } from './tabs/beneficiary-info/beneficiary-info.component';
import { TransactionSummaryComponent } from './tabs/transaction-summary/transaction-summary.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    BeneficiaryCreateComponent, 
    BeneficiaryEditComponent, 
    BeneficiaryFormComponent, 
    BeneficiaryTableComponent, 
    BankInfoComponent, 
    BeneficiaryInfoComponent, 
    TransactionSummaryComponent, 
    BeneficiaryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BeneficiaryRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
  ]
})
export class BeneficiaryModule { }
