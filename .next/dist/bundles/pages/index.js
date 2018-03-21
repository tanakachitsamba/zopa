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

/***/ "./components/account/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./components/account/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/components/account/index.js';



var Data = [{
	id: 1,
	name: 'Natalia',
	email: 'natalia@zopa.com',
	amount: '£1,500.00'
}, {
	id: 2,
	name: 'Thomas',
	email: 'thomas@zopa.com',
	amount: '£1,000.00'
}, {
	id: 3,
	name: 'Martin',
	email: 'martin@zopa.com',
	amount: '£2,000.00'
}];

var Item = function Item(_ref) {
	var name = _ref.name,
	    email = _ref.email,
	    amount = _ref.amount;
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 27
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			'div',
			{ style: { float: 'left' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
				__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].ItemName,
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				},
				name
			),
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
				__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].ItemEmail,
				{ marginBottom: 5, __source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				},
				email
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].ItemAmount,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			},
			amount
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].Hr, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		})
	);
};

var Sent = function Sent(_ref2) {
	var amount = _ref2.amount,
	    text = _ref2.text,
	    alignRight = _ref2.alignRight;
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].InfoCol,
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].SentAmount,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			},
			amount
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].SpendText,
			{ alignRight: alignRight, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			},
			text
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 53
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].Wrapper,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Sent, { amount: '\xA34, 500.00', text: 'total sent', alignRight: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].Graph, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Sent, { amount: '\xA313,500.000', text: 'left available', alignRight: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */].SubTitle,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			},
			'Transactions'
		),
		Data.map(function (i) {
			return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, _extends({ key: i.id }, i, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}));
		})
	);
});

/***/ }),

/***/ "./components/account/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tline-height: 24px;\n\tfont-size: 16px;\n\tcolor: #1c2139;\n\n\tmargin-bottom: ', ';\n'], ['\n\tfont-family: SF Pro Text;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tline-height: 24px;\n\tfont-size: 16px;\n\tcolor: #1c2139;\n\n\tmargin-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-size: 12px;\n\tcolor: #4a4a4a;\n'], ['\n\tfont-size: 12px;\n\tcolor: #4a4a4a;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-weight: 600;\n\tline-height: 20px;\n\tfont-size: 16px;\n\ttext-align: right;\n\tcolor: #1c2139;\n\tfloat: right;\n'], ['\n\tfont-weight: 600;\n\tline-height: 20px;\n\tfont-size: 16px;\n\ttext-align: right;\n\tcolor: #1c2139;\n\tfloat: right;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tpadding: none !important;\n\twidth: 75px;\n\theight: 75px;\n'], ['\n\tpadding: none !important;\n\twidth: 75px;\n\theight: 75px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tmargin: 30px;\n'], ['\n\tmargin: 30px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tfont-weight: 600;\n\tline-height: 24px;\n\tfont-size: 16px;\n\ttext-align: right;\n\tcolor: #1c2139;\n\twhite-space: nowrap;\n'], ['\n\tfont-family: SF Pro Text;\n\tfont-weight: 600;\n\tline-height: 24px;\n\tfont-size: 16px;\n\ttext-align: right;\n\tcolor: #1c2139;\n\twhite-space: nowrap;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tline-height: 24px;\n\tfont-size: 16px;\n\ttext-align: ', ';\n\twhite-space: nowrap;\n\tcolor: #1c2139;\n'], ['\n\tfont-family: SF Pro Text;\n\tline-height: 24px;\n\tfont-size: 16px;\n\ttext-align: ', ';\n\twhite-space: nowrap;\n\tcolor: #1c2139;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\tclear: both;\n\tborder: 0.4px solid #d6d7de;\n\tmargin-bottom: 14px;\n'], ['\n\tclear: both;\n\tborder: 0.4px solid #d6d7de;\n\tmargin-bottom: 14px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\tfont-family: Alverata;\n\tfont-style: normal;\n\tfont-weight: 900;\n\tline-height: 24px;\n\tfont-size: 16px;\n\tletter-spacing: 0.1px;\n\tcolor: #0b1137;\n\tmargin-bottom: 30px;\n'], ['\n\tfont-family: Alverata;\n\tfont-style: normal;\n\tfont-weight: 900;\n\tline-height: 24px;\n\tfont-size: 16px;\n\tletter-spacing: 0.1px;\n\tcolor: #0b1137;\n\tmargin-bottom: 30px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 80px;\n'], ['\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 80px;\n']),
    _templateObject11 = _taggedTemplateLiteral([''], ['']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Graph = function Graph(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			'title',
			null,
			'graph'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			'desc',
			null,
			'Created using Figma'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('use', {
			xlinkHref: '#a',
			transform: 'matrix(3 0 0 -3 3 192)',
			fill: '#FFF'
		}),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('use', {
			xlinkHref: '#b',
			transform: 'matrix(3 0 0 -3 27 168)',
			fill: '#EAEAEE'
		}),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('use', {
			xlinkHref: '#c',
			transform: 'matrix(3 0 0 -3 26.868 168.021)',
			fill: '#FFB428'
		}),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			'defs',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('path', {
				id: 'a',
				fillRule: 'evenodd',
				d: 'M0 0h64v64H0V0z'
			}),
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('path', {
				id: 'b',
				d: 'M24 56c17.673 0 32-14.327 32-32H40c0 8.837-7.163 16-16 16v16zm32-32C56 6.327 41.673-8 24-8V8c8.837 0 16 7.163 16 16h16zM24-8C6.327-8-8 6.327-8 24H8c0-8.837 7.163-16 16-16V-8zM-8 24c0 17.673 14.327 32 32 32V40c-8.837 0-16-7.163-16-16H-8z'
			}),
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('path', {
				id: 'c',
				d: 'M24.044 56.007c17.673 0 32-14.327 32-32h-16c0 8.836-7.163 16-16 16v16zm32-32C56.044 6.392 42.05-8 24.022-8V8c9.076 0 16.022 7.112 16.022 16.007h16zM24.022-8C5.892-8-8.338 7.676-7.994 24.174l15.997-.334C7.84 16.12 15.046 8 24.022 8V-8z'
			})
		)
	);
};

