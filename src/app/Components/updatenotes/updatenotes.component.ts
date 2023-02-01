import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notesservice/notes.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  title:any;
  description:any;
  id:any;
  //color:any;


  constructor(private  notes:NotesService,@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogbox: MatDialogRef<UpdatenotesComponent>
  ) {
    this.title=data.title,
    this.description=data.description,
    this.id=data.notesId
    //this.color=data.color
    
   }

  ngOnInit(): void {
    
  }
  closeDialogBox(){
    let reqdata={
      title:this.title,
      description:this.description
      //color=this.color
      
    }
      this.notes.updatenotes(reqdata,this.id).subscribe((response:any)=>{
        console.log(response);
       this.dialogbox.close();
      })
    }
  }