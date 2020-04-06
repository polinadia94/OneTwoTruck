import { Component, OnInit } from '@angular/core';
import { USERS } from '../shared/users'

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.scss']
})
export class ListContractComponent implements OnInit {
  users=USERS;

  constructor() { }

  ngOnInit(): void {
  }


}
