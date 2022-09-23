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
    RegistrarModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