Graph.defaultProps = {
	width: '195',
	height: '195',
	viewBox: '0 0 195 195',
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink'
};


var Name = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, function (_ref) {
	var marginBottom = _ref.marginBottom;
	return marginBottom ? marginBottom + 'px' : '0px';
});

var Email = Name.extend(_templateObject2);

var Amount = Name.extend(_templateObject3);

var StyledGraph = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(Graph)(_templateObject4);

var InfoCol = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject5);

var SentAmount = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject6);

var SpendText = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject7, function (_ref2) {
	var alignRight = _ref2.alignRight;
	return alignRight ? 'right' : 'left';
});

var Hr = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject8);

var SubTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject9);

var InfoWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject10);

var Account = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject11);
Account.Wrapper = InfoWrapper;
Account.InfoCol = InfoCol;
Account.Graph = StyledGraph;
Account.SpendText = SpendText;
Account.SubTitle = SubTitle;
Account.ItemName = Name;
Account.ItemEmail = Email;
Account.ItemAmount = Amount;
Account.Hr = Hr;
Account.SentAmount = SentAmount;

/* harmony default export */ __webpack_exports__["a"] = (Account);

/***/ }),

/***/ "./components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account__ = __webpack_require__("./components/account/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputform__ = __webpack_require__("./components/inputform/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__account__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__inputform__["a"]; });





/***/ }),

/***/ "./components/inputform/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formik__ = __webpack_require__("formik");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_formik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty__ = __webpack_require__("lodash.isempty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isempty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./components/inputform/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			amount: ''
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
				component: InnerForm,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			});
		}
	}]);

	return InputForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (InputForm);


