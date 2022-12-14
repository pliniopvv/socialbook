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
import { ComumModule } from './modules/comum/comum.module';
import { FeedModule } from './components/feed/feed.module';
import { httpInterceptorProviders } from './core/auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LoginDumbComponent,
    MenuDumbComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ComumModule,
    RegistrarModule,
    HttpClientModule,
    HomeModule,
    ReactiveFormsModule,
    FeedModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
