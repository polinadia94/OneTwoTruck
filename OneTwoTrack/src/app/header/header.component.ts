import { Component, OnInit } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
