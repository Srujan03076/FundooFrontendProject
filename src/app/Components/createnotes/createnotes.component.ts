import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notesservice/notes.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  createnoteForm!: FormGroup;
  token:any
  display:boolean=true;
  constructor(private formbuilder:FormBuilder,private noteservices:NotesService,private activatedroute:ActivatedRoute ){}
 

  ngOnInit(): void {
    this.createnoteForm = this.formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', (Validators.required)]
    })
    this.token =this.activatedroute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
 
  clicktitle(){
    this.display=false;
  }
    
CreatenoteSubmit(){
  let reqdata ={
    title:this.createnoteForm.value.title,
    description:this.createnoteForm.value.description

  }
  this.noteservices.usercreatenotes(reqdata).subscribe((response :any) =>{
    console.log(response);
  })
}
}
