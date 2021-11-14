(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_request-book_request-book_module_ts"],{

/***/ 5050:
/*!*******************************************************************!*\
  !*** ./src/app/pages/request-book/request-book-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestBookPageRoutingModule": () => (/* binding */ RequestBookPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _request_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-book.page */ 2987);




const routes = [
    {
        path: '',
        component: _request_book_page__WEBPACK_IMPORTED_MODULE_0__.RequestBookPage
    }
];
let RequestBookPageRoutingModule = class RequestBookPageRoutingModule {
};
RequestBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RequestBookPageRoutingModule);



/***/ }),

/***/ 5256:
/*!***********************************************************!*\
  !*** ./src/app/pages/request-book/request-book.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestBookPageModule": () => (/* binding */ RequestBookPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _request_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-book-routing.module */ 5050);
/* harmony import */ var _request_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-book.page */ 2987);







let RequestBookPageModule = class RequestBookPageModule {
};
RequestBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _request_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestBookPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_request_book_page__WEBPACK_IMPORTED_MODULE_1__.RequestBookPage]
    })
], RequestBookPageModule);



/***/ }),

/***/ 2987:
/*!*********************************************************!*\
  !*** ./src/app/pages/request-book/request-book.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestBookPage": () => (/* binding */ RequestBookPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_request_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./request-book.page.html */ 7903);
/* harmony import */ var _request_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-book.page.scss */ 6287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/library.service */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let RequestBookPage = class RequestBookPage {
    constructor(libraryService, toastCtrl) {
        this.libraryService = libraryService;
        this.toastCtrl = toastCtrl;
        this.isLoading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]
            }),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]
            })
        });
    }
    ngOnInit() {
    }
    send() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const requestedBook = {
                _id: null,
                title: this.form.value.title,
                author: this.form.value.author,
                email: this.form.value.email,
                mobile: null,
                description: null,
                status: false
            };
            const toast = yield this.toastCtrl.create({
                message: 'درخواست با موفقیت ارسال شد',
                duration: 3000
            });
            this.libraryService.requestBook(requestedBook).subscribe((resp) => {
                this.isLoading = false;
                toast.present();
                this.form.reset();
            });
        });
    }
};
RequestBookPage.ctorParameters = () => [
    { type: _services_library_service__WEBPACK_IMPORTED_MODULE_2__.LibraryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RequestBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-request-book',
        template: _raw_loader_request_book_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_request_book_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RequestBookPage);



/***/ }),

/***/ 6287:
/*!***********************************************************!*\
  !*** ./src/app/pages/request-book/request-book.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-label {\n  font-family: IranSans !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url('library2.jpeg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.set-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.set-size {\n  height: 100px;\n  width: 100px;\n  color: var(--ion-color-tertiary);\n}\n\n.set-size-2 {\n  height: 70px;\n  width: 70px;\n  color: var(--ion-color-tertiary);\n}\n\n.landing {\n  margin-top: 15vh;\n}\n\n.centering {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYm9vay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJyZXF1ZXN0LWJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IElyYW5TYW5zICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9saWJyYXJ5Mi5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2V0LXNpemUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4uc2V0LXNpemUtMiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4ubGFuZGluZyB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5jZW50ZXJpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 7903:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-book/request-book.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>درخواست کتاب</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"landing\" >\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"set-icon\" size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-icon *ngIf=\"!isLoading\" name=\"book-outline\" class=\"set-size\"></ion-icon>\n          <ion-icon *ngIf=\"isLoading\" name=\"cloud-download-outline\" class=\"set-size\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"form\" (ngSubmit)=\"send()\">\n      <ion-item>\n        <ion-label position=\"floating\">نام کتاب با زبان انگلیسی</ion-label>\n        <ion-input formControlName=\"title\" dir=\"ltr\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">نام نویسنده با زبان انگلیسی</ion-label>\n        <ion-input formControlName=\"author\"  dir=\"ltr\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">ایمیل جهت اطلاع رسانی</ion-label>\n        <ion-input  dir=\"ltr\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"centering\">\n        <ion-spinner *ngIf=\"isLoading\" class=\"set-size-2\">در حال ارسال</ion-spinner>\n      </div>\n      <ion-button expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\" routerDirection=\"root\" type=\"submit\" [disabled]=\"!form.valid\" [hidden]=\"isLoading\" >ارسال درخواست</ion-button>\n    </form>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_request-book_request-book_module_ts.js.map