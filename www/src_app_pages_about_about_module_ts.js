(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.page.html */ 4409);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 8427);





let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
    openMalekzadSite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'http://www.mohammad-malekzad.ir' });
        });
    }
    openMalekzadInsta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://www.instagram.com/farzammalekzad/' });
        });
    }
    downloadBookApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://cafebazaar.ir/app/ir.mohammad.malekzad.ketabyab' });
        });
    }
    downloadBookAppLite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://cafebazaar.ir/app/ir.malekzad.mohammad.moviebank' });
        });
    }
    downloadNcReport() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://cafebazaar.ir/app/ir.mohammad.malekzad' });
        });
    }
    openAppInsta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://www.instagram.com/downloadbook/' });
        });
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutPage);



/***/ }),

/***/ 6899:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img {\n  margin-top: 10px;\n  width: 110px;\n  height: 100px;\n}\n\nion-content {\n  --background: none;\n  background-image: url('about.jpg');\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-card {\n  background: #ffffffe3;\n  border-radius: 15px;\n  border: 2px solid var(--ion-color-primary);\n}\n\nion-item {\n  --ion-item-background: none;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle {\n  border-radius: 50% !important;\n}\n\n.fontCorrect {\n  font-family: brush !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7QUFHRiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Fib3V0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZlMztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbm9uZTtcbn1cbi5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5mb250Q29ycmVjdCB7XG4gIGZvbnQtZmFtaWx5OiBicnVzaCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 4409:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>درباره من</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"animate__animated animate__fadeIn\">\n        <ion-card color=\"light\">\n          <div class=\"ion-text-center\">\n            <img src=\"../../assets/img/me.png\" class=\"imageMe circle\"/>\n          </div>\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle class=\"fontCorrect\">Javascript Full-Stack Developer</ion-card-subtitle>\n            <ion-card-title style=\"font-family: fantasy\">Mohammad Malekzad</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"animate__animated animate__fadeIn\">\n        <ion-card color=\"light\">\n          <div class=\"ion-text-center\">\n            <img src=\"../../assets/img/lite.png\" class=\"imageMe\"/>\n          </div>\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle> دانلود از کافه بازار</ion-card-subtitle>\n            <ion-card-title> دانلود کتاب به زبان اصلی (نسخه کامل)</ion-card-title>\n            <ion-button color=\"primary\" class=\"ion-margin\" shape=\"round\" fill=\"outline\" style=\"font-family: 'Brush Script MT'\" (click)=\"downloadBookApp()\">\n              <ion-icon name=\"cloud-download-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"animate__animated animate__fadeIn\">\n        <ion-card color=\"light\">\n          <div class=\"ion-text-center\">\n            <img src=\"../../assets/img/movie.png\" class=\"imageMe\"/>\n          </div>\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle> دانلود از کافه بازار</ion-card-subtitle>\n            <ion-card-title>دانلود بانک اطلاعاتی فیلم و بازی</ion-card-title>\n            <ion-button color=\"primary\" class=\"ion-margin\" shape=\"round\" fill=\"outline\" style=\"font-family: 'Brush Script MT'\" (click)=\"downloadBookAppLite()\">\n              <ion-icon name=\"cloud-download-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"animate__animated animate__fadeIn\">\n        <ion-card color=\"light\">\n          <div class=\"ion-text-center\">\n            <img src=\"../../assets/img/nc.png\" class=\"imageMe\"/>\n          </div>\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle> دانلود از کافه بازار</ion-card-subtitle>\n            <ion-card-title>گزارش عدم انطباق</ion-card-title>\n            <ion-button color=\"primary\" class=\"ion-margin\" shape=\"round\" fill=\"outline\" style=\"font-family: 'Brush Script MT'\" (click)=\"downloadNcReport()\">\n              <ion-icon name=\"cloud-download-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row dir=\"ltr\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-header>\n            <ion-item dir=\"rtl\" class=\"contact\" lines=\"none\">\n              <h3>ارتباط با من</h3>\n            </ion-item>\n            <ion-item>\n              <ion-icon style=\"font-size: large\" slot=\"start\" name=\"mail\"></ion-icon>\n              <a href=\"mailto: mohammad.malekzad@yahoo.com\" style=\"font-size: small; font-family: 'Times New Roman'\">mohammad.malekzad@yahoo.com</a>\n            </ion-item>\n            <ion-item>\n              <ion-icon style=\"font-size: large\" slot=\"start\" name=\"globe-outline\"></ion-icon>\n              <p style=\"font-size: small;\" (click)=\"openMalekzadSite()\">مراجعه به سایت</p>\n            </ion-item>\n            <ion-item>\n              <ion-icon style=\"font-size: large\" slot=\"start\" name=\"logo-instagram\"></ion-icon>\n              <p style=\"font-size: small;\" (click)=\"openMalekzadInsta()\">مراجعه به صفحه اینستاگرام توسعه دهنده</p>\n            </ion-item>\n            <ion-item>\n              <ion-icon style=\"font-size: large\" slot=\"start\" name=\"logo-instagram\"></ion-icon>\n              <p style=\"font-size: small;\" (click)=\"openAppInsta()\">مراجعه به صفحه اینستاگرام اپلیکیشن</p>\n            </ion-item>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map