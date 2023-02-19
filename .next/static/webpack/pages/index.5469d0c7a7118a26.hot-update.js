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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Calendar.module.css */ \"./src/styles/Calendar.module.css\");\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ \"./src/utils/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Calendar = ()=>{\n    _s();\n    const [schedule, setSchedule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const checkToday = (date)=>{\n        const today = new Date().getDate();\n        return date == today;\n    };\n    const generateDay = (date)=>{\n        const year = new Date().getFullYear();\n        const month = new Date().getMonth() + 1;\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days[newDate.getDay()];\n    };\n    const daysInMonth = (month, year)=>{\n        return new Date(year, month, 0).getDate();\n    };\n    const assignSchedule = ()=>{\n        const year = new Date().getFullYear();\n        const month = new Date().getMonth() + 1;\n        let newSchedule = [];\n        Array.from(Array(daysInMonth(month, year))).map((day, index)=>{\n            newSchedule.push({\n                date: index + 1,\n                day: generateDay(index + 1),\n                events: [],\n                isToday: checkToday(index + 1)\n            });\n        });\n        console.log(newSchedule);\n        setSchedule(newSchedule);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignSchedule();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().calendar)),\n        children: [\n            _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days.map((day, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day), \" \").concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().label)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: day\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 50,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, undefined)),\n            [\n                ...Array(daysInMonth(2, 2023))\n            ].map((day, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 55,\n                    columnNumber: 5\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Calendar, \"ufj6drX7OuS1FJ8vycY2bacy/To=\");\n_c = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFDRztBQUUzQyxNQUFNSSxXQUFXLElBQU07O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1LLGFBQWEsQ0FBQ0MsT0FBUztRQUM1QixNQUFNQyxRQUFRLElBQUlDLE9BQU9DLE9BQU87UUFDaEMsT0FBT0gsUUFBUUM7SUFDaEI7SUFFQSxNQUFNRyxjQUFjLENBQUNKLE9BQVM7UUFDN0IsTUFBTUssT0FBTyxJQUFJSCxPQUFPSSxXQUFXO1FBQ25DLE1BQU1DLFFBQVEsSUFBSUwsT0FBT00sUUFBUSxLQUFLO1FBQ3RDLE1BQU1DLFVBQVUsSUFBSVAsS0FBSyxHQUFXSyxPQUFSRixNQUFLLEtBQVlMLE9BQVRPLE9BQU0sS0FBUSxPQUFMUDtRQUM3QyxPQUFPUCxpREFBSSxDQUFDZ0IsUUFBUUMsTUFBTSxHQUFHO0lBQzlCO0lBRUEsTUFBTUMsY0FBYyxDQUFDSixPQUFPRixPQUFTO1FBQ3BDLE9BQU8sSUFBSUgsS0FBS0csTUFBTUUsT0FBTyxHQUFHSixPQUFPO0lBQ3hDO0lBRUEsTUFBTVMsaUJBQWlCLElBQU07UUFDNUIsTUFBTVAsT0FBTyxJQUFJSCxPQUFPSSxXQUFXO1FBQ25DLE1BQU1DLFFBQVEsSUFBSUwsT0FBT00sUUFBUSxLQUFLO1FBQ3RDLElBQUlLLGNBQWMsRUFBRTtRQUVwQkMsTUFBTUMsSUFBSSxDQUFDRCxNQUFNSCxZQUFZSixPQUFPRixRQUFRVyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVTtZQUMvREwsWUFBWU0sSUFBSSxDQUFDO2dCQUNoQm5CLE1BQU1rQixRQUFRO2dCQUNkRCxLQUFLYixZQUFZYyxRQUFRO2dCQUN6QkUsUUFBUSxFQUFFO2dCQUNWQyxTQUFTdEIsV0FBV21CLFFBQVE7WUFDN0I7UUFDRDtRQUVGSSxRQUFRQyxHQUFHLENBQUNWO1FBQ1ZmLFlBQVllO0lBQ2I7SUFFQWxCLGdEQUFTQSxDQUFDLElBQU07UUFDZmlCO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQ0MsOERBQUNZO1FBQUlDLFdBQVcsR0FBbUIsT0FBaEJqQyw2RUFBZTs7WUFDaENDLHFEQUFRLENBQUMsQ0FBQ3dCLEtBQUtDLHNCQUNmLDhEQUFDTTtvQkFBSUMsV0FBVyxHQUFpQmpDLE9BQWRBLHdFQUFVLEVBQUMsS0FBZ0IsT0FBYkEsMEVBQVk7OEJBQzVDLDRFQUFDb0M7a0NBQU1YOzs7Ozs7Ozs7OztZQUlSO21CQUFJSCxNQUFNSCxZQUFZLEdBQUc7YUFBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQzNDLDhEQUFDTTtvQkFBSUMsV0FBVyxHQUFjLE9BQVhqQyx3RUFBVTs4QkFDNUIsNEVBQUNvQztrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXhETWhDO0tBQUFBO0FBMEROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyLmpzPzZkMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9DYWxlbmRhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZGF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYWxlbmRhciA9ICgpID0+IHtcblx0Y29uc3QgW3NjaGVkdWxlLCBzZXRTY2hlZHVsZV0gPSB1c2VTdGF0ZShbXSlcblxuXHRjb25zdCBjaGVja1RvZGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG5cdFx0cmV0dXJuIGRhdGUgPT0gdG9kYXlcblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlRGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxXG5cdFx0Y29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gKVxuXHRcdHJldHVybiBkYXlzW25ld0RhdGUuZ2V0RGF5KCldXG5cdH1cblxuXHRjb25zdCBkYXlzSW5Nb250aCA9IChtb250aCwgeWVhcikgPT4ge1xuXHRcdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpXG5cdH1cblxuXHRjb25zdCBhc3NpZ25TY2hlZHVsZSA9ICgpID0+IHtcblx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxXG5cdFx0bGV0IG5ld1NjaGVkdWxlID0gW11cblxuXHRcdEFycmF5LmZyb20oQXJyYXkoZGF5c0luTW9udGgobW9udGgsIHllYXIpKSkubWFwKChkYXksIGluZGV4KSA9PiB7XG5cdFx0XHRuZXdTY2hlZHVsZS5wdXNoKHtcblx0XHRcdFx0ZGF0ZTogaW5kZXggKyAxLFxuXHRcdFx0XHRkYXk6IGdlbmVyYXRlRGF5KGluZGV4ICsgMSksXG5cdFx0XHRcdGV2ZW50czogW10sXG5cdFx0XHRcdGlzVG9kYXk6IGNoZWNrVG9kYXkoaW5kZXggKyAxKVxuXHRcdFx0fSlcblx0XHR9KVxuXG5jb25zb2xlLmxvZyhuZXdTY2hlZHVsZSlcblx0XHRzZXRTY2hlZHVsZShuZXdTY2hlZHVsZSlcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXNzaWduU2NoZWR1bGUoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FsZW5kYXJ9YH0+XG5cdFx0XHR7ZGF5cy5tYXAoKGRheSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9ICR7c3R5bGVzLmxhYmVsfWB9PlxuXHRcdFx0XHRcdDxzcGFuPntkYXl9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuXG5cdFx0XHR7Wy4uLkFycmF5KGRheXNJbk1vbnRoKDIsIDIwMjMpKV0ubWFwKChkYXksIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGF5fWB9PlxuXHRcdFx0XHRcdDxzcGFuPjMwPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuICAgIDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyIl0sIm5hbWVzIjpbInN0eWxlcyIsImRheXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhbGVuZGFyIiwic2NoZWR1bGUiLCJzZXRTY2hlZHVsZSIsImNoZWNrVG9kYXkiLCJkYXRlIiwidG9kYXkiLCJEYXRlIiwiZ2V0RGF0ZSIsImdlbmVyYXRlRGF5IiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsIm5ld0RhdGUiLCJnZXREYXkiLCJkYXlzSW5Nb250aCIsImFzc2lnblNjaGVkdWxlIiwibmV3U2NoZWR1bGUiLCJBcnJheSIsImZyb20iLCJtYXAiLCJkYXkiLCJpbmRleCIsInB1c2giLCJldmVudHMiLCJpc1RvZGF5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNhbGVuZGFyIiwibGFiZWwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calendar.js\n"));

/***/ })

});