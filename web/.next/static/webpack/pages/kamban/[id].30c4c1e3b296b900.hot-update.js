"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kamban/[id]",{

/***/ "./src/layout/kamban/styles.ts":
/*!*************************************!*\
  !*** ./src/layout/kamban/styles.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddColumnButton\": function() { return /* binding */ AddColumnButton; },\n/* harmony export */   \"Column\": function() { return /* binding */ Column; },\n/* harmony export */   \"ColumnAddTaskButton\": function() { return /* binding */ ColumnAddTaskButton; },\n/* harmony export */   \"ColumnBody\": function() { return /* binding */ ColumnBody; },\n/* harmony export */   \"ColumnFooter\": function() { return /* binding */ ColumnFooter; },\n/* harmony export */   \"ColumnHeader\": function() { return /* binding */ ColumnHeader; },\n/* harmony export */   \"ColumnList\": function() { return /* binding */ ColumnList; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"Task\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stitches.config */ \"./stitches.config.ts\");\n\nconst Container = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"main\", {\n    height: \"calc(100vh - 69px)\",\n    display: \"flex\",\n    flexDirection: \"column\"\n});\nconst Header = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"header\", {\n    padding: \"2rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    background: \"$foreground\"\n});\nconst Column = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"li\", {\n    background: \"$foreground\",\n    border: \"1px solid $border\",\n    width: \"100%\",\n    maxWidth: \"350px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    overflow: \"hidden\"\n});\nconst ColumnList = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"ul\", {\n    display: \"grid\",\n    gap: \"1rem\",\n    flex: 1,\n    overflowX: \"auto\",\n    padding: \"8px 32px\",\n    \"::-webkit-scrollbar\": {\n        width: \"10px\",\n        borderRadius: \"$default\"\n    },\n    \"scroll-behavior\": \"smooth\",\n    /* Track */ \"::-webkit-scrollbar-track\": {\n        background: \"$background\",\n        borderRadius: \"$default\"\n    },\n    /* Handle */ \"::-webkit-scrollbar-thumb\": {\n        background: \"$border\",\n        borderRadius: \"$default\"\n    },\n    [\"\".concat(Column, \":last-child\")]: {\n        height: \"2rem\"\n    }\n});\nconst ColumnHeader = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"div\", {\n    padding: \"8px 16px 4px\"\n});\nconst ColumnBody = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"ul\", {\n    display: \"flex\",\n    flexDirection: \"column\",\n    flex: 1,\n    overflow: \"auto\",\n    gap: \"1rem\",\n    listStyle: \"none\",\n    li: {\n        width: \"100%\"\n    }\n});\nconst ColumnFooter = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"div\", {});\nconst ColumnAddTaskButton = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"button\", {\n    display: \"flex\",\n    width: \"100%\",\n    height: \"2.5rem\",\n    alignItems: \"center\",\n    padding: \"8px 16px 4px\",\n    color: \"$text\",\n    outline: 0,\n    \"&:hover, &:focus\": {\n        background: \"$foregroundDark\"\n    }\n});\nconst Task = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"div\", {\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    gap: \"0.5rem\",\n    padding: \"8px 16px 4px\"\n});\nconst AddColumnButton = (0,stitches_config__WEBPACK_IMPORTED_MODULE_0__.styled)(\"button\", {\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    height: \"100%\",\n    width: \"100%\",\n    fontSize: \"$sm\",\n    color: \"$heading\"\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L2thbWJhbi9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFakMsTUFBTUMsWUFBWUQsdURBQU1BLENBQUMsUUFBUTtJQUN0Q0UsUUFBUTtJQUNSQyxTQUFTO0lBQ1RDLGVBQWU7QUFDakIsR0FBRTtBQUVLLE1BQU1DLFNBQVNMLHVEQUFNQSxDQUFDLFVBQVU7SUFDckNNLFNBQVM7SUFDVEgsU0FBUztJQUNUSSxnQkFBZ0I7SUFDaEJDLFlBQVk7QUFDZCxHQUFFO0FBRUssTUFBTUMsU0FBU1QsdURBQU1BLENBQUMsTUFBTTtJQUNqQ1EsWUFBWTtJQUNaRSxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsVUFBVTtJQUNWVCxTQUFTO0lBQ1RDLGVBQWU7SUFDZkYsUUFBUTtJQUNSVyxVQUFVO0FBQ1osR0FBRTtBQUVLLE1BQU1DLGFBQWFkLHVEQUFNQSxDQUFDLE1BQU07SUFDckNHLFNBQVM7SUFDVFksS0FBSztJQUNMQyxNQUFNO0lBQ05DLFdBQVc7SUFDWFgsU0FBUztJQUNULHVCQUF1QjtRQUNyQkssT0FBTztRQUNQTyxjQUFjO0lBQ2hCO0lBQ0EsbUJBQW1CO0lBQ25CLFNBQVMsR0FDVCw2QkFBNkI7UUFDM0JWLFlBQVk7UUFDWlUsY0FBYztJQUNoQjtJQUVBLFVBQVUsR0FDViw2QkFBNkI7UUFDM0JWLFlBQVk7UUFDWlUsY0FBYztJQUNoQjtJQUNBLENBQUMsR0FBVSxPQUFQVCxRQUFPLGVBQWEsRUFBRTtRQUN4QlAsUUFBUTtJQUNWO0FBQ0YsR0FBRTtBQUVLLE1BQU1pQixlQUFlbkIsdURBQU1BLENBQUMsT0FBTztJQUN4Q00sU0FBUztBQUNYLEdBQUU7QUFFSyxNQUFNYyxhQUFhcEIsdURBQU1BLENBQUMsTUFBTTtJQUNyQ0csU0FBUztJQUNUQyxlQUFlO0lBQ2ZZLE1BQU07SUFDTkgsVUFBVTtJQUNWRSxLQUFLO0lBQ0xNLFdBQVc7SUFFWEMsSUFBSTtRQUNGWCxPQUFPO0lBQ1Q7QUFDRixHQUFFO0FBRUssTUFBTVksZUFBZXZCLHVEQUFNQSxDQUFDLE9BQU8sQ0FFMUMsR0FBRTtBQUVLLE1BQU13QixzQkFBc0J4Qix1REFBTUEsQ0FBQyxVQUFVO0lBQ2xERyxTQUFTO0lBQ1RRLE9BQU87SUFDUFQsUUFBUTtJQUNSdUIsWUFBWTtJQUNabkIsU0FBUztJQUNUb0IsT0FBTztJQUNQQyxTQUFTO0lBRVQsb0JBQW9CO1FBQ2xCbkIsWUFBWTtJQUNkO0FBQ0YsR0FBRTtBQUVLLE1BQU1vQixPQUFPNUIsdURBQU1BLENBQUMsT0FBTztJQUNoQ0csU0FBUztJQUNUc0IsWUFBWTtJQUNabEIsZ0JBQWdCO0lBQ2hCUSxLQUFLO0lBQ0xULFNBQVM7QUFDWCxHQUFFO0FBRUssTUFBTXVCLGtCQUFrQjdCLHVEQUFNQSxDQUFDLFVBQVU7SUFDOUNHLFNBQVM7SUFDVHNCLFlBQVk7SUFDWmxCLGdCQUFnQjtJQUNoQkwsUUFBUTtJQUNSUyxPQUFPO0lBQ1BtQixVQUFVO0lBQ1ZKLE9BQU87QUFDVCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQva2FtYmFuL3N0eWxlcy50cz9mNjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ3N0aXRjaGVzLmNvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ21haW4nLCB7XHJcbiAgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDY5cHgpJyxcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicsIHtcclxuICBwYWRkaW5nOiAnMnJlbScsXHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgYmFja2dyb3VuZDogJyRmb3JlZ3JvdW5kJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZCgnbGknLCB7XHJcbiAgYmFja2dyb3VuZDogJyRmb3JlZ3JvdW5kJyxcclxuICBib3JkZXI6ICcxcHggc29saWQgJGJvcmRlcicsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBtYXhXaWR0aDogJzM1MHB4JyxcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ29sdW1uTGlzdCA9IHN0eWxlZCgndWwnLCB7XHJcbiAgZGlzcGxheTogJ2dyaWQnLFxyXG4gIGdhcDogJzFyZW0nLFxyXG4gIGZsZXg6IDEsXHJcbiAgb3ZlcmZsb3dYOiAnYXV0bycsXHJcbiAgcGFkZGluZzogJzhweCAzMnB4JyxcclxuICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHtcclxuICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICckZGVmYXVsdCdcclxuICB9LFxyXG4gICdzY3JvbGwtYmVoYXZpb3InOiAnc21vb3RoJyxcclxuICAvKiBUcmFjayAqL1xyXG4gICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrJzoge1xyXG4gICAgYmFja2dyb3VuZDogJyRiYWNrZ3JvdW5kJyxcclxuICAgIGJvcmRlclJhZGl1czogJyRkZWZhdWx0J1xyXG4gIH0sXHJcbiAgXHJcbiAgLyogSGFuZGxlICovXHJcbiAgJzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnJGJvcmRlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICckZGVmYXVsdCdcclxuICB9LFxyXG4gIFtgJHtDb2x1bW59Omxhc3QtY2hpbGRgXToge1xyXG4gICAgaGVpZ2h0OiAnMnJlbScsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbkhlYWRlciA9IHN0eWxlZCgnZGl2Jywge1xyXG4gIHBhZGRpbmc6ICc4cHggMTZweCA0cHgnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbkJvZHkgPSBzdHlsZWQoJ3VsJywge1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBmbGV4OiAxLFxyXG4gIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgZ2FwOiAnMXJlbScsXHJcbiAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgXHJcbiAgbGk6IHtcclxuICAgIHdpZHRoOiAnMTAwJSdcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ29sdW1uRm9vdGVyID0gc3R5bGVkKCdkaXYnLCB7XHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbkFkZFRhc2tCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicsIHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBoZWlnaHQ6ICcyLjVyZW0nLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIHBhZGRpbmc6ICc4cHggMTZweCA0cHgnLFxyXG4gIGNvbG9yOiAnJHRleHQnLFxyXG4gIG91dGxpbmU6IDAsXHJcbiAgXHJcbiAgJyY6aG92ZXIsICY6Zm9jdXMnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnJGZvcmVncm91bmREYXJrJyxcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgVGFzayA9IHN0eWxlZCgnZGl2Jywge1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIGdhcDogJzAuNXJlbScsXHJcbiAgcGFkZGluZzogJzhweCAxNnB4IDRweCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQWRkQ29sdW1uQnV0dG9uID0gc3R5bGVkKCdidXR0b24nLCB7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICBoZWlnaHQ6ICcxMDAlJyxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGZvbnRTaXplOiAnJHNtJyxcclxuICBjb2xvcjogJyRoZWFkaW5nJyxcclxufSkiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiQ29sdW1uIiwiYm9yZGVyIiwid2lkdGgiLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwiQ29sdW1uTGlzdCIsImdhcCIsImZsZXgiLCJvdmVyZmxvd1giLCJib3JkZXJSYWRpdXMiLCJDb2x1bW5IZWFkZXIiLCJDb2x1bW5Cb2R5IiwibGlzdFN0eWxlIiwibGkiLCJDb2x1bW5Gb290ZXIiLCJDb2x1bW5BZGRUYXNrQnV0dG9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwib3V0bGluZSIsIlRhc2siLCJBZGRDb2x1bW5CdXR0b24iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/kamban/styles.ts\n"));

/***/ })

});