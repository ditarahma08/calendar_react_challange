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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Calendar.module.css */ \"./src/styles/Calendar.module.css\");\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ \"./src/utils/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst year = new Date().getFullYear();\nconst month = new Date().getMonth() + 1;\nconst Calendar = ()=>{\n    _s();\n    const [schedules, setSchedules] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const checkToday = (date)=>{\n        const today = new Date().getDate();\n        return date == today;\n    };\n    const generateColumnSkip = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return newDate.getDay();\n    };\n    const generateDay = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days[newDate.getDay()];\n    };\n    const daysInMonth = (month, year)=>{\n        return new Date(year, month, 0).getDate();\n    };\n    const assignSchedules = ()=>{\n        let newSchedules = [];\n        Array.from(Array(daysInMonth(month, year))).map((day, index)=>{\n            newSchedules.push({\n                date: index + 1,\n                day: generateDay(index + 1),\n                events: [],\n                isToday: checkToday(index + 1)\n            });\n        });\n        console.log(newSchedules);\n        setSchedules(newSchedules);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignSchedules();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().calendar)),\n        children: schedules.map((schedule, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                style: {\n                    \"grid-column-start\": \"\".concat(index === 0 ? generateColumnSkip(1) + 1 : \"0\")\n                },\n                children: [\n                    index <= 6 - generateColumnSkip(1) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: schedule.day\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: schedule.date\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 57,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Calendar, \"+ONLF2JzkB4QBHXWn6bXeilsnFA=\");\n_c = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFDRztBQUUzQyxNQUFNSSxPQUFPLElBQUlDLE9BQU9DLFdBQVc7QUFDbkMsTUFBTUMsUUFBUSxJQUFJRixPQUFPRyxRQUFRLEtBQUs7QUFFdEMsTUFBTUMsV0FBVyxJQUFNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNVSxhQUFhLENBQUNDLE9BQVM7UUFDNUIsTUFBTUMsUUFBUSxJQUFJVCxPQUFPVSxPQUFPO1FBQ2hDLE9BQU9GLFFBQVFDO0lBQ2hCO0lBRUEsTUFBTUUscUJBQXFCLENBQUNILE9BQVM7UUFDcEMsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9JLFFBQVFDLE1BQU07SUFDdEI7SUFFQSxNQUFNQyxjQUFjLENBQUNOLE9BQVM7UUFDN0IsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9aLGlEQUFJLENBQUNnQixRQUFRQyxNQUFNLEdBQUc7SUFDOUI7SUFFQSxNQUFNRSxjQUFjLENBQUNiLE9BQU9ILE9BQVM7UUFDcEMsT0FBTyxJQUFJQyxLQUFLRCxNQUFNRyxPQUFPLEdBQUdRLE9BQU87SUFDeEM7SUFFQSxNQUFNTSxrQkFBa0IsSUFBTTtRQUM3QixJQUFJQyxlQUFlLEVBQUU7UUFFckJDLE1BQU1DLElBQUksQ0FBQ0QsTUFBTUgsWUFBWWIsT0FBT0gsUUFBUXFCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxRQUFVO1lBQy9ETCxhQUFhTSxJQUFJLENBQUM7Z0JBQ2pCZixNQUFNYyxRQUFRO2dCQUNkRCxLQUFLUCxZQUFZUSxRQUFRO2dCQUN6QkUsUUFBUSxFQUFFO2dCQUNWQyxTQUFTbEIsV0FBV2UsUUFBUTtZQUM3QjtRQUNEO1FBRUFJLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDWlgsYUFBYVc7SUFDZDtJQUVBbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNma0I7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ1k7UUFBSUMsV0FBVyxHQUFtQixPQUFoQmxDLDZFQUFlO2tCQUNoQ1UsVUFBVWUsR0FBRyxDQUFDLENBQUNXLFVBQVVULHNCQUN6Qiw4REFBQ007Z0JBQUlDLFdBQVcsR0FBYyxPQUFYbEMsd0VBQVU7Z0JBQUlxQyxPQUFPO29CQUFFLHFCQUFxQixHQUFpRCxPQUE5Q1YsVUFBVSxJQUFJWCxtQkFBbUIsS0FBSyxJQUFJLEdBQUc7Z0JBQUc7O29CQUNoSFcsU0FBVSxJQUFJWCxtQkFBbUIsb0JBQ2pDLDhEQUFDc0I7a0NBQU1GLFNBQVNWLEdBQUc7Ozs7OztrQ0FFcEIsOERBQUNZO2tDQUFNRixTQUFTdkIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0F0RE1KO0tBQUFBO0FBd0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyLmpzPzZkMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9DYWxlbmRhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZGF5cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5jb25zdCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDFcblxuY29uc3QgQ2FsZW5kYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtzY2hlZHVsZXMsIHNldFNjaGVkdWxlc10gPSB1c2VTdGF0ZShbXSlcblxuXHRjb25zdCBjaGVja1RvZGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG5cdFx0cmV0dXJuIGRhdGUgPT0gdG9kYXlcblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlQ29sdW1uU2tpcCA9IChkYXRlKSA9PiB7XG5cdFx0Y29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gKVxuXHRcdHJldHVybiBuZXdEYXRlLmdldERheSgpXG5cdH1cblxuXHRjb25zdCBnZW5lcmF0ZURheSA9IChkYXRlKSA9PiB7XG5cdFx0Y29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gKVxuXHRcdHJldHVybiBkYXlzW25ld0RhdGUuZ2V0RGF5KCldXG5cdH1cblxuXHRjb25zdCBkYXlzSW5Nb250aCA9IChtb250aCwgeWVhcikgPT4ge1xuXHRcdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpXG5cdH1cblxuXHRjb25zdCBhc3NpZ25TY2hlZHVsZXMgPSAoKSA9PiB7XG5cdFx0bGV0IG5ld1NjaGVkdWxlcyA9IFtdXG5cblx0XHRBcnJheS5mcm9tKEFycmF5KGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSkpLm1hcCgoZGF5LCBpbmRleCkgPT4ge1xuXHRcdFx0bmV3U2NoZWR1bGVzLnB1c2goe1xuXHRcdFx0XHRkYXRlOiBpbmRleCArIDEsXG5cdFx0XHRcdGRheTogZ2VuZXJhdGVEYXkoaW5kZXggKyAxKSxcblx0XHRcdFx0ZXZlbnRzOiBbXSxcblx0XHRcdFx0aXNUb2RheTogY2hlY2tUb2RheShpbmRleCArIDEpXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHRjb25zb2xlLmxvZyhuZXdTY2hlZHVsZXMpXG5cdFx0c2V0U2NoZWR1bGVzKG5ld1NjaGVkdWxlcylcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXNzaWduU2NoZWR1bGVzKClcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhbGVuZGFyfWB9PlxuXHRcdFx0e3NjaGVkdWxlcy5tYXAoKHNjaGVkdWxlLCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRheX1gfSBzdHlsZT17eyAnZ3JpZC1jb2x1bW4tc3RhcnQnOiBgJHtpbmRleCA9PT0gMCA/IGdlbmVyYXRlQ29sdW1uU2tpcCgxKSArIDEgOiAnMCd9YCB9fT5cblx0XHRcdFx0XHR7aW5kZXggPD0gKDYgLSBnZW5lcmF0ZUNvbHVtblNraXAoMSkpICYmIChcblx0XHRcdFx0XHRcdDxzcGFuPntzY2hlZHVsZS5kYXl9PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PHNwYW4+e3NjaGVkdWxlLmRhdGV9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuICAgIDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyIl0sIm5hbWVzIjpbInN0eWxlcyIsImRheXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiQ2FsZW5kYXIiLCJzY2hlZHVsZXMiLCJzZXRTY2hlZHVsZXMiLCJjaGVja1RvZGF5IiwiZGF0ZSIsInRvZGF5IiwiZ2V0RGF0ZSIsImdlbmVyYXRlQ29sdW1uU2tpcCIsIm5ld0RhdGUiLCJnZXREYXkiLCJnZW5lcmF0ZURheSIsImRheXNJbk1vbnRoIiwiYXNzaWduU2NoZWR1bGVzIiwibmV3U2NoZWR1bGVzIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZGF5IiwiaW5kZXgiLCJwdXNoIiwiZXZlbnRzIiwiaXNUb2RheSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjYWxlbmRhciIsInNjaGVkdWxlIiwic3R5bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calendar.js\n"));

/***/ })

});