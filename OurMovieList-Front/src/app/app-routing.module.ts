import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
    {path:'', redirectTo:'/login', pathMatch: 'full' },
    // {path:'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
  
}

