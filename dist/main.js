/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 5px grey;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #555;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #333;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background-color: #eee;\\r\\n  font-style: normal;\\r\\n  height: 100%;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #333;\\r\\n  text-decoration: none;\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 600;\\r\\n  letter-spacing: 0.05rem;\\r\\n}\\r\\n\\r\\nnav ul a:hover {\\r\\n  background-color: #555;\\r\\n  color: #fff;\\r\\n  padding: 4px 8px;\\r\\n  border-radius: 4px;\\r\\n  transition: linear 0.5s;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\nheader nav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 90%;\\r\\n  align-items: center;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\nfooter img {\\r\\n  width: 120px;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nmain ul li img {\\r\\n  max-width: 100%;\\r\\n  box-shadow: #000 0 4px 40px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nheader nav .logo-wrapper img {\\r\\n  width: 120px;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\nheader nav .navItems {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: #fff;\\r\\n  margin-top: 10px;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\nfooter .footer-wrapper {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\nfooter .creator {\\r\\n  font-size: 0.9rem;\\r\\n  font-style: oblique;\\r\\n  margin-right: 300px;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n/*********************************  \\\\\\r\\n|*           Main                *|\\r\\n\\\\  *********************************/\\r\\nmain {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 40px 0;\\r\\n}\\r\\n\\r\\n.comment-form button {\\r\\n  align-self: end;\\r\\n  width: 30%;\\r\\n  padding: 10px 0;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\nmain ul {\\r\\n  list-style: none;\\r\\n  width: 80%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 50%;\\r\\n  column-gap: 40px;\\r\\n  row-gap: 30px;\\r\\n}\\r\\n\\r\\nmain ul li {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nmain ul li .nameWrapper {\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nmain ul li .nameWrapper h2 {\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\nmain ul li .nameWrapper i {\\r\\n  font-size: 25px;\\r\\n  cursor: pointer;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\nmain ul li .nameWrapper i:hover {\\r\\n  transform: scale(1.5);\\r\\n  color: red;\\r\\n}\\r\\n\\r\\nmain ul li h4 {\\r\\n  color: #333;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\nmain ul li .buttonWrapper {\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nmain ul li .buttonWrapper button,\\r\\n.add-comment {\\r\\n  font-size: 1.3rem;\\r\\n  letter-spacing: 0.02rem;\\r\\n  padding: 8px 12px;\\r\\n  background-color: #555;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 2px 4px #000;\\r\\n}\\r\\n\\r\\nmain ul li .buttonWrapper button:hover,\\r\\n.add-comment:hover {\\r\\n  transform: scale(0.9);\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n/* Popup window styling start */\\r\\n\\r\\n.mealDetailsPop {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  position: fixed;\\r\\n  width: 58%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  padding: 25px;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  background: #fff;\\r\\n  width: 80%;\\r\\n  border-radius: 7px;\\r\\n  align-self: center;\\r\\n  height: 100%;\\r\\n  padding-block: 25px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  gap: 19px;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.fa-circle-xmark {\\r\\n  font-size: 30px;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.fa-circle-xmark:hover {\\r\\n  color: red;\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.comments-lists {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n  background: #eee;\\r\\n  border: none;\\r\\n  padding: 10px 12px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.comments-lists li {\\r\\n  border-bottom: 2px dashed #333;\\r\\n  line-height: 20px;\\r\\n  padding: 8px 4px;\\r\\n}\\r\\n\\r\\n.meal-detail-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-size: 18px;\\r\\n  gap: 10px;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.meal-image {\\r\\n  width: 70%;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 2px 8px #000;\\r\\n}\\r\\n\\r\\n.meal-title {\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.meal-ingrediant {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.ingredient-pair {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: left;\\r\\n}\\r\\n\\r\\n.CommentFormContainer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  gap: 15px;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 9px;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.comment-form input,\\r\\n.comment-form textarea {\\r\\n  border-radius: 8px;\\r\\n  font-weight: 400;\\r\\n  padding-inline: 16px;\\r\\n  padding-block: 9px;\\r\\n  font-size: 17px;\\r\\n  border: 3px solid #555;\\r\\n}\\r\\n\\r\\n.ingredients {\\r\\n  background: #eee;\\r\\n  padding: 8px 12px;\\r\\n  width: 70%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border: 3px solid #555;\\r\\n  border-radius: 8px;\\r\\n  gap: 12px;\\r\\n  line-height: 30px;\\r\\n  font-size: 16px;\\r\\n  letter-spacing: 1px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#pop-container {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  background: rgba(85, 85, 85, 0.79);\\r\\n  backdrop-filter: blur(7px);\\r\\n  padding-block: 5%;\\r\\n}\\r\\n\\r\\n.mealCommentsContainer {\\r\\n  font-size: 18px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 15px;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  color: #333;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.form-title {\\r\\n  font-size: 18px;\\r\\n  color: #333;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/PAKtZ.png":
/*!***************************!*\
  !*** ./src/img/PAKtZ.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/PAKtZ.png\");\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/img/PAKtZ.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_PAKtZ_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/PAKtZ.png */ \"./src/img/PAKtZ.png\");\n/* harmony import */ var _modules_involApiLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involApiLikes.js */ \"./src/modules/involApiLikes.js\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n\r\n\r\n\r\n\r\n\r\nconst BASE_URL = `https://www.themealdb.com/api/json/v1/${\"1\"}/search.php?f=e`;\r\n\r\nconst getMealList = async () => {\r\n  const result = await (0,_modules_involApiLikes_js__WEBPACK_IMPORTED_MODULE_2__.likesArr)(); // getting likes from involvement API\r\n  await fetch(BASE_URL)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(json.meals, result);\r\n    });\r\n};\r\n\r\ngetMealList();\r\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/addMealComment.js":
