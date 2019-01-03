'use strict';

/**
 * @ngdoc service
 * @name disclaimerCookieApp.DisclaimerCookie
 * @description
 * # DisclaimerCookie
 * Service in the disclaimerCookieApp.
 */
angular.module('disclaimerCookieApp')
    .service('DisclaimerCookie', ['$cookies', function ($cookies) {
        return {
            _delay: 2,
            _cookieName: '_disclaimer_cookie',
            _template: '<div id="DisclaimerInstance" class="alert alert-success text-center" role="alert">Disclaimer Notice<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',
            $setCookie: function () {
                var now = new Date(),
                    exp = new Date(now.getFullYear(), now.getMonth(), now.getDate() + this._delay);
                $cookies.put(this._cookieName, exp);
            },
            $showDisclaimer: function() {
                angular.element('body').append(this._template);
                angular.element('#DisclaimerInstance').css({
                    position:'absolute',
                    height:'52'
                }).addClass('modal modal-dialog modal-lg center-block')
                    .bind('click', this.$setCookie());
            },
            initialize: function () {
                var date = new Date(),
                    now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                var cookie = $cookies.get(this._cookieName);
                if ((cookie == undefined) || (new Date(now) > new Date(cookie))) {
                    this.$showDisclaimer();
                }
            }
        }
    }]);
