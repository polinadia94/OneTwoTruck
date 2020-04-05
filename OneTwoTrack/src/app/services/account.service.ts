import { Injectable } from '@angular/core';
import { USERS } from '../shared/users'



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  users = USERS;
  


  constructor() { }

  login(mail: string, password: string) {
    const foundUser = this.users.find(function (utente) {
      return utente.email == mail && utente.password == password;
    });
    return foundUser;
  }
}


