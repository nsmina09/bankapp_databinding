import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //(3rd executed rest part like variables)
  //(4th executed user defined functions)
  name = '';
  pswd = '';
  acnt = '';

  //registration model
registerForm=this.fb.group({
acnt:[],
pswd:[],
name:[],
})


  constructor(private fb:FormBuilder,private ds: DataService, private router: Router) {
    //(1st executed)
    //it automatically invokes when the obect is created
    //object initialization
  }

  ngOnInit(): void {
    //(2nd executed)
    //it is a life cycle hooks of angular
    //when the component is created at the same time it will initialize or authorize 
  }
  register() {
    //alert('clicked')
    console.log(this.registerForm);
    
    let username = this.registerForm.value.name;
    let password = this.registerForm.value.pswd;
    let account = this.registerForm.value.acnt;
    let result = this.ds.register(username, account, password);
    if (result) {
      alert('user registered successfully');
      this.router.navigateByUrl('home');
    }else{
      alert('user already registered');
      this.router.navigateByUrl('');
    }
  }
}
