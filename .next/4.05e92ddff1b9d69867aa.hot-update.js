webpackHotUpdate(4,{

/***/ "./components/inputform.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected jsxTagEnd (97:2)\n\n\u001b[0m \u001b[90m  95 | \u001b[39m\t\t\t\tonSubmit\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39monSubmit}\n \u001b[90m  96 | \u001b[39m\t\t\t\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mFormi\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  97 | \u001b[39m\t\t)\n \u001b[90m     | \u001b[39m\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  98 | \u001b[39m\t}\n \u001b[90m  99 | \u001b[39m}\n \u001b[90m 100 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./node_modules/formik/dist/formik.es6.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform__ = __webpack_require__("./components/inputform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_inputform__);
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();






var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
		__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_inputform__["default"], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

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
//# sourceMappingURL=4.05e92ddff1b9d69867aa.hot-update.js.map