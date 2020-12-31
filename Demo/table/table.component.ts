import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { CurdService } from '../curd.service';
import { Employees } from '../employees';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  key:string;
  displayedColumns: string[] = ['fname', 'age', 'gender','department','email','phone'];
  

   dataSource:MatTableDataSource<any>
    
 

  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  

  constructor(public service:CurdService,private router:Router) { }

  handlefilter(){
    this.dataSource.filter=this.key.trim().toLowerCase();
  }

  handlecreate(){
    this.router.navigate(['/signup']);
  };

  ngOnInit(): void {
    
    

    this.service.getAll().subscribe((data: Employees[])=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })  
    
  }
  

}
