import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  token:any
  constructor(private httpService: HttpService) { this.token=localStorage.getItem("token") }
  usercreatenotes(reqdata:any){

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization :'Bearer '+ this.token
      })
    }
    return this.httpService.postService('Notes/addnotes', reqdata, true,header)  // here data written in () is coming from  my .ts file
   }
   usergetallnotes(){
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization :'Bearer '+ this.token
      })
    }
   return this.httpService.getService('Notes/getnotesdata',true,header )
   }

   updatenotes(reqdata:any,notesId:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
  }
  return this.httpService.putService('Notes/updateNotes?notesId='+notesId,reqdata,true,header)
  }

  usertrashnotes(reqdata:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.putService('Notes/trash?notesId='+reqdata.notesId,reqdata,true,header)

   }
   userarchivenotes(reqdata:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Bearer '+this.token
      })
    }
    return this.httpService.putService('Notes/archive?notesId='+reqdata.notesId,reqdata,true,header)

   }
}

