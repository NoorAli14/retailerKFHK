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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';


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
    BeneficiaryRoutingModule,
    MatIconModule,
    MatButtonModule,
    
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCardModule,
  ]
})
export class BeneficiaryModule { }
