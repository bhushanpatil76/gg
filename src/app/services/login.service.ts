import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loginUser(postData:any){
    let path: any;
    path = environment.URL + "login"
    return this.httpClient.post(path, postData)
  }

  signupUser(postData:any){
    let path: any;
    //path = environment.URL + "signup_user"+ "?full_name="+postData.name;
    path = environment.URL + "signup_user"
    return this.httpClient.post(path, postData)
    
  }


}
