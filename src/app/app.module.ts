import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisclaimerBannerComponent } from './disclaimer-banner/disclaimer-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    DisclaimerBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
