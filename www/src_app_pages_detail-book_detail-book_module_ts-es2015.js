(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_detail-book_detail-book_module_ts"],{

/***/ 13509:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 16380:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": function() { return /* binding */ Share; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 13509);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 54648)).then(m => new m.ShareWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48666:
/*!*****************************************************************!*\
  !*** ./src/app/pages/detail-book/detail-book-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBookPageRoutingModule": function() { return /* binding */ DetailBookPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _detail_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-book.page */ 86592);




const routes = [
    {
        path: '',
        component: _detail_book_page__WEBPACK_IMPORTED_MODULE_0__.DetailBookPage
    }
];
let DetailBookPageRoutingModule = class DetailBookPageRoutingModule {
};
DetailBookPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailBookPageRoutingModule);



/***/ }),

/***/ 38251:
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-book/detail-book.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBookPageModule": function() { return /* binding */ DetailBookPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _detail_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-book-routing.module */ 48666);
/* harmony import */ var _detail_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-book.page */ 86592);







let DetailBookPageModule = class DetailBookPageModule {
};
DetailBookPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailBookPageRoutingModule
        ],
        declarations: [_detail_book_page__WEBPACK_IMPORTED_MODULE_1__.DetailBookPage]
    })
], DetailBookPageModule);



/***/ }),

/***/ 86592:
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-book/detail-book.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBookPage": function() { return /* binding */ DetailBookPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detail_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail-book.page.html */ 92077);
/* harmony import */ var _detail_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-book.page.scss */ 13662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_download_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/download-book.service */ 10939);
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/favorites.service */ 85097);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/share */ 16380);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tutorial/tutorial.page */ 66420);













let DetailBookPage = class DetailBookPage {
    constructor(activatedRoute, router, httpService, domSanitizer, downloadBookService, favorService, toastCtrl, loadingCtrl, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.httpService = httpService;
        this.domSanitizer = domSanitizer;
        this.downloadBookService = downloadBookService;
        this.favorService = favorService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = null;
        this.myImage = null;
        this.myBook = null;
        this.isLoading = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((book) => {
            this.isLoading = true;
            if (this.router.getCurrentNavigation().extras.state.data) {
                this.book = this.router.getCurrentNavigation().extras.state.data;
                this.isLoading = false;
            }
        }, e => {
            console.log(e);
        });
    }
    downloadFile(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'اشکالی در ارتباط با سرور وجود دارد',
                duration: 1500
            });
            this.httpService.downloadFile(url).then((base64) => {
                this.myImage = this.domSanitizer.bypassSecurityTrustResourceUrl(base64);
            }).catch(e => {
                toast.present();
            });
        });
    }
    download(url, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            //const trial = await Storage.get({key: TRIAL_KEY});
            //console.log(JSON.parse(trial.value));
            //if (JSON.parse(trial.value)) {
            const loading = yield this.loadingCtrl.create({
                message: 'لطفا منتظر بمانید'
            });
            const toast = yield this.toastCtrl.create({
                message: 'اشکالی در ارتباط با سرور وجود دارد',
                duration: 1500
            });
            loading.present();
            if (this.book.extension == 'pdf') {
                console.log('pdf');
                this.httpService.downloadBook(encodeURI(url), name).then((base64) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    this.myBook = base64;
                    loading.dismiss();
                    yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({ key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY, value: JSON.stringify(false) });
                })).catch(e => {
                    toast.present();
                    loading.dismiss();
                });
            }
            else if (this.book.extension == 'chm') {
                console.log('chm');
                this.httpService.downloadBookChm(encodeURI(url), name).then((base64) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    this.myBook = base64;
                    loading.dismiss();
                    yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({ key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY, value: JSON.stringify(false) });
                })).catch(e => {
                    toast.present();
                    loading.dismiss();
                });
            }
            else if (this.book.extension == 'epub') {
                console.log('epub');
                this.httpService.downloadBookEpub(encodeURI(url), name).then((base64) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    this.myBook = base64;
                    loading.dismiss();
                    yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({ key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY, value: JSON.stringify(false) });
                })).catch(e => {
                    toast.present();
                    loading.dismiss();
                });
            }
            //}
            // Pro version (Trial version commented)
            /*else {
              const alert = await this.alertCtrl.create({
                header: 'خریداری نسخه کامل',
                message: 'برای دانلود بیش از یک کتاب باید نسخه کامل خریداری شود',
                buttons: ['باشه']
              });
              alert.present();
            }*/
        });
    }
    addFavorites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'کتاب به علاقمندی‌ها اضافه شد',
                duration: 1500
            });
            this.favorService.addFavor(this.book).then(() => {
                toast.present();
                console.log('added to storage');
            }).catch(e => {
                console.log('Error', e);
            });
        });
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_5__.Share.share({
                text: `به شما کتاب زیر با عنوان: ${this.book.title} - نویسنده: ${this.book.author} - زبان: ${this.book.language} - فرمت: ${this.book.extension}در این اپلیکیشن پیشنهاد شده است`,
                url: 'https://cafebazaar.ir/app/ir.mohammad.malekzad.ketabyablite'
            });
        });
    }
};
DetailBookPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _services_download_book_service__WEBPACK_IMPORTED_MODULE_3__.DownloadBookService },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__.FavoritesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController }
];
DetailBookPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-detail-book',
        template: _raw_loader_detail_book_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_book_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailBookPage);



