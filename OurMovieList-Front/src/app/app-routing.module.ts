import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/Login/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/Login/register/register.component';
import { MovielistViewComponent } from './views/movielist-view/movielist-view.component';
import { ForgotPasswordComponent } from './views/Login/forgotPassword/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ForgotPasswordComponent},
  {path:'list', component: MovielistViewComponent },
    // {path:'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
  
}

