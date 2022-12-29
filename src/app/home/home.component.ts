import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  acno = '';
  //withdrawal
  withaccount = '';
  withdpswd = '';
  withdamount = '';

  withdrawForm = this.fb.group({
    withaccount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    withdpswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    withdamount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })


  withdrawel() {
    let account = this.withdrawForm.value.withaccount;
    let amount = this.withdrawForm.value.withdamount;
    let password = this.withdrawForm.value.withdpswd;
    if (this.withdrawForm.valid) {
      this.ds.withdraw(account, password, amount)
        .subscribe((result: any) => {
          alert(result.message)
        },
          result => {
            alert(result.error.message)
          })
      //   if (result) {
      //     alert(`${amount}is debited and your current balance is ${result}`);
      //   } else {
      //     alert('something went wrong....please check your accountnumber');
      //   }
      // } else {
      //   alert('invalid datas')
    }

  }

  //deposite
  depacnt = '';
  deppswd = '';
  depamount = '';

  depoForm = this.fb.group({
    depacnt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    deppswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    depamount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })



  deposite() {
    let account = this.depoForm.value.depacnt;
    let password = this.depoForm.value.deppswd;
    let amount = this.depoForm.value.depamount;
    if (this.depoForm.valid) {
      this.ds.deposit(account, password, amount)
        .subscribe((result: any) => {
          alert(result.message)
          console.log(result);

        },
          result => {
            alert(result.error.message);
            console.log(result);
          })
      //   if (result) {
      //     alert(`${amount} is added and current balance is ${result}`)
      //   } else {
      //     alert('something went wrong...please check your accountnumber')
      //   }
      // } else {
      //   alert('invalid data')
    }
  }
  logout() {
    //remove current user and current account from local storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentAccount');
    localStorage.removeItem('token');
     this.router.navigateByUrl('');
  }
  user = '';
  //current date time
  currentDate: any;

  //dependancy injection
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    if(localStorage.getItem('currentUser')){
    this.user = localStorage.getItem('currentUser') || '';
    this.currentDate = new Date();
    }
  }

  delete() {
    this.acno = JSON.parse(localStorage.getItem('currentAccount') || '');
    console.log(this.acno);
  }
  onCancel() {
    this.acno = '';
  }
  ngOnInit(): void {
    // this.user = localStorage.getItem('currentUser') || '';
     if(!localStorage.getItem('currentUser')){
       alert('plaese login');
       this.router.navigateByUrl('');
     }
  }
  onDelete(event: any) {
    this.ds.deleteAccount(event)
      .subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('')
      }, result => {
        alert(result.error.message)
      })
  }
}
