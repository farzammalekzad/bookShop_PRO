(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["common"], {
    /***/
    94047:
    /*!************************************************************************!*\
      !*** ./node_modules/@capacitor-community/http/dist/esm/definitions.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    73975:
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor-community/http/dist/esm/index.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Http": function Http() {
          return (
            /* binding */
            _Http
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
      94047);

      var _Http = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Http', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          27142)).then(function (m) {
            return new m.HttpWeb();
          });
        },
        electron: function electron() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          27142)).then(function (m) {
            return new m.HttpWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    27100:
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    28427:
    /*!***********************************************************!*\
      !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Browser": function Browser() {
          return (
            /* binding */
            _Browser
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
      27100);

      var _Browser = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          26764)).then(function (m) {
            return new m.BrowserWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    45458:
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* binding */
            _Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* binding */
            _Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* binding */
            _FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* binding */
            _FilesystemEncoding
          );
        }
        /* harmony export */

      });

      var _Directory;

      (function (Directory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */
        Directory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         *
         * @since 1.0.0
         */

        Directory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */

        Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(_Directory || (_Directory = {}));

      var _Encoding;

      (function (Encoding) {
        /**
         * Eight-bit UCS Transformation Format
         *
         * @since 1.0.0
         */
        Encoding["UTF8"] = "utf8";
        /**
         * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
         * Unicode character set
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["ASCII"] = "ascii";
        /**
         * Sixteen-bit UCS Transformation Format, byte order identified by an
         * optional byte-order mark
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["UTF16"] = "utf16";
      })(_Encoding || (_Encoding = {}));
      /**
       * @deprecated Use `Directory`.
       * @since 1.0.0
       */


      var _FilesystemDirectory = _Directory;
      /**
       * @deprecated Use `Encoding`.
       * @since 1.0.0
       */

      var _FilesystemEncoding = _Encoding; //# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    61977:
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding
          );
        },

        /* harmony export */
        "Filesystem": function Filesystem() {
          return (
            /* binding */
            _Filesystem
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
      45458);

      var _Filesystem = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          85143)).then(function (m) {
            return new m.FilesystemWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    68225:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      39461);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    77330:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      52377);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    66420:
    /*!*************************************************!*\
      !*** ./src/app/pages/tutorial/tutorial.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TRIAL_KEY": function TRIAL_KEY() {
          return (
            /* binding */
            _TRIAL_KEY
          );
        },

        /* harmony export */
        "TutorialPage": function TutorialPage() {
          return (
            /* binding */
            _TutorialPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tutorial.page.html */
      21926);
      /* harmony import */


      var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tutorial.page.scss */
      38701);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _guard_tutorial_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../guard/tutorial.guard */
      353);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TRIAL_KEY = 'trial';

      var _TutorialPage = /*#__PURE__*/function () {
        function TutorialPage(router) {
          _classCallCheck(this, TutorialPage);

          this.router = router;
        }

        _createClass(TutorialPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "finish",
          value: function finish() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: _guard_tutorial_guard__WEBPACK_IMPORTED_MODULE_3__.SEEN_KEY,
                        value: JSON.stringify(true)
                      });

                    case 2:
                      //await Storage.set({key: TRIAL_KEY, value: JSON.stringify(true)});
                      this.router.navigateByUrl('/landing');

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TutorialPage;
      }();

      _TutorialPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _TutorialPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides]
        }]
      };
      _TutorialPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TutorialPage);
      /***/
    },

    /***/
    85097:
    /*!***********************************************!*\
      !*** ./src/app/services/favorites.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FAVOR_KEY": function FAVOR_KEY() {
          return (
            /* binding */
            _FAVOR_KEY
          );
        },

        /* harmony export */
        "FavoritesService": function FavoritesService() {
          return (
            /* binding */
            _FavoritesService
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


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _FAVOR_KEY = 'favorites';

      var _FavoritesService = /*#__PURE__*/function () {
        function FavoritesService() {
          _classCallCheck(this, FavoritesService);
        }

        _createClass(FavoritesService, [{
          key: "addFavor",
          value: function addFavor(book) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

              var status, favorites;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.checkFavor(book.id);

                    case 2:
                      status = _context5.sent;
                      favorites = [];
                      console.log(status);

                      if (status) {
                        _context5.next = 8;
                        break;
                      }

                      _context5.next = 8;
                      return this.getFavor().then(function (favors) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!(favors != null)) {
                                    _context4.next = 7;
                                    break;
                                  }

                                  favorites = favors;
                                  favorites.push(book);
                                  _context4.next = 5;
                                  return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                                    key: _FAVOR_KEY,
                                    value: JSON.stringify(favorites)
                                  });

                                case 5:
                                  _context4.next = 11;
                                  break;

                                case 7:
                                  favorites = [];
                                  favorites.push(book);
                                  _context4.next = 11;
                                  return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                                    key: _FAVOR_KEY,
                                    value: JSON.stringify(favorites)
                                  });

                                case 11:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "checkFavor",
          value: function checkFavor(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var status;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      status = false;
                      _context6.next = 3;
                      return this.getFavor().then(function (favors) {
                        if (favors != null) {
                          favors.find(function (f) {
                            if (f.id == id) {
                              status = true;
                            }
                          });
                        }
                      });

                    case 3:
                      return _context6.abrupt("return", status);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "clearFavor",
          value: function clearFavor() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({
                        key: _FAVOR_KEY
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "getFavorById",
          value: function getFavorById(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var favorite, favorites;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      favorite = [];
                      _context8.next = 3;
                      return this.getFavor();

                    case 3:
                      favorites = _context8.sent;
                      favorite = favorites.filter(function (f) {
                        return f.id == id;
                      });
                      _context8.next = 7;
                      return favorite[0];

                    case 7:
                      return _context8.abrupt("return", _context8.sent);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "removeById",
          value: function removeById(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var newFavorites, favorites;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      newFavorites = [];
                      _context9.next = 3;
                      return this.getFavor();

                    case 3:
                      favorites = _context9.sent;
                      newFavorites = favorites.filter(function (favor) {
                        return favor.id != id;
                      });
                      _context9.next = 7;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                        key: _FAVOR_KEY,
                        value: JSON.stringify(newFavorites)
                      });

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getFavor",
          value: function getFavor() {
            return this.getFavorAsArray();
          }
        }, {
          key: "getFavorAsArray",
          value: function getFavorAsArray() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var favorites, favoritesArr;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({
                        key: _FAVOR_KEY
                      });

                    case 2:
                      favorites = _context10.sent;
                      favoritesArr = [];

                      if (!favorites.value) {
                        _context10.next = 7;
                        break;
                      }

                      favoritesArr = JSON.parse(favorites.value);
                      return _context10.abrupt("return", favoritesArr);

                    case 7:
                      return _context10.abrupt("return", null);

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }]);

        return FavoritesService;
      }();

      _FavoritesService.ctorParameters = function () {
        return [];
      };

      _FavoritesService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _FavoritesService);
      /***/
    },

    /***/
    6858:
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

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
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor-community/http */
      73975);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      18752);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _BOOK_KEY = 'book';

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(fileOpener, loadingCtrl) {
          _classCallCheck(this, HttpService);

          this.fileOpener = fileOpener;
          this.loadingCtrl = loadingCtrl;
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

        _createClass(HttpService, [{
          key: "doGet",
          value: function doGet(url) {
            var options = {
              url: url
            };
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.get(options));
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(url) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var options, response, read;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      options = {
                        url: url,
                        filePath: "image.jpg",
                        fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                        method: 'GET'
                      };
                      _context11.next = 3;
                      return _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);

                    case 3:
                      response = _context11.sent;

                      if (!response.path) {
                        _context11.next = 11;
                        break;
                      }

                      _context11.next = 7;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                        path: "image.jpg",
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents
                      });

                    case 7:
                      read = _context11.sent;
                      return _context11.abrupt("return", "data:image/jpeg;base64,".concat(read.data));

                    case 11:
                      if (!response.blob) {
                        _context11.next = 15;
                        break;
                      }

                      _context11.next = 14;
                      return this.convertBlobToBase64(response.blob);

                    case 14:
                      return _context11.abrupt("return", _context11.sent);

                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "downloadBook",
          value: function downloadBook(url, bookName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this2 = this;

              var options, response, name, mimeType;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      options = {
                        url: url,
                        filePath: "".concat(bookName.substr(bookName.lastIndexOf(' ') + 1), ".pdf"),
                        fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                        method: 'GET'
                      };
                      _context14.next = 3;
                      return _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);

                    case 3:
                      response = _context14.sent;

                      if (!response.path) {
                        _context14.next = 14;
                        break;
                      }

                      name = "book.pdf";
                      mimeType = this.getMimeType(name);
                      this.fileOpener.open(response.path, mimeType).then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) {
                              switch (_context12.prev = _context12.next) {
                                case 0:
                                  console.log('File Opened');

                                case 1:
                                case "end":
                                  return _context12.stop();
                              }
                            }
                          }, _callee12);
                        }));
                      })["catch"](function (err) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  console.log('error in opening file', err);

                                case 1:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13);
                        }));
                      });
                      _context14.next = 10;
                      return this.getBook();

                    case 10:
                      this.myBooks = _context14.sent;
                      this.myBooks.unshift(response.path);
                      _context14.next = 14;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: _BOOK_KEY,
                        value: JSON.stringify(this.myBooks)
                      });

                    case 14:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "downloadBookChm",
          value: function downloadBookChm(url, bookName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this3 = this;

              var options, response, name, mimeType;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      options = {
                        url: url,
                        filePath: "".concat(bookName.substr(bookName.lastIndexOf(' ') + 1), ".chm"),
                        fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                        method: 'GET'
                      };
                      _context17.next = 3;
                      return _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);

                    case 3:
                      response = _context17.sent;

                      if (!response.path) {
                        _context17.next = 14;
                        break;
                      }

                      name = "book.chm";
                      mimeType = this.getMimeType(name);
                      this.fileOpener.showOpenWithDialog(response.path, mimeType).then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  console.log('File Opened');

                                case 1:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15);
                        }));
                      })["catch"](function (err) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  console.log('error in opening file', err);

                                case 1:
                                case "end":
                                  return _context16.stop();
                              }
                            }
                          }, _callee16);
                        }));
                      });
                      _context17.next = 10;
                      return this.getBook();

                    case 10:
                      this.myBooks = _context17.sent;
                      this.myBooks.unshift(response.path);
                      _context17.next = 14;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: _BOOK_KEY,
                        value: JSON.stringify(this.myBooks)
                      });

                    case 14:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "downloadBookEpub",
          value: function downloadBookEpub(url, bookName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this4 = this;

              var options, response, name, mimeType;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      options = {
                        url: url,
                        filePath: "".concat(bookName.substr(bookName.lastIndexOf(' ') + 1), ".epub"),
                        fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                        method: 'GET'
                      };
                      _context20.next = 3;
                      return _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);

                    case 3:
                      response = _context20.sent;

                      if (!response.path) {
                        _context20.next = 14;
                        break;
                      }

                      name = "book.epub";
                      mimeType = this.getMimeType(name);
                      this.fileOpener.showOpenWithDialog(response.path, mimeType).then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  console.log('File Opened');

                                case 1:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18);
                        }));
                      })["catch"](function (err) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                          return regeneratorRuntime.wrap(function _callee19$(_context19) {
                            while (1) {
                              switch (_context19.prev = _context19.next) {
                                case 0:
                                  console.log('error in opening file', err);

                                case 1:
                                case "end":
                                  return _context19.stop();
                              }
                            }
                          }, _callee19);
                        }));
                      });
                      _context20.next = 10;
                      return this.getBook();

                    case 10:
                      this.myBooks = _context20.sent;
                      this.myBooks.unshift(response.path);
                      _context20.next = 14;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: _BOOK_KEY,
                        value: JSON.stringify(this.myBooks)
                      });

                    case 14:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "getBook",
          value: function getBook() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var books;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({
                        key: _BOOK_KEY
                      });

                    case 2:
                      books = _context21.sent;
                      return _context21.abrupt("return", JSON.parse(books.value) || []);

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));
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

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    11628:
    /*!*********************************************!*\
      !*** ./src/app/services/library.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LibraryService": function LibraryService() {
          return (
            /* binding */
            _LibraryService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      88002);

      var _LibraryService = /*#__PURE__*/function () {
        function LibraryService(http) {
          _classCallCheck(this, LibraryService);

          this.http = http;
          this.category = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
          this.searchResult = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        }

        _createClass(LibraryService, [{
          key: "getAllCategoriesFromServer",
          value: function getAllCategoriesFromServer() {
            return this.http.get('http://ketabyab.mohammad-malekzad.ir/academic/category');
          }
        }, {
          key: "getAllCurrentCategories",
          value: function getAllCurrentCategories() {
            return this.category.asObservable();
          }
        }, {
          key: "getCurrentCategoryById",
          value: function getCurrentCategoryById(id) {
            return this.getAllCurrentCategories().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (ctg) {
              return ctg.find(function (x) {
                return x._id === id;
              });
            }));
          }
        }, {
          key: "setCategory",
          value: function setCategory(data) {
            return this.category.next(data);
          }
        }, {
          key: "getAllBooks",
          value: function getAllBooks() {
            return this.getAllCategoriesFromServer().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (ctg) {
              return ctg.map(function (books) {
                return books.books;
              });
            }));
          }
        }, {
          key: "getBookById",
          value: function getBookById(id) {
            return this.getAllBooks().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (books) {
              return books.map(function (book) {
                return book.map(function (boo) {
                  return boo._id === id;
                });
              });
            }));
          }
        }, {
          key: "getSomeBooks",
          value: function getSomeBooks() {
            return this.getAllBooks().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (x) {
              return x.splice(1, 1);
            }));
          }
        }, {
          key: "searching",
          value: function searching(title) {
            return this.http.post('http://ketabyab.mohammad-malekzad.ir/search', {
              title: title
            });
          }
        }, {
          key: "getAllCurrentSearchResult",
          value: function getAllCurrentSearchResult() {
            return this.searchResult.asObservable();
          }
        }, {
          key: "setSearchResult",
          value: function setSearchResult(data) {
            return this.searchResult.next(data);
          }
        }, {
          key: "requestBook",
          value: function requestBook(data) {
            return this.http.post('http://ketabyab.mohammad-malekzad.ir/request', data);
          }
        }]);

        return LibraryService;
      }();

      _LibraryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _LibraryService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _LibraryService);
      /***/
    },

    /***/
    38701:
    /*!***************************************************!*\
      !*** ./src/app/pages/tutorial/tutorial.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  height: 100vh;\n  flex-direction: column;\n}\n\n.slide-1 {\n  background: var(--ion-color-primary);\n}\n\n.slide-2 {\n  background: #f0f0f0;\n  color: #222428;\n}\n\n.slide-3 {\n  background: var(--ion-color-danger);\n}\n\n.slide-4 {\n  --background: none;\n  background-image: url('tutorial2.jpeg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bottom-box {\n  position: absolute;\n  bottom: 0px;\n  background: #ffffff;\n  height: 35vh;\n  width: 100%;\n  color: #222428;\n  margin: 1px;\n}\n\n.set-img {\n  position: absolute;\n  margin-bottom: 30vh;\n}\n\nion-item {\n  background: transparent !important;\n}\n\n.box p {\n  text-align: right;\n}\n\n.slide-1 ion-img {\n  height: 300px;\n  width: 300px;\n}\n\nion-list {\n  --ion-background-color: none;\n}\n\nion-label {\n  font-family: IranSans !important;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0Usb0NBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsbUNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7QUFDRiIsImZpbGUiOiJ0dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5zbGlkZS0xIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2xpZGUtMiB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGNvbG9yOiAjMjIyNDI4O1xufVxuXG4uc2xpZGUtMyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc2xpZGUtNCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy90dXRvcmlhbDIuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJvdHRvbS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDM1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzIyMjQyODtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5zZXQtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHZoO1xuXG59XG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zbGlkZS0xIGlvbi1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tbGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogSXJhblNhbnMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    21926:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager=\"true\" #slide>\n    <ion-slide class=\"slide-1\">\n      <ion-img src=\"./assets/img/book4.png\"></ion-img>\n      <h2 class=\"ion-padding\">به آپ دانلود کتاب به زبان انگلیسی<br>خوش آمدید</h2>\n      <p>قوی ترین اپلیکیشن جستجو و دانلود کتاب‌</p>\n\n    </ion-slide>\n\n  <ion-slide class=\"slide-2 ion-padding\">\n    <ion-img src=\"./assets/img/tutorial.jpeg\"></ion-img>\n      <ion-list>\n        <ion-item>\n          <ion-label>- جستجوی پیشرفته کتاب‌ها و دانلود در فرمت‌های PDF-CHM-EPUB</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- دارا بودن کتابخانه تخصصی با کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان جستجو براساس نام نویسنده</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- ارایه اطلاعات کامل از حجم دانلود- زبان- فرمت- ...</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- مشاهده صفحه روی جلد کتاب‌ها پیش از دانلود</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ارسال درخواست کتاب به ناشر و دریافت آن در لیست کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ذخیره اطلاعات کتاب‌ها در بخش علاقمندی‌ها </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان اشتراک اطلاعات کتاب‌ها از طریق شبکه‌های اجتماعی</ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-slide>\n\n  <ion-slide class=\"slide-4\">\n    <div class=\"bottom-box\">\n      <p>از حمایت شما سپاسگزارم. </p>\n      <ion-button class=\"ion-margin\" expand=\"block\"  shape=\"round\" color=\"success\" (click)=\"finish()\">ورود</ion-button>\n    </div>\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map