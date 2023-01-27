import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm! :FormGroup
  constructor(private formbuilder:FormBuilder,private userService:UserService,private snack :MatSnackBar){}

  ngOnInit(): void {
    this.registerForm! = this.formbuilder.group({
      firstName: (['',( Validators.required)]) ,//this firstName name in .ts file and the formcontrolname in .html file should be exactly same
      lastName: (['',( Validators.required)]),
      email: ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      confirm: (['',( Validators.required)])
      
      })
  }
  RegisterSubmit(){
    let reqdata ={
     firstName:this.registerForm.value.firstName,
     lastName:this.registerForm.value.lastName,
     email:this.registerForm.value.email,
     password:this.registerForm.value.password
 }
 console.log(reqdata);
      this.userService.userRegister(reqdata).subscribe((response:any) =>{
      console.log(response);
      this.snack.open('registration succesful...', '',{
        duration: 2000,
        verticalPosition:'bottom'
      });
    });
  }
  
  }  

