webpackHotUpdate(4,{

/***/ "./components/inputform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formik__ = __webpack_require__("./node_modules/formik/dist/formik.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty__ = __webpack_require__("./node_modules/lodash.isempty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isempty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isempty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_currency_input__ = __webpack_require__("./node_modules/react-currency-input/lib/react-currency-input.es.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Form = function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Form);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			name: '',
			email: '',
			amount: 0
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

			if (values.amount === 0.00) {
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

	_createClass(Form, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
				__WEBPACK_IMPORTED_MODULE_1_formik__["a" /* Formik */],
				{
					initialValues: _extends({}, this.state),
					validate: this.validate,
					onSubmit: this.onSubmit, __source: {
						fileName: _jsxFileName,
						lineNumber: 66
					}
				},
				function (_ref2) {
					var values = _ref2.values,
					    errors = _ref2.errors,
					    handleChange = _ref2.handleChange,
					    handleBlur = _ref2.handleBlur,
					    handleSubmit = _ref2.handleSubmit,
					    isSubmitting = _ref2.isSubmitting,
					    touched = _ref2.touched;
					return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
						'form',
						{ onSubmit: handleSubmit, __source: {
								fileName: _jsxFileName,
								lineNumber: 79
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', {
							type: 'name',
							name: 'name',
							onChange: handleChange,
							onBlur: handleBlur,
							value: values.name,
							placeholder: 'Jane Smith',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 80
							}
						}),
						touched.name && errors.name && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
							'div',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 89
								}
							},
							errors.name
						),
						__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', {
							type: 'email',
							name: 'email',
							onChange: handleChange,
							onBlur: handleBlur,
							value: values.email,
							placeholder: 'alex.smith@zopa.com',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 91
							}
						}),
						touched.email && errors.email && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
							'div',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							},
							errors.email
						),
						__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_currency_input__["a" /* default */], {
							name: 'amount',
							value: values.amount,
							onChangeEvent: handleChange,
							onBlur: handleBlur,
							prefix: '\xA3 ',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 102
							}
						}),
						touched.amount && errors.amount && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
							'div',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 110
								}
							},
							errors.amount
						),
						__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
							'button',
							{ type: 'submit', disabled: isSubmitting, __source: {
									fileName: _jsxFileName,
									lineNumber: 112
								}
							},
							'Send'
						)
					);
				}
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Form;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Form, 'Form', '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js');
	reactHotLoader.register(_default, 'default', '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.ccbcd28821c0d76ed089.hot-update.js.map