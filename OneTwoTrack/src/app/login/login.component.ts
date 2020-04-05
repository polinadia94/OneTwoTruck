import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InitialRecComponent } from '../initial-rec/initial-rec.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import {ITEMS} from '../shared/itemsCarousel';
import { RememberUserService } from '../services/remember-user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  message=false;
  slides=ITEMS;
  constructor(public dialog: MatDialog,
    private accountService: AccountService,
    private remeber: RememberUserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //LoginButton Function
  onSubmit() {
    console.log(this.loginForm.value)
    const esito = this.accountService.login(this.loginForm.value.email, this.loginForm.value.password);
    if (esito) {
      console.log('utente trovato');
      this.remeber.myAccount=esito;
      this.router.navigate(["/dashboard"])
      
    } else {
      console.log("utente non trovato");
      this.message=true;
    }

  }
//RegisterButton Function
  openDialog() {
    this.dialog.open(InitialRecComponent, { width: '350px', height: '350px' });
  }

  //paremetri carosello
 
}