/*!***************************************!*\
  !*** ./src/modules/addMealComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showMealComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showMealComments.js */ \"./src/modules/showMealComments.js\");\n\n\nconst BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n\nconst getPostParams = (body) => ({\n  method: 'POST',\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(body),\n}\n);\n\nconst postNewComment = async (comment) => {\n  const response = await fetch(`${BASE_URL}/apps/${\"uwElOeupds7Rg4hQTUTe\"}/comments`, getPostParams(comment));\n  return response;\n};\n\nconst clearForm = ({ target }) => {\n  target.uname.value = '';\n  target.ucomment.value = '';\n};\nconst handleCommentFormSubmit = (e) => {\n  e.preventDefault();\n  const uname = e.target.uname.value.trim();\n  const ucomment = e.target.ucomment.value.trim();\n  const itemId = document.querySelector('.item_id');\n  const uitemId = itemId.value.trim();\n\n  if (uname.length === 0 || ucomment.length === 0) return;\n  clearForm(e);\n\n  postNewComment({ item_id: uitemId, username: uname, comment: ucomment })\n    .then(() => (0,_showMealComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uitemId)).catch((err) => err);\n};\n\nconst addEventListerForCommentForm = () => {\n  const commentForm = document.querySelector('.comment-form');\n  commentForm.addEventListener('submit', handleCommentFormSubmit);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListerForCommentForm);\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/addMealComment.js?");

/***/ }),

/***/ "./src/modules/countItem.js":
/*!**********************************!*\
  !*** ./src/modules/countItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((domElement) => domElement.childElementCount);\r\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/countItem.js?");

/***/ }),

