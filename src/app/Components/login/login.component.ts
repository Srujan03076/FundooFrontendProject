import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private formbuilder:FormBuilder ,private userService:UserService ,private snack: MatSnackBar){}

  ngOnInit(): void {
    this.signinForm=this.formbuilder.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',(Validators.required)]
    })
  }
  LoginSubmit(){
    let reqdata ={
     emailId:this.signinForm.value.emailId,
     password:this.signinForm.value.password

    }
    this.userService.userSignin(reqdata).subscribe((response :any) =>{
      console.log(response);
      localStorage.setItem('token',response.data)
      this.snack.open('login succesful...', '',{
        duration: 2000,
        verticalPosition:'bottom'
      });
    });
  }
  } 