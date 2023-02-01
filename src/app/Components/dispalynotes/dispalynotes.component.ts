import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-dispalynotes',
  templateUrl: './dispalynotes.component.html',
  styleUrls: ['./dispalynotes.component.scss']
})
export class DispalynotesComponent implements OnInit {
  @Input() notesArraylist:any;
  
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialogBox(notes: any): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: '900px',
      height:'300px',     
      data: notes
    });

    dialogRef.afterClosed().subscribe(result =>{
       console.log("After Update",result );
       })
      }
    }
    


      

