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
   this.ds.getTransaction(this.account)
   .subscribe((result:any)=>{
this.transaction=result.transaction;
console.log(this.transaction);

   },
   (result)=>{
    alert(result.error.message)
   })
    // console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
