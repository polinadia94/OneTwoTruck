import { Component, OnInit } from '@angular/core';
import {USERS} from '../shared/users';
import {User} from '../shared/user'

  

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  
  users=USERS;
  
  //type=this.accounts.values();

  constructor() { }

  ngOnInit(): void {
  }

}
