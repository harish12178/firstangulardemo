import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  login_form=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  onsubmit(){
    console.log(this.login_form.value);
    
  }

  ngOnInit(): void {
  }

}
