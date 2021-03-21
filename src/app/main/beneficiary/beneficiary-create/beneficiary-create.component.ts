import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';
@Component({
  selector: 'app-beneficiary-create',
  templateUrl: './beneficiary-create.component.html',
  styleUrls: ['./beneficiary-create.component.scss']
})
export class BeneficiaryCreateComponent implements OnInit {

  constructor(private readonly beneficiaryService : BeneficiaryService) {
   }

  ngOnInit(): void {
  }

  createBeneficiary(event: any): void{
    console.log(event); return;
    this.beneficiaryService.saveBeneficiary(event)
    .then((res: any) => {
      if(res && !res.StatusCode){        
      }else{
      }
    })
  }
}
