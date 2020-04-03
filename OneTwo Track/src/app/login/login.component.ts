import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InitialRecComponent } from '../initial-rec/initial-rec.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user={email:'', password:''}
  hide = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('User: ', this.user);
   
  }
  openDialog(){
    this.dialog.open(InitialRecComponent, {width: '350px', height: '350px'});
  }

}
