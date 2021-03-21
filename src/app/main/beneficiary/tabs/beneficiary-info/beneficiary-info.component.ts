import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BeneficiaryService } from '../../beneficiary.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-beneficiary-info',
  templateUrl: './beneficiary-info.component.html',
  styleUrls: ['./beneficiary-info.component.scss']
})
export class BeneficiaryInfoComponent implements OnInit {

  public beneficiaryDetailForm: FormGroup;
  @Input() beneficiaryInfo: any = null;
   @Output() stepOne = new EventEmitter<any>();
   private _unsubscribeAll: Subject<any>;

  constructor(private readonly beneficiaryService: BeneficiaryService, private readonly _formBuilder: FormBuilder,) { }
  
  countries: string[] = [
    "Pakistan",
    "India",
    "Afghanistan",
    "England"
  ]

  ngOnInit(): void {
    this.createBeneficiaryDetailForm();
  }

  createBeneficiaryDetailForm(): void{
    this.beneficiaryDetailForm = this._formBuilder.group({
        bankName: [0, Validators.required],
        webLimit: [0]
      });
  }

  ngOnChanges(): void{
    if(this.beneficiaryInfo){
      if(!this.beneficiaryDetailForm){
        this.createBeneficiaryDetailForm();
        this.stepOne.emit(this.beneficiaryDetailForm);
      }
      this.beneficiaryDetailForm.patchValue(this.beneficiaryInfo);
    }
  }
 
  ngAfterViewInit(): void {
    this.stepOne.emit(this.beneficiaryDetailForm);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  updateCountrySelection(): void{

  }

}
