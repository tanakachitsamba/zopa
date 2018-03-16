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
			amount: '' // would be double decimal but not currently needed.
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
			(function (errors) {
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
		__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* default */].Form,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_utils__ = __webpack_require__("./style-utils.js");
var _templateObject = _taggedTemplateLiteral(['\n\t\twidth: 100%;\n\t\tpadding: 1em 2em 2em 2em;\n\t'], ['\n\t\twidth: 100%;\n\t\tpadding: 1em 2em 2em 2em;\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\tfont-size: 22px;\n\t\tpadding-bottom: 10px;\n\t\t', ';\n\t'], ['\n\t\tfont-size: 22px;\n\t\tpadding-bottom: 10px;\n\t\t', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tfont-size: 30px;\n\t\tpadding: 20px 20px 20px 0;\n\t'], ['\n\t\tfont-size: 30px;\n\t\tpadding: 20px 20px 20px 0;\n\t']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\tfont-size: 20px;\n\t\theight: 50px;\n\t'], ['\n\t\tfont-size: 20px;\n\t\theight: 50px;\n\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\tfont-size: 18px;\n\t\tmargin-top: 10px;\n\t'], ['\n\t\tfont-size: 18px;\n\t\tmargin-top: 10px;\n\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t\tfont-size: 32px;\n\t\tpadding: 20px 20px 20px 0;\n\t'], ['\n\t\tfont-size: 32px;\n\t\tpadding: 20px 20px 20px 0;\n\t']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledForm = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.form.withConfig({
	displayName: 'styles__StyledForm',
	componentId: 's90ypnu-0'
})(['display:flex;flex:1;flex-direction:column;justify-content:center;width:80%;margin:0 auto;padding:0 2em 2em 2em;', ''], __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject));

var StyledLabel = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.label.withConfig({
	displayName: 'styles__StyledLabel',
	componentId: 's90ypnu-1'
})(['font-family:SF Pro Text;line-height:20px;font-size:15px;color:#1c2139;padding-bottom:5px;', ';', ''], function (_ref) {
	var topLabel = _ref.topLabel;
	return !topLabel && 'margin-top: 36px;';
}, __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject2, function (_ref2) {
	var topLabel = _ref2.topLabel;
	return !topLabel && 'margin-top: 48px;';
}));

var StyledInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input.withConfig({
	displayName: 'styles__StyledInput',
	componentId: 's90ypnu-2'
})(['font-family:SF Pro Display;font-size:20px;line-height:24px;color:#000000;width:100%;border:none;border-radius:0;padding:10px 10px 10px 0;transition:border-bottom 2s;border-bottom:2px solid ', ';:focus{border-bottom:2px solid ', ';}', ''], function (_ref3) {
	var error = _ref3.error,
	    touched = _ref3.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref4) {
	var error = _ref4.error,
	    touched = _ref4.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
}, __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject3));

var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button.withConfig({
	displayName: 'styles__StyledButton',
	componentId: 's90ypnu-3'
})(['font-family:SF Pro Text;font-size:16px;font-weight:600;line-height:24px;text-align:center;background:#4b3cfa;color:white;border-radius:100px;display:inline-block;border:none;text-decoration:none;height:48px;margin-top:190px;', ''], __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject4));

var StyledErrorText = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
	displayName: 'styles__StyledErrorText',
	componentId: 's90ypnu-4'
})(['font-family:SF Pro Text;line-height:20px;font-size:14px;color:#d0021b;margin-top:5px;', ''], __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject5));

var StyledCurrencyInput = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_react_currency_input___default.a).withConfig({
	displayName: 'styles__StyledCurrencyInput',
	componentId: 's90ypnu-5'
})(['font-family:SF Pro Display;font-size:20px;line-height:24px;color:#000000;width:100%;border:none;border-radius:0;padding:20px 10px 10px 0;transition:border-bottom 2s;border-bottom:2px solid ', ';:focus{border-bottom:2px solid ', ';}', ''], function (_ref5) {
	var error = _ref5.error,
	    touched = _ref5.touched;
	return touched && error ? '#D0021B' : '#d6d7de';
}, function (_ref6) {
	var error = _ref6.error,
	    touched = _ref6.touched;
	return touched && error ? '#D0021B' : '#4B3CFA';
}, __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject6));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_utils__ = __webpack_require__("./style-utils.js");
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';

var _templateObject = _taggedTemplateLiteral(['\n\t\twidth: 80%;\n        font-size: 40px;\n        margin: 0 auto 60px auto;\n\t'], ['\n\t\twidth: 80%;\n        font-size: 40px;\n        margin: 0 auto 60px auto;\n\t']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'pages__StyledTitle',
    componentId: 'pj87p0-0'
})(['font-family:Alverata;font-weight:900;line-height:40px;font-size:32px;color:#1C2139;display:flex;flex:1;flex-direction:column;justify-content:center;width:80%;margin:0 auto 44px auto;', ''], __WEBPACK_IMPORTED_MODULE_3__style_utils__["a" /* media */].retina(_templateObject));

var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'pages__Wrapper',
    componentId: 'pj87p0-1'
})(['margin:6em auto;']);

/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            StyledTitle,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            },
            'Send Money'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_inputform__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 36
            }
        })
    );
});

/***/ }),

/***/ "./style-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return media; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);



// media query mixin 
var media = {
    ipad: function ipad() {
        return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["css"])(['@media  (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){', '}'], __WEBPACK_IMPORTED_MODULE_1_styled_components__["css"].apply(undefined, arguments));
    },

    retina: function retina() {
        return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["css"])(['@media only screen (max-device-width:767px){', '}'], __WEBPACK_IMPORTED_MODULE_1_styled_components__["css"].apply(undefined, arguments));
    }
};

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