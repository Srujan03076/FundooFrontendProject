import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

const routes: Routes = [
  //   {
  //     path:'', redirectTo:"/login", pathMatch:'full' 
  //  },
    {
      path:'registration', component: RegistrationComponent
    },
    {
      path:'login', component:LoginComponent
    },
    {
      path:'forgotemail', component: ForgotemailComponent
    },
    {
      path:'resetpassword/:token', component: ResetpasswordComponent
    },
    { path:'note', component: CreatenotesComponent},
    {
      path:'dashboard',component:DashboardComponent,
      children:[
        {
          path:'', redirectTo:"/dashboard/note", pathMatch:'full' 
       },
        { path:'note', component: CreatenotesComponent}
  
      ]}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
