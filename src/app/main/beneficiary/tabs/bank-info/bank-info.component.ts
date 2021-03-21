import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BeneficiaryService } from '../../beneficiary.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  public bankInfoForm: FormGroup;
  @Input() bankInfo: any = null;
   @Output() stepOne = new EventEmitter<any>();
   private _unsubscribeAll: Subject<any>;

  constructor(private readonly beneficiaryService: BeneficiaryService, private readonly _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.createMerchantInfoForm();
  }

  createMerchantInfoForm(): void{
    this.bankInfoForm = this._formBuilder.group({
      });
  }

  ngOnChanges(): void{
    if(this.bankInfo){
      if(!this.bankInfoForm){
        this.createMerchantInfoForm();
        this.stepOne.emit(this.bankInfoForm);
      }
      this.bankInfoForm.patchValue(this.bankInfo);
    }
  }
 
  ngAfterViewInit(): void {
    this.stepOne.emit(this.bankInfoForm);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
