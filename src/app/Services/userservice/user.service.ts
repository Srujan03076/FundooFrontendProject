import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor( private httpservice:HttpService) { this.token = localStorage.getItem("token")}

  userRegister(reqdata: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.httpservice.postService('User/register', reqdata, false, header)
  }

  userSignin(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postService('User/login',reqdata,false,header)
  }
  userForgotemail(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postService('User/forgotpassword?email=srujantesting123%40gmail.com',reqdata,false,header)
  }
  userResetPassword(reqdata:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization :'Bearer '+ this.token
      })
    }
    return this.httpservice.putService('User/resetPassword', reqdata,true,header)
  }
}



