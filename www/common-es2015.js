(self["webpackChunkbookApp_2"] = self["webpackChunkbookApp_2"] || []).push([["common"],{

/***/ 94047:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor-community/http/dist/esm/definitions.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 73975:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor-community/http/dist/esm/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Http": function() { return /* binding */ Http; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 94047);

const Http = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Http', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 27142)).then(m => new m.HttpWeb()),
    electron: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 27142)).then(m => new m.HttpWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27100:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 28427:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": function() { return /* binding */ Browser; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 27100);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 26764)).then(m => new m.BrowserWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45458:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": function() { return /* binding */ Directory; },
/* harmony export */   "Encoding": function() { return /* binding */ Encoding; },
/* harmony export */   "FilesystemDirectory": function() { return /* binding */ FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* binding */ FilesystemEncoding; }
/* harmony export */ });
var Directory;
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
})(Directory || (Directory = {}));
var Encoding;
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
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 61977:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory; },
/* harmony export */   "Encoding": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding; },
/* harmony export */   "FilesystemDirectory": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding; },
/* harmony export */   "Filesystem": function() { return /* binding */ Filesystem; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 45458);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 85143)).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
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
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 66420:
/*!*************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRIAL_KEY": function() { return /* binding */ TRIAL_KEY; },
/* harmony export */   "TutorialPage": function() { return /* binding */ TutorialPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tutorial.page.html */ 21926);
/* harmony import */ var _tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial.page.scss */ 38701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _guard_tutorial_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guard/tutorial.guard */ 353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








const TRIAL_KEY = 'trial';
let TutorialPage = class TutorialPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
    finish() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: _guard_tutorial_guard__WEBPACK_IMPORTED_MODULE_3__.SEEN_KEY, value: JSON.stringify(true) });
            //await Storage.set({key: TRIAL_KEY, value: JSON.stringify(true)});
            this.router.navigateByUrl('/landing');
        });
    }
};
TutorialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
TutorialPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
TutorialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tutorial',
        template: _raw_loader_tutorial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tutorial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TutorialPage);



/***/ }),

/***/ 85097:
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAVOR_KEY": function() { return /* binding */ FAVOR_KEY; },
/* harmony export */   "FavoritesService": function() { return /* binding */ FavoritesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 96628);



const FAVOR_KEY = 'favorites';
let FavoritesService = class FavoritesService {
    constructor() { }
    addFavor(book) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield this.checkFavor(book.id);
            let favorites = [];
            console.log(status);
            if (!status) {
                yield this.getFavor().then((favors) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    if (favors != null) {
                        favorites = favors;
                        favorites.push(book);
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: FAVOR_KEY, value: JSON.stringify(favorites) });
                    }
                    else {
                        favorites = [];
                        favorites.push(book);
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: FAVOR_KEY, value: JSON.stringify(favorites) });
                    }
                }));
            }
        });
    }
    checkFavor(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let status = false;
            yield this.getFavor().then((favors) => {
                if (favors != null) {
                    favors.find((f) => {
                        if (f.id == id) {
                            status = true;
                        }
                    });
                }
            });
            return status;
        });
    }
    clearFavor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: FAVOR_KEY });
        });
    }
    getFavorById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let favorite = [];
            const favorites = yield this.getFavor();
            favorite = favorites.filter(f => f.id == id);
            return yield favorite[0];
        });
    }
    removeById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let newFavorites = [];
            const favorites = yield this.getFavor();
            newFavorites = favorites.filter((favor) => favor.id != id);
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: FAVOR_KEY, value: JSON.stringify(newFavorites) });
        });
    }
    getFavor() {
        return this.getFavorAsArray();
    }
    getFavorAsArray() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const favorites = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: FAVOR_KEY });
            let favoritesArr = [];
            if (favorites.value) {
                favoritesArr = JSON.parse(favorites.value);
                return favoritesArr;
            }
            return null;
        });
    }
};
FavoritesService.ctorParameters = () => [];
FavoritesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FavoritesService);



