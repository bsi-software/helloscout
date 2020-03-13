(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"hellojs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = this["webpackJsonp"] = this["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main/js/hellojs.js","jquery","eclipse-scout"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/.pnpm/registry.npmjs.org/webpack/4.41.2_webpack@4.41.2/node_modules/webpack/buildin/module.js":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/registry.npmjs.org/webpack/4.41.2_webpack@4.41.2/node_modules/webpack/buildin/module.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/App.js":
/*!***************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/App.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "../node_modules/.pnpm/scout.bsiag.com/@eclipse-scout/core/10.0.8/node_modules/@eclipse-scout/core/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */


var App = /*#__PURE__*/function (_ScoutApp) {
  _inherits(App, _ScoutApp);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
  }

  return App;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["App"]);



/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/Desktop.js":
/*!***************************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/Desktop.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Desktop; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "../node_modules/.pnpm/scout.bsiag.com/@eclipse-scout/core/10.0.8/node_modules/@eclipse-scout/core/src/index.js");
/* harmony import */ var _DesktopModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopModel */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/DesktopModel.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */



var Desktop = /*#__PURE__*/function (_ScoutDesktop) {
  _inherits(Desktop, _ScoutDesktop);

  function Desktop() {
    _classCallCheck(this, Desktop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Desktop).call(this));
  }

  _createClass(Desktop, [{
    key: "_jsonModel",
    value: function _jsonModel() {
      return _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["models"].get(_DesktopModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  }]);

  return Desktop;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["Desktop"]);



/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/DesktopModel.js":
/*!********************************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/DesktopModel.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    id: 'hellojs.Desktop',
    objectType: 'Desktop',
    navigationVisible: false,
    navigationHandleVisible: false,
    headerVisible: false,
    views: [{
      objectType: 'hellojs.HelloForm'
    }]
  };
});

/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloForm.js":
/*!******************************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloForm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelloForm; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "../node_modules/.pnpm/scout.bsiag.com/@eclipse-scout/core/10.0.8/node_modules/@eclipse-scout/core/src/index.js");
/* harmony import */ var _HelloFormModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloFormModel */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloFormModel.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */



var HelloForm = /*#__PURE__*/function (_Form) {
  _inherits(HelloForm, _Form);

  function HelloForm() {
    _classCallCheck(this, HelloForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloForm).call(this));
  }

  _createClass(HelloForm, [{
    key: "_jsonModel",
    value: function _jsonModel() {
      return _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["models"].get(_HelloFormModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  }, {
    key: "_init",
    value: function _init(model) {
      _get(_getPrototypeOf(HelloForm.prototype), "_init", this).call(this, model);

      this.widget('GreetButton').on('click', this._onGreetButtonClick.bind(this));
    }
  }, {
    key: "_onGreetButtonClick",
    value: function _onGreetButtonClick(event) {
      var name = this.widget('NameField').value || this.session.text('stranger');
      _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["MessageBoxes"].openOk(this.session.desktop, this.session.text('GreetingMessage', name));
    }
  }]);

  return HelloForm;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["Form"]);



/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloFormModel.js":
/*!***********************************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloFormModel.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "../node_modules/.pnpm/scout.bsiag.com/@eclipse-scout/core/10.0.8/node_modules/@eclipse-scout/core/src/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    id: 'hellojs.HelloForm',
    displayHint: 'view',
    modal: false,
    rootGroupBox: {
      id: 'MainBox',
      objectType: 'GroupBox',
      fields: [{
        id: 'DetailBox',
        objectType: 'GroupBox',
        cssClass: 'detail-box',
        gridColumnCount: 1,
        gridDataHints: {
          fillHorizontal: false,
          fillVertical: false,
          horizontalAlignment: 0,
          verticalAlignment: 0,
          widthInPixel: 450,
          weightY: 1
        },
        bodyLayoutConfig: {
          vgap: 25
        },
        fields: [{
          id: 'NameField',
          objectType: 'StringField',
          label: '${textKey:Name}',
          labelPosition: _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["FormField"].LabelPosition.TOP,
          statusVisible: false
        }, {
          id: 'GreetButton',
          objectType: 'Button',
          label: '${textKey:Hello}',
          processButton: false,
          defaultButton: true,
          keyStroke: 'enter'
        }]
      }]
    }
  };
});

/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/index.js":
/*!*****************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/index.js ***!
  \*****************************************************************/
/*! exports provided: App, Desktop, HelloForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _desktop_Desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop/Desktop */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/desktop/Desktop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return _desktop_Desktop__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _greeting_HelloForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greeting/HelloForm */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/greeting/HelloForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelloForm", function() { return _greeting_HelloForm__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _objectFactories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectFactories */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/objectFactories.js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*!
* Eclipse Scout Hello JS
*
* Copyright (c) BSI Business Systems Integration AG. All rights reserved.
* Released under the Eclipse Distribution License v1.0
* http://www.eclipse.org/org/documents/edl-v10.html
*/





/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_4__);
window.hellojs = _extends(window.hellojs || {}, _index_js__WEBPACK_IMPORTED_MODULE_4__);

/***/ }),

