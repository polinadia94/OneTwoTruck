import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loginPage=true;

  constructor(){

  }
ngOnInit(){
  //this.location.isCurrentPathEqualTo(path: string, query: string = ''): boolean;
}
}
