import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-disclaimer-banner',
    template: `
        <div id="DisclaimerInstance" class="{{classes}}" role="alert">
            {{message}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `
})
export class DisclaimerBannerComponent implements OnInit {
    _cookieName = '_disclaimer_cookie';
    _cookieValue = undefined;

    _bannerClasses = 'modal modal-dialog modal-lg center-block';

    // @HostBinding('styles') string = {
    //     position: 'absolute',
    //     height: '52'
    // };

    @Input() message: 'string';
    @Input() classes: 'string';
    @Input() ariaLabel: 'string';

    constructor(private cookieService: CookieService) {
    }

    ngOnInit() {
        const date = new Date();
        const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        this._cookieValue = (this.cookieService.get(this._cookieName)) ? this.cookieService.get(this._cookieName) : undefined;
        if ((this._cookieValue === undefined) || (new Date(now) > new Date(this._cookieValue))) {
            this.showDisclaimer();
        }
    }

    showDisclaimer() {
        console.log('show it!');
    }

    dismiss() {
        console.log('working on it! ', this._cookieValue);
    }
}
