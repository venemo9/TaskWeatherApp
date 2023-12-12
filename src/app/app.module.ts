import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { WeatherComponent } from './weather/weather.component';


 

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ErrorPageComponent,
    WeatherComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    FormsModule
    
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
