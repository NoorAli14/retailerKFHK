import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-beneficiary-edit',
  templateUrl: './beneficiary-edit.component.html',
  styleUrls: ['./beneficiary-edit.component.scss']
})
export class BeneficiaryEditComponent implements  OnInit, OnDestroy  {
  public beneficiaryDetail: any = {};
  private _unsubscribeAll: Subject<any>;
  constructor(
    private readonly _route : ActivatedRoute,
    private readonly beneficiaryService : BeneficiaryService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this._route.paramMap
    .pipe(
      takeUntil(this._unsubscribeAll),
      map((param) => param.get('id')),
      switchMap((id) =>
        this.beneficiaryService.getBeneficiaryDetail(id)
      ),
      tap((res: any) => {
        this.beneficiaryDetail = res.Response;
      }),
    )
    .subscribe();

  }
  ngOnDestroy(): void{
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  updateBeneficiary(event: any): void{
    console.log(event); return;
    this.beneficiaryService.saveBeneficiary(event)
    .then((res: any) => {
      if(res && !res.StatusCode){
      }else{
        
      }
    })
  }



}
