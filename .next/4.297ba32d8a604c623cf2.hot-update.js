webpackHotUpdate(4,{

/***/ "./components/inputform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var InputForm = function (_React$Component) {
  _inherits(InputForm, _React$Component);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    var _this = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

    _this.handleInput = function (event) {
      return _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
    };

    _this.state = {
      name: '',
      email: '',
      amount: 0
    };
    return _this;
  }

  _createClass(InputForm, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        'form',
        { onSubmit: this.handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, {
          name: 'name',
          type: 'text',
          label: 'Name',
          value: this.state.name,
          onChange: this.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, {
          name: 'email',
          type: 'email',
          label: 'Email',
          value: this.state.email,
          onChange: this.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Input, {
          name: 'amount',
          type: 'number',
          label: 'Amount',
          value: this.state.amount,
          onChange: this.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: 'submit', value: 'Submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return InputForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = InputForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);


var Input = function Input(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['name', 'label', 'value', 'onChange', 'type']);

  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    'label',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    },
    label,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }))
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputForm, 'InputForm', '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js');
  reactHotLoader.register(Input, 'Input', '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js');
  reactHotLoader.register(_default, 'default', '/Users/tanakasamuel/git/PROJECTS/zopa/components/inputform.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.297ba32d8a604c623cf2.hot-update.js.map