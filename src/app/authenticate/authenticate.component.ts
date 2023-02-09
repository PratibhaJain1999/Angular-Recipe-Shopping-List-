import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  signingUp=true;
  success=false;
  error=false;
  errorMsg='';
  isLoading=false;


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  formAdded(addForm:NgForm){
 const email=addForm.value.email;
 const password=addForm.value.password;
 addForm.reset();
 this.isLoading=true;
 this.authService.signingUp(email,password).subscribe(dataResponse => {
  console.log(dataResponse);
  this.error=false;
  this.success=true;
  this.isLoading=false;
 },
 errorMeesage =>{
  this.error=true,
 this.success=false 
 this.errorMsg=errorMeesage
 this.isLoading=false

 }
 
 )

  }
  changeMode(){
    this.signingUp=!this.signingUp;
  }

}
