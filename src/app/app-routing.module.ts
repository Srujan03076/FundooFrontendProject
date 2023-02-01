import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
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
    {
      path:'dashboard',component:DashboardComponent,


      children:[
        {
          path:'', redirectTo:"dashboard/getallnotes", pathMatch:'full' 
       },
        // { path:'note', component: GetallnotesComponent},
        { path:'getallnotes',component:GetallnotesComponent},// inside getallnotes we have given the selector of createnotes and display notes thats why below here we commented out the path of create notes & displaynotes 
        { path:'archive',component:ArchivenotesComponent}
      ]}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
