import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder,Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { CurdService } from '../curd.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formb:FormBuilder,public service:CurdService,private router:Router) { }

  departments:string[]=[
    "EIE","EEE","ECE","ETE","CSE","IT","Mech","Civil"
  ];
  

  signup_form=this.formb.group({
    id:[null],
    fname:['',Validators.required],
    age:[''],
    gender:[''],
    department:[''],
    email:['',[Validators.required,Validators.email]],
    phone:['']
    
  })
  onsignup(){
    console.log(this.signup_form.value);
    this.service.create(this.signup_form.value).subscribe(res => {
      console.log('New employee created!')
      
    });
    
}
  
  onclear(){
    this.signup_form.reset();
    this.reset_form();
  }
  reset_form(){
    this.signup_form.setValue({
    fname:'',
    age:'',
    gender:'',
    department:'',
    email:'',
    phone:''
    })
  }
  
  oncpchange(value:string){
    const phonecontrol=this.signup_form.get('phone');
    const emailcontrol=this.signup_form.get('email');
    if(value==='phone'){
      phonecontrol.setValidators([Validators.required,Validators.pattern("^[0-9]{10}$")]);
      emailcontrol.clearValidators();
    }
    else{
      phonecontrol.clearValidators();
      emailcontrol.setValidators([Validators.required,Validators.email])
    }
    phonecontrol.updateValueAndValidity();
    emailcontrol.updateValueAndValidity();
  }
  ngOnInit(): void {
  }

}
