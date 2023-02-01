import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesservice/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObjects:any
  constructor(private notesservice:NotesService) { }
  isTrash:boolean=false;
  isArchive:boolean=false;

  ngOnInit(): void {
  }
  deletenote(){
    let reqdata={
      notesId:this.notesObjects.notesId,
    }
    console.log(reqdata);
    this.notesservice.usertrashnotes(reqdata).subscribe((response:any)=>{
      console.log(response);
      console.log("note trashed successfully",response);
    })
  }
  archivenote(){
    let reqdata={
      notesId:this.notesObjects.notesId,
    }
    console.log(reqdata);
    this.notesservice.userarchivenotes(reqdata).subscribe((response:any)=>{
      //console.log(response);
      console.log("note added to archieve",response);
    })
  }

}

