import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //withdrawal
  withaccount = '';
  withdpswd = '';
  withdamount = '';
  withdrawel() {
    let account = this.withaccount;
    let amount = this.withdamount;
    let password = this.withdpswd;
    let result = this.ds.withdraw(account, password, amount);
    if (result) {
      alert(`${amount}is debited and your current balance is ${result}`);
    } else {
      alert('something went wrong');
    }

  }

  //deposite
  depacnt = '';
  deppswd = '';
  depamount = '';
  deposite() {
    let account = this.depacnt;
    let password = this.deppswd;
    let amount = this.depamount;
    let result = this.ds.deposit(account, password, amount);
    if (result) {
      alert(`${amount} is added and current balance is ${result}`)
    } else {
      alert('something went wrong')
    }
  }

  user='';



  constructor(private ds: DataService) { 
    this.user=this.ds.currentUser;
  }

  ngOnInit(): void {
  }

}
