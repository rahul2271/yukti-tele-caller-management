"use strict";
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
exports.id = "app/api/diseases/route";
exports.ids = ["app/api/diseases/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdiseases%2Froute&page=%2Fapi%2Fdiseases%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdiseases%2Froute.ts&appDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdiseases%2Froute&page=%2Fapi%2Fdiseases%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdiseases%2Froute.ts&appDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_pc_Downloads_patient_crm_17_patient_crm_app_api_diseases_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/diseases/route.ts */ \"(rsc)/./app/api/diseases/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/diseases/route\",\n        pathname: \"/api/diseases\",\n        filename: \"route\",\n        bundlePath: \"app/api/diseases/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\pc\\\\Downloads\\\\patient-crm_17\\\\patient-crm\\\\app\\\\api\\\\diseases\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_pc_Downloads_patient_crm_17_patient_crm_app_api_diseases_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/diseases/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkaXNlYXNlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZGlzZWFzZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkaXNlYXNlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNwYyU1Q0Rvd25sb2FkcyU1Q3BhdGllbnQtY3JtXzE3JTVDcGF0aWVudC1jcm0lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3BjJTVDRG93bmxvYWRzJTVDcGF0aWVudC1jcm1fMTclNUNwYXRpZW50LWNybSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRpZW50LWNybS8/YmYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEb3dubG9hZHNcXFxccGF0aWVudC1jcm1fMTdcXFxccGF0aWVudC1jcm1cXFxcYXBwXFxcXGFwaVxcXFxkaXNlYXNlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGlzZWFzZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kaXNlYXNlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGlzZWFzZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEb3dubG9hZHNcXFxccGF0aWVudC1jcm1fMTdcXFxccGF0aWVudC1jcm1cXFxcYXBwXFxcXGFwaVxcXFxkaXNlYXNlc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZGlzZWFzZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdiseases%2Froute&page=%2Fapi%2Fdiseases%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdiseases%2Froute.ts&appDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/diseases/route.ts":
/*!***********************************!*\
  !*** ./app/api/diseases/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_Disease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Disease */ \"(rsc)/./models/Disease.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n\n\n\n\n\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    // ?all=true returns inactive too (admin use)\n    const showAll = new URL(req.url).searchParams.get(\"all\") === \"true\" && session.user.role === \"admin\";\n    const filter = showAll ? {} : {\n        isActive: true\n    };\n    const diseases = await _models_Disease__WEBPACK_IMPORTED_MODULE_4__.Disease.find(filter).sort({\n        category: 1,\n        name: 1\n    }).lean();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        data: diseases\n    });\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session || session.user.role !== \"admin\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Admin only\"\n    }, {\n        status: 403\n    });\n    const body = await req.json();\n    const parsed = zod__WEBPACK_IMPORTED_MODULE_5__.object({\n        name: zod__WEBPACK_IMPORTED_MODULE_5__.string().min(2),\n        category: zod__WEBPACK_IMPORTED_MODULE_5__.string().min(2)\n    }).safeParse(body);\n    if (!parsed.success) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Validation failed\"\n    }, {\n        status: 400\n    });\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    const existing = await _models_Disease__WEBPACK_IMPORTED_MODULE_4__.Disease.findOne({\n        name: parsed.data.name\n    });\n    if (existing) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Disease already exists\"\n    }, {\n        status: 409\n    });\n    const d = await _models_Disease__WEBPACK_IMPORTED_MODULE_4__.Disease.create(parsed.data);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        data: d\n    }, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Rpc2Vhc2VzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNYO0FBQ0o7QUFDQztBQUNDO0FBQ25CO0FBRWhCLGVBQWVNLElBQUlDLEdBQWdCO0lBQ3hDLE1BQU1DLFVBQVUsTUFBTVAsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDTSxTQUFTLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ2hGLE1BQU1SLHVEQUFTQTtJQUNmLDZDQUE2QztJQUM3QyxNQUFNUyxVQUFVLElBQUlDLElBQUlOLElBQUlPLEdBQUcsRUFBRUMsWUFBWSxDQUFDQyxHQUFHLENBQUMsV0FBVyxVQUFVUixRQUFRUyxJQUFJLENBQUNDLElBQUksS0FBSztJQUM3RixNQUFNQyxTQUFTUCxVQUFVLENBQUMsSUFBSTtRQUFFUSxVQUFVO0lBQUs7SUFDL0MsTUFBTUMsV0FBVyxNQUFNakIsb0RBQU9BLENBQUNrQixJQUFJLENBQUNILFFBQVFJLElBQUksQ0FBQztRQUFFQyxVQUFVO1FBQUdDLE1BQU07SUFBRSxHQUFHQyxJQUFJO0lBQy9FLE9BQU8xQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVrQixTQUFTO1FBQU1DLE1BQU1QO0lBQVM7QUFDM0Q7QUFFTyxlQUFlUSxLQUFLdEIsR0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNUCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNNLFdBQVdBLFFBQVFTLElBQUksQ0FBQ0MsSUFBSSxLQUFLLFNBQ3BDLE9BQU9sQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBYSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNsRSxNQUFNbUIsT0FBTyxNQUFNdkIsSUFBSUUsSUFBSTtJQUMzQixNQUFNc0IsU0FBUzFCLHVDQUFRLENBQUM7UUFBRW9CLE1BQU1wQix1Q0FBUSxHQUFHNkIsR0FBRyxDQUFDO1FBQUlWLFVBQVVuQix1Q0FBUSxHQUFHNkIsR0FBRyxDQUFDO0lBQUcsR0FBR0MsU0FBUyxDQUFDTDtJQUM1RixJQUFJLENBQUNDLE9BQU9KLE9BQU8sRUFBRSxPQUFPM0IscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQW9CLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQzVGLE1BQU1SLHVEQUFTQTtJQUNmLE1BQU1pQyxXQUFXLE1BQU1oQyxvREFBT0EsQ0FBQ2lDLE9BQU8sQ0FBQztRQUFFWixNQUFNTSxPQUFPSCxJQUFJLENBQUNILElBQUk7SUFBQztJQUNoRSxJQUFJVyxVQUFVLE9BQU9wQyxxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBeUIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDMUYsTUFBTTJCLElBQUksTUFBTWxDLG9EQUFPQSxDQUFDbUMsTUFBTSxDQUFDUixPQUFPSCxJQUFJO0lBQzFDLE9BQU81QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVrQixTQUFTO1FBQU1DLE1BQU1VO0lBQUUsR0FBRztRQUFFM0IsUUFBUTtJQUFJO0FBQ3JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF0aWVudC1jcm0vLi9hcHAvYXBpL2Rpc2Vhc2VzL3JvdXRlLnRzPzA4ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJ0AvbGliL21vbmdvZGInXG5pbXBvcnQgeyBEaXNlYXNlIH0gZnJvbSAnQC9tb2RlbHMvRGlzZWFzZSdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICBhd2FpdCBjb25uZWN0REIoKVxuICAvLyA/YWxsPXRydWUgcmV0dXJucyBpbmFjdGl2ZSB0b28gKGFkbWluIHVzZSlcbiAgY29uc3Qgc2hvd0FsbCA9IG5ldyBVUkwocmVxLnVybCkuc2VhcmNoUGFyYW1zLmdldCgnYWxsJykgPT09ICd0cnVlJyAmJiBzZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJ1xuICBjb25zdCBmaWx0ZXIgPSBzaG93QWxsID8ge30gOiB7IGlzQWN0aXZlOiB0cnVlIH1cbiAgY29uc3QgZGlzZWFzZXMgPSBhd2FpdCBEaXNlYXNlLmZpbmQoZmlsdGVyKS5zb3J0KHsgY2F0ZWdvcnk6IDEsIG5hbWU6IDEgfSkubGVhbigpXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRpc2Vhc2VzIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXG4gIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gJ2FkbWluJylcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0FkbWluIG9ubHknIH0sIHsgc3RhdHVzOiA0MDMgfSlcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKClcbiAgY29uc3QgcGFyc2VkID0gei5vYmplY3QoeyBuYW1lOiB6LnN0cmluZygpLm1pbigyKSwgY2F0ZWdvcnk6IHouc3RyaW5nKCkubWluKDIpIH0pLnNhZmVQYXJzZShib2R5KVxuICBpZiAoIXBhcnNlZC5zdWNjZXNzKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1ZhbGlkYXRpb24gZmFpbGVkJyB9LCB7IHN0YXR1czogNDAwIH0pXG4gIGF3YWl0IGNvbm5lY3REQigpXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgRGlzZWFzZS5maW5kT25lKHsgbmFtZTogcGFyc2VkLmRhdGEubmFtZSB9KVxuICBpZiAoZXhpc3RpbmcpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRGlzZWFzZSBhbHJlYWR5IGV4aXN0cycgfSwgeyBzdGF0dXM6IDQwOSB9KVxuICBjb25zdCBkID0gYXdhaXQgRGlzZWFzZS5jcmVhdGUocGFyc2VkLmRhdGEpXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGQgfSwgeyBzdGF0dXM6IDIwMSB9KVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImNvbm5lY3REQiIsIkRpc2Vhc2UiLCJ6IiwiR0VUIiwicmVxIiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNob3dBbGwiLCJVUkwiLCJ1cmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJ1c2VyIiwicm9sZSIsImZpbHRlciIsImlzQWN0aXZlIiwiZGlzZWFzZXMiLCJmaW5kIiwic29ydCIsImNhdGVnb3J5IiwibmFtZSIsImxlYW4iLCJzdWNjZXNzIiwiZGF0YSIsIlBPU1QiLCJib2R5IiwicGFyc2VkIiwib2JqZWN0Iiwic3RyaW5nIiwibWluIiwic2FmZVBhcnNlIiwiZXhpc3RpbmciLCJmaW5kT25lIiwiZCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/diseases/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) throw new Error(\"Email and password required\");\n                await (0,_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                    email: credentials.email.toLowerCase(),\n                    isActive: true\n                }).select(\"+password\").lean();\n                if (!user) throw new Error(\"No account found with this email\");\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                if (!valid) throw new Error(\"Incorrect password\");\n                return {\n                    id: user._id.toString(),\n                    name: user.name,\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 8 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUU7QUFDcEM7QUFDUTtBQUNEO0FBRTdCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVLE1BQU0sSUFBSUUsTUFBTTtnQkFDbkUsTUFBTVgsbURBQVNBO2dCQUNmLE1BQU1ZLE9BQU8sTUFBTVgsOENBQUlBLENBQUNZLE9BQU8sQ0FBQztvQkFBRVAsT0FBT0QsWUFBWUMsS0FBSyxDQUFDUSxXQUFXO29CQUFJQyxVQUFVO2dCQUFLLEdBQ3RGQyxNQUFNLENBQUMsYUFBYUMsSUFBSTtnQkFDM0IsSUFBSSxDQUFDTCxNQUFNLE1BQU0sSUFBSUQsTUFBTTtnQkFDM0IsTUFBTU8sUUFBUSxNQUFNbkIsdURBQWMsQ0FBQ00sWUFBWUksUUFBUSxFQUFFRyxLQUFLSCxRQUFRO2dCQUN0RSxJQUFJLENBQUNTLE9BQU8sTUFBTSxJQUFJUCxNQUFNO2dCQUM1QixPQUFPO29CQUFFUyxJQUFJUixLQUFLUyxHQUFHLENBQUNDLFFBQVE7b0JBQUlsQixNQUFNUSxLQUFLUixJQUFJO29CQUFFRSxPQUFPTSxLQUFLTixLQUFLO29CQUFFaUIsTUFBTVgsS0FBS1csSUFBSTtnQkFBQztZQUN4RjtRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFZCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFBRWMsTUFBTU4sRUFBRSxHQUFHUixLQUFLUSxFQUFFO2dCQUFFTSxNQUFNSCxJQUFJLEdBQUcsS0FBMkJBLElBQUk7WUFBQztZQUM3RSxPQUFPRztRQUNUO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUFFQyxRQUFRZixJQUFJLENBQUNRLEVBQUUsR0FBR00sTUFBTU4sRUFBRTtnQkFBWU8sUUFBUWYsSUFBSSxDQUFDVyxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFBVztZQUM1RixPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUFFQyxRQUFRO1FBQVVDLE9BQU87SUFBUztJQUMzQ0gsU0FBUztRQUFFSSxVQUFVO1FBQU9DLFFBQVEsSUFBSSxLQUFLO0lBQUc7SUFDaERDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF0aWVudC1jcm0vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tICcuL21vbmdvZGInXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9tb2RlbHMvVXNlcidcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHRocm93IG5ldyBFcnJvcignRW1haWwgYW5kIHBhc3N3b3JkIHJlcXVpcmVkJylcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKClcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbC50b0xvd2VyQ2FzZSgpLCBpc0FjdGl2ZTogdHJ1ZSB9KVxuICAgICAgICAgIC5zZWxlY3QoJytwYXNzd29yZCcpLmxlYW4oKVxuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcignTm8gYWNjb3VudCBmb3VuZCB3aXRoIHRoaXMgZW1haWwnKVxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZiAoIXZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBwYXNzd29yZCcpXG4gICAgICAgIHJldHVybiB7IGlkOiB1c2VyLl9pZC50b1N0cmluZygpLCBuYW1lOiB1c2VyLm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsLCByb2xlOiB1c2VyLnJvbGUgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHsgdG9rZW4uaWQgPSB1c2VyLmlkOyB0b2tlbi5yb2xlID0gKHVzZXIgYXMgeyByb2xlOiBzdHJpbmcgfSkucm9sZSB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHsgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nOyBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGUgYXMgc3RyaW5nIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHsgc2lnbkluOiAnL2xvZ2luJywgZXJyb3I6ICcvbG9naW4nIH0sXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnLCBtYXhBZ2U6IDggKiA2MCAqIDYwIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufVxuXG5kZWNsYXJlIG1vZHVsZSAnbmV4dC1hdXRoJyB7XG4gIGludGVyZmFjZSBTZXNzaW9uIHsgdXNlcjogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHJvbGU6IHN0cmluZyB9IH1cbn1cbmRlY2xhcmUgbW9kdWxlICduZXh0LWF1dGgvand0JyB7XG4gIGludGVyZmFjZSBKV1QgeyBpZDogc3RyaW5nOyByb2xlOiBzdHJpbmcgfVxufVxuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJjb25uZWN0REIiLCJVc2VyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZE9uZSIsInRvTG93ZXJDYXNlIiwiaXNBY3RpdmUiLCJzZWxlY3QiLCJsZWFuIiwidmFsaWQiLCJjb21wYXJlIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsInJvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) throw new Error(\"MONGODB_URI not defined in .env.local\");\nconst cached = global.mongoose ?? {\n    conn: null,\n    promise: null\n};\nif (!global.mongoose) global.mongoose = cached;\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        bufferCommands: false\n    });\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBQzNDLElBQUksQ0FBQ0EsYUFBYSxNQUFNLElBQUlHLE1BQU07QUFLbEMsTUFBTUMsU0FBZ0JDLE9BQU9OLFFBQVEsSUFBSTtJQUFFTyxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUNyRSxJQUFJLENBQUNGLE9BQU9OLFFBQVEsRUFBRU0sT0FBT04sUUFBUSxHQUFHSztBQUVqQyxlQUFlSTtJQUNwQixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUNuQyxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRUgsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYTtRQUFFVSxnQkFBZ0I7SUFBTTtJQUM1Rk4sT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGllbnQtY3JtLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkhXG5pZiAoIU1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoJ01PTkdPREJfVVJJIG5vdCBkZWZpbmVkIGluIC5lbnYubG9jYWwnKVxuXG5pbnRlcmZhY2UgQ2FjaGUgeyBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsOyBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsIH1cbmRlY2xhcmUgZ2xvYmFsIHsgdmFyIG1vbmdvb3NlOiBDYWNoZSB8IHVuZGVmaW5lZCB9XG5cbmNvbnN0IGNhY2hlZDogQ2FjaGUgPSBnbG9iYWwubW9uZ29vc2UgPz8geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbmlmICghZ2xvYmFsLm1vbmdvb3NlKSBnbG9iYWwubW9uZ29vc2UgPSBjYWNoZWRcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7IGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSB9KVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIHJldHVybiBjYWNoZWQuY29ublxufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/Disease.ts":
/*!***************************!*\
  !*** ./models/Disease.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Disease: () => (/* binding */ Disease)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DiseaseSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        unique: true,\n        trim: true\n    },\n    category: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\nconst Disease = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Disease || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Disease\", DiseaseSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvRGlzZWFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFHaEQsTUFBTUcsZ0JBQWdCLElBQUlILDRDQUFNQSxDQUM5QjtJQUNFSSxNQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtRQUFNQyxNQUFNO0lBQUs7SUFDbkVDLFVBQVU7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtRQUFNRSxNQUFNO0lBQUs7SUFDckRFLFVBQVU7UUFBRU4sTUFBTU87UUFBU0MsU0FBUztJQUFLO0FBQzNDLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsVUFBVWIsNENBQU1BLENBQUNhLE9BQU8sSUFBSWQsK0NBQUtBLENBQVcsV0FBV0UsZUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGllbnQtY3JtLy4vbW9kZWxzL0Rpc2Vhc2UudHM/ZjQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSdcbmltcG9ydCB0eXBlIHsgSURpc2Vhc2UgfSBmcm9tICdAL3R5cGVzJ1xuXG5jb25zdCBEaXNlYXNlU2NoZW1hID0gbmV3IFNjaGVtYTxJRGlzZWFzZT4oXG4gIHtcbiAgICBuYW1lOiAgICAgeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgaXNBY3RpdmU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKVxuXG5leHBvcnQgY29uc3QgRGlzZWFzZSA9IG1vZGVscy5EaXNlYXNlIHx8IG1vZGVsPElEaXNlYXNlPignRGlzZWFzZScsIERpc2Vhc2VTY2hlbWEpXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJEaXNlYXNlU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJjYXRlZ29yeSIsImlzQWN0aXZlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiRGlzZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Disease.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: true,\n        select: false\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"telecaller\"\n        ],\n        required: true\n    },\n    phone: {\n        type: String,\n        trim: true\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFHaEQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FDM0I7SUFDRUksTUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLE1BQU07SUFBSztJQUNyREMsT0FBVTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO1FBQU1HLFFBQVE7UUFBTUMsV0FBVztRQUFNSCxNQUFNO0lBQUs7SUFDcEZJLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtRQUFNTSxRQUFRO0lBQU07SUFDeERDLE1BQVU7UUFBRVQsTUFBTUM7UUFBUVMsTUFBTTtZQUFDO1lBQVM7U0FBYTtRQUFFUixVQUFVO0lBQUs7SUFDeEVTLE9BQVU7UUFBRVgsTUFBTUM7UUFBUUUsTUFBTTtJQUFLO0lBQ3JDUyxVQUFVO1FBQUVaLE1BQU1hO1FBQVNDLFNBQVM7SUFBSztBQUMzQyxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUdkLE1BQU1DLE9BQU9uQiw0Q0FBTUEsQ0FBQ21CLElBQUksSUFBSXBCLCtDQUFLQSxDQUFRLFFBQVFFLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRpZW50LWNybS8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnXG5pbXBvcnQgdHlwZSB7IElVc2VyIH0gZnJvbSAnQC90eXBlcydcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWE8SVVzZXI+KFxuICB7XG4gICAgbmFtZTogICAgIHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIGVtYWlsOiAgICB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgbG93ZXJjYXNlOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuICAgIHJvbGU6ICAgICB7IHR5cGU6IFN0cmluZywgZW51bTogWydhZG1pbicsICd0ZWxlY2FsbGVyJ10sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcGhvbmU6ICAgIHsgdHlwZTogU3RyaW5nLCB0cmltOiB0cnVlIH0sXG4gICAgaXNBY3RpdmU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKVxuXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsPElVc2VyPignVXNlcicsIFVzZXJTY2hlbWEpXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwic2VsZWN0Iiwicm9sZSIsImVudW0iLCJwaG9uZSIsImlzQWN0aXZlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdiseases%2Froute&page=%2Fapi%2Fdiseases%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdiseases%2Froute.ts&appDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpc%5CDownloads%5Cpatient-crm_17%5Cpatient-crm&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();