var InnerForm = function InnerForm(_ref2) {
	var values = _ref2.values,
	    errors = _ref2.errors,
	    handleChange = _ref2.handleChange,
	    handleBlur = _ref2.handleBlur,
	    handleSubmit = _ref2.handleSubmit,
	    isSubmitting = _ref2.isSubmitting,
	    touched = _ref2.touched;
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */],
		{ onSubmit: handleSubmit, __source: {
				fileName: _jsxFileName,
				lineNumber: 83
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Label,
			{ topLabel: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			},
			'Name'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Input, {
			label: 'name',
			name: 'name',
			onChange: handleChange,
			onBlur: handleBlur,
			values: values.name,
			error: errors.name,
			touched: touched.name,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}),
		touched.name && errors.name && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			},
			errors.name
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Label,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			},
			'Email'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Input, {
			label: 'email',
			name: 'email',
			onChange: handleChange,
			onBlur: handleBlur,
			values: values.email,
			error: errors.email,
			touched: touched.email,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 98
			}
		}),
		touched.email && errors.email && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			},
			errors.email
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Label,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			},
			'Amount'
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].CurrencyInput, {
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
				lineNumber: 111
			}
		}),
		touched.amount && errors.amount && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].ErrorText,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			},
			errors.amount
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Button,
			{ type: 'submit', disabled: isSubmitting, __source: {
					fileName: _jsxFileName,
					lineNumber: 124
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
var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tline-height: 20px;\n\tfont-size: 15px;\n\tcolor: #1c2139;\n\tpadding-bottom: 5px;\n\t', ';\n'], ['\n\tfont-family: SF Pro Text;\n\tline-height: 20px;\n\tfont-size: 15px;\n\tcolor: #1c2139;\n\tpadding-bottom: 5px;\n\t', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Display;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #000000;\n\twidth: 100%;\n\tborder: none;\n\tborder-radius: 0;\n\tpadding: 10px 10px 10px 0;\n\ttransition: border-bottom 2s;\n\tborder-bottom: 2px solid\n\t\t', ';\n\n\t:focus {\n\t\tborder-bottom: 2px solid\n\t\t\t', ';\n\t}\n'], ['\n\tfont-family: SF Pro Display;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #000000;\n\twidth: 100%;\n\tborder: none;\n\tborder-radius: 0;\n\tpadding: 10px 10px 10px 0;\n\ttransition: border-bottom 2s;\n\tborder-bottom: 2px solid\n\t\t', ';\n\n\t:focus {\n\t\tborder-bottom: 2px solid\n\t\t\t', ';\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tline-height: 24px;\n\ttext-align: center;\n\tbackground: #4b3cfa;\n\tcolor: white;\n\tborder-radius: 100px;\n\tdisplay: inline-block;\n\tborder: none;\n\ttext-decoration: none;\n\theight: 48px;\n\tmargin-top: 190px;\n'], ['\n\tfont-family: SF Pro Text;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tline-height: 24px;\n\ttext-align: center;\n\tbackground: #4b3cfa;\n\tcolor: white;\n\tborder-radius: 100px;\n\tdisplay: inline-block;\n\tborder: none;\n\ttext-decoration: none;\n\theight: 48px;\n\tmargin-top: 190px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Text;\n\tline-height: 20px;\n\tfont-size: 14px;\n\tcolor: #d0021b;\n\tmargin-top: 5px;\n'], ['\n\tfont-family: SF Pro Text;\n\tline-height: 20px;\n\tfont-size: 14px;\n\tcolor: #d0021b;\n\tmargin-top: 5px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tfont-family: SF Pro Display;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #000000;\n\twidth: 100%;\n\tborder: none;\n\tborder-radius: 0;\n\tpadding: 20px 10px 10px 0;\n\ttransition: border-bottom 2s;\n\tborder-bottom: 2px solid\n\t\t', ';\n\n\t:focus {\n\t\tborder-bottom: 2px solid\n\t\t\t', ';\n\t}\n'], ['\n\tfont-family: SF Pro Display;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #000000;\n\twidth: 100%;\n\tborder: none;\n\tborder-radius: 0;\n\tpadding: 20px 10px 10px 0;\n\ttransition: border-bottom 2s;\n\tborder-bottom: 2px solid\n\t\t', ';\n\n\t:focus {\n\t\tborder-bottom: 2px solid\n\t\t\t', ';\n\t}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Form = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.form(_templateObject);

var StyledLabel = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.label(_templateObject2, function (_ref) {
	var topLabel = _ref.topLabel;
	return !topLabel && 'margin-top: 36px;';
});

var StyledInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input(_templateObject3, function (_ref2) {
	var error = _ref2.error,
	    touched = _ref2.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref3) {
	var error = _ref3.error,
	    touched = _ref3.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
});

var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button(_templateObject4);

var StyledErrorText = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject5);

var StyledCurrencyInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_react_currency_input___default.a)(_templateObject6, function (_ref4) {
	var error = _ref4.error,
	    touched = _ref4.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref5) {
	var error = _ref5.error,
	    touched = _ref5.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
});

