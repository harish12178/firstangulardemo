import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder,private router:Router){}
  application_form=this.fb.group({
    first_name:['',Validators.required],
    last_name:[''],
    age:[],
    email:[]
  })
  


  onsubmit(){
    console.log(this.application_form.value);
    console.log(this.application_form.get('first_name').value);
  }
  get fname(){
    return this.application_form.get('first_name');
  }
}
