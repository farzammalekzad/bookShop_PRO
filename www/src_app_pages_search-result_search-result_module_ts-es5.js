(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_search-result_search-result_module_ts"], {
    /***/
    14449:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/search-result/search-result-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultPageRoutingModule": function SearchResultPageRoutingModule() {
          return (
            /* binding */
            _SearchResultPageRoutingModule
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


      var _search_result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-result.page */
      95930);

      var routes = [{
        path: '',
        component: _search_result_page__WEBPACK_IMPORTED_MODULE_0__.SearchResultPage
      }];

      var _SearchResultPageRoutingModule = function SearchResultPageRoutingModule() {
        _classCallCheck(this, SearchResultPageRoutingModule);
      };

      _SearchResultPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchResultPageRoutingModule);
      /***/
    },

    /***/
    81871:
    /*!*************************************************************!*\
      !*** ./src/app/pages/search-result/search-result.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultPageModule": function SearchResultPageModule() {
          return (
            /* binding */
            _SearchResultPageModule
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


      var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-result-routing.module */
      14449);
      /* harmony import */


      var _search_result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-result.page */
      95930);

      var _SearchResultPageModule = function SearchResultPageModule() {
        _classCallCheck(this, SearchResultPageModule);
      };

      _SearchResultPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _search_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultPageRoutingModule],
        declarations: [_search_result_page__WEBPACK_IMPORTED_MODULE_1__.SearchResultPage]
      })], _SearchResultPageModule);
      /***/
    },

    /***/
    95930:
    /*!***********************************************************!*\
      !*** ./src/app/pages/search-result/search-result.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchResultPage": function SearchResultPage() {
          return (
            /* binding */
            _SearchResultPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_search_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search-result.page.html */
      96918);
      /* harmony import */


      var _search_result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-result.page.scss */
      49885);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/library.service */
      11628);

      var _SearchResultPage = /*#__PURE__*/function () {
        function SearchResultPage(activatedRoute, router, libraryService) {
          _classCallCheck(this, SearchResultPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.libraryService = libraryService;
        }

        _createClass(SearchResultPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.results = _this.router.getCurrentNavigation().extras.state.result;
              } else {
                _this.libraryService.getAllCurrentSearchResult().subscribe(function (books) {
                  _this.results = books;
                });
              }
            });
          }
        }, {
          key: "downloadPage",
          value: function downloadPage(detail) {
            var navigationExtras = {
              state: {
                data: detail
              }
            };
            console.log(navigationExtras);
            this.router.navigateByUrl('detail-book', navigationExtras);
          }
        }]);

        return SearchResultPage;
      }();

      _SearchResultPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _services_library_service__WEBPACK_IMPORTED_MODULE_2__.LibraryService
        }];
      };

      _SearchResultPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search-result',
        template: _raw_loader_search_result_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_result_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchResultPage);
      /***/
    },

    /***/
    49885:
    /*!*************************************************************!*\
      !*** ./src/app/pages/search-result/search-result.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  border: 2px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    96918:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-result/search-result.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/search\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>نتایج جستجو</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content dir=\"ltr\">\n  <div *ngIf=\"!results\" class=\"ion-text-center\">\n    <h3 style=\"color: var(--ion-color-primary)\">نتایجی یافت نشد</h3>\n  </div>\n  <ion-list *ngIf=\"results\" >\n    <ion-item *ngFor=\"let res of results\"  [hidden]=\"res.extension == 'isz' || res.extension == 'iso' || res.extension == 'doc' || res.extension == 'djvu' || res.extension == 'rar' || res.title==''\" tappable (click)=\"downloadPage(res)\" >\n      <ion-avatar>\n        <img *ngIf=\"res.extension == 'pdf'\" src='assets/img/pdf3.png'>\n        <img *ngIf=\"res.extension == 'chm'\" src=\"assets/img/chm-icon.png\">\n        <img *ngIf=\"res.extension == 'djvu'\" src=\"assets/img/djvu.png\">\n        <img *ngIf=\"res.extension == 'isz'\" src=\"assets/img/isz.png\" style=\"background-color: #1e2023\">\n        <img *ngIf=\"res.extension == 'iso'\" src=\"assets/img/book4.png\">\n        <img *ngIf=\"res.extension == 'doc'\" src=\"assets/img/doc.png\">\n        <img *ngIf=\"res.extension == 'epub'\" src=\"assets/img/epub.png\">\n\n\n      </ion-avatar>\n      <ion-label class=\"ion-margin-start\">\n        <h3>{{res.title}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_search-result_search-result_module_ts-es5.js.map