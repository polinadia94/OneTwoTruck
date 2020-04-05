import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  visible=false
  


  constructor(private router:Router){

  }
ngOnInit(){
  if (this.router.url == '/login' || this.router.url== ""
  || this.router.url == "/individual" || this.router.url =="/corporate"){
    this.visible=false;
  }
  else this.visible=true;
 
}

}