/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOK_KEY": function() { return /* binding */ BOOK_KEY; },
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/http */ 73975);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








const BOOK_KEY = 'book';
let HttpService = class HttpService {
    constructor(fileOpener, loadingCtrl) {
        this.fileOpener = fileOpener;
        this.loadingCtrl = loadingCtrl;
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
    doGet(url) {
        const options = {
            url
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.get(options));
    }
    downloadFile(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                url,
                filePath: `image.jpg`,
                fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                method: 'GET'
            };
            const response = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);
            if (response.path) {
                const read = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                    path: `image.jpg`,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents
                });
                return `data:image/jpeg;base64,${read.data}`;
            }
            else if (response.blob) {
                // Special handling for the web
                return yield this.convertBlobToBase64(response.blob);
            }
        });
    }
    downloadBook(url, bookName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                url,
                filePath: `${bookName.substr(bookName.lastIndexOf(' ') + 1)}.pdf`,
                fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                method: 'GET'
            };
            const response = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);
            if (response.path) {
                const name = `book.pdf`;
                const mimeType = this.getMimeType(name);
                this.fileOpener.open(response.path, mimeType).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('File Opened');
                })).catch((err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('error in opening file', err);
                }));
                this.myBooks = yield this.getBook();
                this.myBooks.unshift(response.path);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: BOOK_KEY, value: JSON.stringify(this.myBooks) });
            }
        });
    }
    downloadBookChm(url, bookName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                url,
                filePath: `${bookName.substr(bookName.lastIndexOf(' ') + 1)}.chm`,
                fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                method: 'GET'
            };
            const response = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);
            if (response.path) {
                const name = `book.chm`;
                const mimeType = this.getMimeType(name);
                this.fileOpener.showOpenWithDialog(response.path, mimeType).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('File Opened');
                })).catch((err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('error in opening file', err);
                }));
                this.myBooks = yield this.getBook();
                this.myBooks.unshift(response.path);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: BOOK_KEY, value: JSON.stringify(this.myBooks) });
            }
        });
    }
    downloadBookEpub(url, bookName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                url,
                filePath: `${bookName.substr(bookName.lastIndexOf(' ') + 1)}.epub`,
                fileDirectory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Documents,
                method: 'GET'
            };
            const response = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.downloadFile(options);
            if (response.path) {
                const name = `book.epub`;
                const mimeType = this.getMimeType(name);
                this.fileOpener.showOpenWithDialog(response.path, mimeType).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('File Opened');
                })).catch((err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('error in opening file', err);
                }));
                this.myBooks = yield this.getBook();
                this.myBooks.unshift(response.path);
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({ key: BOOK_KEY, value: JSON.stringify(this.myBooks) });
            }
        });
    }
    getBook() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const books = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: BOOK_KEY });
            return JSON.parse(books.value) || [];
        });
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
HttpService.ctorParameters = () => [
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 11628:
/*!*********************************************!*\
  !*** ./src/app/services/library.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryService": function() { return /* binding */ LibraryService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);





let LibraryService = class LibraryService {
    constructor(http) {
        this.http = http;
        this.category = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.searchResult = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    getAllCategoriesFromServer() {
        return this.http.get('http://ketabyab.mohammad-malekzad.ir/academic/category');
    }
    getAllCurrentCategories() {
        return this.category.asObservable();
    }
    getCurrentCategoryById(id) {
        return this.getAllCurrentCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((ctg) => ctg.find((x) => x._id === id)));
    }
    setCategory(data) {
        return this.category.next(data);
    }
    getAllBooks() {
        return this.getAllCategoriesFromServer().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((ctg) => ctg.map((books) => books.books)));
    }
    getBookById(id) {
        return this.getAllBooks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((books) => books.map((book) => book.map((boo) => boo._id === id))));
    }
    getSomeBooks() {
        return this.getAllBooks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((x) => x.splice(1, 1)));
    }
    searching(title) {
        return this.http.post('http://ketabyab.mohammad-malekzad.ir/search', { title });
    }
    getAllCurrentSearchResult() {
        return this.searchResult.asObservable();
    }
    setSearchResult(data) {
        return this.searchResult.next(data);
    }
    requestBook(data) {
        return this.http.post('http://ketabyab.mohammad-malekzad.ir/request', data);
    }
};
LibraryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
LibraryService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LibraryService);



