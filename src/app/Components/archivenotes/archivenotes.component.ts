
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesservice/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  notesArray:any;
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
  }
  CreatenoteSubmit(){
    

    this.notesService.usergetallnotes().subscribe((response :any) =>
    {
      console.log(response);
     this.notesArray=response.data
     console.log("Stored in array");
     console.log(this.notesArray);
     this.notesArray=this.notesArray.filter((result :any)=>{
      return result.isArchive==true;
     })
    })
  }
}
