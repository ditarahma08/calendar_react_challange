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

/***/ "./src/components/Calendar.js":
/*!************************************!*\
  !*** ./src/components/Calendar.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Calendar.module.css */ \"./src/styles/Calendar.module.css\");\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ \"./src/utils/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Calendar = ()=>{\n    _s();\n    const [schedule, setSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const checkToday = (date)=>{\n        const today = new Date().getDate();\n        return date == today;\n    };\n    const generateDay = (date)=>{\n        const year = new Date().getFullYear();\n        const month = new Date().getMonth() + 1;\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        console.log(newDate);\n        return _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days[newDate];\n    };\n    const daysInMonth = (month, year)=>{\n        return new Date(year, month, 0).getDate();\n    };\n    const assignSchedule = ()=>{\n        const year = new Date().getFullYear();\n        const month = new Date().getMonth() + 1;\n        let newSchedule = [];\n        Array.from(Array(daysInMonth(month, year))).map((day, index)=>{\n            newSchedule.push({\n                date: index + 1,\n                day: generateDay(index + 1),\n                events: [],\n                isToday: checkToday(index + 1)\n            });\n        });\n        console.log(newSchedule);\n        setSchedule(newSchedule);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignSchedule();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().calendar)),\n        children: [\n            _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days.map((day, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day), \" \").concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().label)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: day\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 51,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined)),\n            [\n                ...Array(daysInMonth(2, 2023))\n            ].map((day, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 57,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 56,\n                    columnNumber: 5\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Calendar, \"ufj6drX7OuS1FJ8vycY2bacy/To=\");\n_c = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFDRztBQUUzQyxNQUFNSSxXQUFXLElBQU07O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1LLGFBQWEsQ0FBQ0MsT0FBUztRQUM1QixNQUFNQyxRQUFRLElBQUlDLE9BQU9DLE9BQU87UUFDaEMsT0FBT0gsUUFBUUM7SUFDaEI7SUFFQSxNQUFNRyxjQUFjLENBQUNKLE9BQVM7UUFDN0IsTUFBTUssT0FBTyxJQUFJSCxPQUFPSSxXQUFXO1FBQ25DLE1BQU1DLFFBQVEsSUFBSUwsT0FBT00sUUFBUSxLQUFLO1FBQ3RDLE1BQU1DLFVBQVUsSUFBSVAsS0FBSyxHQUFXSyxPQUFSRixNQUFLLEtBQVlMLE9BQVRPLE9BQU0sS0FBUSxPQUFMUDtRQUM3Q1UsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9oQixpREFBSSxDQUFDZ0IsUUFBUTtJQUNyQjtJQUVBLE1BQU1HLGNBQWMsQ0FBQ0wsT0FBT0YsT0FBUztRQUNwQyxPQUFPLElBQUlILEtBQUtHLE1BQU1FLE9BQU8sR0FBR0osT0FBTztJQUN4QztJQUVBLE1BQU1VLGlCQUFpQixJQUFNO1FBQzVCLE1BQU1SLE9BQU8sSUFBSUgsT0FBT0ksV0FBVztRQUNuQyxNQUFNQyxRQUFRLElBQUlMLE9BQU9NLFFBQVEsS0FBSztRQUN0QyxJQUFJTSxjQUFjLEVBQUU7UUFFcEJDLE1BQU1DLElBQUksQ0FBQ0QsTUFBTUgsWUFBWUwsT0FBT0YsUUFBUVksR0FBRyxDQUFDLENBQUNDLEtBQUtDLFFBQVU7WUFDL0RMLFlBQVlNLElBQUksQ0FBQztnQkFDaEJwQixNQUFNbUIsUUFBUTtnQkFDZEQsS0FBS2QsWUFBWWUsUUFBUTtnQkFDekJFLFFBQVEsRUFBRTtnQkFDVkMsU0FBU3ZCLFdBQVdvQixRQUFRO1lBQzdCO1FBQ0Q7UUFFRlQsUUFBUUMsR0FBRyxDQUFDRztRQUNWaEIsWUFBWWdCO0lBQ2I7SUFFQW5CLGdEQUFTQSxDQUFDLElBQU07UUFDZmtCO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNVO1FBQUlDLFdBQVcsR0FBbUIsT0FBaEJoQyw2RUFBZTs7WUFDaENDLHFEQUFRLENBQUMsQ0FBQ3lCLEtBQUtDLHNCQUNmLDhEQUFDSTtvQkFBSUMsV0FBVyxHQUFpQmhDLE9BQWRBLHdFQUFVLEVBQUMsS0FBZ0IsT0FBYkEsMEVBQVk7OEJBQzVDLDRFQUFDbUM7a0NBQU1UOzs7Ozs7Ozs7OztZQUlSO21CQUFJSCxNQUFNSCxZQUFZLEdBQUc7YUFBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQzNDLDhEQUFDSTtvQkFBSUMsV0FBVyxHQUFjLE9BQVhoQyx3RUFBVTs4QkFDNUIsNEVBQUNtQztrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXpETS9CO0tBQUFBO0FBMkROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyLmpzPzZkMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9DYWxlbmRhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZGF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYWxlbmRhciA9ICgpID0+IHtcblx0Y29uc3QgW3NjaGVkdWxlLCBzZXRTY2hlZHVsZV0gPSB1c2VTdGF0ZShbXSlcblxuXHRjb25zdCBjaGVja1RvZGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG5cdFx0cmV0dXJuIGRhdGUgPT0gdG9kYXlcblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlRGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxXG5cdFx0Y29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gKVxuXHRcdGNvbnNvbGUubG9nKG5ld0RhdGUpXG5cdFx0cmV0dXJuIGRheXNbbmV3RGF0ZV1cblx0fVxuXG5cdGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKClcblx0fVxuXG5cdGNvbnN0IGFzc2lnblNjaGVkdWxlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDFcblx0XHRsZXQgbmV3U2NoZWR1bGUgPSBbXVxuXG5cdFx0QXJyYXkuZnJvbShBcnJheShkYXlzSW5Nb250aChtb250aCwgeWVhcikpKS5tYXAoKGRheSwgaW5kZXgpID0+IHtcblx0XHRcdG5ld1NjaGVkdWxlLnB1c2goe1xuXHRcdFx0XHRkYXRlOiBpbmRleCArIDEsXG5cdFx0XHRcdGRheTogZ2VuZXJhdGVEYXkoaW5kZXggKyAxKSxcblx0XHRcdFx0ZXZlbnRzOiBbXSxcblx0XHRcdFx0aXNUb2RheTogY2hlY2tUb2RheShpbmRleCArIDEpXG5cdFx0XHR9KVxuXHRcdH0pXG5cbmNvbnNvbGUubG9nKG5ld1NjaGVkdWxlKVxuXHRcdHNldFNjaGVkdWxlKG5ld1NjaGVkdWxlKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3NpZ25TY2hlZHVsZSgpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYWxlbmRhcn1gfT5cblx0XHRcdHtkYXlzLm1hcCgoZGF5LCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRheX0gJHtzdHlsZXMubGFiZWx9YH0+XG5cdFx0XHRcdFx0PHNwYW4+e2RheX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cblx0XHRcdHtbLi4uQXJyYXkoZGF5c0luTW9udGgoMiwgMjAyMykpXS5tYXAoKGRheSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9YH0+XG5cdFx0XHRcdFx0PHNwYW4+MzA8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG4gICAgPC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXIiXSwibmFtZXMiOlsic3R5bGVzIiwiZGF5cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FsZW5kYXIiLCJzY2hlZHVsZSIsInNldFNjaGVkdWxlIiwiY2hlY2tUb2RheSIsImRhdGUiLCJ0b2RheSIsIkRhdGUiLCJnZXREYXRlIiwiZ2VuZXJhdGVEYXkiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwibmV3RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXlzSW5Nb250aCIsImFzc2lnblNjaGVkdWxlIiwibmV3U2NoZWR1bGUiLCJBcnJheSIsImZyb20iLCJtYXAiLCJkYXkiLCJpbmRleCIsInB1c2giLCJldmVudHMiLCJpc1RvZGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FsZW5kYXIiLCJsYWJlbCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calendar.js\n"));

/***/ })

});