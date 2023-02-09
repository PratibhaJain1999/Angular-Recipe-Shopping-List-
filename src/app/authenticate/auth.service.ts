import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signingUp(email:string ,password:string){
   return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBqge3SrCUy7wrzziiprAU4O8PHR5OfNEY',{
    email:email,
    password:password,
    returnSecureToken:true
   }).pipe(catchError(resError =>{
    let errorMessage='An unknown error occured!';
    if(resError.error.error.message =='EMAIL_EXISTS'){
      errorMessage ='This email exists already';
    }
    return throwError(errorMessage);
    
   }))
  }
  

  
}
/**'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA8cGeHSAynDWKO171lsRBadJiERj8GVsw',*/