"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SideBar.js":
/*!***********************************!*\
  !*** ./src/components/SideBar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/SideBar.module.css */ \"./src/styles/SideBar.module.css\");\n/* harmony import */ var _styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst SideBar = (param)=>{\n    let { schedules  } = param;\n    _s();\n    const generateEvents = ()=>{\n        let events = [];\n        schedules.map((schedule)=>{\n            if (schedule.events.length > 0) {\n                events.concat(schedule.events);\n                console.log(\"concat\");\n            }\n        });\n        console.log(events);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        generateEvents();\n    }, [\n        schedules\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ps-2 pe-0 \".concat((_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().sidebar)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex justify-content-between align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"My Calendar\"\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/SideBar.js\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/SideBar.js\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    children: \"‹\"\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/SideBar.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ditarahma/Repositories/calendar/src/components/SideBar.js\",\n            lineNumber: 24,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/SideBar.js\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SideBar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRDtBQUNmO0FBRWpDLE1BQU1FLFVBQVUsU0FBaUI7UUFBaEIsRUFBQ0MsVUFBUyxFQUFDOztJQUMzQixNQUFNQyxpQkFBaUIsSUFBTTtRQUM1QixJQUFJQyxTQUFTLEVBQUU7UUFFZkYsVUFBVUcsR0FBRyxDQUFDLENBQUNDLFdBQWE7WUFDM0IsSUFBSUEsU0FBU0YsTUFBTSxDQUFDRyxNQUFNLEdBQUcsR0FBRztnQkFDL0JILE9BQU9JLE1BQU0sQ0FBQ0YsU0FBU0YsTUFBTTtnQkFDN0JLLFFBQVFDLEdBQUcsQ0FBQztZQUNiLENBQUM7UUFDRjtRQUVBRCxRQUFRQyxHQUFHLENBQUNOO0lBQ2I7SUFFQUosZ0RBQVNBLENBQUMsSUFBTTtRQUNmRztJQUNELEdBQUc7UUFBQ0Q7S0FBVTtJQUVkLHFCQUNDLDhEQUFDUztRQUFJQyxXQUFXLGFBQTRCLE9BQWZiLDJFQUFjO2tCQUMxQyw0RUFBQ1k7WUFBSUMsV0FBWTs7OEJBQ2hCLDhEQUFDRTs4QkFBSzs7Ozs7OzhCQUNOLDhEQUFDQztvQkFBT0gsV0FBWTs4QkFBTTs7Ozs7OzhCQUMxQiw4REFBQ0c7b0JBQU9ILFdBQVk7OEJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBM0JNWDtLQUFBQTtBQTZCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLmpzPzJjNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TaWRlQmFyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU2lkZUJhciA9ICh7c2NoZWR1bGVzfSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUV2ZW50cyA9ICgpID0+IHtcblx0XHRsZXQgZXZlbnRzID0gW11cblxuXHRcdHNjaGVkdWxlcy5tYXAoKHNjaGVkdWxlKSA9PiB7XG5cdFx0XHRpZiAoc2NoZWR1bGUuZXZlbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZXZlbnRzLmNvbmNhdChzY2hlZHVsZS5ldmVudHMpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb25jYXQnKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRjb25zb2xlLmxvZyhldmVudHMpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdlbmVyYXRlRXZlbnRzKClcblx0fSwgW3NjaGVkdWxlc10pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YHBzLTIgcGUtMCAke3N0eWxlcy5zaWRlYmFyfWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyYH0+XG5cdFx0XHRcdDxzcGFuPk15IENhbGVuZGFyPC9zcGFuPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGJ0bmB9Pis8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BidG5gfT4mbHNhcXVvOzwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjsiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlRWZmZWN0IiwiU2lkZUJhciIsInNjaGVkdWxlcyIsImdlbmVyYXRlRXZlbnRzIiwiZXZlbnRzIiwibWFwIiwic2NoZWR1bGUiLCJsZW5ndGgiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SideBar.js\n"));

/***/ })

});