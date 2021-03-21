import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiary-list.component.html',
  styleUrls: ['./beneficiary-list.component.scss']
})
export class BeneficiaryListComponent implements OnInit {

  data: any

  response = {
    status: 200,
    data: {
      list: [
        {
          beneficiaryId: 1,
          nickName: 'Hammy',
          fullName: 'Hammad',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 2,
          nickName: 'YK',
          fullName: 'Yasir Khan',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 3,
          nickName: 'Jack',
          fullName: 'Jason Momoa',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 4,
          nickName: 'Tariq Aion',
          fullName: 'Tariq Ahmed',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 5,
          nickName: 'HA',
          fullName: 'Haroon Ahmed',
          type: '',
          accountNo: '12XXXXXXXX12122'
        },
        {
          beneficiaryId: 6,
          nickName: 'Osama Aion',
          fullName: 'Osama Khan',
          type: '',
          accountNo: '72XXXXXXXX1212'
        },
        {
          beneficiaryId: 7,
          nickName: 'Noor Aion',
          fullName: 'Noor Ali',
          type: '',
          accountNo: '42XXXXXXXX1212'
        },
        {
          beneficiaryId: 8,
          nickName: 'Jobi',
          fullName: 'Jibran',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 9,
          nickName: 'Hassan Aion',
          fullName: 'Hassan Ijtaba',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 10,
          nickName: 'Ali Aion',
          fullName: 'Ali Jasim',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 11,
          nickName: 'Jack',
          fullName: 'Jason Momoa',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
        {
          beneficiaryId: 12,
          nickName: 'SR',
          fullName: 'Sheikh Razzaq',
          type: '',
          accountNo: '12XXXXXXXX1212'
        },
      ],
      totalRecords: 12,
      pageIndex: 0,
      pageSize: 20,
    },

  }

  constructor() { }

  ngOnInit(): void {
    // this.getBeneficiaryList()
    this.data = this.response
  }

  getBeneficiaryList(data?) {
    let res = []
   
    if (data) {
      console.log((data.pageIndex) * data.pageSize, (data.pageIndex + 1) * data.pageSize)
      res = this.response.data.list.slice((data.pageIndex) * data.pageSize, (data.pageIndex + 1) * data.pageSize);
      console.log(res)
      this.data = {
        status: 200,
        data: {
          list: res,
          totalRecords: 12,
          // pageIndex: 0,
          // pageSize: 20,
        },
      }
    }
  }
  childToParent(data) {
    console.log(data)
    if (data) {
      this.getBeneficiaryList(data)
    }
  }
}
