/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/Applications/MAMP/htdocs/bitrix-demo/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/nbc/subscribe/templates/.default/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nbc/subscribe/templates/.default/src/js/app.js":
/*!*******************************************************************!*\
  !*** ./components/nbc/subscribe/templates/.default/src/js/app.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe-form */ "./components/nbc/subscribe/templates/.default/src/js/subscribe-form.js");

document.addEventListener("DOMContentLoaded", function () {
  new _subscribe_form__WEBPACK_IMPORTED_MODULE_0__["default"]("subscribe").init();
});

/***/ }),

/***/ "./components/nbc/subscribe/templates/.default/src/js/subscribe-form.js":
/*!******************************************************************************!*\
  !*** ./components/nbc/subscribe/templates/.default/src/js/subscribe-form.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubscribeForm; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_b2b_shop_src_js_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../templates/b2b-shop/src/js/api/api */ "./templates/b2b-shop/src/js/api/api.js");




var api = new _templates_b2b_shop_src_js_api_api__WEBPACK_IMPORTED_MODULE_3__["default"]();
var DEFAULT_ERROR_MESSAGE = "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435.";
var STATUS_TO_ALERT_CLASS = {
  200: "alert-success",
  400: "alert-danger"
};

var SubscribeForm = /*#__PURE__*/function () {
  function SubscribeForm(formName) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SubscribeForm);

    this._element = document.forms[formName];

    if (this._element) {
      this._requestUrl = this._element.action;
      this._alertElement = this._element.querySelector(".js-subscribe-alert");
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SubscribeForm, [{
    key: "_onSubmit",
    value: function _onSubmit(evt) {
      var _this = this;

      evt.preventDefault();
      var formData = new FormData(this._element);
      api.post(formData, this._requestUrl, "").then(function (response) {
        var status = response.status,
            message = response.message;

        if (status === 200) {
          try {
            window.mindboxFooterSubscribe(formData.get("EMAIL"));
          } catch (e) {
            throw new Error("\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E, mindbox \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D \u2013 ".concat(e));
          }
        }

        _this._showMessage(message, status);
      }).catch(function (e) {
        _this._showMessage(DEFAULT_ERROR_MESSAGE, 400);

        throw new Error(e);
      });
    }
  }, {
    key: "_showMessage",
    value: function _showMessage(message, status) {
      var _this$_alertElement$c;

      (_this$_alertElement$c = this._alertElement.classList).remove.apply(_this$_alertElement$c, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object.values(STATUS_TO_ALERT_CLASS)));

      if (Object.keys(STATUS_TO_ALERT_CLASS).includes(status.toString())) {
        this._alertElement.classList.add(STATUS_TO_ALERT_CLASS[status]);
      }

      this._alertElement.innerHTML = message;

      this._alertElement.removeAttribute("hidden");
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      this._element.addEventListener("submit", this._onSubmit);
    }
  }, {
    key: "init",
    value: function init() {
      if (this._element) {
        this._setHandlers();
      }
    }
  }]);

  return SubscribeForm;
}();



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./templates/b2b-shop/src/js/api/api.js":
/*!**********************************************!*\
  !*** ./templates/b2b-shop/src/js/api/api.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Method = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE"
};
var SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

var Api = /*#__PURE__*/function () {
  function Api() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Api);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Api, [{
    key: "post",
    value: function post(payload, url) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "text/plain";
      var headers = {
        // Emulates XMLHttpRequest to pass the Bitrix isAjaxRequest() check.
        "X-Requested-With": "XMLHttpRequest"
      };
      if (contentType) headers["Content-Type"] = contentType;
      return this._load({
        url: url,
        method: Method.POST,
        body: payload,
        headers: headers
      }).then(Api.toJSON);
    }
  }, {
    key: "get",
    value: function get(url) {
      return this._load({
        url: url
      }).then(Api.toJSON);
    }
  }, {
    key: "_load",
    value: function _load(_ref) {
      var url = _ref.url,
          _ref$method = _ref.method,
          method = _ref$method === void 0 ? Method.GET : _ref$method,
          _ref$body = _ref.body,
          body = _ref$body === void 0 ? null : _ref$body,
          _ref$headers = _ref.headers,
          headers = _ref$headers === void 0 ? new Headers() : _ref$headers;
      return fetch(url, {
        method: method,
        body: body,
        headers: headers
      }).then(Api.checkStatus).catch(Api.catchError);
    }
  }], [{
    key: "checkStatus",
    value: function checkStatus(response) {
      if (response.status < SuccessHTTPStatusRange.MIN && response.status > SuccessHTTPStatusRange.MAX) {
        throw new Error("".concat(response.status, ": ").concat(response.statusText));
      }

      return response;
    }
  }, {
    key: "toJSON",
    value: function toJSON(response) {
      return response.json();
    }
  }, {
    key: "catchError",
    value: function catchError(err) {
      throw err;
    }
  }]);

  return Api;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYmMvc3Vic2NyaWJlL3RlbXBsYXRlcy8uZGVmYXVsdC9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmJjL3N1YnNjcmliZS90ZW1wbGF0ZXMvLmRlZmF1bHQvc3JjL2pzL3N1YnNjcmliZS1mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9iMmItc2hvcC9zcmMvanMvYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJTdWJzY3JpYmVGb3JtIiwiaW5pdCIsImFwaSIsIkFwaSIsIkRFRkFVTFRfRVJST1JfTUVTU0FHRSIsIlNUQVRVU19UT19BTEVSVF9DTEFTUyIsImZvcm1OYW1lIiwiX2VsZW1lbnQiLCJmb3JtcyIsIl9yZXF1ZXN0VXJsIiwiYWN0aW9uIiwiX2FsZXJ0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb25TdWJtaXQiLCJiaW5kIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJtaW5kYm94Rm9vdGVyU3Vic2NyaWJlIiwiZ2V0IiwiZSIsIkVycm9yIiwiX3Nob3dNZXNzYWdlIiwiY2F0Y2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJrZXlzIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImFkZCIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9zZXRIYW5kbGVycyIsIk1ldGhvZCIsIkdFVCIsIlBVVCIsIlBPU1QiLCJERUxFVEUiLCJTdWNjZXNzSFRUUFN0YXR1c1JhbmdlIiwiTUlOIiwiTUFYIiwicGF5bG9hZCIsInVybCIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsIl9sb2FkIiwibWV0aG9kIiwiYm9keSIsInRvSlNPTiIsIkhlYWRlcnMiLCJmZXRjaCIsImNoZWNrU3RhdHVzIiwiY2F0Y2hFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiZXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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O0FBT0Q7OztnQ0FFa0J4QyxRLEVBQVU7QUFDM0IsVUFDRUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCeUIsc0JBQXNCLENBQUNDLEdBQXpDLElBQ0EzQixRQUFRLENBQUNDLE1BQVQsR0FBa0J5QixzQkFBc0IsQ0FBQ0UsR0FGM0MsRUFHRTtBQUNBLGNBQU0sSUFBSXJCLEtBQUosV0FBYVAsUUFBUSxDQUFDQyxNQUF0QixlQUFpQ0QsUUFBUSxDQUFDeUMsVUFBMUMsRUFBTjtBQUNEOztBQUVELGFBQU96QyxRQUFQO0FBQ0Q7OzsyQkFFYUEsUSxFQUFVO0FBQ3RCLGFBQU9BLFFBQVEsQ0FBQzBDLElBQVQsRUFBUDtBQUNEOzs7K0JBRWlCQyxHLEVBQUs7QUFDckIsWUFBTUEsR0FBTjtBQUNEIiwiZmlsZSI6ImxvY2FsL2NvbXBvbmVudHMvbmJjL3N1YnNjcmliZS90ZW1wbGF0ZXMvLmRlZmF1bHQvc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2JpdHJpeC1kZW1vL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbXBvbmVudHMvbmJjL3N1YnNjcmliZS90ZW1wbGF0ZXMvLmRlZmF1bHQvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCBTdWJzY3JpYmVGb3JtIGZyb20gXCIuL3N1YnNjcmliZS1mb3JtXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gIG5ldyBTdWJzY3JpYmVGb3JtKGBzdWJzY3JpYmVgKS5pbml0KCk7XG59KTtcbiIsImltcG9ydCBBcGkgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RlbXBsYXRlcy9iMmItc2hvcC9zcmMvanMvYXBpL2FwaVwiO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XG5jb25zdCBERUZBVUxUX0VSUk9SX01FU1NBR0UgPSBg0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiwg0L/QvtCy0YLQvtGA0LjRgtC1INCy0LDRiNGDINC/0L7Qv9GL0YLQutGDINC/0L7Qt9C20LUuYDtcbmNvbnN0IFNUQVRVU19UT19BTEVSVF9DTEFTUyA9IHtcbiAgMjAwOiBgYWxlcnQtc3VjY2Vzc2AsXG4gIDQwMDogYGFsZXJ0LWRhbmdlcmAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpYmVGb3JtIHtcbiAgY29uc3RydWN0b3IoZm9ybU5hbWUpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuZm9ybXNbZm9ybU5hbWVdO1xuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3JlcXVlc3RVcmwgPSB0aGlzLl9lbGVtZW50LmFjdGlvbjtcbiAgICAgIHRoaXMuX2FsZXJ0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXN1YnNjcmliZS1hbGVydGApO1xuICAgIH1cblxuICAgIHRoaXMuX29uU3VibWl0ID0gdGhpcy5fb25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblN1Ym1pdChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuX2VsZW1lbnQpO1xuICAgIGFwaVxuICAgICAgLnBvc3QoZm9ybURhdGEsIHRoaXMuX3JlcXVlc3RVcmwsIGBgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlIH0gPSByZXNwb25zZTtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2luZG93Lm1pbmRib3hGb290ZXJTdWJzY3JpYmUoZm9ybURhdGEuZ2V0KGBFTUFJTGApKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYNCS0LXRgNC+0Y/RgtC90L4sIG1pbmRib3gg0L3QtSDQv9C+0LTQutC70Y7Rh9C10L0g4oCTICR7ZX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaG93TWVzc2FnZShtZXNzYWdlLCBzdGF0dXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB0aGlzLl9zaG93TWVzc2FnZShERUZBVUxUX0VSUk9SX01FU1NBR0UsIDQwMCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3Nob3dNZXNzYWdlKG1lc3NhZ2UsIHN0YXR1cykge1xuICAgIHRoaXMuX2FsZXJ0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFUVVNfVE9fQUxFUlRfQ0xBU1MpXG4gICAgKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhTVEFUVVNfVE9fQUxFUlRfQ0xBU1MpLmluY2x1ZGVzKHN0YXR1cy50b1N0cmluZygpKSkge1xuICAgICAgdGhpcy5fYWxlcnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoU1RBVFVTX1RPX0FMRVJUX0NMQVNTW3N0YXR1c10pO1xuICAgIH1cblxuICAgIHRoaXMuX2FsZXJ0RWxlbWVudC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5fYWxlcnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgaGlkZGVuYCk7XG4gIH1cblxuICBfc2V0SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBzdWJtaXRgLCB0aGlzLl9vblN1Ym1pdCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9zZXRIYW5kbGVycygpO1xuICAgIH1cbiAgfVxufVxuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImNvbnN0IE1ldGhvZCA9IHtcbiAgR0VUOiBgR0VUYCxcbiAgUFVUOiBgUFVUYCxcbiAgUE9TVDogYFBPU1RgLFxuICBERUxFVEU6IGBERUxFVEVgLFxufTtcblxuY29uc3QgU3VjY2Vzc0hUVFBTdGF0dXNSYW5nZSA9IHtcbiAgTUlOOiAyMDAsXG4gIE1BWDogMjk5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgcG9zdChwYXlsb2FkLCB1cmwsIGNvbnRlbnRUeXBlID0gYHRleHQvcGxhaW5gKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIC8vIEVtdWxhdGVzIFhNTEh0dHBSZXF1ZXN0IHRvIHBhc3MgdGhlIEJpdHJpeCBpc0FqYXhSZXF1ZXN0KCkgY2hlY2suXG4gICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuICAgIH07XG5cbiAgICBpZiAoY29udGVudFR5cGUpIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBjb250ZW50VHlwZTtcblxuICAgIHJldHVybiB0aGlzLl9sb2FkKHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogTWV0aG9kLlBPU1QsXG4gICAgICBib2R5OiBwYXlsb2FkLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9KS50aGVuKEFwaS50b0pTT04pO1xuICB9XG5cbiAgZ2V0KHVybCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkKHtcbiAgICAgIHVybCxcbiAgICB9KS50aGVuKEFwaS50b0pTT04pO1xuICB9XG5cbiAgX2xvYWQoeyB1cmwsIG1ldGhvZCA9IE1ldGhvZC5HRVQsIGJvZHkgPSBudWxsLCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKSB9KSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kLFxuICAgICAgYm9keSxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSlcbiAgICAgIC50aGVuKEFwaS5jaGVja1N0YXR1cylcbiAgICAgIC5jYXRjaChBcGkuY2F0Y2hFcnJvcik7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZS5zdGF0dXMgPCBTdWNjZXNzSFRUUFN0YXR1c1JhbmdlLk1JTiAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzID4gU3VjY2Vzc0hUVFBTdGF0dXNSYW5nZS5NQVhcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgc3RhdGljIHRvSlNPTihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBzdGF0aWMgY2F0Y2hFcnJvcihlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=