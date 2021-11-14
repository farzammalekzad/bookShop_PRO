(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_book-category_book-category_module_ts"],{

/***/ 5858:
/*!*********************************************************************!*\
  !*** ./src/app/pages/book-category/book-category-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCategoryPageRoutingModule": () => (/* binding */ BookCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _book_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-category.page */ 610);




const routes = [
    {
        path: '',
        component: _book_category_page__WEBPACK_IMPORTED_MODULE_0__.BookCategoryPage
    }
];
let BookCategoryPageRoutingModule = class BookCategoryPageRoutingModule {
};
BookCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookCategoryPageRoutingModule);



/***/ }),

/***/ 9582:
/*!*************************************************************!*\
  !*** ./src/app/pages/book-category/book-category.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCategoryPageModule": () => (/* binding */ BookCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _book_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-category-routing.module */ 5858);
/* harmony import */ var _book_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-category.page */ 610);







let BookCategoryPageModule = class BookCategoryPageModule {
};
BookCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _book_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookCategoryPageRoutingModule
        ],
        declarations: [_book_category_page__WEBPACK_IMPORTED_MODULE_1__.BookCategoryPage]
    })
], BookCategoryPageModule);



/***/ }),

/***/ 610:
/*!***********************************************************!*\
  !*** ./src/app/pages/book-category/book-category.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookCategoryPage": () => (/* binding */ BookCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_book_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./book-category.page.html */ 8013);
/* harmony import */ var _book_category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-category.page.scss */ 6281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/library.service */ 1628);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let BookCategoryPage = class BookCategoryPage {
    constructor(libraryService, sanitizer, router) {
        this.libraryService = libraryService;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ngOnInit() {
        return this.libraryService.getAllCategoriesFromServer().subscribe((data) => {
            this.libraryService.setCategory(data);
            this.categories = data;
        });
    }
    openSource(id) {
        console.log('open', id);
        return this.libraryService.getCurrentCategoryById(id).subscribe((academic) => {
            const navigationExtras = {
                state: {
                    data: academic
                }
            };
            this.router.navigateByUrl('library-book', navigationExtras);
        });
    }
    getBlockColor(name) {
        return this.sanitizer.bypassSecurityTrustStyle(`--myvar: #${this.intToRGB(this.hashCode(name))}`);
    }
    hashCode(str) {
        // java String#hashCode
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }
    intToRGB(i) {
        var c = (i & 0x00ffffff).toString(16).toUpperCase();
        return '00000'.substring(0, 6 - c.length) + c + '80';
    }
};
BookCategoryPage.ctorParameters = () => [
    { type: _services_library_service__WEBPACK_IMPORTED_MODULE_2__.LibraryService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
BookCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-book-category',
        template: _raw_loader_book_category_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_book_category_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookCategoryPage);



/***/ }),

/***/ 6281:
/*!*************************************************************!*\
  !*** ./src/app/pages/book-category/book-category.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".category-block {\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.category-block .name {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 2em;\n}\ndiv {\n  background-image: linear-gradient(var(--myvar), var(--myvar));\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.cent {\n  color: var(--ion-color-primary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-spinner {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0UsNkRBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSwrQkFBQTtBQUNGIiwiZmlsZSI6ImJvb2stY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWJsb2NrIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAubmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5kaXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbXl2YXIpLCB2YXIoLS1teXZhcikpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jZW50IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 8013:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-category/book-category.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>حوزه کتاب‌ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cent\" *ngIf=\"!categories\">\n    <ion-spinner></ion-spinner><h4>در حال جستجو....</h4>\n  </div>\n  <div *ngIf=\"categories\">\n    <div class=\"category-block ion-padding\" *ngFor=\"let cat of categories\" tappable (click)=\"openSource(cat._id)\"\n         style=\"background-image: url({{cat.imageUrl}})\">\n      <p class=\"name\">{{cat.field}}</p>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_book-category_book-category_module_ts.js.map