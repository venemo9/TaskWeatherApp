import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { authGuard } from './guards/auth.guard';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'to-do', component: TodoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'weather', component:WeatherComponent,
    canActivate: [authGuard]
  },
  {
    path:'', redirectTo:'login',  pathMatch:'full'
  },
  {
    path:'**', component:ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
