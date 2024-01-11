import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistViewComponent } from './movielist-view/movielist-view.component';
import { MovielistItemComponent } from './movielist-item/movielist-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistViewComponent,
    MovielistItemComponent,
    SearchbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
