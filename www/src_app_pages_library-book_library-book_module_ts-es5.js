(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_library-book_library-book_module_ts"], {
    /***/
    88220:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/library-book/library-book-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryBookPageRoutingModule": function LibraryBookPageRoutingModule() {
          return (
            /* binding */
            _LibraryBookPageRoutingModule
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


      var _library_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./library-book.page */
      52241);

      var routes = [{
        path: '',
        component: _library_book_page__WEBPACK_IMPORTED_MODULE_0__.LibraryBookPage
      }];

      var _LibraryBookPageRoutingModule = function LibraryBookPageRoutingModule() {
        _classCallCheck(this, LibraryBookPageRoutingModule);
      };

      _LibraryBookPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LibraryBookPageRoutingModule);
      /***/
    },

    /***/
    54525:
    /*!***********************************************************!*\
      !*** ./src/app/pages/library-book/library-book.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryBookPageModule": function LibraryBookPageModule() {
          return (
            /* binding */
            _LibraryBookPageModule
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


      var _library_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./library-book-routing.module */
      88220);
      /* harmony import */


      var _library_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./library-book.page */
      52241);

      var _LibraryBookPageModule = function LibraryBookPageModule() {
        _classCallCheck(this, LibraryBookPageModule);
      };

      _LibraryBookPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _library_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryBookPageRoutingModule],
        declarations: [_library_book_page__WEBPACK_IMPORTED_MODULE_1__.LibraryBookPage]
      })], _LibraryBookPageModule);
      /***/
    },

    /***/
    52241:
    /*!*********************************************************!*\
      !*** ./src/app/pages/library-book/library-book.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryBookPage": function LibraryBookPage() {
          return (
            /* binding */
            _LibraryBookPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_library_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./library-book.page.html */
      12695);
      /* harmony import */


      var _library_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./library-book.page.scss */
      65083);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/http.service */
      6858);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LibraryBookPage = /*#__PURE__*/function () {
        function LibraryBookPage(activatedRoute, router, httpService, loadingCtrl, toastCtrl) {
          _classCallCheck(this, LibraryBookPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.httpService = httpService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
        }

        _createClass(LibraryBookPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (books) {
              if (_this.router.getCurrentNavigation().extras.state.data) {
                _this.field = _this.router.getCurrentNavigation().extras.state.data;
                _this.books = _this.field.books;
              }
            });
          }
        }, {
          key: "downloadPreview",
          value: function downloadPreview(url, bookName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: 'لطفا منتظر بمانید'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return this.toastCtrl.create({
                        message: 'اشکالی در ارتباط با سرور وجود دارد',
                        duration: 1500
                      });

                    case 5:
                      toast = _context.sent;
                      loading.present();
                      this.httpService.downloadBook(encodeURI(url), bookName).then(function () {
                        loading.dismiss();
                        console.log('download complete');
                      })["catch"](function (e) {
                        toast.present();
                        loading.dismiss();
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LibraryBookPage;
      }();

      _LibraryBookPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }];
      };

      _LibraryBookPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-library-book',
        template: _raw_loader_library_book_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_library_book_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LibraryBookPage);
      /***/
    },

    /***/
    65083:
    /*!***********************************************************!*\
      !*** ./src/app/pages/library-book/library-book.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJyYXJ5LWJvb2sucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    12695:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/library-book/library-book.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/library/book-category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{field.field}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-card *ngFor=\"let book of books\">\n      <ion-card-header>\n        <ion-card-title>{{book.title}}</ion-card-title>\n        <ion-card-subtitle>{{book.author}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-img src=\"{{book.imageUrl}}\"></ion-img>\n        <ion-button (click)=\"downloadPreview(book.pdfUrl, book.title)\" [disabled]=\"book.fullVersion\" expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"warning\">دانلود نسخه نمونه</ion-button>\n        <ion-button (click)=\"downloadPreview(book.pdfUrl, book.title)\" [disabled]=\"!book.fullVersion\" expand=\"block\" shape=\"round\" class=\"ion-margin\" color=\"tertiary\">دانلود نسخه کامل</ion-button>\n\n\n    </ion-card>\n  </div>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_library-book_library-book_module_ts-es5.js.map