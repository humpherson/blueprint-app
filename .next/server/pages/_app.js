/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/BlueprintContext.js":
/*!*************************************!*\
  !*** ./context/BlueprintContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BlueprintProvider: () => (/* binding */ BlueprintProvider),\n/* harmony export */   useBlueprint: () => (/* binding */ useBlueprint)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_blueprintExample_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/blueprintExample.json */ \"./public/blueprintExample.json\");\n// context/BlueprintContext.js\n\n\n\nconst BlueprintContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst BlueprintProvider = ({ children })=>{\n    // Set initial blueprint to an empty array (or your desired initial state)\n    const [blueprint, setBlueprint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_blueprintExample_json__WEBPACK_IMPORTED_MODULE_2__.blueprint);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Only load data from local storage after the component has mounted (client-side only)\n        const savedBlueprint = localStorage.getItem('blueprintData');\n        if (savedBlueprint) {\n            setBlueprint(JSON.parse(savedBlueprint));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Store blueprint data in local storage whenever it changes\n        localStorage.setItem('blueprintData', JSON.stringify(blueprint));\n    }, [\n        blueprint\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlueprintContext.Provider, {\n        value: {\n            blueprint,\n            setBlueprint\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dan/Documents/GitHub/blueprint-app/context/BlueprintContext.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\nconst useBlueprint = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BlueprintContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0JsdWVwcmludENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhCQUE4Qjs7QUFDeUM7QUFDSjtBQUVuRSxNQUFNSyxpQ0FBbUJMLG9EQUFhQTtBQUUvQixNQUFNTSxvQkFBb0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDNUMsMEVBQTBFO0lBQzFFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQ0Msb0VBQThCO0lBRXpFRixnREFBU0EsQ0FBQztRQUNSLHVGQUF1RjtRQUN2RixNQUFNUSxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEJELGFBQWFJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFFTFIsZ0RBQVNBLENBQUM7UUFDUiw0REFBNEQ7UUFDNURTLGFBQWFJLE9BQU8sQ0FBQyxpQkFBaUJGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDdkQsR0FBRztRQUFDQTtLQUFVO0lBRWQscUJBQ0UsOERBQUNILGlCQUFpQlksUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1lBQVdDO1FBQWE7a0JBQ3pERjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1ZLGVBQWUsSUFBTWxCLGlEQUFVQSxDQUFDSSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlcHJpbnQtYXBwLy4vY29udGV4dC9CbHVlcHJpbnRDb250ZXh0LmpzPzM2NzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGV4dC9CbHVlcHJpbnRDb250ZXh0LmpzXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGluaXRpYWxCbHVlcHJpbnREYXRhIGZyb20gJy4uL3B1YmxpYy9ibHVlcHJpbnRFeGFtcGxlLmpzb24nO1xuXG5jb25zdCBCbHVlcHJpbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQmx1ZXByaW50UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIFNldCBpbml0aWFsIGJsdWVwcmludCB0byBhbiBlbXB0eSBhcnJheSAob3IgeW91ciBkZXNpcmVkIGluaXRpYWwgc3RhdGUpXG4gIGNvbnN0IFtibHVlcHJpbnQsIHNldEJsdWVwcmludF0gPSB1c2VTdGF0ZShpbml0aWFsQmx1ZXByaW50RGF0YS5ibHVlcHJpbnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gT25seSBsb2FkIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWQgKGNsaWVudC1zaWRlIG9ubHkpXG4gICAgY29uc3Qgc2F2ZWRCbHVlcHJpbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmx1ZXByaW50RGF0YScpO1xuICAgIGlmIChzYXZlZEJsdWVwcmludCkge1xuICAgICAgc2V0Qmx1ZXByaW50KEpTT04ucGFyc2Uoc2F2ZWRCbHVlcHJpbnQpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFN0b3JlIGJsdWVwcmludCBkYXRhIGluIGxvY2FsIHN0b3JhZ2Ugd2hlbmV2ZXIgaXQgY2hhbmdlc1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibHVlcHJpbnREYXRhJywgSlNPTi5zdHJpbmdpZnkoYmx1ZXByaW50KSk7XG4gIH0sIFtibHVlcHJpbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxCbHVlcHJpbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGJsdWVwcmludCwgc2V0Qmx1ZXByaW50IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQmx1ZXByaW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VCbHVlcHJpbnQgPSAoKSA9PiB1c2VDb250ZXh0KEJsdWVwcmludENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbml0aWFsQmx1ZXByaW50RGF0YSIsIkJsdWVwcmludENvbnRleHQiLCJCbHVlcHJpbnRQcm92aWRlciIsImNoaWxkcmVuIiwiYmx1ZXByaW50Iiwic2V0Qmx1ZXByaW50Iiwic2F2ZWRCbHVlcHJpbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VCbHVlcHJpbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/BlueprintContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_BlueprintContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/BlueprintContext */ \"./context/BlueprintContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.js\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Service Blueprint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_BlueprintContext__WEBPACK_IMPORTED_MODULE_3__.BlueprintProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dan/Documents/GitHub/blueprint-app/pages/_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBUVZBO0FBTUFDO0FBYm9CO0FBQ0c7QUFFbUM7QUFFakM7QUFjL0IsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRTs7MEJBRUUsOERBQUNKLGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQ1Ysd0VBQWlCQTswQkFDaEIsNEVBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVwcmludC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGxvY2FsRm9udCBmcm9tIFwibmV4dC9mb250L2xvY2FsXCI7XG5pbXBvcnQgeyBCbHVlcHJpbnRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0JsdWVwcmludENvbnRleHRcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmNvbnN0IGdlaXN0U2FucyA9IGxvY2FsRm9udCh7XG4gIHNyYzogXCIuLi9mb250cy9HZWlzdFZGLndvZmZcIixcbiAgdmFyaWFibGU6IFwiLS1mb250LWdlaXN0LXNhbnNcIixcbiAgd2VpZ2h0OiBcIjEwMCA5MDBcIixcbn0pO1xuXG5jb25zdCBnZWlzdE1vbm8gPSBsb2NhbEZvbnQoe1xuICBzcmM6IFwiLi4vZm9udHMvR2Vpc3RNb25vVkYud29mZlwiLFxuICB2YXJpYWJsZTogXCItLWZvbnQtZ2Vpc3QtbW9ub1wiLFxuICB3ZWlnaHQ6IFwiMTAwIDkwMFwiLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQWRkIE1ldGFkYXRhIHRvIDxoZWFkPiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VydmljZSBCbHVlcHJpbnQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIEFwcGx5IHRoZSBCbHVlcHJpbnQgQ29udGV4dCBQcm92aWRlciAqL31cbiAgICAgIDxCbHVlcHJpbnRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9CbHVlcHJpbnRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiZ2Vpc3RTYW5zIiwiZ2Vpc3RNb25vIiwiUmVhY3QiLCJIZWFkIiwiQmx1ZXByaW50UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./public/blueprintExample.json":
