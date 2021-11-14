(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_library_library_module_ts"], {
    /***/
    13562:
    /*!*********************************************************!*\
      !*** ./src/app/pages/library/library-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryPageRoutingModule": function LibraryPageRoutingModule() {
          return (
            /* binding */
            _LibraryPageRoutingModule
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


      var _library_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./library.page */
      20652);

      var routes = [{
        path: '',
        redirectTo: 'book-category',
        pathMatch: 'full'
      }, {
        path: '',
        component: _library_page__WEBPACK_IMPORTED_MODULE_0__.LibraryPage,
        children: [{
          path: 'book-category',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_book-category_book-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../book-category/book-category.module */
            19582)).then(function (m) {
              return m.BookCategoryPageModule;
            });
          }
        }, {
          path: 'request-book',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_request-book_request-book_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../request-book/request-book.module */
            95256)).then(function (m) {
              return m.RequestBookPageModule;
            });
          }
        }]
      }];

      var _LibraryPageRoutingModule = function LibraryPageRoutingModule() {
        _classCallCheck(this, LibraryPageRoutingModule);
      };

      _LibraryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LibraryPageRoutingModule);
      /***/
    },

    /***/
    35961:
    /*!*************************************************!*\
      !*** ./src/app/pages/library/library.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryPageModule": function LibraryPageModule() {
          return (
            /* binding */
            _LibraryPageModule
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


      var _library_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./library-routing.module */
      13562);
      /* harmony import */


      var _library_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./library.page */
      20652);

      var _LibraryPageModule = function LibraryPageModule() {
        _classCallCheck(this, LibraryPageModule);
      };

      _LibraryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _library_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryPageRoutingModule],
        declarations: [_library_page__WEBPACK_IMPORTED_MODULE_1__.LibraryPage]
      })], _LibraryPageModule);
      /***/
    },

    /***/
    20652:
    /*!***********************************************!*\
      !*** ./src/app/pages/library/library.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryPage": function LibraryPage() {
          return (
            /* binding */
            _LibraryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_library_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./library.page.html */
      37967);
      /* harmony import */


      var _library_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./library.page.scss */
      48504);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LibraryPage = /*#__PURE__*/function () {
        function LibraryPage() {
          _classCallCheck(this, LibraryPage);
        }

        _createClass(LibraryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LibraryPage;
      }();

      _LibraryPage.ctorParameters = function () {
        return [];
      };

      _LibraryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-library',
        template: _raw_loader_library_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_library_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LibraryPage);
      /***/
    },

    /***/
    48504:
    /*!*************************************************!*\
      !*** ./src/app/pages/library/library.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-bar {\n  --background: var(--ion-color-primary);\n}\n\nion-tab-button {\n  --color-selected: var(--ion-color-light);\n  --color: #93ceff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJsaWJyYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1jb2xvcjogIzkzY2VmZjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    37967:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/library/library.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"book-category\">\n      <ion-icon name=\"book-outline\"></ion-icon>\n      <ion-label>حوزه‌ها</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"request-book\">\n      <ion-icon name=\"git-pull-request-outline\"></ion-icon>\n      <ion-label>درخواست کتاب</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_library_library_module_ts-es5.js.map