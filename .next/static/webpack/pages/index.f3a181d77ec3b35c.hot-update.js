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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Calendar.module.css */ \"./src/styles/Calendar.module.css\");\n/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ \"./src/utils/constant.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst year = new Date().getFullYear();\nconst month = new Date().getMonth() + 1;\nconst Calendar = ()=>{\n    _s();\n    const [schedules, setSchedules] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const checkToday = (date)=>{\n        const today = new Date().getDate();\n        return date == today;\n    };\n    const generateColumnSkip = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return newDate.getDay();\n    };\n    const generateDay = (date)=>{\n        const newDate = new Date(\"\".concat(year, \"-\").concat(month, \"-\").concat(date));\n        return _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days[newDate.getDay()];\n    };\n    const daysInMonth = (month, year)=>{\n        return new Date(year, month, 0).getDate();\n    };\n    const assignSchedules = ()=>{\n        let newSchedules = [];\n        Array.from(Array(daysInMonth(month, year))).map((day, index)=>{\n            newSchedules.push({\n                date: index + 1,\n                day: generateDay(index + 1),\n                events: [],\n                isToday: checkToday(index + 1)\n            });\n        });\n        console.log(newSchedules);\n        setSchedules(newSchedules);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignSchedules();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().calendar)),\n        children: [\n            _utils_constant__WEBPACK_IMPORTED_MODULE_1__.days.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                    children: index < generateColumnSkip(1) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                        lineNumber: 55,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, undefined)),\n            schedules.map((schedule, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().day)),\n                    style: {\n                        \"grid-column-start\": \"\".concat(index === 0 ? generateColumnSkip(1) + 1 : \"0\")\n                    },\n                    children: [\n                        index <= 6 - generateColumnSkip(1) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: schedule.day.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat((_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)),\n                            children: schedule.date\n                        }, void 0, false, {\n                            fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n                    lineNumber: 61,\n                    columnNumber: 5\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ditarahma/Repositories/calendar/src/components/Calendar.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Calendar, \"+ONLF2JzkB4QBHXWn6bXeilsnFA=\");\n_c = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFDRztBQUUzQyxNQUFNSSxPQUFPLElBQUlDLE9BQU9DLFdBQVc7QUFDbkMsTUFBTUMsUUFBUSxJQUFJRixPQUFPRyxRQUFRLEtBQUs7QUFFdEMsTUFBTUMsV0FBVyxJQUFNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNVSxhQUFhLENBQUNDLE9BQVM7UUFDNUIsTUFBTUMsUUFBUSxJQUFJVCxPQUFPVSxPQUFPO1FBQ2hDLE9BQU9GLFFBQVFDO0lBQ2hCO0lBRUEsTUFBTUUscUJBQXFCLENBQUNILE9BQVM7UUFDcEMsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9JLFFBQVFDLE1BQU07SUFDdEI7SUFFQSxNQUFNQyxjQUFjLENBQUNOLE9BQVM7UUFDN0IsTUFBTUksVUFBVSxJQUFJWixLQUFLLEdBQVdFLE9BQVJILE1BQUssS0FBWVMsT0FBVE4sT0FBTSxLQUFRLE9BQUxNO1FBQzdDLE9BQU9aLGlEQUFJLENBQUNnQixRQUFRQyxNQUFNLEdBQUc7SUFDOUI7SUFFQSxNQUFNRSxjQUFjLENBQUNiLE9BQU9ILE9BQVM7UUFDcEMsT0FBTyxJQUFJQyxLQUFLRCxNQUFNRyxPQUFPLEdBQUdRLE9BQU87SUFDeEM7SUFFQSxNQUFNTSxrQkFBa0IsSUFBTTtRQUM3QixJQUFJQyxlQUFlLEVBQUU7UUFFckJDLE1BQU1DLElBQUksQ0FBQ0QsTUFBTUgsWUFBWWIsT0FBT0gsUUFBUXFCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxRQUFVO1lBQy9ETCxhQUFhTSxJQUFJLENBQUM7Z0JBQ2pCZixNQUFNYyxRQUFRO2dCQUNkRCxLQUFLUCxZQUFZUSxRQUFRO2dCQUN6QkUsUUFBUSxFQUFFO2dCQUNWQyxTQUFTbEIsV0FBV2UsUUFBUTtZQUM3QjtRQUNEO1FBRUFJLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDWlgsYUFBYVc7SUFDZDtJQUVBbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNma0I7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ1k7UUFBSUMsV0FBVyxHQUFtQixPQUFoQmxDLDZFQUFlOztZQUNoQ0MscURBQVEsQ0FBQyxDQUFDbUMsTUFBTVQsc0JBQ2hCLDhEQUFDTTtvQkFBSUMsV0FBVyxHQUFjLE9BQVhsQyx3RUFBVTs4QkFDNUIyQixRQUFTWCxtQkFBbUIsb0JBQzVCLDhEQUFDcUI7a0NBQU1EOzs7Ozs7Ozs7OztZQUtSMUIsVUFBVWUsR0FBRyxDQUFDLENBQUNhLFVBQVVYLHNCQUN6Qiw4REFBQ007b0JBQUlDLFdBQVcsR0FBYyxPQUFYbEMsd0VBQVU7b0JBQUl1QyxPQUFPO3dCQUFFLHFCQUFxQixHQUFpRCxPQUE5Q1osVUFBVSxJQUFJWCxtQkFBbUIsS0FBSyxJQUFJLEdBQUc7b0JBQUc7O3dCQUNoSFcsU0FBVSxJQUFJWCxtQkFBbUIsb0JBQ2pDLDhEQUFDcUI7c0NBQU1DLFNBQVNaLEdBQUcsQ0FBQ2MsV0FBVzs7Ozs7O3NDQUVoQyw4REFBQ0g7NEJBQUtILFdBQVcsR0FBZSxPQUFabEMseUVBQVc7c0NBQUtzQyxTQUFTekIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REO0dBOURNSjtLQUFBQTtBQWdFTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcz82ZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvQ2FsZW5kYXIubW9kdWxlLmNzcydcbmltcG9ydCB7IGRheXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuY29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxXG5cbmNvbnN0IENhbGVuZGFyID0gKCkgPT4ge1xuXHRjb25zdCBbc2NoZWR1bGVzLCBzZXRTY2hlZHVsZXNdID0gdXNlU3RhdGUoW10pXG5cblx0Y29uc3QgY2hlY2tUb2RheSA9IChkYXRlKSA9PiB7XG5cdFx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKVxuXHRcdHJldHVybiBkYXRlID09IHRvZGF5XG5cdH1cblxuXHRjb25zdCBnZW5lcmF0ZUNvbHVtblNraXAgPSAoZGF0ZSkgPT4ge1xuXHRcdGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YClcblx0XHRyZXR1cm4gbmV3RGF0ZS5nZXREYXkoKVxuXHR9XG5cblx0Y29uc3QgZ2VuZXJhdGVEYXkgPSAoZGF0ZSkgPT4ge1xuXHRcdGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YClcblx0XHRyZXR1cm4gZGF5c1tuZXdEYXRlLmdldERheSgpXVxuXHR9XG5cblx0Y29uc3QgZGF5c0luTW9udGggPSAobW9udGgsIHllYXIpID0+IHtcblx0XHRyZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKVxuXHR9XG5cblx0Y29uc3QgYXNzaWduU2NoZWR1bGVzID0gKCkgPT4ge1xuXHRcdGxldCBuZXdTY2hlZHVsZXMgPSBbXVxuXG5cdFx0QXJyYXkuZnJvbShBcnJheShkYXlzSW5Nb250aChtb250aCwgeWVhcikpKS5tYXAoKGRheSwgaW5kZXgpID0+IHtcblx0XHRcdG5ld1NjaGVkdWxlcy5wdXNoKHtcblx0XHRcdFx0ZGF0ZTogaW5kZXggKyAxLFxuXHRcdFx0XHRkYXk6IGdlbmVyYXRlRGF5KGluZGV4ICsgMSksXG5cdFx0XHRcdGV2ZW50czogW10sXG5cdFx0XHRcdGlzVG9kYXk6IGNoZWNrVG9kYXkoaW5kZXggKyAxKVxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0Y29uc29sZS5sb2cobmV3U2NoZWR1bGVzKVxuXHRcdHNldFNjaGVkdWxlcyhuZXdTY2hlZHVsZXMpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzc2lnblNjaGVkdWxlcygpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYWxlbmRhcn1gfT5cblx0XHRcdHtkYXlzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9YH0+XG5cdFx0XHRcdHtpbmRleCA8IChnZW5lcmF0ZUNvbHVtblNraXAoMSkpICYmIChcblx0XHRcdFx0XHQ8c3Bhbj57aXRlbX08L3NwYW4+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cblx0XHRcdHtzY2hlZHVsZXMubWFwKChzY2hlZHVsZSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5kYXl9YH0gc3R5bGU9e3sgJ2dyaWQtY29sdW1uLXN0YXJ0JzogYCR7aW5kZXggPT09IDAgPyBnZW5lcmF0ZUNvbHVtblNraXAoMSkgKyAxIDogJzAnfWAgfX0+XG5cdFx0XHRcdFx0e2luZGV4IDw9ICg2IC0gZ2VuZXJhdGVDb2x1bW5Ta2lwKDEpKSAmJiAoXG5cdFx0XHRcdFx0XHQ8c3Bhbj57c2NoZWR1bGUuZGF5LnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGF0ZX1gfT57c2NoZWR1bGUuZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG4gICAgPC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXIiXSwibmFtZXMiOlsic3R5bGVzIiwiZGF5cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJDYWxlbmRhciIsInNjaGVkdWxlcyIsInNldFNjaGVkdWxlcyIsImNoZWNrVG9kYXkiLCJkYXRlIiwidG9kYXkiLCJnZXREYXRlIiwiZ2VuZXJhdGVDb2x1bW5Ta2lwIiwibmV3RGF0ZSIsImdldERheSIsImdlbmVyYXRlRGF5IiwiZGF5c0luTW9udGgiLCJhc3NpZ25TY2hlZHVsZXMiLCJuZXdTY2hlZHVsZXMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJkYXkiLCJpbmRleCIsInB1c2giLCJldmVudHMiLCJpc1RvZGF5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNhbGVuZGFyIiwiaXRlbSIsInNwYW4iLCJzY2hlZHVsZSIsInN0eWxlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calendar.js\n"));

/***/ })

});