/***/ "./src/modules/createItem.js":
/*!***********************************!*\
  !*** ./src/modules/createItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involApiLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involApiLikes.js */ \"./src/modules/involApiLikes.js\");\n\r\n\r\nconst createItem = (obj, list, item) => {\r\n  const li = document.createElement('li');\r\n  const image = document.createElement('IMG');\r\n  image.setAttribute('src', obj.strMealThumb);\r\n  const name = document.createElement('h2');\r\n  name.innerHTML = obj.strMeal;\r\n  const like = document.createElement('i');\r\n  like.className = 'fa-solid fa-heart';\r\n  like.id = obj.idMeal;\r\n  const comments = document.createElement('button');\r\n  comments.type = 'button';\r\n  comments.className = 'comments';\r\n  comments.id = obj.idMeal;\r\n  comments.innerHTML = 'Comments';\r\n  const reservation = document.createElement('button');\r\n  reservation.type = 'button';\r\n  reservation.className = 'reservation';\r\n  reservation.innerHTML = 'Reservation';\r\n  const buttonWrapper = document.createElement('div');\r\n  buttonWrapper.className = 'buttonWrapper';\r\n  const nameWrapper = document.createElement('div');\r\n  nameWrapper.className = 'nameWrapper';\r\n  const likesCounter = document.createElement('h4');\r\n  likesCounter.innerHTML = `${item} likes`;\r\n  li.appendChild(image);\r\n  nameWrapper.appendChild(name);\r\n  nameWrapper.appendChild(like);\r\n  li.appendChild(nameWrapper);\r\n  li.appendChild(likesCounter);\r\n  buttonWrapper.appendChild(comments);\r\n  buttonWrapper.appendChild(reservation);\r\n  li.appendChild(buttonWrapper);\r\n  list.appendChild(li);\r\n\r\n  like.addEventListener('click', (e) => {\r\n    (0,_involApiLikes_js__WEBPACK_IMPORTED_MODULE_0__.addLikes)({ item_id: obj.idMeal });\r\n    const item = e.target.id;\r\n    (0,_involApiLikes_js__WEBPACK_IMPORTED_MODULE_0__.updatesLikes)(item, likesCounter);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItem);\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/createItem.js?");

/***/ }),

/***/ "./src/modules/involApiLikes.js":
/*!**************************************!*\
  !*** ./src/modules/involApiLikes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"likesArr\": () => (/* binding */ likesArr),\n/* harmony export */   \"updatesLikes\": () => (/* binding */ updatesLikes)\n/* harmony export */ });\n// involment api\r\nconst invoApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst apiKey = `${\"uwElOeupds7Rg4hQTUTe\"}`;\r\nconst invoURL = `${invoApiUrl}${apiKey}/likes`;\r\n\r\nconst addLikes = async (itemId) => {\r\n  await fetch(invoURL, {\r\n    method: 'POST',\r\n    body: JSON.stringify(itemId),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst likesArr = async () => {\r\n  const result = await fetch(invoURL)\r\n    .then((response) => response.json());\r\n  const likesArray = [];\r\n  for (let i = 1; i < result.length; i += 1) {\r\n    likesArray.push(result[i].likes);\r\n  }\r\n  return likesArray;\r\n};\r\n\r\nconst updatesLikes = async (likeId, likesCounter) => {\r\n  const result = await fetch(invoURL)\r\n    .then((response) => response.json());\r\n  for (let i = 1; i < result.length; i += 1) {\r\n    if (likeId === result[i].item_id) {\r\n      likesCounter.innerHTML = `${result[i].likes + 1} likes`;\r\n    }\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/involApiLikes.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createItem.js */ \"./src/modules/createItem.js\");\n/* harmony import */ var _countItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countItem.js */ \"./src/modules/countItem.js\");\n/* harmony import */ var _showMealDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showMealDetails.js */ \"./src/modules/showMealDetails.js\");\n\r\n\r\n\r\n\r\nconst mealList = document.querySelector('main');\r\n\r\nconst poplauteItem = (meals, likes) => {\r\n  mealList.innerHTML = '';\r\n  const list = document.createElement('ul');\r\n  list.className = 'itemsList';\r\n  meals.forEach((element, index) => {\r\n    (0,_createItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, list, likes[index]);\r\n  });\r\n  mealList.appendChild(list);\r\n  const product = document.querySelector('.item2 a');\r\n  product.innerHTML = '';\r\n  product.innerHTML = `Product (${(0,_countItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list)})`;\r\n  (0,_showMealDetails_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (poplauteItem);\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/showMealComments.js":
