import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'Your perfect banking partner';
  account = 'Enter your account number';
  acnt = '';
  pswd = '';
  //databse creating
  userDetails: any = {
    1000: {
      account: 1000,
      password: 1000,
      username: 'mina',
      balance: 4000000,
    },
    1001: {
      account: 1001,
      password: 1001,
      username: 'hish',
      balance: 40000,
    },
    1002: {
      account: 1002,
      password: 1002,
      username: 'suh',
      balance: 400,
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // login() {
  //   var acno = this.acnt;
  //   var pswd = this.pswd;
  //   var user = this.userDetails;
  //   if(acno in user){
  //     if(pswd==user[acno].password){
  //       alert('logged in successfully');
  //     }else{
  //       alert('incorrect paswword');
  //     }
  //   }else{
  //     alert('invalid account num');
  //   }
  // }
  login(a:any,p:any) {
    var acno = a.value;
    var pswd = p.value;
    var user = this.userDetails;
    if(acno in user){
      if(pswd==user[acno].password){
        alert('logged in successfully');
      }else{
        alert('incorrect paswword');
      }
    }else{
      alert('invalid account num');
    }
  }

  acnoChange(event: any) {
    console.log(event);
    this.acnt = event.target.value;
    console.log(this.acnt);
  }

  pswdChange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
  }
}
