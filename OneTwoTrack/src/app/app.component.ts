import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd,  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hideElement = false;
  


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if ((event.url == '/login')|| (event.url == '/corporate')||(event.url == '/individual')) {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }
ngOnInit(){
 
}

}
