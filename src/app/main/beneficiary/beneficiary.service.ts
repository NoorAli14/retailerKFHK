import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../services/base.service';
@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService extends BaseService {

  constructor(public http : HttpClient) {
    super(http)
   }

   getBeneficiaryDetail(id: string) {
    const url = `${environment.apiURL}Beneficiary/GetBeneficiaryById/${id}`;
    return this.get(url);
  }

  saveBeneficiary(obj: any) {
    const url = `${environment.apiURL}Beneficiary`;
    return this.post(url, obj);
  }

}
