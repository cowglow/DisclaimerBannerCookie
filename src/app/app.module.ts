import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisclaimerBannerDirective } from './disclaimer-banner.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisclaimerBannerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
