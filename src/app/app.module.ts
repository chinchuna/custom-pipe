import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
