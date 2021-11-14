(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_favorites_favorites_module_ts"], {
    /***/
    84145:
    /*!*************************************************************!*\
      !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPageRoutingModule": function FavoritesPageRoutingModule() {
          return (
            /* binding */
            _FavoritesPageRoutingModule
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


      var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorites.page */
      19310);

      var routes = [{
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
      }];

      var _FavoritesPageRoutingModule = function FavoritesPageRoutingModule() {
        _classCallCheck(this, FavoritesPageRoutingModule);
      };

      _FavoritesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FavoritesPageRoutingModule);
      /***/
    },

    /***/
    99883:
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPageModule": function FavoritesPageModule() {
          return (
            /* binding */
            _FavoritesPageModule
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


      var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorites-routing.module */
      84145);
      /* harmony import */


      var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorites.page */
      19310);

      var _FavoritesPageModule = function FavoritesPageModule() {
        _classCallCheck(this, FavoritesPageModule);
      };

      _FavoritesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
      })], _FavoritesPageModule);
      /***/
    },

    /***/
    19310:
    /*!***************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPage": function FavoritesPage() {
          return (
            /* binding */
            _FavoritesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./favorites.page.html */
      19819);
      /* harmony import */


      var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorites.page.scss */
      61106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/favorites.service */
      85097);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _FavoritesPage = /*#__PURE__*/function () {
        function FavoritesPage(favService, router, toastCtrl) {
          _classCallCheck(this, FavoritesPage);

          this.favService = favService;
          this.router = router;
          this.toastCtrl = toastCtrl;
        }

        _createClass(FavoritesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFav();
          }
        }, {
          key: "loadFav",
          value: function loadFav() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.favService.getFavor().then(function (favs) {
                        if (favs == null) {
                          console.log(favs);
                          _this.favorites = null;
                        }

                        _this.favorites = favs;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openDetail",
          value: function openDetail(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var favorite, navigationExtras;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.favService.getFavorById(id);

                    case 2:
                      favorite = _context2.sent;
                      navigationExtras = {
                        state: {
                          data: favorite
                        }
                      };
                      this.router.navigateByUrl('detail-book', navigationExtras);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteFav",
          value: function deleteFav(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: 'علاقمندی حذف شد',
                        duration: 1500
                      });

                    case 2:
                      toast = _context3.sent;
                      _context3.next = 5;
                      return this.favService.removeById(id).then(function () {
                        toast.present();

                        _this2.loadFav();
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return FavoritesPage;
      }();

      _FavoritesPage.ctorParameters = function () {
        return [{
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }];
      };

      _FavoritesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FavoritesPage);
      /***/
    },

    /***/
    61106:
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  border: 2px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    19819:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/landing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>علاقمندی‌ها</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content dir=\"ltr\">\n  <div *ngIf=\"favorites == null\" class=\"ion-text-center\">\n    <h3 style=\"color: var(--ion-color-primary)\">علاقمندی اضافه نشده است</h3>\n  </div>\n  <ion-list *ngIf=\"favorites\">\n    <ion-item-sliding *ngFor=\"let fav of favorites\">\n    <ion-item (click)=\"openDetail(fav.id)\" tappable>\n      <ion-avatar *ngIf=\"fav.extension == 'pdf'\">\n        <img src=\"assets/img/pdf3.png\">\n      </ion-avatar>\n      <ion-avatar *ngIf=\"fav.extension == 'chm'\">\n        <img src=\"assets/img/chm-icon.png\">\n      </ion-avatar>\n      <ion-avatar *ngIf=\"fav.extension == 'epub'\">\n        <img src=\"assets/img/epub.png\">\n      </ion-avatar>\n      <ion-label class=\"ion-margin-start\">\n        {{fav.title}}\n      </ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"end\" dir=\"rtl\">\n      <ion-item-option color=\"danger\" (click)=\"deleteFav(fav.id)\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_favorites_favorites_module_ts-es5.js.map