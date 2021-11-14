(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 2490:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 4808);




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 7241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 2490);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 4808);







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 4808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.page.html */ 7365);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/library.service */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 8427);







let LandingPage = class LandingPage {
    constructor(libraryService, platform) {
        this.libraryService = libraryService;
        this.platform = platform;
        this.books = [];
        this.optionSlide = {
            slidesPerView: 4.5,
            freeMode: true
        };
    }
    ngOnInit() {
        this.libraryService.getSomeBooks().subscribe((booksArray) => {
            booksArray.map((bks) => bks.forEach((x) => this.books.push(x)));
        });
    }
    proVersion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: 'https://cafebazaar.ir/app/ir.mohammad.malekzad.ketabyab' });
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _services_library_service__WEBPACK_IMPORTED_MODULE_2__.LibraryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingPage);



/***/ }),

/***/ 9242:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: none;\n  background-image: url('library.jpeg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.landing {\n  margin: 1em;\n  padding: 1em;\n  margin-top: 5vh;\n  background: #ffffffe6;\n  border-radius: 15px;\n  border: 3px solid var(--ion-color-tertiary);\n}\n\nimg {\n  height: 100px;\n  width: 100px;\n}\n\nion-slide {\n  background: var(--ion-color-light);\n  border: 1px solid var(--ion-color-tertiary);\n  justify-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n\nion-slide ion-avatar {\n  display: inline-block;\n  margin-top: 10px;\n}\n\nion-slide ion-avatar img {\n  height: 12px;\n  width: 8px;\n  border: 2px solid var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFESTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7QUFHTiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xpYnJhcnkuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxhbmRpbmcge1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5pb24tc2xpZGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaW9uLWF2YXRhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 7365:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"landing\">\n    <div class=\"ion-text-center\">\n      <img src=\"./assets/img/book4.png\">\n    </div>\n    <ion-slides [options]=\"optionSlide\" >\n      <ion-slide *ngFor=\"let book of books\">\n        <ion-img src=\"{{book.imageUrl}}\">\n        </ion-img>\n      </ion-slide>\n    </ion-slides>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/search\">جستجو و دانلود کتاب</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/library\">کتابخانه تخصصی</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/introduction\">آموزش‌ها</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/downloaded-book\">کتاب‌های دانلود شده</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/favorites\">علاقمندی‌ها</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/tutorial2\">مشاهده امکانات</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" routerLink=\"/about\">درباره من</ion-button>\n    <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" (click)=\"proVersion()\">دریافت نسخه کامل</ion-button>\n\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map