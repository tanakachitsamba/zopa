webpackHotUpdate(4,{

/***/ "./components/inputform/index.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected : (148:23)\n\n\u001b[0m \u001b[90m 146 | \u001b[39m\u001b[32m\tcolor: #1c2139;\u001b[39m\n \u001b[90m 147 | \u001b[39m\u001b[32m\tpadding-bottom: 5px;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 148 | \u001b[39m\u001b[32m\t${({ topLabel }: { top}) => !topLabel && `margin-top: 36px;`};\u001b[39m\n \u001b[90m     | \u001b[39m     \t                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 149 | \u001b[39m\u001b[32m`\u001b[39m\n \u001b[90m 150 | \u001b[39m\n \u001b[90m 151 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mStyledInput\u001b[39m \u001b[33m=\u001b[39m styled\u001b[33m.\u001b[39minput\u001b[32m`\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./node_modules/fbjs/lib/EventListener.js":
false,

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
false,

/***/ "./node_modules/fbjs/lib/camelize.js":
false,

/***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
false,

/***/ "./node_modules/fbjs/lib/containsNode.js":
false,

/***/ "./node_modules/fbjs/lib/focusNode.js":
false,

/***/ "./node_modules/fbjs/lib/getActiveElement.js":
false,

/***/ "./node_modules/fbjs/lib/hyphenate.js":
false,

/***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
false,

/***/ "./node_modules/fbjs/lib/isNode.js":
false,

/***/ "./node_modules/fbjs/lib/isTextNode.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/formik/dist/formik.es6.js":
false,

/***/ "./node_modules/lodash.isempty/index.js":
false,

/***/ "./node_modules/react-currency-input/lib/react-currency-input.es.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform__ = __webpack_require__("./components/inputform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_inputform__);
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();





var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
  displayName: 'pages__Wrapper',
  componentId: 'pj87p0-0'
})([' ']);

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_inputform__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, 'Wrapper', '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.03b77f93246886f3061f.hot-update.js.map