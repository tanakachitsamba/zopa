webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputform__ = __webpack_require__("./components/inputform/index.js");
throw new Error("Cannot find module \"../\"");
var _jsxFileName = '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();






var StyledTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
    displayName: 'pages__StyledTitle',
    componentId: 'pj87p0-0'
})(['font-family:Alverata;font-style:normal;font-weight:900;line-height:40px;font-size:32px;letter-spacing:-0.1px;color:#1C2139;display:flex;flex:1;flex-direction:column;justify-content:center;width:340px;margin:0 auto 44px auto;']);

var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
    displayName: 'pages__Wrapper',
    componentId: 'pj87p0-1'
})(['margin:4em auto;']);

var _default = function _default() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            StyledTitle,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            'Send Money'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_inputform__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 32
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

    reactHotLoader.register(StyledTitle, 'StyledTitle', '/Users/tanakasamuel/git/PROJECTS/zopa/pages/index.js');
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
//# sourceMappingURL=4.2967a18d0bd2ecaacec3.hot-update.js.map