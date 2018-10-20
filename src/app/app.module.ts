import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';


// Services
import {AuthService} from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
