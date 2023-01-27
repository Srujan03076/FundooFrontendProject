import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordform!: FormGroup;
  token:any;

  constructor(private formbuilder:FormBuilder,private userService:UserService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this. resetpasswordform!=this.formbuilder.group({
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmpassword:['', [Validators.required, Validators.minLength(6)]]
    })
    this.token =this.activatedroute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  Resetpasswordsubmission(){
    let reqdata ={
      password:this.resetpasswordform.value.password,
      confirmpassword:this.resetpasswordform.value.confirmpassword

    }
    this.userService.userResetPassword(reqdata,this.token).subscribe((response :any) =>{
      console.log(response);
    })
  }
}