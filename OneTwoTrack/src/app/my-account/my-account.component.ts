import { Component, OnInit } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  accountForm:FormGroup
 
 
user=this.remember.myAccount;
name=this.user.legalName
  constructor(private remember:RememberUserService,
    private fb: FormBuilder,) { 
      this.createForm();
    }

  ngOnInit(): void {
    console.log(this.user)
  }
  createForm() {
    this.accountForm = this.fb.group({
      legalName: '',
      type: 'Azienda',
      phoneNumber: null,
      email: '',
      password:'',
      legalNumber:'',
      
      legalLocation:'',
      operationsLocation:'',
      tin:'',
      availability: false,
      description:'',
      product:'',
     
     
      
    });
  
  }

  onSubmit() {
    this.user=this.accountForm;
    console.log(this.remember.myAccount)
  
    
// Questa funzione, andrà a modificare il database in cui sono conservati tutti gli account
  }


}
