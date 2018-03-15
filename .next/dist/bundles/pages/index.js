module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/inputform/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formik__ = __webpack_require__("formik");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_formik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty__ = __webpack_require__("lodash.isempty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isempty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_currency_input__ = __webpack_require__("react-currency-input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_currency_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_currency_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__("./components/inputform/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var InputForm = function (_React$Component) {
	_inherits(InputForm, _React$Component);

	function InputForm() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			name: '',
			email: '',
			amount: '£ 0' // would be double decimal but not currently needed.
		}, _this.validate = function (values) {
			var errors = {};

			if (__WEBPACK_IMPORTED_MODULE_2_lodash_isempty___default()(values.email)) {
				errors.email = 'Please enter an email address';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}

			if (__WEBPACK_IMPORTED_MODULE_2_lodash_isempty___default()(values.name)) {
				errors.name = 'Please enter a name';
			} else if (!/^[A-Za-z ]+$/.test(values.name)) {
				errors.name = 'Please enter a valid name';
			}

			if (values.amount === '£ 0') {
				errors.amount = 'please enter an amont';
			}

			return errors;
		}, _this.onSubmit = function (setSubmitting, setErrors) {
			;(function (errors) {
				setSubmitting(false);
				setErrors(errors);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputForm, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_formik__["Formik"], {
				initialValues: _extends({}, this.state),
				validate: this.validate,
				onSubmit: this.onSubmit,
				component: Form,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			});
		}
	}]);

	return InputForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (InputForm);


var Form = function Form(_ref2) {
	var values = _ref2.values,
	    errors = _ref2.errors,
	    handleChange = _ref2.handleChange,
	    handleBlur = _ref2.handleBlur,
	    handleSubmit = _ref2.handleSubmit,
	    isSubmitting = _ref2.isSubmitting,
	    touched = _ref2.touched,
	    props = _objectWithoutProperties(_ref2, ['values', 'errors', 'handleChange', 'handleBlur', 'handleSubmit', 'isSubmitting', 'touched']);

	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Form,
		{ onSubmit: handleSubmit, __source: {
				fileName: _jsxFileName,
				lineNumber: 86
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Label,
			{ topLabel: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			},
			'Name'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Input, {
			label: 'name',
			name: 'name',
			onChange: handleChange,
			onBlur: handleBlur,
			values: values.name,
			error: errors.name,
			touched: touched.name,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 88
			}
		}),
		touched.name && errors.name && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			},
			errors.name
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Label,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			},
			'Email'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Input, {
			label: 'email',
			name: 'email',
			onChange: handleChange,
			onBlur: handleBlur,
			values: values.email,
			error: errors.email,
			touched: touched.email,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 101
			}
		}),
		touched.email && errors.email && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			},
			errors.email
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Label,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			},
			'Amount'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].CurrencyInput, {
			name: 'amount',
			value: values.amount,
			onChangeEvent: handleChange,
			onBlur: handleBlur,
			precision: '0',
			prefix: '\xA3 ',
			error: errors.amount,
			touched: touched.amount,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 114
			}
		}),
		touched.amount && errors.amount && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			},
			errors.amount
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_5__styles__["a" /* default */].Button,
			{ type: 'submit', disabled: isSubmitting, __source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			},
			'Send'
		)
	);
};

/***/ }),

/***/ "./components/inputform/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_currency_input__ = __webpack_require__("react-currency-input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_currency_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_currency_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);




var StyledForm = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.form.withConfig({
	displayName: 'styles__StyledForm',
	componentId: 's90ypnu-0'
})(['display:flex;flex:1;flex-direction:column;justify-content:center;width:340px;margin:4em auto;padding:3em 2em 2em 2em;']);

var StyledLabel = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.label.withConfig({
	displayName: 'styles__StyledLabel',
	componentId: 's90ypnu-1'
})(['font-family:SF Pro Text;line-height:20px;font-size:15px;color:#1c2139;padding-bottom:5px;', ';'], function (_ref) {
	var topLabel = _ref.topLabel;
	return !topLabel && 'margin-top: 36px;';
});

var StyledInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input.withConfig({
	displayName: 'styles__StyledInput',
	componentId: 's90ypnu-2'
})(['font-family:SF Pro Display;font-size:20px;line-height:24px;color:#000000;width:100%;border:none;border-radius:0;padding:10px 10px 10px 0;transition:border-bottom 2s;border-bottom:2px solid ', ';:focus{border-bottom:2px solid ', ';}'], function (_ref2) {
	var error = _ref2.error,
	    touched = _ref2.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref3) {
	var error = _ref3.error,
	    touched = _ref3.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
});

var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button.withConfig({
	displayName: 'styles__StyledButton',
	componentId: 's90ypnu-3'
})(['font-family:SF Pro Text;font-size:16px;font-weight:600;line-height:24px;text-align:center;background:#4b3cfa;color:white;border-radius:100px;display:inline-block;border:none;text-decoration:none;height:48px;margin-top:190px;']);

var StyledErrorText = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
	displayName: 'styles__StyledErrorText',
	componentId: 's90ypnu-4'
})(['font-family:SF Pro Text;font-style:normal;font-weight:normal;line-height:20px;font-size:14px;color:#d0021b;margin-top:5px;']);

var StyledCurrencyInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_react_currency_input___default.a).withConfig({
	displayName: 'styles__StyledCurrencyInput',
	componentId: 's90ypnu-5'
})(['font-family:SF Pro Display;font-size:20px;line-height:24px;color:#000000;width:100%;border:none;border-radius:0;padding:10px 10px 10px 0;transition:border-bottom 2s;border-bottom:2px solid ', ';:focus{border-bottom:2px solid ', ';}'], function (_ref4) {
	var error = _ref4.error,
	    touched = _ref4.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref5) {
	var error = _ref5.error,
	    touched = _ref5.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
});

var FormStyles = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
	displayName: 'styles__FormStyles',
	componentId: 's90ypnu-6'
})(['']);
FormStyles.Form = StyledForm;
FormStyles.Label = StyledLabel;
FormStyles.Input = StyledInput;
FormStyles.Button = StyledButton;
FormStyles.ErrorText = StyledErrorText;
FormStyles.CurrencyInput = StyledCurrencyInput;

/* harmony default export */ __webpack_exports__["a"] = (FormStyles);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform__ = __webpack_require__("./components/inputform/index.js");
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';




var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'pages__Wrapper',
  componentId: 'pj87p0-0'
})([' ']);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_inputform__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "formik":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "lodash.isempty":
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-currency-input":
/***/ (function(module, exports) {

module.exports = require("react-currency-input");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map