/***/ "../org.eclipse.scout.hellojs.ui.html/src/main/js/objectFactories.js":
/*!***************************************************************************!*\
  !*** ../org.eclipse.scout.hellojs.ui.html/src/main/js/objectFactories.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/index.js");
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eclipse-scout/core */ "../node_modules/.pnpm/scout.bsiag.com/@eclipse-scout/core/10.0.8/node_modules/@eclipse-scout/core/src/index.js");
/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */


_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_1__["scout"].addObjectFactories({
  'Desktop': function Desktop() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["Desktop"]();
  }
});

/***/ }),

/***/ "./src/main/js/hellojs.js":
/*!********************************!*\
  !*** ./src/main/js/hellojs.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eclipse_scout_hellojs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/hellojs-core */ "../org.eclipse.scout.hellojs.ui.html/src/main/js/index.js");

var app = new _eclipse_scout_hellojs_core__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.init({
  bootstrap: {
    textsUrl: 'texts.json'
  }
});

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL3dlYnBhY2svNC40MS4yX3dlYnBhY2tANC40MS4yL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uLi9vcmcuZWNsaXBzZS5zY291dC5oZWxsb2pzLnVpLmh0bWwvc3JjL21haW4vanMvQXBwLmpzIiwid2VicGFjazovLy8uLi9vcmcuZWNsaXBzZS5zY291dC5oZWxsb2pzLnVpLmh0bWwvc3JjL21haW4vanMvZGVza3RvcC9EZXNrdG9wLmpzIiwid2VicGFjazovLy8uLi9vcmcuZWNsaXBzZS5zY291dC5oZWxsb2pzLnVpLmh0bWwvc3JjL21haW4vanMvZGVza3RvcC9EZXNrdG9wTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL29yZy5lY2xpcHNlLnNjb3V0LmhlbGxvanMudWkuaHRtbC9zcmMvbWFpbi9qcy9ncmVldGluZy9IZWxsb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL29yZy5lY2xpcHNlLnNjb3V0LmhlbGxvanMudWkuaHRtbC9zcmMvbWFpbi9qcy9ncmVldGluZy9IZWxsb0Zvcm1Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi4vb3JnLmVjbGlwc2Uuc2NvdXQuaGVsbG9qcy51aS5odG1sL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vcmcuZWNsaXBzZS5zY291dC5oZWxsb2pzLnVpLmh0bWwvc3JjL21haW4vanMvb2JqZWN0RmFjdG9yaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2pzL2hlbGxvanMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJoZWxsb2pzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB0aGlzW1wid2VicGFja0pzb25wXCJdID0gdGhpc1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluL2pzL2hlbGxvanMuanNcIixcImpxdWVyeVwiLFwiZWNsaXBzZS1zY291dFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQlNJIEJ1c2luZXNzIFN5c3RlbXMgSW50ZWdyYXRpb24gQUcuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBFY2xpcHNlIERpc3RyaWJ1dGlvbiBMaWNlbnNlIHYxLjBcbiAqIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XG4gKiBodHRwOi8vd3d3LmVjbGlwc2Uub3JnL29yZy9kb2N1bWVudHMvZWRsLXYxMC5odG1sXG4gKlxuICogQ29udHJpYnV0b3JzOlxuICogICAgIEJTSSBCdXNpbmVzcyBTeXN0ZW1zIEludGVncmF0aW9uIEFHIC0gaW5pdGlhbCBBUEkgYW5kIGltcGxlbWVudGF0aW9uXG4gKi9cbmltcG9ydCB7QXBwIGFzIFNjb3V0QXBwfSBmcm9tICdAZWNsaXBzZS1zY291dC9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgU2NvdXRBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNyBCU0kgQnVzaW5lc3MgU3lzdGVtcyBJbnRlZ3JhdGlvbiBBRy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEVjbGlwc2UgRGlzdHJpYnV0aW9uIExpY2Vuc2UgdjEuMFxuICogd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcbiAqIGh0dHA6Ly93d3cuZWNsaXBzZS5vcmcvb3JnL2RvY3VtZW50cy9lZGwtdjEwLmh0bWxcbiAqXG4gKiBDb250cmlidXRvcnM6XG4gKiAgICAgQlNJIEJ1c2luZXNzIFN5c3RlbXMgSW50ZWdyYXRpb24gQUcgLSBpbml0aWFsIEFQSSBhbmQgaW1wbGVtZW50YXRpb25cbiAqL1xuaW1wb3J0IHtEZXNrdG9wIGFzIFNjb3V0RGVza3RvcCwgbW9kZWxzfSBmcm9tICdAZWNsaXBzZS1zY291dC9jb3JlJztcbmltcG9ydCBEZXNrdG9wTW9kZWwgZnJvbSAnLi9EZXNrdG9wTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNrdG9wIGV4dGVuZHMgU2NvdXREZXNrdG9wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2pzb25Nb2RlbCgpIHtcbiAgICByZXR1cm4gbW9kZWxzLmdldChEZXNrdG9wTW9kZWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2hlbGxvanMuRGVza3RvcCcsXG4gICAgb2JqZWN0VHlwZTogJ0Rlc2t0b3AnLFxuICAgIG5hdmlnYXRpb25WaXNpYmxlOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uSGFuZGxlVmlzaWJsZTogZmFsc2UsXG4gICAgaGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgdmlld3M6IFtcbiAgICAgIHtcbiAgICAgICAgb2JqZWN0VHlwZTogJ2hlbGxvanMuSGVsbG9Gb3JtJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQlNJIEJ1c2luZXNzIFN5c3RlbXMgSW50ZWdyYXRpb24gQUcuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBFY2xpcHNlIERpc3RyaWJ1dGlvbiBMaWNlbnNlIHYxLjBcbiAqIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XG4gKiBodHRwOi8vd3d3LmVjbGlwc2Uub3JnL29yZy9kb2N1bWVudHMvZWRsLXYxMC5odG1sXG4gKlxuICogQ29udHJpYnV0b3JzOlxuICogICAgIEJTSSBCdXNpbmVzcyBTeXN0ZW1zIEludGVncmF0aW9uIEFHIC0gaW5pdGlhbCBBUEkgYW5kIGltcGxlbWVudGF0aW9uXG4gKi9cbmltcG9ydCB7Rm9ybSwgTWVzc2FnZUJveGVzLCBtb2RlbHN9IGZyb20gJ0BlY2xpcHNlLXNjb3V0L2NvcmUnO1xuaW1wb3J0IEhlbGxvRm9ybU1vZGVsIGZyb20gJy4vSGVsbG9Gb3JtTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb0Zvcm0gZXh0ZW5kcyBGb3JtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2pzb25Nb2RlbCgpIHtcbiAgICByZXR1cm4gbW9kZWxzLmdldChIZWxsb0Zvcm1Nb2RlbCk7XG4gIH1cblxuICBfaW5pdChtb2RlbCkge1xuICAgIHN1cGVyLl9pbml0KG1vZGVsKTtcblxuICAgIHRoaXMud2lkZ2V0KCdHcmVldEJ1dHRvbicpLm9uKCdjbGljaycsIHRoaXMuX29uR3JlZXRCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9vbkdyZWV0QnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMud2lkZ2V0KCdOYW1lRmllbGQnKS52YWx1ZSB8fCB0aGlzLnNlc3Npb24udGV4dCgnc3RyYW5nZXInKTtcbiAgICBNZXNzYWdlQm94ZXMub3Blbk9rKHRoaXMuc2Vzc2lvbi5kZXNrdG9wLCB0aGlzLnNlc3Npb24udGV4dCgnR3JlZXRpbmdNZXNzYWdlJywgbmFtZSkpO1xuICB9XG59XG4iLCJpbXBvcnQge0Zvcm1GaWVsZH0gZnJvbSAnQGVjbGlwc2Utc2NvdXQvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGlkOiAnaGVsbG9qcy5IZWxsb0Zvcm0nLFxuICAgIGRpc3BsYXlIaW50OiAndmlldycsXG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIHJvb3RHcm91cEJveDoge1xuICAgICAgaWQ6ICdNYWluQm94JyxcbiAgICAgIG9iamVjdFR5cGU6ICdHcm91cEJveCcsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnRGV0YWlsQm94JyxcbiAgICAgICAgICBvYmplY3RUeXBlOiAnR3JvdXBCb3gnLFxuICAgICAgICAgIGNzc0NsYXNzOiAnZGV0YWlsLWJveCcsXG4gICAgICAgICAgZ3JpZENvbHVtbkNvdW50OiAxLFxuICAgICAgICAgIGdyaWREYXRhSGludHM6IHtcbiAgICAgICAgICAgIGZpbGxIb3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbGxWZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAwLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IDAsXG4gICAgICAgICAgICB3aWR0aEluUGl4ZWw6IDQ1MCxcbiAgICAgICAgICAgIHdlaWdodFk6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHlMYXlvdXRDb25maWc6IHtcbiAgICAgICAgICAgIHZnYXA6IDI1XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdOYW1lRmllbGQnLFxuICAgICAgICAgICAgICBvYmplY3RUeXBlOiAnU3RyaW5nRmllbGQnLFxuICAgICAgICAgICAgICBsYWJlbDogJyR7dGV4dEtleTpOYW1lfScsXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb246IEZvcm1GaWVsZC5MYWJlbFBvc2l0aW9uLlRPUCxcbiAgICAgICAgICAgICAgc3RhdHVzVmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnR3JlZXRCdXR0b24nLFxuICAgICAgICAgICAgICBvYmplY3RUeXBlOiAnQnV0dG9uJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICcke3RleHRLZXk6SGVsbG99JyxcbiAgICAgICAgICAgICAgcHJvY2Vzc0J1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgIGRlZmF1bHRCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgIGtleVN0cm9rZTogJ2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfTtcbn1cbiIsIi8qIVxuKiBFY2xpcHNlIFNjb3V0IEhlbGxvIEpTXG4qXG4qIENvcHlyaWdodCAoYykgQlNJIEJ1c2luZXNzIFN5c3RlbXMgSW50ZWdyYXRpb24gQUcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBFY2xpcHNlIERpc3RyaWJ1dGlvbiBMaWNlbnNlIHYxLjBcbiogaHR0cDovL3d3dy5lY2xpcHNlLm9yZy9vcmcvZG9jdW1lbnRzL2VkbC12MTAuaHRtbFxuKi9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwIH0gZnJvbSAnLi9BcHAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNrdG9wIH0gZnJvbSAnLi9kZXNrdG9wL0Rlc2t0b3AnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWxsb0Zvcm0gfSBmcm9tICcuL2dyZWV0aW5nL0hlbGxvRm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL29iamVjdEZhY3Rvcmllcyc7XG5cbmltcG9ydMKgKsKgYXPCoHNlbGbCoGZyb23CoCcuL2luZGV4LmpzJztcbmV4cG9ydCBkZWZhdWx0IHNlbGY7XG53aW5kb3cuaGVsbG9qc8KgPcKgT2JqZWN0LmFzc2lnbih3aW5kb3cuaGVsbG9qc8KgfHwge30swqBzZWxmKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQlNJIEJ1c2luZXNzIFN5c3RlbXMgSW50ZWdyYXRpb24gQUcuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBFY2xpcHNlIERpc3RyaWJ1dGlvbiBMaWNlbnNlIHYxLjBcbiAqIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XG4gKiBodHRwOi8vd3d3LmVjbGlwc2Uub3JnL29yZy9kb2N1bWVudHMvZWRsLXYxMC5odG1sXG4gKlxuICogQ29udHJpYnV0b3JzOlxuICogICAgIEJTSSBCdXNpbmVzcyBTeXN0ZW1zIEludGVncmF0aW9uIEFHIC0gaW5pdGlhbCBBUEkgYW5kIGltcGxlbWVudGF0aW9uXG4gKi9cbmltcG9ydCB7RGVza3RvcH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge3Njb3V0fSBmcm9tICdAZWNsaXBzZS1zY291dC9jb3JlJztcblxuc2NvdXQuYWRkT2JqZWN0RmFjdG9yaWVzKHtcbiAgJ0Rlc2t0b3AnOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERlc2t0b3AoKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQge0FwcH0gZnJvbSAnQGVjbGlwc2Utc2NvdXQvaGVsbG9qcy1jb3JlJztcblxudmFyIGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5pbml0KHtcbiAgYm9vdHN0cmFwOiB7XG4gICAgdGV4dHNVcmw6ICd0ZXh0cy5qc29uJ1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7O0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBUEE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFuQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUF4QkE7QUFKQTtBQUpBO0FBNkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=