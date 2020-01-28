import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.css']
})
export class DataTransferComponent implements OnInit {
Invoice : any[] = [];
selectInvoice: any[] = [] ;
  constructor() {
      let checkId : number ;
     this.Invoice = JSON.parse(localStorage.getItem('invoice'));
      console.log(this.Invoice);

  }

  ngOnInit() {
  }

}
