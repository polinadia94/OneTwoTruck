import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {USERS} from '../shared/users'
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../shared/user';
import { RememberUserService } from '../services/remember-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  contractPay:User;

  contractForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<ContractFormComponent>,
    private fb: FormBuilder,
    private remember: RememberUserService,
    private router:Router) { 
      this.createForm();
    }

  ngOnInit(): void {
    
  }
  createForm() {
    this.contractForm = this.fb.group({
      pay: '',
      durationContract: null,
      productRequest:'',
      contContractSend:'1',
    });
    }
  onSubmit() {
    this.contractPay= this.contractForm.value;
    const param= this.contractPay;
    this.remember.payment= param;
    
      
    
    this.router.navigate(['/onetwoTruckContract']);
    console.log(param)
    this.dialogRef.close();
  }
}
