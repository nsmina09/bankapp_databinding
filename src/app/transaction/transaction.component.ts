import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  account: any;
  transaction: any;

  constructor(private ds: DataService) {
    this.account=this.ds.currentAccount;
    this.transaction=this.ds.getTransaction(this.account);
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
