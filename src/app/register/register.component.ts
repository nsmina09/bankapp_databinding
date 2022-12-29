import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  registerForm = this.fb.group({
    acnt: ['', [Validators.pattern('[0-9]*'), Validators.required]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-z]*')]],
  })


  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {
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
    console.log(this.registerForm.get('name')?.errors);


    let username = this.registerForm.value.name;
    let password = this.registerForm.value.pswd;
    let account = this.registerForm.value.acnt;

    if (this.registerForm.valid) {
      this.ds.register(username, account, password)
        .subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('')
        },
        (result)=>{
          alert(result.error.message)
        }
     );
        

      //   if (result) {
      //     alert('user registered successfully');
      //     this.router.navigateByUrl('home');
      //   } else {
      //     alert('user already registered');
      //     this.router.navigateByUrl('');
      //   }
      // } else {
      //   alert('invalid data')
      // }
    } else {
      alert('oops something went wrong...try again later')
    }
  }
}