/***/ }),

/***/ 10939:
/*!***************************************************!*\
  !*** ./src/app/services/download-book.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOK_KEY": function() { return /* binding */ BOOK_KEY; },
/* harmony export */   "DownloadBookService": function() { return /* binding */ DownloadBookService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);






const BOOK_KEY = 'book';
let DownloadBookService = class DownloadBookService {
    constructor(http, fileOpener) {
        this.http = http;
        this.fileOpener = fileOpener;
        this.downloadProgress = 0;
        this.myBooks = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    downloadBook(url) {
        const proxyUrl = url;
        return this.http.get(proxyUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events'
        }).subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.DownloadProgress) {
                this.downloadProgress = Math.round(100 * (event.loaded / event.total));
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
                this.downloadProgress = 0;
                const name = `${Date.now()}`;
                const base64 = yield this.convertBlobToBase64(event.body);
                const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                    path: name,
                    data: base64,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents
                });
                const path = savedFile.uri;
                const mimeType = this.getMimeType(name);
                this.fileOpener.open(path, mimeType).then(() => {
                    console.log('File Opened');
                }).catch((err) => {
                    console.log('error in opening file', err);
                });
                this.myBooks.unshift(path);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: BOOK_KEY, value: JSON.stringify(this.myBooks) });
            }
        }));
    }
    getMimeType(name) {
        if (name.indexOf('pdf') >= 0) {
            return 'application/pdf';
        }
        else if (name.indexOf('chm') >= 0) {
            return 'application/chm';
        }
    }
};
DownloadBookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__.FileOpener }
];
DownloadBookService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DownloadBookService);



/***/ }),

/***/ 13662:
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-book/detail-book.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".set-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.set-size {\n  height: 100px;\n  width: 100px;\n  color: var(--ion-color-tertiary);\n}\n\nimg {\n  border: 2px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQ0FBQTtBQUVGIiwiZmlsZSI6ImRldGFpbC1ib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNldC1zaXplIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */");

/***/ }),

/***/ 92077:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-book/detail-book.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/search/detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>اطلاعات کتاب و دانلود</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\" class=\"ion-text-center\">\n        <img [src]=\"myImage\" *ngIf=\"myImage\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"set-icon\" size=\"12\">\n        <ion-item [hidden]=\"myImage\"  lines=\"none\">\n          <ion-icon name=\"book-sharp\" class=\"set-size\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"reorder-four\"></ion-icon>\n          <ion-label><h2>عنوان:</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.title}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"clipboard-outline\"></ion-icon>\n          <ion-label><h2>نویسنده :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.author}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"language-outline\"></ion-icon>\n          <ion-label><h2>زبان کتاب :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.language}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"expand-outline\"></ion-icon>\n          <ion-label><h2>حجم فایل :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.filesize}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"apps-outline\"></ion-icon>\n          <ion-label><h2>فرمت فایل:</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.extension}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n  <ion-button (click)=\"downloadFile(this.book.bookImage)\" expand=\"block\" shape=\"round\" color=\"tertiary\" class=\"ion-margin\" [disabled]=\"myImage\" >مشاهده عکس کتاب</ion-button>\n  <ion-button (click)=\"download(this.book.download, this.book.title)\" expand=\"block\" shape=\"round\" color=\"tertiary\" class=\"ion-margin\">دانلود کتاب</ion-button>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"addFavorites()\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"share()\">\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_detail-book_detail-book_module_ts-es2015.js.map