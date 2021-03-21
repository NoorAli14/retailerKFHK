import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {
  @Input() allInfo: any;
  @Input() step: any;
  @Output() saveAll = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  moveToStep(index: number){
    this.step.selectedIndex = index;
  }
  submit(){
     this.saveAll.emit();
  }

}
