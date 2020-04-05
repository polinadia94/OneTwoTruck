import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { AccountService } from '../services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RememberUserService } from '../services/remember-user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContractFormComponent } from '../contract-form/contract-form.component';


@Component({
  selector: 'app-data-sheet',
  templateUrl: './data-sheet.component.html',
  styleUrls: ['./data-sheet.component.scss']
})
export class DataSheetComponent implements OnInit {
user: User;
  constructor(private dishservice: AccountService,
    private remember: RememberUserService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
  this.user = this.dishservice.getUser(id);
  }

  goBack(): void {
    this.location.back();
  }
  sendRequest(){
    this.remember.recipientAccount=this.user;
    this.dialog.open(ContractFormComponent, {width: '700px', height: '450px'});
    console.log("funziona");
  }
}


