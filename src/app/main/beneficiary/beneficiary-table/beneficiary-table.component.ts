import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-beneficiary-table',
    templateUrl: './beneficiary-table.component.html',
    styleUrls: ['./beneficiary-table.component.scss', '../../../styles/table.scss']
})
export class BeneficiaryTableComponent implements OnInit {

    // // public truncateTextLength = truncateTextLength;
    // public dataSource = new MatTableDataSource<any>();
    // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    // @ViewChild(MatSort, {static: true}) sort: MatSort;
    // public displayedColumns : string[] =  ['Reseller', 'CompanyName', 'ContactPerson', 'Email', 'Phone', 'PricingTitle', 'BoardedDate'];
    // @Input() data: any;
    // public actionControlOnHover = -1;
    // constructor() { }

    // ngOnInit(): void{
    //   if(this.data){
    //     this.dataSource.data = this.data.merchants;
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // }
    // openDialog(obj) {
    //   const object:any = {
    //     SendTo: obj.MerchantAccountSetup.MerchantEmail,
    //     Subject: obj.EmailSubject,
    //     BodyContent: obj.EmailBody,
    //     MerchantName: `${obj.FirstName} ${obj.LastName}`,
    //     PartnerId: obj.PartnerId
    //   }
    //   // const dialogRef = this._dialog.open(EmailDialogComponent, {width: '660px'});
    //   // dialogRef.componentInstance.data = object;
    // } 

    @Input('parentToChild') response;

    @Output() childToParent = new EventEmitter<any>();


    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    displayedColumns: string[] = ['count', '1', '2', '3', '4', 'A'];
    dataSource = new MatTableDataSource();

    constructor() { }

    ngOnInit() {
        console.log(this.response)
        this.setPaginator()
        if (this.response) {
            this.setTable(this.response)
        }
        this.paginator.page.subscribe(() => {
            this.sendToParent()
        })
    }
    setTable(data) {
        this.dataSource.data = this.response['data']['list']
        this.paginator.length = this.response['data']['totalRecords']
    }
    sendToParent() {
        this.childToParent.emit({
            pageSize: this.paginator.pageSize,
            pageIndex: this.paginator.pageIndex,
        });
    }

    setPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 20
        // this.sendToParent()
    }
    ngOnChanges(changes) {
        console.log(changes)
        console.log(changes.response.currentValue.data)
        this.setTable(changes.response.currentValue.data)
    }
    // search() {
    //     this.setPaginator()
    //     // this.getAllUser(this.searchForm.value, this.paginator.pageIndex, this.paginator.pageSize)
    // }
    // clear() {
    //     // this.searchForm.reset()
    //     this.ngOnInit()
    // }

}