/*!**************************************!*\
  !*** ./public/blueprintExample.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"blueprint":[{"stage":"Awareness","customerEmotions":"Happy","customerActions":"Customer sees an ad for the service on social media.","frontstageInteractions":"Social media ad display and website link.","backstageInteractions":"Marketing team runs targeted ad campaigns.","supportProcesses":"CRM system for targeted marketing; ad management tools.","physicalEvidence":"Social media posts, website content, display ads."},{"stage":"Consideration","customerEmotions":"Disappointed","customerActions":"Customer visits website, browses services, and reads reviews.","frontstageInteractions":"Website homepage, search filters, and product listings.","backstageInteractions":"Backend processes manage content and ensure up-to-date data.","supportProcesses":"Content management system (CMS) and review aggregator.","physicalEvidence":"Website visuals, customer testimonials, review pages."},{"stage":"Purchase","customerEmotions":"","customerActions":"Customer adds item to cart and completes checkout.","frontstageInteractions":"Shopping cart, checkout flow, and payment confirmation.","backstageInteractions":"Order processing and inventory check.","supportProcesses":"Payment gateway, order management system.","physicalEvidence":"Confirmation email, digital receipt."},{"stage":"Delivery","customerEmotions":"Frustrated","customerActions":"Customer receives updates on delivery and receives product.","frontstageInteractions":"Delivery tracking, SMS or app notifications.","backstageInteractions":"Dispatch assigns delivery personnel; updates tracking.","supportProcesses":"Logistics management system, GPS tracking.","physicalEvidence":"Package, delivery status notifications, tracking page."},{"stage":"Post-Service","customerEmotions":"Happy","customerActions":"Customer provides feedback or contacts support for any issues.","frontstageInteractions":"Customer support chat or feedback form in app.","backstageInteractions":"Support team processes feedback or resolves issues.","supportProcesses":"Customer support platform, feedback analysis tool.","physicalEvidence":"Thank-you email, feedback confirmation message."}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();