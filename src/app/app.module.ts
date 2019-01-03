import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CookieService} from 'ngx-cookie-service';

import {AppComponent} from './app.component';
import {DisclaimerBannerComponent} from './disclaimer-banner/disclaimer-banner.component';


@NgModule({
    declarations: [AppComponent, DisclaimerBannerComponent],
    imports: [BrowserModule],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
