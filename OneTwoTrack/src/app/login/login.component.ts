import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InitialRecComponent } from '../initial-rec/initial-rec.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';


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

  constructor(public dialog: MatDialog,
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginForm.value)
    const esito = this.accountService.login(this.loginForm.value.email, this.loginForm.value.password);
    if (esito) {
      console.log('utente trovato');
      this.router.navigate(["/dashboard"])
    } else {
      console.log("utente non trovato");
      this.message=true;
    }

  }
  /*submit(){
    const esito=this.accountService.login(this.loginForm.value.email,this.loginForm.value.password);
    if (esito){
      console.log('utente trovato')
    } else {
      console.log("utente non trovato");
    }
  }*/
  openDialog() {
    this.dialog.open(InitialRecComponent, { width: '350px', height: '350px' });
  }

}
