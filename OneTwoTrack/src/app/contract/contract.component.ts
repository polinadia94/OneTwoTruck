import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RememberUserService } from '../services/remember-user.service';
import * as jspdf from 'jspdf'; 
 
import html2canvas from 'html2canvas'; 



@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
   @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  constructor(private remember:RememberUserService) { }
  myAccount=this.remember.myAccount;
  recipientAccount=this.remember.recipientAccount;
  payment=this.remember.payment;
  dateNow : Date = new Date();

  ngOnInit(): void {
  }
 
  generatePdf() 
    { 
    var data = document.getElementById('documentToConvert'); 
    html2canvas(data).then(canvas => { 
    // Few necessary setting options 
    var imgWidth = 208; 
    var pageHeight = 295; 
    
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight; 
    
    const contentDataURL = canvas.toDataURL('image/png') 
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
    var position = 0; 
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
     heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save('MYPdf.pdf'); // Generated PDF  
    
    }); 
   
    } 
   
  

goBack(){

}
}
