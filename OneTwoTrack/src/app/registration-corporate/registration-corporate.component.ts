import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User, TYPE } from '../shared/user';
import { Router } from '@angular/router';
import { RememberUserService } from '../services/remember-user.service';


const PRODUCT= ['General Cargo','Catena del Freddo','Alimentari','Merci Pericolose','Trasporti Straordinari']

@Component({
  selector: 'app-registration-corporate',
  templateUrl: './registration-corporate.component.html',
  styleUrls: ['./registration-corporate.component.scss']
})

export class RegistrationCorporateComponent implements OnInit {


  accountFormOne: FormGroup;
  accountFormTwo:FormGroup
 
  accountInfo: User;
  accountDescription:User;
  type = TYPE;
  product:User["product"]= PRODUCT;
  isOptional = false;

  
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private remeber: RememberUserService,
    ) {
    this.createForm();
  }

  ngOnInit() {
   
  }
  
  createForm() {
    this.accountFormOne = this.fb.group({
      legalName: '',
      type: 'Azienda',
      phoneNumber: null,
      email: '',
      
      legalNumber:'',
      legalLocation:'',
      operationsLocation:'',
      tin:'',
      
      
    });
    this.accountFormTwo = this.fb.group({
     
      availability: false,
      description:'',
      product:'',
      password:'',
      legalNumber:'',
     
      
    });
  
  }

  onSubmit() {
  this.accountInfo = this.accountFormOne.value
  this.accountDescription= this.accountFormTwo.value;
  const myAccount=Object.assign(this.accountInfo,this.accountDescription );
  this.remeber.myAccount = myAccount
  console.log(this.remeber.myAccount)
  
    
// Questa funzione, andrà ad implementare il database in cui sono conservati tutti gli account
  }

  onDash(){  
    this.router.navigate(["/dashboard"]);
    
  }


}
