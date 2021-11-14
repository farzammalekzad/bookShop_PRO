(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_library-book_library-book_module_ts"],{

/***/ 88220:
/*!*******************************************************************!*\
  !*** ./src/app/pages/library-book/library-book-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryBookPageRoutingModule": function() { return /* binding */ LibraryBookPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _library_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-book.page */ 52241);




const routes = [
    {
        path: '',
        component: _library_book_page__WEBPACK_IMPORTED_MODULE_0__.LibraryBookPage
    }
];
let LibraryBookPageRoutingModule = class LibraryBookPageRoutingModule {
};
LibraryBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LibraryBookPageRoutingModule);



/***/ }),

/***/ 54525:
/*!***********************************************************!*\
  !*** ./src/app/pages/library-book/library-book.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryBookPageModule": function() { return /* binding */ LibraryBookPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _library_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-book-routing.module */ 88220);
/* harmony import */ var _library_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library-book.page */ 52241);







let LibraryBookPageModule = class LibraryBookPageModule {
};
LibraryBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _library_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryBookPageRoutingModule
        ],
        declarations: [_library_book_page__WEBPACK_IMPORTED_MODULE_1__.LibraryBookPage]
    })
], LibraryBookPageModule);



/***/ }),

/***/ 52241:
/*!*********************************************************!*\
  !*** ./src/app/pages/library-book/library-book.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryBookPage": function() { return /* binding */ LibraryBookPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_library_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./library-book.page.html */ 12695);
/* harmony import */ var _library_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library-book.page.scss */ 65083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let LibraryBookPage = class LibraryBookPage {
    constructor(activatedRoute, router, httpService, loadingCtrl, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.httpService = httpService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((books) => {
            if (this.router.getCurrentNavigation().extras.state.data) {
                this.field = this.router.getCurrentNavigation().extras.state.data;
                this.books = this.field.books;
            }
        });
    }
    downloadPreview(url, bookName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'لطفا منتظر بمانید'
            });
            const toast = yield this.toastCtrl.create({
                message: 'اشکالی در ارتباط با سرور وجود دارد',
                duration: 1500
            });
            loading.present();
            this.httpService.downloadBook(encodeURI(url), bookName).then(() => {
                loading.dismiss();
                console.log('download complete');
            }).catch(e => {
                toast.present();
                loading.dismiss();
            });
        });
    }
};
LibraryBookPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
LibraryBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-library-book',
        template: _raw_loader_library_book_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_library_book_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LibraryBookPage);



/***/ }),

/***/ 65083:
/*!***********************************************************!*\
  !*** ./src/app/pages/library-book/library-book.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJyYXJ5LWJvb2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 12695:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/library-book/library-book.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/library/book-category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{field.field}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-card *ngFor=\"let book of books\">\n      <ion-card-header>\n        <ion-card-title>{{book.title}}</ion-card-title>\n        <ion-card-subtitle>{{book.author}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-img src=\"{{book.imageUrl}}\"></ion-img>\n        <ion-button (click)=\"downloadPreview(book.pdfUrl, book.title)\" [disabled]=\"book.fullVersion\" expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"warning\">دانلود نسخه نمونه</ion-button>\n        <ion-button (click)=\"downloadPreview(book.pdfUrl, book.title)\" [disabled]=\"!book.fullVersion\" expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\">دانلود نسخه کامل</ion-button>\n\n\n    </ion-card>\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_library-book_library-book_module_ts-es2015.js.map