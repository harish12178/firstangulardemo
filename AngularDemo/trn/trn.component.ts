import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trn',
  templateUrl: './trn.component.html',
  styleUrls: ['./trn.component.css']
})
export class TrnComponent implements OnInit {

  trn: any[] = [
    {trn:'1234567890',date:'01/07/2020'},
   {trn:'1234567891',date:'02/07/2020'},
   {trn:'1234567892',date:'30/06/2020'},
    {trn:'1234567893',date:'29/06/2020'}, 
    {trn:'1234567894',date:'02/07/2020'}];
    
  constructor() { }

  ngOnInit(): void {
  }

}
