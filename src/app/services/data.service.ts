import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //databse creating
  userDetails: any = {
    1000: {
      account: 1000,
      password: 1000,
      username: 'mina',
      balance: Number(4000000),
      transaction: []
    },
    1001: {
      account: 1001,
      password: 1001,
      username: 'hish',
      balance: Number(40000),
      transaction: []
    },
    1002: {
      account: 1002,
      password: 1002,
      username: 'suh',
      balance: Number(400),
      transaction: []
    }
  }
  //user
  currentUser = '';

  //current account num
  currentAccount = '';

  constructor() { }

  register(username: any, account: any, password: any) {
    var user = this.userDetails;
    if (account in user) {
      return false;
    } else {
      user[account] = {
        account: account,
        password: password,
        username: username,
        balance: 0,
        transaction: [],
      }
    }
    console.log(user);

    return true;
  }

  login(account: any, password: any) {
    let user = this.userDetails;
    if (account in user) {
      if (user[account].password == password) {
        this.currentUser = user[account].username;
        this.currentAccount = account;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  deposit(account: any, password: any, amt: any) {
    let amount = parseInt(amt);
    let user = this.userDetails;
    if (account in user) {
      if (user[account].password == password) {
        user[account].balance += amount;
        user[account].transaction.push({
          type: 'credit',
          amount: amount,
        });
        console.log(user);

        return user[account].balance;
      } else {
        alert('invalid pasword');
        return false;
      }
    } else {
      alert('invalid user');
      return false;
    }
  }

  withdraw(account: any, password: any, amount: any) {
    let cash = parseInt(amount);
    let user = this.userDetails;
    if (account in user) {
      if (user[account].password == password) {
        if (user[account].balance > cash) {
          user[account].balance -= cash;
          user[account].transaction.push({
            type: 'Debit',
            amount: amount,
          })
          return user[account].balance;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getTransaction(account: any) {
    return this.userDetails[account].transaction;
  }
}
