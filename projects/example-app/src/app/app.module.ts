import { HomeComponent } from './components/home.component';
import { SkyrimModule } from './../../../skyrim/src/public-api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyrimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
