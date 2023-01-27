import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreatenotesComponent } from './Components/createnotes/createnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotemailComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   MatInputModule,
   MatFormFieldModule,
   MatSnackBarModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatListModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
