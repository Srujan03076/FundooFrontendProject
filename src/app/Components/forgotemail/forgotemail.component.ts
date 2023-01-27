import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

  forgotemailform!:FormGroup
  constructor(private formbuilder:FormBuilder,private userService: UserService,private snack:MatSnackBar ){}

  ngOnInit(): void {
    this.forgotemailform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
    
  }
  ForgotemailSubmission(){
    let reqdata ={
      email:this.forgotemailform.value.email
    
    }
    console.log(reqdata);
    this.userService.userForgotemail(reqdata).subscribe((response :any) =>{
      console.log(response);
      this.snack.open(' foregetemail succesful...', '',{
        duration: 2000,
        verticalPosition:'bottom'
      });
    });
  }
  
  }  