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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() {\r\n\r\n    // Отправка email (Просто визуал)\r\n\r\n    $(\"#emailAddress\").keyup(function() {\r\n    if (!$(this).val()) {\r\n        $(\"#emailSubmit\").addClass('btn-inactive');\r\n        $('a').click(function(event){\r\n            event.preventDefault();\r\n        });\r\n    } else {\r\n        $(\"#emailSubmit\").removeClass('btn-inactive');\r\n        $('#emailSubmit').click(function(){\r\n            $(\".password-subtitle\").addClass('block-inactive');\r\n            $(\".reset_password-form\").addClass('block-inactive');\r\n            $(\".reset_password-sent\").removeClass('block-inactive');\r\n        });\r\n    }\r\n    });\r\n\r\n    // Показать, скрыть пароль\r\n\r\n    $('body').on('click', '.password-control', function(){\r\n        if ($('.new__password input').attr('type') == 'password'){\r\n            $(this).addClass('view');\r\n            $('.new__password input').attr('type', 'text');\r\n        } else {\r\n            $(this).removeClass('view');\r\n            $('.new__password input').attr('type', 'password');\r\n        }\r\n        return false;\r\n    });\r\n\r\n    // Проверка на правильность пароля\r\n    $(\"#newPasswordRepeat\").keyup(function() {\r\n        let password_input1 = $('#newPassword').val();\r\n        let password_input2 = $(this).val();\r\n        if (password_input1 != password_input2) {\r\n            $(\".error-password\").html(\"Ваши пароли не совпадают. Попробуйте снова\");\r\n            $('#newPasswordRepeat').addClass('error-password-input');\r\n            $(\".reset__password-btn a\").addClass('btn-inactive');\r\n        } else {\r\n            $(\".reset__password-btn a\").removeClass('btn-inactive');\r\n            $('#newPasswordRepeat').removeClass('error-password-input');\r\n            $(\".error-password\").html(\"\");\r\n            $('#passwordSubmit').click(function(){\r\n                $(\".new_password-form\").addClass('block-inactive');\r\n                $(\".reset_password-sent\").removeClass('block-inactive');\r\n            });\r\n        }\r\n    });\r\n\r\n    // Показать опции \r\n    $('.select-block .select').click(function(){\r\n        $('.select-options').toggleClass('hide');\r\n    });\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\www\\agent_web_html\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! D:\\www\\agent_web_html\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });