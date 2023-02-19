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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Calendar.module.css */ \"./src/styles/Calendar.module.css\");\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ \"./src/utils/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst year = new Date().getFullYear();\nconst month = new Date().getMonth() + 1;\nconst Calendar = ()=>{\n    _s();\n    const [schedules, setSchedules] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const checkToday = (date)=>{\n        const today = new Date().getDate();\n        return date == today;\n    };\n    const generateColumnSkip = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return newDate.getDay();\n    };\n    const generateDay = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days[newDate.getDay()];\n    };\n    const daysInMonth = (month, year)=>{\n        return new Date(year, month, 0).getDate();\n    };\n    const assignSchedules = ()=>{\n        let newSchedules = [];\n        Array.from(Array(daysInMonth(month, year))).map((day, index)=>{\n            newSchedules.push({\n                date: index + 1,\n                day: generateDay(index + 1),\n                events: [],\n                isToday: checkToday(index + 1)\n            });\n        });\n        console.log(newSchedules);\n        setSchedules(newSchedules);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignSchedules();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().calendar)),\n        children: schedules.map((schedule, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                style: {\n                    \"grid-column-start\": \"\".concat(index === 0 ? generateColumnSkip(1) : \"0\")\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: schedule.day\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 66,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: schedule.date\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Calendar, \"+ONLF2JzkB4QBHXWn6bXeilsnFA=\");\n_c = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFDRztBQUUzQyxNQUFNSSxPQUFPLElBQUlDLE9BQU9DLFdBQVc7QUFDbkMsTUFBTUMsUUFBUSxJQUFJRixPQUFPRyxRQUFRLEtBQUs7QUFFdEMsTUFBTUMsV0FBVyxJQUFNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNVSxhQUFhLENBQUNDLE9BQVM7UUFDNUIsTUFBTUMsUUFBUSxJQUFJVCxPQUFPVSxPQUFPO1FBQ2hDLE9BQU9GLFFBQVFDO0lBQ2hCO0lBRUEsTUFBTUUscUJBQXFCLENBQUNILE9BQVM7UUFDcEMsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9JLFFBQVFDLE1BQU07SUFDdEI7SUFFQSxNQUFNQyxjQUFjLENBQUNOLE9BQVM7UUFDN0IsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9aLGlEQUFJLENBQUNnQixRQUFRQyxNQUFNLEdBQUc7SUFDOUI7SUFFQSxNQUFNRSxjQUFjLENBQUNiLE9BQU9ILE9BQVM7UUFDcEMsT0FBTyxJQUFJQyxLQUFLRCxNQUFNRyxPQUFPLEdBQUdRLE9BQU87SUFDeEM7SUFFQSxNQUFNTSxrQkFBa0IsSUFBTTtRQUM3QixJQUFJQyxlQUFlLEVBQUU7UUFFckJDLE1BQU1DLElBQUksQ0FBQ0QsTUFBTUgsWUFBWWIsT0FBT0gsUUFBUXFCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxRQUFVO1lBQy9ETCxhQUFhTSxJQUFJLENBQUM7Z0JBQ2pCZixNQUFNYyxRQUFRO2dCQUNkRCxLQUFLUCxZQUFZUSxRQUFRO2dCQUN6QkUsUUFBUSxFQUFFO2dCQUNWQyxTQUFTbEIsV0FBV2UsUUFBUTtZQUM3QjtRQUNEO1FBRUZJLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDVlgsYUFBYVc7SUFDZDtJQUVBbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNma0I7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ1k7UUFBSUMsV0FBVyxHQUFtQixPQUFoQmxDLDZFQUFlO2tCQWFoQ1UsVUFBVWUsR0FBRyxDQUFDLENBQUNXLFVBQVVULHNCQUN6Qiw4REFBQ007Z0JBQUlDLFdBQVcsR0FBYyxPQUFYbEMsd0VBQVU7Z0JBQUlxQyxPQUFPO29CQUFFLHFCQUFxQixHQUE2QyxPQUExQ1YsVUFBVSxJQUFJWCxtQkFBbUIsS0FBSyxHQUFHO2dCQUFHOztrQ0FDN0csOERBQUNzQjtrQ0FBTUYsU0FBU1YsR0FBRzs7Ozs7O2tDQUNuQiw4REFBQ1k7a0NBQU1GLFNBQVN2QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQWhFTUo7S0FBQUE7QUFrRU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIuanM/NmQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0NhbGVuZGFyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBkYXlzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbmNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMVxuXG5jb25zdCBDYWxlbmRhciA9ICgpID0+IHtcblx0Y29uc3QgW3NjaGVkdWxlcywgc2V0U2NoZWR1bGVzXSA9IHVzZVN0YXRlKFtdKVxuXG5cdGNvbnN0IGNoZWNrVG9kYXkgPSAoZGF0ZSkgPT4ge1xuXHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKClcblx0XHRyZXR1cm4gZGF0ZSA9PSB0b2RheVxuXHR9XG5cblx0Y29uc3QgZ2VuZXJhdGVDb2x1bW5Ta2lwID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWApXG5cdFx0cmV0dXJuIG5ld0RhdGUuZ2V0RGF5KClcblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlRGF5ID0gKGRhdGUpID0+IHtcblx0XHRjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWApXG5cdFx0cmV0dXJuIGRheXNbbmV3RGF0ZS5nZXREYXkoKV1cblx0fVxuXG5cdGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKClcblx0fVxuXG5cdGNvbnN0IGFzc2lnblNjaGVkdWxlcyA9ICgpID0+IHtcblx0XHRsZXQgbmV3U2NoZWR1bGVzID0gW11cblxuXHRcdEFycmF5LmZyb20oQXJyYXkoZGF5c0luTW9udGgobW9udGgsIHllYXIpKSkubWFwKChkYXksIGluZGV4KSA9PiB7XG5cdFx0XHRuZXdTY2hlZHVsZXMucHVzaCh7XG5cdFx0XHRcdGRhdGU6IGluZGV4ICsgMSxcblx0XHRcdFx0ZGF5OiBnZW5lcmF0ZURheShpbmRleCArIDEpLFxuXHRcdFx0XHRldmVudHM6IFtdLFxuXHRcdFx0XHRpc1RvZGF5OiBjaGVja1RvZGF5KGluZGV4ICsgMSlcblx0XHRcdH0pXG5cdFx0fSlcblxuY29uc29sZS5sb2cobmV3U2NoZWR1bGVzKVxuXHRcdHNldFNjaGVkdWxlcyhuZXdTY2hlZHVsZXMpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzc2lnblNjaGVkdWxlcygpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYWxlbmRhcn1gfT5cbnsvKlx0XHRcdHtkYXlzLm1hcCgoZGF5LCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRheX0gJHtzdHlsZXMubGFiZWx9YH0+XG5cdFx0XHRcdFx0PHNwYW4+e2RheX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cblx0XHRcdHtbLi4uQXJyYXkoZGF5c0luTW9udGgoMiwgMjAyMykpXS5tYXAoKGRheSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9YH0+XG5cdFx0XHRcdFx0PHNwYW4+MzA8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG4qL31cblx0XHRcdHtzY2hlZHVsZXMubWFwKChzY2hlZHVsZSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9YH0gc3R5bGU9e3sgJ2dyaWQtY29sdW1uLXN0YXJ0JzogYCR7aW5kZXggPT09IDAgPyBnZW5lcmF0ZUNvbHVtblNraXAoMSkgOiAnMCd9YCB9fT5cblx0XHRcdFx0XHQ8c3Bhbj57c2NoZWR1bGUuZGF5fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj57c2NoZWR1bGUuZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG4gICAgPC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXIiXSwibmFtZXMiOlsic3R5bGVzIiwiZGF5cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJDYWxlbmRhciIsInNjaGVkdWxlcyIsInNldFNjaGVkdWxlcyIsImNoZWNrVG9kYXkiLCJkYXRlIiwidG9kYXkiLCJnZXREYXRlIiwiZ2VuZXJhdGVDb2x1bW5Ta2lwIiwibmV3RGF0ZSIsImdldERheSIsImdlbmVyYXRlRGF5IiwiZGF5c0luTW9udGgiLCJhc3NpZ25TY2hlZHVsZXMiLCJuZXdTY2hlZHVsZXMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJkYXkiLCJpbmRleCIsInB1c2giLCJldmVudHMiLCJpc1RvZGF5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNhbGVuZGFyIiwic2NoZWR1bGUiLCJzdHlsZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calendar.js\n"));

/***/ })

});