import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//declaring http header object globally
const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //databse creating
  // userDetails: any = {
  //   1000: {
  //     account: 1000,
  //     password: 1000,
  //     username: 'mina',
  //     balance: Number(4000000),
  //     transaction: []
  //   },
  //   1001: {
  //     account: 1001,
  //     password: 1001,
  //     username: 'hish',
  //     balance: Number(40000),
  //     transaction: []
  //   },
  //   1002: {
  //     account: 1002,
  //     password: 1002,
  //     username: 'suh',
  //     balance: Number(400),
  //     transaction: []
  //   }
  // }
  //user
  currentUser = '';

  //current account num
  currentAccount = '';

  constructor(private http: HttpClient) {
    this.currentAccount=localStorage.getItem('currentAccount')||''
   }

  //local strorage
  // saveDetails() {
  //   //database
  //   localStorage.setItem('database', JSON.stringify(this.userDetails));
  //   //currentuser
  //   localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  //   //currentaccount
  //   localStorage.setItem('currentAccount', JSON.stringify(this.currentAccount));
  // }
  // getDetails() {
  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || '');
  //   }
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  //   }
  //   if (localStorage.getItem('currentAccount')) {
  //     this.currentAccount = JSON.parse(localStorage.getItem('currentAccount') || '');
  //   }
  // }


  register(username: any, account: any, password: any) {
    var data = {
      username,
      account,
      password
    }
    // console.log('testing',this.http.post('http://localhost:3000/register', data));  
    return this.http.post('http://localhost:3000/register', data);
    // var user = this.userDetails;
    // if (account in user) {
    //   return false;
    // } else {
    //   user[account] = {
    //     account: account,
    //     password: password,
    //     username: username,
    //     balance: 0,
    //     transaction: [],
    //   }
    // }
    // this.currentUser = user[account].username;
    // this.currentAccount = account;
    // this.saveDetails();
    // console.log(user);
    // return true;
  }

  login(account: any, password: any) {
    let data = {
      account,
      password
    }
    return this.http.post('http://localhost:3000/login', data);
    // let user = this.userDetails;
    // if (account in user) {
    //   if (user[account].password == password) {
    //     this.currentUser = user[account].username;
    //     this.currentAccount = account;
    //     this.saveDetails();
    //     return 'success';
    //   } else {
    //     return 'password mismatsh';
    //   }
    // } else {
    //   return 'user is not registerd';
    // }
  }

  getToken() {
    //fetch token from localstorage
    const token = JSON.parse(localStorage.getItem('token') || '');
    //append token inside header
    let headers = new HttpHeaders();
    if (token) {
      options.headers = headers.append('token', token)
    } else {
      alert('token')
    }
    return options;
  }

  deposit(account: any, password: any, amt: any) {
    let data = {
      account,
      password,
      amount: amt,
    }
    return this.http.post('http://localhost:3000/deposite', data, this.getToken());
    // let user = this.userDetails;
    // if (account == this.currentAccount) {
    //   if (user[account].password == password) {
    //     user[account].balance += amount;
    //     user[account].transaction.push({
    //       type: 'credit',
    //       amount: amount,
    //     });
    //     // this.saveDetails();
    //     console.log(user);

    //     return user[account].balance;
    //   } else {
    //     alert('invalid pasword');
    //     return 'invalid pasword';
    //     //return false
    //   }
    // } else {
    //   alert('invalid user');
    //   return 'invalid user';
    //   //return false
    // }
  }

  withdraw(account: any, password: any, amount: any) {
    let data = {
      account,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/withdraw', data, this.getToken());
    // let cash = parseInt(amount);
    // let user = this.userDetails;
    // if (account in user) {
    //   if (user[account].password == password) {
    //     if (user[account].balance > cash) {
    //       user[account].balance -= cash;
    //       user[account].transaction.push({
    //         type: 'Debit',
    //         amount: amount,
    //       });
    //       // this.saveDetails();
    //       return user[account].balance;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
  }

  getTransaction(account: any) {
    let data={
      account
    }
    return this.http.post('http://localhost:3000/transaction', data, this.getToken());
    // return this.userDetails[account].transaction;
  }

  deleteAccount(account:any){
    return this.http.delete('http://localhost:3000/delete/'+account,this.getToken())
}

}