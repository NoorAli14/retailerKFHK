import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-beneficiary-form',
  templateUrl: './beneficiary-form.component.html',
  styleUrls: ['./beneficiary-form.component.scss']
})
export class BeneficiaryFormComponent implements OnInit {
  @Input() beneficiaryDetail: any = null;
  @Output() submitForm = new EventEmitter<any>();

  public bankInfoForm: FormGroup;
  public beneficiaryDetailForm: FormGroup;
  public beneficiaryObject: any; 
  private _unsubscribeAll: Subject<any>;
  constructor() {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
  }

  private createBoardingObject(): void{
    let bankInfoForm = this.bankInfoForm.value;
    let beneficiaryDetailForm = this.beneficiaryDetailForm.value;
    this.beneficiaryObject = {
      bankInfoForm : bankInfoForm, 
      beneficiaryDetailForm : beneficiaryDetailForm
    };
  }

  stepChange(event: StepperSelectionEvent){
    if(event.selectedIndex == 2){
      this.createBoardingObject();
    }
  }

  ngOnDestroy(): void{
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  save(): void{
    this.createBoardingObject();
    this.submitForm.emit(this.beneficiaryObject);
  }

}
