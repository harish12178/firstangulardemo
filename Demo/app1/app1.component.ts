import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

  constructor(private router:Router) { }

  handle_signup(){
    this.router.navigate(['/signup']);
  }
  handle_login(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
