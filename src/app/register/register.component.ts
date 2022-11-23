import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//(3rd executed rest part like variables)
//(4th executed user defined functions)
  constructor() {
    //(1st executed)
    //it automatically invokes when the obect is created
    //object initialization
  }

  ngOnInit(): void {
    //(2nd executed)
    //it is a life cycle hooks of angular
    //when the component is created at the same time it will initialize or authorize 
  }

}
