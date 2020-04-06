import { Component, OnInit } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
type=false; //type=true => "Azienda"  type=false => "Privato"
nome=this.remember.myAccount.legalName;
  constructor(private remember:RememberUserService) { }

  ngOnInit(): void {
    if (this.remember.myAccount.type=="Azienda"){
this.type=true;
    }
    else if( this.remember.myAccount.type=="Privato"){
      this.type=false;
    }
  }

}
