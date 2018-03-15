webpackHotUpdate(4,{

/***/ "./components/inputform/index.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (7:14)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mCurrencyInput\u001b[39m from \u001b[32m'react-currency-input'\u001b[39m\n \u001b[90m  6 | \u001b[39m\u001b[36mimport\u001b[39m styled from \u001b[32m'styled-components'\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mStyles\u001b[39m as \u001b[33mFormStyles\u001b[39m from \u001b[32m'./styles'\u001b[39m\n \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m\n \u001b[90m  9 | \u001b[39mtype \u001b[33mState\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m 10 | \u001b[39m\t[x\u001b[33m:\u001b[39m string]\u001b[33m:\u001b[39m string\u001b[0m\n");

/***/ }),

/***/ "./components/inputform/styles.js":
false,

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
//# sourceMappingURL=4.8ebf215ac4f610f370cf.hot-update.js.map