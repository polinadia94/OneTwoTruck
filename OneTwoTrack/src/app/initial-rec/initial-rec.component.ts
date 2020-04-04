import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-rec',
  templateUrl: './initial-rec.component.html',
  styleUrls: ['./initial-rec.component.scss']
})
export class InitialRecComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InitialRecComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  closeCorporate() {

    this.dialogRef.close();
    this.router.navigate(["/corporate"]);

  }
  closeIndividual() {
    this.dialogRef.close();
    this.router.navigate(["/individual"]);
  }

}