/*!*****************************************!*\
  !*** ./src/modules/showMealComments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getCommentCounts\": () => (/* binding */ getCommentCounts)\n/* harmony export */ });\nconst BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"uwElOeupds7Rg4hQTUTe\"}/comments?item_id=`;\n\nconst getMealComments = async (idMeal) => {\n  const response = await fetch(`${BASE_URL}${idMeal}`);\n  if (response.status >= 400) return [];\n  const meals = await response.json();\n  return meals;\n};\n\nconst getCommentCounts = (comments) => comments.length;\n\nconst updateCommentCountsUI = (commentLength) => {\n  let commentCountsText = 'Comment(0)';\n  if (commentLength === 1) {\n    commentCountsText = `Comment(${commentLength})`;\n  } else if (commentLength > 1) {\n    commentCountsText = `Comments(${commentLength})`;\n  }\n  const commentCounts = document.querySelector('.comment_counts');\n  commentCounts.innerText = commentCountsText;\n};\n\nconst updateMealCommentsUI = (comments) => {\n  const commentLength = getCommentCounts(comments);\n  updateCommentCountsUI(commentLength);\n\n  const commentList = document.querySelector('.comments-lists');\n  const lists = comments.map(({ username, comment }) => `<li><b>${username}</b>: ${comment} </li>`).join('');\n  commentList.innerHTML = lists;\n};\n\nconst displayMealComments = async (idMeal) => {\n  getMealComments(idMeal).then(updateMealCommentsUI);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMealComments);\n\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/showMealComments.js?");

/***/ }),

/***/ "./src/modules/showMealDetails.js":
/*!****************************************!*\
  !*** ./src/modules/showMealDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showMealComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showMealComments.js */ \"./src/modules/showMealComments.js\");\n/* harmony import */ var _addMealComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMealComment.js */ \"./src/modules/addMealComment.js\");\n\n\n\nconst BASE_URL = `https://www.themealdb.com/api/json/v1/${\"1\"}`;\n\nconst getMealsDetails = async (idMeal) => {\n  const response = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);\n  const meals = await response.json();\n  return meals;\n};\n\nconst updateMealDetailsUI = ({ meals }) => {\n  const mealDetailContainer = document.querySelector('.meal-detail-container');\n  const [{\n    idMeal,\n    strMeal,\n    strMealThumb,\n    strIngredient1,\n    strIngredient2,\n    strIngredient3,\n    strIngredient4,\n  }] = meals;\n\n  const mealDetails = `\n<img class=\"meal-image\" src=\"${strMealThumb}\" alt=\"\">\n    <h3 class=\"meal-title\">${strMeal}</h3>\n    <h4 class=\"meal-ingrediant\">Ingredients</h4>\n    <div class='ingredients'>\n    <div class=\"ingredient-pair\">\n    <p>${strIngredient1.toUpperCase()}</p>\n    <p>${strIngredient2.toUpperCase()}</p>\n    </div>\n    <div class=\"ingredient-pair\">\n      <p>${strIngredient3.toUpperCase()}</p>\n      <p>${strIngredient4.toUpperCase()}</p>\n      </div>\n      </div>\n      <input type=\"hidden\"class='item_id' name=\"item_id\" value=\"${idMeal}\">\n  </div>\n`;\n\n  mealDetailContainer.innerHTML = mealDetails;\n};\nconst displayMealsDetails = async (idMeal) => {\n  getMealsDetails(idMeal).then(updateMealDetailsUI);\n};\n\nconst popUploseBtnEventlistener = () => {\n  const closeBtn = document.querySelector('.fa-circle-xmark');\n  closeBtn.addEventListener('click', () => {\n    document.querySelector('#pop-container').style.display = 'none';\n  });\n};\n\nconst handleCommentBtnClick = (e) => {\n  const idMeal = e.target.id;\n  const mealDetailsPopup = document.querySelector('#pop-container');\n  mealDetailsPopup.style.display = 'flex';\n  displayMealsDetails(idMeal);\n  (0,_showMealComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeal);\n  (0,_addMealComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  popUploseBtnEventlistener();\n};\n\nconst addEventListerForCommentBtn = (commentBtn) => {\n  commentBtn.addEventListener('click', handleCommentBtnClick);\n};\n\nconst registerCommentBtnEventListener = () => {\n  const commentBtns = document.querySelectorAll('.comments');\n  commentBtns.forEach(addEventListerForCommentBtn);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerCommentBtnEventListener);\n\n//# sourceURL=webpack://PAKTZ_Restaurant/./src/modules/showMealDetails.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;