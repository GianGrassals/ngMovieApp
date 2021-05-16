import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListMoviesComponent } from './components/dashboard/list-movies/list-movies.component';
import { CardMovieComponent } from './components/dashboard/list-movies/card-movie/card-movie.component';
import { MovieComponent } from './components/dashboard/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListMoviesComponent,
    CardMovieComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