/***/ }),

/***/ 38701:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n  flex-direction: column;\n}\n\n.slide-1 {\n  background: var(--ion-color-primary);\n}\n\n.slide-2 {\n  background: #f0f0f0;\n  color: #222428;\n}\n\n.slide-3 {\n  background: var(--ion-color-danger);\n}\n\n.slide-4 {\n  --background: none;\n  background-image: url('tutorial2.jpeg');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bottom-box {\n  position: absolute;\n  bottom: 0px;\n  background: #ffffff;\n  height: 35vh;\n  width: 100%;\n  color: #222428;\n  margin: 1px;\n}\n\n.set-img {\n  position: absolute;\n  margin-bottom: 30vh;\n}\n\nion-item {\n  background: transparent !important;\n}\n\n.box p {\n  text-align: right;\n}\n\n.slide-1 ion-img {\n  height: 300px;\n  width: 300px;\n}\n\nion-list {\n  --ion-background-color: none;\n}\n\nion-label {\n  font-family: IranSans !important;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0Usb0NBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsbUNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7QUFDRiIsImZpbGUiOiJ0dXRvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5zbGlkZS0xIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2xpZGUtMiB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGNvbG9yOiAjMjIyNDI4O1xufVxuXG4uc2xpZGUtMyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc2xpZGUtNCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy90dXRvcmlhbDIuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJvdHRvbS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDM1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzIyMjQyODtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5zZXQtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHZoO1xuXG59XG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuLmJveCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zbGlkZS0xIGlvbi1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5pb24tbGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogSXJhblNhbnMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ 21926:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen scroll-y=\"false\">\n  <ion-slides pager=\"true\" #slide>\n    <ion-slide class=\"slide-1\">\n      <ion-img src=\"./assets/img/book4.png\"></ion-img>\n      <h2 class=\"ion-padding\">به آپ دانلود کتاب به زبان انگلیسی<br>خوش آمدید</h2>\n      <p>قوی ترین اپلیکیشن جستجو و دانلود کتاب‌</p>\n\n    </ion-slide>\n\n  <ion-slide class=\"slide-2 ion-padding\">\n    <ion-img src=\"./assets/img/tutorial.jpeg\"></ion-img>\n      <ion-list>\n        <ion-item>\n          <ion-label>- جستجوی پیشرفته کتاب‌ها و دانلود در فرمت‌های PDF-CHM-EPUB</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- دارا بودن کتابخانه تخصصی با کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان جستجو براساس نام نویسنده</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- ارایه اطلاعات کامل از حجم دانلود- زبان- فرمت- ...</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- مشاهده صفحه روی جلد کتاب‌ها پیش از دانلود</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ارسال درخواست کتاب به ناشر و دریافت آن در لیست کتب رایگان</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان ذخیره اطلاعات کتاب‌ها در بخش علاقمندی‌ها </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>- امکان اشتراک اطلاعات کتاب‌ها از طریق شبکه‌های اجتماعی</ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-slide>\n\n  <ion-slide class=\"slide-4\">\n    <div class=\"bottom-box\">\n      <p>از حمایت شما سپاسگزارم. </p>\n      <ion-button class=\"ion-margin\" expand=\"block\"  shape=\"round\" color=\"success\" (click)=\"finish()\">ورود</ion-button>\n    </div>\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map