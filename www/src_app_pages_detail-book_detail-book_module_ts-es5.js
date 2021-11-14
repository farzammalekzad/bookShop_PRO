(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_detail-book_detail-book_module_ts"], {
    /***/
    13509:
    /*!***************************************************************!*\
      !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    16380:
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Share": function Share() {
          return (
            /* binding */
            _Share
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      13509);

      var _Share = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          54648)).then(function (m) {
            return new m.ShareWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    48666:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/detail-book/detail-book-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailBookPageRoutingModule": function DetailBookPageRoutingModule() {
          return (
            /* binding */
            _DetailBookPageRoutingModule
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


      var _detail_book_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./detail-book.page */
      86592);

      var routes = [{
        path: '',
        component: _detail_book_page__WEBPACK_IMPORTED_MODULE_0__.DetailBookPage
      }];

      var _DetailBookPageRoutingModule = function DetailBookPageRoutingModule() {
        _classCallCheck(this, DetailBookPageRoutingModule);
      };

      _DetailBookPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DetailBookPageRoutingModule);
      /***/
    },

    /***/
    38251:
    /*!*********************************************************!*\
      !*** ./src/app/pages/detail-book/detail-book.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailBookPageModule": function DetailBookPageModule() {
          return (
            /* binding */
            _DetailBookPageModule
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


      var _detail_book_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./detail-book-routing.module */
      48666);
      /* harmony import */


      var _detail_book_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detail-book.page */
      86592);

      var _DetailBookPageModule = function DetailBookPageModule() {
        _classCallCheck(this, DetailBookPageModule);
      };

      _DetailBookPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _detail_book_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailBookPageRoutingModule],
        declarations: [_detail_book_page__WEBPACK_IMPORTED_MODULE_1__.DetailBookPage]
      })], _DetailBookPageModule);
      /***/
    },

    /***/
    86592:
    /*!*******************************************************!*\
      !*** ./src/app/pages/detail-book/detail-book.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailBookPage": function DetailBookPage() {
          return (
            /* binding */
            _DetailBookPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_detail_book_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./detail-book.page.html */
      92077);
      /* harmony import */


      var _detail_book_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detail-book.page.scss */
      13662);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/http.service */
      6858);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _services_download_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/download-book.service */
      10939);
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/favorites.service */
      85097);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _capacitor_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/share */
      16380);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tutorial/tutorial.page */
      66420);

      var _DetailBookPage = /*#__PURE__*/function () {
        function DetailBookPage(activatedRoute, router, httpService, domSanitizer, downloadBookService, favorService, toastCtrl, loadingCtrl, alertCtrl) {
          _classCallCheck(this, DetailBookPage);

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

        _createClass(DetailBookPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (book) {
              _this.isLoading = true;

              if (_this.router.getCurrentNavigation().extras.state.data) {
                _this.book = _this.router.getCurrentNavigation().extras.state.data;
                _this.isLoading = false;
              }
            }, function (e) {
              console.log(e);
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(url) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: 'اشکالی در ارتباط با سرور وجود دارد',
                        duration: 1500
                      });

                    case 2:
                      toast = _context.sent;
                      this.httpService.downloadFile(url).then(function (base64) {
                        _this2.myImage = _this2.domSanitizer.bypassSecurityTrustResourceUrl(base64);
                      })["catch"](function (e) {
                        toast.present();
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "download",
          value: function download(url, name) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var loading, toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        message: 'لطفا منتظر بمانید'
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return this.toastCtrl.create({
                        message: 'اشکالی در ارتباط با سرور وجود دارد',
                        duration: 1500
                      });

                    case 5:
                      toast = _context5.sent;
                      loading.present();

                      if (this.book.extension == 'pdf') {
                        console.log('pdf');
                        this.httpService.downloadBook(encodeURI(url), name).then(function (base64) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    this.myBook = base64;
                                    loading.dismiss();
                                    _context2.next = 4;
                                    return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                                      key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY,
                                      value: JSON.stringify(false)
                                    });

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        })["catch"](function (e) {
                          toast.present();
                          loading.dismiss();
                        });
                      } else if (this.book.extension == 'chm') {
                        console.log('chm');
                        this.httpService.downloadBookChm(encodeURI(url), name).then(function (base64) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    this.myBook = base64;
                                    loading.dismiss();
                                    _context3.next = 4;
                                    return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                                      key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY,
                                      value: JSON.stringify(false)
                                    });

                                  case 4:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this);
                          }));
                        })["catch"](function (e) {
                          toast.present();
                          loading.dismiss();
                        });
                      } else if (this.book.extension == 'epub') {
                        console.log('epub');
                        this.httpService.downloadBookEpub(encodeURI(url), name).then(function (base64) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    this.myBook = base64;
                                    loading.dismiss();
                                    _context4.next = 4;
                                    return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                                      key: _tutorial_tutorial_page__WEBPACK_IMPORTED_MODULE_7__.TRIAL_KEY,
                                      value: JSON.stringify(false)
                                    });

                                  case 4:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        })["catch"](function (e) {
                          toast.present();
                          loading.dismiss();
                        });
                      } //}
                      // Pro version (Trial version commented)

                      /*else {
                        const alert = await this.alertCtrl.create({
                          header: 'خریداری نسخه کامل',
                          message: 'برای دانلود بیش از یک کتاب باید نسخه کامل خریداری شود',
                          buttons: ['باشه']
                        });
                        alert.present();
                      }*/


                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "addFavorites",
          value: function addFavorites() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastCtrl.create({
                        message: 'کتاب به علاقمندی‌ها اضافه شد',
                        duration: 1500
                      });

                    case 2:
                      toast = _context6.sent;
                      this.favorService.addFavor(this.book).then(function () {
                        toast.present();
                        console.log('added to storage');
                      })["catch"](function (e) {
                        console.log('Error', e);
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "share",
          value: function share() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _capacitor_share__WEBPACK_IMPORTED_MODULE_5__.Share.share({
                        text: "\u0628\u0647 \u0634\u0645\u0627 \u06A9\u062A\u0627\u0628 \u0632\u06CC\u0631 \u0628\u0627 \u0639\u0646\u0648\u0627\u0646: ".concat(this.book.title, " - \u0646\u0648\u06CC\u0633\u0646\u062F\u0647: ").concat(this.book.author, " - \u0632\u0628\u0627\u0646: ").concat(this.book.language, " - \u0641\u0631\u0645\u062A: ").concat(this.book.extension, "\u062F\u0631 \u0627\u06CC\u0646 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0634\u062F\u0647 \u0627\u0633\u062A"),
                        url: 'https://cafebazaar.ir/app/ir.mohammad.malekzad.ketabyablite'
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return DetailBookPage;
      }();

      _DetailBookPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: _services_download_book_service__WEBPACK_IMPORTED_MODULE_3__.DownloadBookService
        }, {
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_4__.FavoritesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }];
      };

      _DetailBookPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-detail-book',
        template: _raw_loader_detail_book_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_book_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DetailBookPage);
      /***/
    },

    /***/
    10939:
    /*!***************************************************!*\
      !*** ./src/app/services/download-book.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BOOK_KEY": function BOOK_KEY() {
          return (
            /* binding */
            _BOOK_KEY
          );
        },

        /* harmony export */
        "DownloadBookService": function DownloadBookService() {
          return (
            /* binding */
            _DownloadBookService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      18752);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _BOOK_KEY = 'book';

      var _DownloadBookService = /*#__PURE__*/function () {
        function DownloadBookService(http, fileOpener) {
          _classCallCheck(this, DownloadBookService);

          this.http = http;
          this.fileOpener = fileOpener;
          this.downloadProgress = 0;
          this.myBooks = [];

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        }

        _createClass(DownloadBookService, [{
          key: "downloadBook",
          value: function downloadBook(url) {
            var _this4 = this;

            var proxyUrl = url;
            return this.http.get(proxyUrl, {
              responseType: 'blob',
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var name, base64, savedFile, path, mimeType;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!(event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.DownloadProgress)) {
                          _context8.next = 4;
                          break;
                        }

                        this.downloadProgress = Math.round(100 * (event.loaded / event.total));
                        _context8.next = 19;
                        break;

                      case 4:
                        if (!(event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response)) {
                          _context8.next = 19;
                          break;
                        }

                        this.downloadProgress = 0;
                        name = "".concat(Date.now());
                        _context8.next = 9;
                        return this.convertBlobToBase64(event.body);

                      case 9:
                        base64 = _context8.sent;
                        _context8.next = 12;
                        return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                          path: name,
                          data: base64,
                          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents
                        });

                      case 12:
                        savedFile = _context8.sent;
                        path = savedFile.uri;
                        mimeType = this.getMimeType(name);
                        this.fileOpener.open(path, mimeType).then(function () {
                          console.log('File Opened');
                        })["catch"](function (err) {
                          console.log('error in opening file', err);
                        });
                        this.myBooks.unshift(path);
                        _context8.next = 19;
                        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                          key: _BOOK_KEY,
                          value: JSON.stringify(this.myBooks)
                        });

                      case 19:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }, {
          key: "getMimeType",
          value: function getMimeType(name) {
            if (name.indexOf('pdf') >= 0) {
              return 'application/pdf';
            } else if (name.indexOf('chm') >= 0) {
              return 'application/chm';
            }
          }
        }]);

        return DownloadBookService;
      }();

      _DownloadBookService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__.FileOpener
        }];
      };

      _DownloadBookService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _DownloadBookService);
      /***/
    },

    /***/
    13662:
    /*!*********************************************************!*\
      !*** ./src/app/pages/detail-book/detail-book.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".set-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.set-size {\n  height: 100px;\n  width: 100px;\n  color: var(--ion-color-tertiary);\n}\n\nimg {\n  border: 2px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQ0FBQTtBQUVGIiwiZmlsZSI6ImRldGFpbC1ib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNldC1zaXplIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */";
      /***/
    },

    /***/
    92077:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-book/detail-book.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/search/detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>اطلاعات کتاب و دانلود</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\" class=\"ion-text-center\">\n        <img [src]=\"myImage\" *ngIf=\"myImage\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"set-icon\" size=\"12\">\n        <ion-item [hidden]=\"myImage\"  lines=\"none\">\n          <ion-icon name=\"book-sharp\" class=\"set-size\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"reorder-four\"></ion-icon>\n          <ion-label><h2>عنوان:</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.title}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"clipboard-outline\"></ion-icon>\n          <ion-label><h2>نویسنده :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.author}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"language-outline\"></ion-icon>\n          <ion-label><h2>زبان کتاب :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.language}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"expand-outline\"></ion-icon>\n          <ion-label><h2>حجم فایل :</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.filesize}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm = 12 size-md=\"8\" offset-md = \"2\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"apps-outline\"></ion-icon>\n          <ion-label><h2>فرمت فایل:</h2></ion-label>\n        </ion-item>\n        <ion-item dir=\"ltr\" lines=\"full\">\n          <ion-text>{{book.extension}}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n  <ion-button (click)=\"downloadFile(this.book.bookImage)\" expand=\"block\" shape=\"round\" color=\"tertiary\" class=\"ion-margin\" [disabled]=\"myImage\" >مشاهده عکس کتاب</ion-button>\n  <ion-button (click)=\"download(this.book.download, this.book.title)\" expand=\"block\" shape=\"round\" color=\"tertiary\" class=\"ion-margin\">دانلود کتاب</ion-button>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" (click)=\"addFavorites()\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"share()\">\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_detail-book_detail-book_module_ts-es5.js.map