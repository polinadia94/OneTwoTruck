import { Component, OnInit } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
type=false;
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
