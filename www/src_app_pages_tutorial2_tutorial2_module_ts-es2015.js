(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_tutorial2_tutorial2_module_ts"],{

/***/ 34167:
/*!*************************************************************!*\
  !*** ./src/app/pages/tutorial2/tutorial2-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tutorial2PageRoutingModule": function() { return /* binding */ Tutorial2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tutorial2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial2.page */ 46140);




const routes = [
    {
        path: '',
        component: _tutorial2_page__WEBPACK_IMPORTED_MODULE_0__.Tutorial2Page
    }
];
let Tutorial2PageRoutingModule = class Tutorial2PageRoutingModule {
};
Tutorial2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tutorial2PageRoutingModule);



/***/ }),

/***/ 39027:
/*!*****************************************************!*\
  !*** ./src/app/pages/tutorial2/tutorial2.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tutorial2PageModule": function() { return /* binding */ Tutorial2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tutorial2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial2-routing.module */ 34167);
/* harmony import */ var _tutorial2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial2.page */ 46140);







let Tutorial2PageModule = class Tutorial2PageModule {
};
Tutorial2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tutorial2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tutorial2PageRoutingModule
        ],
        declarations: [_tutorial2_page__WEBPACK_IMPORTED_MODULE_1__.Tutorial2Page]
    })
], Tutorial2PageModule);



/***/ }),

/***/ 46140:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial2/tutorial2.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tutorial2Page": function() { return /* binding */ Tutorial2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tutorial2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial2.page.html */ 98454);
/* harmony import */ var _tutorial2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial2.page.scss */ 73222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);






let Tutorial2Page = class Tutorial2Page {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    finish() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.slides.isBeginning();
            yield this.router.navigateByUrl('/landing');
        });
    }
};
Tutorial2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tutorial2Page.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlides,] }]
};
Tutorial2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tutorial2',
        template: _raw_loader_tutorial2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tutorial2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tutorial2Page);



/***/ }),

/***/ 73222:
/*!*****************************************************!*\
  !*** ./src/app/pages/tutorial2/tutorial2.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n  flex-direction: column;\n}\n\n.slide-1 {\n  background: #FFFDD0;\n}\n\n.slide-2 {\n  background: #f0f0f0;\n  color: #222428;\n}\n\n.slide-3 {\n  background: var(--ion-color-danger);\n}\n\n.slide-4 {\n  --background: none;\n  background-image: url('tutorial2.jpeg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bottom-box {\n  position: absolute;\n  bottom: 0px;\n  background: #ffffff;\n  height: 30vh;\n  width: 100%;\n  color: #222428;\n  margin: 1px;\n}\n\n.set-img {\n  position: absolute;\n  margin-bottom: 30vh;\n}\n\nion-item {\n  background: transparent !important;\n}\n\n.box p {\n  text-align: right;\n}\n\n.slide-1 ion-img {\n  height: 300px;\n  width: 300px;\n}\n\nion-list {\n  --ion-background-color: none;\n}\n\nion-label {\n  font-family: IranSans !important;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLG1DQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0FBQUY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBQ0YiLCJmaWxlIjoidHV0b3JpYWwyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuLnNsaWRlLTEge1xuICBiYWNrZ3JvdW5kOiAjRkZGREQwO1xufVxuXG4uc2xpZGUtMiB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGNvbG9yOiAjMjIyNDI4O1xufVxuXG4uc2xpZGUtMyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc2xpZGUtNCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy90dXRvcmlhbDIuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJvdHRvbS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzIyMjQyODtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5zZXQtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHZoO1xuXG59XG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zbGlkZS0xIGlvbi1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tbGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogSXJhblNhbnMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ 98454:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial2/tutorial2.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager=\"true\" #slide>\n    <ion-slide class=\"slide-2\">\n      <ion-img src=\"./assets/img/tutorial.jpeg\"></ion-img>\n      <ion-list class=\"ion-padding\">\n        <ion-item>\n          <ion-label>- جستجوی پیشرفته کتاب‌ها و دانلود در فرمت‌های PDF-CHM-EPUB</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- دارا بودن کتابخانه تخصصی با کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان جستجو براساس نام نویسنده</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- ارایه اطلاعات کامل از حجم دانلود- زبان- فرمت- ...</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- مشاهده صفحه روی جلد کتاب‌ها پیش از دانلود</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ارسال درخواست کتاب به ناشر و دریافت آن در لیست کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ذخیره اطلاعات کتاب‌ها در بخش علاقمندی‌ها </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان اشتراک اطلاعات کتاب‌ها از طریق شبکه‌های اجتماعی</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class=\"slide-4\">\n      <div class=\"bottom-box\">\n        <p>از حمایت شما سپاسگزارم. </p>\n        <ion-button class=\"ion-margin\" expand=\"block\"  shape=\"round\" color=\"success\" (click)=\"finish()\">بازگشت به صفحه اصلی</ion-button>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tutorial2_tutorial2_module_ts-es2015.js.map