import { HomeModule } from './components/home/home.module';
import { RegistrarModule } from './components/registrar/registrar.module';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDumbComponent } from './components/login/dumb/dumb.component';
import { MenuDumbComponent } from './components/menu/dumb/dumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { ComumModule } from './modules/comum/comum.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LoginDumbComponent,
    MenuDumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComumModule,
    RegistrarModule,
    HomeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
