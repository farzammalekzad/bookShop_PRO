(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_downloaded-book_downloaded-book_module_ts"],{

/***/ 80:
/*!*************************************************************************!*\
  !*** ./src/app/pages/downloaded-book/downloaded-book-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadedBookPageRoutingModule": () => (/* binding */ DownloadedBookPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _downloaded_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloaded-book.page */ 5567);




const routes = [
    {
        path: '',
        component: _downloaded_book_page__WEBPACK_IMPORTED_MODULE_0__.DownloadedBookPage
    }
];
let DownloadedBookPageRoutingModule = class DownloadedBookPageRoutingModule {
};
DownloadedBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadedBookPageRoutingModule);



/***/ }),

/***/ 5327:
/*!*****************************************************************!*\
  !*** ./src/app/pages/downloaded-book/downloaded-book.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadedBookPageModule": () => (/* binding */ DownloadedBookPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _downloaded_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloaded-book-routing.module */ 80);
/* harmony import */ var _downloaded_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloaded-book.page */ 5567);







let DownloadedBookPageModule = class DownloadedBookPageModule {
};
DownloadedBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _downloaded_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadedBookPageRoutingModule
        ],
        declarations: [_downloaded_book_page__WEBPACK_IMPORTED_MODULE_1__.DownloadedBookPage]
    })
], DownloadedBookPageModule);



/***/ }),

/***/ 5567:
/*!***************************************************************!*\
  !*** ./src/app/pages/downloaded-book/downloaded-book.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadedBookPage": () => (/* binding */ DownloadedBookPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_downloaded_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./downloaded-book.page.html */ 5496);
/* harmony import */ var _downloaded_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloaded-book.page.scss */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 8752);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/filesystem */ 1977);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/storage */ 6628);








let DownloadedBookPage = class DownloadedBookPage {
    constructor(httpService, fileOpener) {
        this.httpService = httpService;
        this.fileOpener = fileOpener;
        this.books = [];
    }
    ngOnInit() {
        this.httpService.getBook().then((books) => {
            this.books = books;
        });
    }
    openBook(book) {
        console.log(book);
        const name = book.substr(book.lastIndexOf('/') + 1);
        const mimeType = this.httpService.getMimeType(name);
        this.fileOpener.showOpenWithDialog(book, mimeType).then(() => {
            console.log('book opened');
        }).catch((e) => {
            console.log('Error: ', e);
        });
    }
    deleteBook(book) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const name = book.substr(book.lastIndexOf('/') + 1);
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Filesystem.deleteFile({
                path: name,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Directory.Documents
            });
            this.books = this.books.filter(filePath => filePath !== book);
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.set({
                key: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.BOOK_KEY,
                value: JSON.stringify(this.books)
            });
        });
    }
};
DownloadedBookPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener }
];
DownloadedBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-downloaded-book',
        template: _raw_loader_downloaded_book_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_downloaded_book_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DownloadedBookPage);



/***/ }),

/***/ 4597:
/*!*****************************************************************!*\
  !*** ./src/app/pages/downloaded-book/downloaded-book.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZGVkLWJvb2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5496:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloaded-book/downloaded-book.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>کتاب‌های دانلود شده</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list dir=\"ltr\">\n    <ion-item-sliding *ngFor=\"let book of books\">\n      <ion-item (click)=\"openBook(book)\" tappable>\n        <ion-avatar *ngIf=\"book.substr(book.lastIndexOf('.') + 1) == 'pdf'\">\n          <img src=\"assets/img/pdf3.png\">\n        </ion-avatar>\n        <ion-avatar *ngIf=\"book.substr(book.lastIndexOf('.') + 1) == 'chm'\">\n          <img src=\"assets/img/chm-icon.png\">\n        </ion-avatar>\n        <ion-avatar *ngIf=\"book.substr(book.lastIndexOf('.') + 1) == 'epub'\">\n          <img src=\"assets/img/epub.png\">\n        </ion-avatar>\n        <ion-label class=\"ion-margin-start\">\n          {{book.substr(book.lastIndexOf('/') + 1)}}\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\" dir=\"rtl\">\n        <ion-item-option color=\"danger\" (click)=\"deleteBook(book)\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_downloaded-book_downloaded-book_module_ts.js.map