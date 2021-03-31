import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public transactionList;
  public headerList = ['Product', 'Description', 'Price', 'Delivery', 'Action'];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.transaction().subscribe((res) => {
      this.transactionList = res;
    })
  }

  onCancel(item) {
    this.transactionService.cancelTransaction(item).subscribe()
  }
}
