import { Injectable } from '@angular/core';
import { SERVERCONFIG, AuthUser } from '../_shared/model/app.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleLogin, LoginUser, RegisterUser } from '../_shared/model/resume-builder';
import { Observable } from 'rxjs';
import { AuthService } from '../_shared/helpers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  API_BACKEND = `${SERVERCONFIG.BACKEND}/api`;
  headers:HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.setHeaders();
  }

  setHeaders(){
    if(this.authService.authUser){
    this.headers = new HttpHeaders({ Authorization:`Token ${this.authService.authUser.token}` });
  }
}

  googleLogin(googleLogin:GoogleLogin){
    let url =`${this.API_BACKEND}/google_login/`;
    return this.http.post(url, googleLogin) as Observable<any>;
  }
  userlogout(){
    this.setHeaders();
    let url =`${this.API_BACKEND}/logout/`;
    return this.http.get(url,{headers:this.headers}) as Observable<any>;
  }
  userLogin(loginuser:LoginUser){
    let data={email:loginuser.email, password:loginuser.password};
    let url =`${this.API_BACKEND}/login/`;
    return this.http.post(url,data) as Observable<any>;
  }

  userSignUp(signUp:RegisterUser){
    let data={
        email:signUp.email,
        username:signUp.username,
        first_name:signUp.first_name,
        last_name:signUp.last_name,
        password2:signUp.password2,
        password:signUp.password};
    let url =`${this.API_BACKEND}/register/`;
    return this.http.post(url,data) as Observable<any>;
  }





}
