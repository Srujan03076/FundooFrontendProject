import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl;
  constructor(private http: HttpClient) { }

  postService(url:string, reqdata: any, token: boolean=false,httpOptions:any){
    console.log(reqdata)
    return this.http.post(this.baseUrl+url, reqdata, token && httpOptions)
  }

  putService(url:string ,reqdata: any, token: boolean=true, httpOptions:any){
    console.log(reqdata)
    return this.http.put(this.baseUrl+url,reqdata,token && httpOptions)
  }
}
