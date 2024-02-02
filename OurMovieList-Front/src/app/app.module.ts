import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistViewComponent } from './views/movielist-view/movielist-view.component';
import { MovielistItemComponent } from './movielist-item/movielist-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from './views/Login/login/login.component';
import { RegisterComponent } from './views/Login/register/register.component';
import { ForgotPasswordComponent } from './views/Login/forgotPassword/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistViewComponent,
    MovielistItemComponent,
    SearchbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
