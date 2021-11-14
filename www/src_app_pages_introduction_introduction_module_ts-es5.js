(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_introduction_introduction_module_ts"], {
    /***/
    57652:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/introduction/introduction-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroductionPageRoutingModule": function IntroductionPageRoutingModule() {
          return (
            /* binding */
            _IntroductionPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _introduction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./introduction.page */
      109);

      var routes = [{
        path: '',
        component: _introduction_page__WEBPACK_IMPORTED_MODULE_0__.IntroductionPage
      }];

      var _IntroductionPageRoutingModule = function IntroductionPageRoutingModule() {
        _classCallCheck(this, IntroductionPageRoutingModule);
      };

      _IntroductionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IntroductionPageRoutingModule);
      /***/
    },

    /***/
    11539:
    /*!***********************************************************!*\
      !*** ./src/app/pages/introduction/introduction.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroductionPageModule": function IntroductionPageModule() {
          return (
            /* binding */
            _IntroductionPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./introduction-routing.module */
      57652);
      /* harmony import */


      var _introduction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./introduction.page */
      109);

      var _IntroductionPageModule = function IntroductionPageModule() {
        _classCallCheck(this, IntroductionPageModule);
      };

      _IntroductionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _introduction_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroductionPageRoutingModule],
        declarations: [_introduction_page__WEBPACK_IMPORTED_MODULE_1__.IntroductionPage]
      })], _IntroductionPageModule);
      /***/
    },

    /***/
    109:
    /*!*********************************************************!*\
      !*** ./src/app/pages/introduction/introduction.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IntroductionPage": function IntroductionPage() {
          return (
            /* binding */
            _IntroductionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_introduction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./introduction.page.html */
      10868);
      /* harmony import */


      var _introduction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./introduction.page.scss */
      22231);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../assets/feed.json */
      90621);

      var _IntroductionPage = /*#__PURE__*/function () {
        function IntroductionPage() {
          _classCallCheck(this, IntroductionPage);

          this.feed = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__;
          this.currentPlaying = null;
        }

        _createClass(IntroductionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "didScroll",
          value: function didScroll() {
            var _this = this;

            if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)) {
              return;
            } else if (this.currentPlaying && !this.isElementInViewport(this.currentPlaying)) {
              this.currentPlaying.pause();
              this.currentPlaying = null;
            }

            this.videoPlayers.forEach(function (player) {
              if (_this.currentPlaying) {
                return;
              }

              var nativeElement = player.nativeElement;

              var inView = _this.isElementInViewport(nativeElement);

              if (inView) {
                _this.currentPlaying = nativeElement;
                _this.currentPlaying.muted = true;

                _this.currentPlaying.play();
              }
            });
          }
        }, {
          key: "openFullscreen",
          value: function openFullscreen(elem) {
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitEnterFullscreen) {
              elem.webkitEnterFullscreen();
              elem.enterFullscreen();
            }
          }
        }, {
          key: "isElementInViewport",
          value: function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
          }
        }]);

        return IntroductionPage;
      }();

      _IntroductionPage.ctorParameters = function () {
        return [];
      };

      _IntroductionPage.propDecorators = {
        videoPlayers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChildren,
          args: ['player']
        }]
      };
      _IntroductionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-introduction',
        template: _raw_loader_introduction_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_introduction_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IntroductionPage);
      /***/
    },

    /***/
    22231:
    /*!***********************************************************!*\
      !*** ./src/app/pages/introduction/introduction.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "video {\n  max-width: 100%;\n  max-height: 100%;\n  display: inline-block;\n}\n\n.card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.bar {\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  transform: translate(0%, -150%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0YiLCJmaWxlIjoiaW50cm9kdWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJhciB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMTUwJSk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    10868:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/introduction/introduction.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>آموزش‌ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"didScroll()\">\n  <div class=\"ion-padding\">\n    <ion-card *ngFor=\"let item of feed\">\n      <ion-card-header>\n        <ion-card-title>{{ item.title }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ item.text }}\n        <div *ngIf=\"item.src\" class=\"ion-text-center\">\n          <video #player playsinline preload=\"auto\">\n            <source [src]=\"item.src\" type=\"video/mp4\" />\n          </video>\n          <div class=\"bar\">\n            <ion-button (click)=\"openFullscreen(player)\" color=\"light\" fill=\"expand\">\n              <ion-icon slot=\"icon-only\" name=\"easel\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    90621:
    /*!******************************!*\
      !*** ./src/assets/feed.json ***!
      \******************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = JSON.parse('[{"id":1,"title":"نحوه جستجو","src":"http://ketabyab.mohammad-malekzad.ir/assets/movie/search2.mp4"},{"id":2,"title":"کتابخانه تخصصی","src":"http://ketabyab.mohammad-malekzad.ir/assets/movie/library.mp4"},{"id":3,"title":"اضافه و حذف به لیست علاقمندی‌ها","src":"http://ketabyab.mohammad-malekzad.ir/assets/movie/favor.mp4"},{"id":4,"title":"درخواست کتاب","src":"http://ketabyab.mohammad-malekzad.ir/assets/movie/request.mp4"}]');
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_introduction_introduction_module_ts-es5.js.map