Form.Label = StyledLabel;
Form.Input = StyledInput;
Form.Button = StyledButton;
Form.ErrorText = StyledErrorText;
Form.CurrencyInput = StyledCurrencyInput;
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./pages/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__("./pages/home/styles.js");
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/home/index.js';






/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		__WEBPACK_IMPORTED_MODULE_4__styles__["c" /* Home */],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_2_react_responsive___default.a,
			{ minDeviceWidth: 500, __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
				__WEBPACK_IMPORTED_MODULE_4__styles__["b" /* ContentWrapper */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
					__WEBPACK_IMPORTED_MODULE_4__styles__["a" /* Col */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 13
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
						__WEBPACK_IMPORTED_MODULE_4__styles__["d" /* Title */],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 14
							}
						},
						'Send Money'
					),
					__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components__["b" /* InputForm */], {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 15
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__styles__["e" /* VerticalLine */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 17
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
					__WEBPACK_IMPORTED_MODULE_4__styles__["a" /* Col */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
						__WEBPACK_IMPORTED_MODULE_4__styles__["d" /* Title */],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 19
							}
						},
						'My account'
					),
					__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__components__["a" /* Account */], {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					})
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
			__WEBPACK_IMPORTED_MODULE_2_react_responsive___default.a,
			{ maxDeviceWidth: 499, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 27
					}
				},
				'Not Currently Supported'
			)
		)
	);
});

/***/ }),

/***/ "./pages/home/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n'], ['\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-family: Alverata;\n\tfont-weight: 900;\n\tline-height: 40px;\n\tfont-size: 32px;\n\tcolor: #1c2139;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tjustify-content: center;\n\twidth: 80%;\n\tmargin: 0 auto 44px auto;\n'], ['\n\tfont-family: Alverata;\n\tfont-weight: 900;\n\tline-height: 40px;\n\tfont-size: 32px;\n\tcolor: #1c2139;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tjustify-content: center;\n\twidth: 80%;\n\tmargin: 0 auto 44px auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tmargin: 6em auto;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-wrap: nowrap;\n'], ['\n\tmargin: 6em auto;\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-wrap: nowrap;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\talign-self: center;\n\tborder-left: 1px solid #e9eaf4;\n\theight: 670px;\n'], ['\n\talign-self: center;\n\tborder-left: 1px solid #e9eaf4;\n\theight: 670px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\talign-self: flex-start;\n\n\t> * {\n\t\tdisplay: flex;\n\t\tflex: 1;\n\t\tflex-direction: column;\n\t\twidth: 80%;\n\t\tmargin: 0 auto;\n\t\tpadding-left: 3em;\n\t\tpadding-right: 3em;\n\t\tpadding-bottom: 2em;\n\t\tpadding-top: 2em;\n\t\twidth: 340px;\n\t}\n'], ['\n\talign-self: flex-start;\n\n\t> * {\n\t\tdisplay: flex;\n\t\tflex: 1;\n\t\tflex-direction: column;\n\t\twidth: 80%;\n\t\tmargin: 0 auto;\n\t\tpadding-left: 3em;\n\t\tpadding-right: 3em;\n\t\tpadding-bottom: 2em;\n\t\tpadding-top: 2em;\n\t\twidth: 340px;\n\t}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Home = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);

var ContentWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3);

var VerticalLine = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject4);

var Col = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject5);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__("./pages/home/index.js");
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__home__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map