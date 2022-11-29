import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    let acnt = this.acnt;
    let pswd = this.pswd;
    let result = this.ds.login(acnt, pswd);
    if (result) {
      alert('login successfully');
      this.router.navigateByUrl('home');
    } else {
      alert('login failed');
    }
  }
  // login() {
  //   var acno = this.acnt;
  //   var pswd = this.pswd;
  //   var user = this.ds.userDetails;
  //   if(acno in user){
  //     if(pswd==user[acno].password){
  //       alert('logged in successfully');
  //       this.router.navigateByUrl('home');
  //     }else{
  //       alert('incorrect paswword');
  //     }
  //   }else{
  //     alert('invalid account num');
  //   }
  // }


  // login(a:any,p:any) {
  //   var acno = a.value;
  //   var pswd = p.value;
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
