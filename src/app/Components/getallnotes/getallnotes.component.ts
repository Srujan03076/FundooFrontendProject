import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesservice/notes.service';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notesArray:any;
  constructor(private notes: NotesService ) { }

  ngOnInit(): void {
    this.CreatenoteSubmit()
  }

  CreatenoteSubmit(){
    

    this.notes.usergetallnotes().subscribe((response :any) =>{
      console.log(response);
     this.notesArray=response.data
     console.log(this.notesArray);
  // this.notesArray.reverse()
  this.notesArray=this.notesArray.filter((result :any)=>{
    return result.isArchive==false 
    })
  })
 }
}
