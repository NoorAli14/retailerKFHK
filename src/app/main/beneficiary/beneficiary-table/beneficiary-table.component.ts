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
    }
    ngOnChanges(changes) {
        // console.log(changes)
        this.setTable(changes['response']['currentValue'].data)
    }

}
