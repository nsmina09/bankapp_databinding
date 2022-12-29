import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    acnt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });


  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {
    let acnt = this.loginForm.value.acnt;
    let pswd = this.loginForm.value.pswd;
    if (this.loginForm.valid) {
       this.ds.login(acnt, pswd)
       .subscribe((result:any)=>{
        console.log('result',result);
        localStorage.setItem('currentUser',result.currentUser);
        localStorage.setItem('currentAccount',result.currentAccount)
        localStorage.setItem('token',JSON.stringify(result.token))

        alert(result.message);
        this.router.navigateByUrl('home');
       },
       (result)=>{
        alert(result.error.message);
       }
        )}
    //    })
    //   console.log(result);

    //   if (result == 'success') {
    //     alert(`login successfully ${result}`);
    //     this.router.navigateByUrl('home');
    //   } else {
    //     alert(`'login failed '${result}`);
    //   }
    // } else {
    //   alert('invalid datas');
    // }
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
