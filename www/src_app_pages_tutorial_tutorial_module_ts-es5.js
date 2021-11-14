(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["src_app_pages_tutorial_tutorial_module_ts"], {
    /***/
    83325:
    /*!***********************************************************!*\
      !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialPageRoutingModule": function TutorialPageRoutingModule() {
          return (
            /* binding */
            _TutorialPageRoutingModule
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


      var _tutorial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tutorial.page */
      66420);

      var routes = [{
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
      }];

      var _TutorialPageRoutingModule = function TutorialPageRoutingModule() {
        _classCallCheck(this, TutorialPageRoutingModule);
      };

      _TutorialPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TutorialPageRoutingModule);
      /***/
    },

    /***/
    10140:
    /*!***************************************************!*\
      !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialPageModule": function TutorialPageModule() {
          return (
            /* binding */
            _TutorialPageModule
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


      var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tutorial-routing.module */
      83325);
      /* harmony import */


      var _tutorial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tutorial.page */
      66420);

      var _TutorialPageModule = function TutorialPageModule() {
        _classCallCheck(this, TutorialPageModule);
      };

      _TutorialPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_0__.TutorialPageRoutingModule],
        declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_1__.TutorialPage]
      })], _TutorialPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tutorial_tutorial_module_ts-es5.js.map