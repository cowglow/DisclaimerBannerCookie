import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-disclaimer-banner',
    template: `
        <div id="DisclaimerInstance" class="{{classes}}" role="alert" style="position:fixed; height:52px;">
            {{message}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `
})
export class DisclaimerBannerComponent implements OnInit {
    _cookieName = 'disclaimer_cookie'; // cookie name
    _delay = 2; // two days

    @Input() message: 'string';
    @Input() classes: 'string';
    @Input() ariaLabel: 'string';

    constructor(private cookieService: CookieService) {
    }

    ngOnInit() {
        const date = new Date();
        const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        if (this.cookieService.check(this._cookieName) || (new Date(now) > new Date(this.cookieService.get(this._cookieName)))) {
            this.hideBanner();
        }
    }

    dismiss() {
        const now = new Date();
        const exp = new Date(now.getFullYear(), now.getMonth(), now.getDate() + this._delay);
        this.cookieService.set('disclaimer_cookie', exp.toString(), exp);
        this.hideBanner();
    }

    hideBanner() {
        document.querySelector('#DisclaimerInstance').setAttribute('style', 'display:none;');
    }
}
