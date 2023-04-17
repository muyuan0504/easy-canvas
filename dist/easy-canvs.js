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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"canvas {\\r\\n    box-sizing: border-box;\\r\\n    border: 1px solid yellowgreen;\\r\\n    width: 600px;\\r\\n    height: 400px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://easy-canvas/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://easy-canvas/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://easy-canvas/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://easy-canvas/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://easy-canvas/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oneAnimate\": () => (/* binding */ oneAnimate)\n/* harmony export */ });\n/** canvas动画 */\nfunction oneAnimate(ctx) {\n    const img = new Image()\n    img.src = '../static/image/full_page.jpg'\n    const canvasX = 600\n    const canvasY = 400\n    const speed = 30\n    const scale = 1.05\n    const y = -4.5\n\n    /** 开始写动画逻辑\n     * x: 图片定位点\n     */\n    const dx = 0.75\n    let imgW,\n        imgH,\n        x = 0,\n        clearX,\n        clearY\n    img.onload = function () {\n        imgW = img.width * scale\n        imgH = img.height * scale\n        if (imgW > canvasX) {\n            // 整数型优化动画计算性能\n            x = parseInt(canvasX - imgW)\n            clearX = parseInt(imgW)\n        } else {\n            clearX = canvasX\n        }\n        console.log(img.width, img.height, canvasX, canvasY, x)\n        if (imgH > canvasY) {\n            clearY = imgH\n        } else {\n            clearY = canvasY\n        }\n        setInterval(() => {\n            draw.call(ctx)\n        }, speed)\n    }\n    function draw() {\n        this.clearRect(0, 0, clearX, clearY) // 渲染前，清空画布\n        if (imgW <= canvasX) {\n            if (x > canvasX) {\n                // 边界收归\n                x -= imgW\n            }\n            if (x > 0) {\n                this.drawImage(img, -imgW + x, y, imgW, imgH)\n            }\n            if (x - imgW > 0) {\n                this.drawImage(img, -imgW * 2 + x, y, imgW, imgH)\n            }\n        } else {\n            // 图片区域溢出\n            if (x > canvasX) {\n                // 边界收归\n                x = canvasX - imgW\n            }\n            if (x > canvasX - imgW) {\n                this.drawImage(img, x - imgW + 1, y, imgW, imgH)\n            }\n        }\n        this.drawImage(img, x, y, imgW, imgH)\n        x += dx\n    }\n}\n\n\n//# sourceURL=webpack://easy-canvas/./src/animation.js?");

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EasyCanvas)\n/* harmony export */ });\n/* harmony import */ var _rect_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect-api */ \"./src/rect-api.js\");\n/* harmony import */ var _font_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-api */ \"./src/font-api.js\");\n/* harmony import */ var _image_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-api */ \"./src/image-api.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ \"./src/animation.js\");\n/** canvas:\r\n *  浏览器支持：IE9之前的IE浏览器不支持\r\n *  默认宽高为：300px * 150px\r\n *  渲染上下文：2D 渲染上下文( WebGL 使用了基于OpenGL ES的 3D 上下文)\r\n */\r\n\r\n\r\n\r\n\r\nclass EasyCanvas {\r\n    constructor(elID) {\r\n        const canvasEl = document.getElementById(elID)\r\n        if (canvasEl.getContext) {\r\n            this.canvasCtx = canvasEl.getContext('2d')\r\n        } else {\r\n            throw '当前运行环境不支持canvas'\r\n        }\r\n        // this.canvasCtx.globalAlpha = 0.2\r\n        return {\r\n            el: canvasEl,\r\n            ctx: this.canvasCtx,\r\n        }\r\n    }\r\n    drawImg() {\r\n        (0,_image_api__WEBPACK_IMPORTED_MODULE_2__.drawImage)(this.canvasCtx)\r\n    }\r\n    // drawImage() {\r\n    //     const img = new Image()\r\n    //     // img.src = require('@img/01.jpg')\r\n    //     img.src = '../static/image/01.jpg'\r\n    //     img.onload = (msg) => {\r\n    //         console.log('加載成功--', msg)\r\n    //         // 创建图案\r\n    //         var ptrn = this.canvasCtx.createPattern(img, 'repeat-x')\r\n    //         this.canvasCtx.fillStyle = ptrn\r\n    //         this.canvasCtx.fillRect(200, 20, 150, 150)\r\n    //     }\r\n    //     img.onerror = (err) => {\r\n    //         console.log('加載error--', err)\r\n    //     }\r\n    //     console.log(img)\r\n    // }\r\n    /** 绘制矩形 */\r\n    drawRect({ x, y, width, height, fillColor = '', type = 'fill' } = options) {\r\n        // fillRect：绘制一个填充的矩形，需要先填充fillStyle，再绘制才能生效\r\n        if (fillColor) {\r\n            this.canvasCtx.fillStyle = fillColor\r\n        }\r\n        if (type == 'fill') {\r\n            this.canvasCtx.fillRect(x, y, width, height)\r\n        } else {\r\n            this.canvasCtx.strokeRect(x, y, width, height)\r\n        }\r\n    }\r\n    /** 绘制圆角矩形 */\r\n    drawRoundedRect({ x, y, width, height, radius, fillColor } = options) {\r\n        _rect_api__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRect.call(this.canvasCtx, x, y, width, height, radius, fillColor)\r\n    }\r\n    /** 清除指定矩形区域，让清除部分完全透明 */\r\n    clearRect(x, y, width, height) {\r\n        this.canvasCtx.clearRect(x, y, width, height)\r\n    }\r\n    /** 绘制路径：图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合\r\n     * 1. 创建路径起始点;\r\n     * 2. 使用画图命令去画出路径;\r\n     * 3. 把路径封闭;\r\n     * 4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形\r\n     *\r\n     * lineTo(x, y)：绘制直线\r\n     */\r\n    drawPath() {\r\n        // 生成路径的第一步\r\n        this.canvasCtx.fillStyle = 'red'\r\n        this.canvasCtx.beginPath()\r\n        // 设置起点：将笔触移动到指定的坐标 x 以及 y 上\r\n        this.canvasCtx.moveTo(75, 50)\r\n        this.canvasCtx.lineTo(100, 75)\r\n        this.canvasCtx.lineTo(100, 25)\r\n        // 通过线条来绘制图形轮廓\r\n        this.canvasCtx.stroke()\r\n        // 闭合路径之后图形绘制命令又重新指向到上下文中\r\n        // 闭合路径 closePath(),不是必需的。\r\n        // 这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。\r\n        // 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做\r\n        // this.canvasCtx.closePath()\r\n        // 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。\r\n        // 但是调用 stroke() 时不会自动闭合\r\n        this.canvasCtx.fill()\r\n\r\n        /** 使用path2D */\r\n        this.canvasCtx.fillStyle = 'blue'\r\n        const drawCircle = new Path2D()\r\n        drawCircle.moveTo(125, 35)\r\n        drawCircle.arc(100, 35, 25, 0, 2 * Math.PI)\r\n\r\n        this.canvasCtx.fill(drawCircle)\r\n\r\n        for (var i = 0; i < 6; i++) {\r\n            for (var j = 0; j < 6; j++) {\r\n                this.canvasCtx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)'\r\n                this.canvasCtx.fillRect(j * 25, i * 25, 25, 25)\r\n            }\r\n        }\r\n    }\r\n    /**\r\n     * arc(x, y, radius, startAngle, endAngle, anticlokwise:boolean-方向)：\r\n     * 绘制圆，画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），\r\n     * 从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成\r\n     *\r\n     * arcTo(x1, y1, x2, y2, radius)：绘制圆弧，根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点\r\n     */\r\n    drawCicle() {\r\n        // this.canvasCtx.fillStyle = 'black'\r\n        this.canvasCtx.moveTo(100, 100)\r\n        this.canvasCtx.arc(100, 100, 10, Math.PI * 1, Math.PI * 2, false)\r\n        this.canvasCtx.fill()\r\n    }\r\n    /** 绘制曲线\r\n     * quadraticCurveTo(cp1x, cp1y, x, y)：\r\n     * 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，\r\n     * (x,y) 为结束点x，y坐标，起始点为当前line所画到点，或者moveTo到达的坐标\r\n     *\r\n     * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：\r\n     * 绘制三次贝塞尔曲线，cp1x, cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点\r\n     *\r\n     * 二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点\r\n     */\r\n    drawCurve() {\r\n        this.canvasCtx.fillStyle = 'black'\r\n        // 二次贝塞尔曲线\r\n        this.canvasCtx.beginPath()\r\n        this.canvasCtx.moveTo(300, 150)\r\n        this.canvasCtx.quadraticCurveTo(150, 150, 150, 75)\r\n        // this.canvasCtx.quadraticCurveTo(25, 100, 50, 100)\r\n        // this.canvasCtx.quadraticCurveTo(50, 120, 30, 125)\r\n        // this.canvasCtx.quadraticCurveTo(60, 120, 65, 100)\r\n        // this.canvasCtx.quadraticCurveTo(125, 100, 125, 62.5)\r\n        // this.canvasCtx.quadraticCurveTo(125, 25, 75, 25)\r\n        this.canvasCtx.stroke()\r\n\r\n        //三次贝塞尔曲线\r\n        // this.canvasCtx.fillStyle = 'red'\r\n        // this.canvasCtx.beginPath()\r\n        // this.canvasCtx.moveTo(75, 40)\r\n        // this.canvasCtx.bezierCurveTo(75, 37, 70, 25, 50, 25)\r\n        // this.canvasCtx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)\r\n        // this.canvasCtx.bezierCurveTo(20, 80, 40, 102, 75, 120)\r\n        // this.canvasCtx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)\r\n        // this.canvasCtx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)\r\n        // this.canvasCtx.bezierCurveTo(85, 25, 75, 37, 75, 40)\r\n        // this.canvasCtx.fill()\r\n    }\r\n    /** 设置阴影\r\n     * shadowOffsetX\r\n     * shadowOffsetY\r\n     * shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，\r\n     * 它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0\r\n     *\r\n     * shadowBlur = float\r\n     * 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0\r\n     *\r\n     * shadowColor = color\r\n     * shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色\r\n     */\r\n    useShadows() {\r\n        this.canvasCtx.shadowOffsetX = 2\r\n        this.canvasCtx.shadowOffsetY = 2\r\n        this.canvasCtx.shadowBlur = 2\r\n        this.canvasCtx.shadowColor = 'rgba(0, 0, 0, 0.5)'\r\n\r\n        this.canvasCtx.font = '20px Times New Roman'\r\n        this.canvasCtx.fillStyle = 'Black'\r\n        this.canvasCtx.fillText('Sample String', 5, 30)\r\n    }\r\n    textFill(options) {\r\n        _font_api__WEBPACK_IMPORTED_MODULE_1__.textFill.call(this.canvasCtx, options)\r\n    }\r\n    /** 执行自定义api调用 */\r\n    execuOriginApi(options) {\r\n        for (let key in options) {\r\n            this.canvasCtx[key] = options[key]\r\n        }\r\n    }\r\n    /** 当前配置（即移动，旋转和缩放，见下）入栈：\r\n     * strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled\r\n     * 当前的裁切路径（clipping path）\r\n     */\r\n    save() {\r\n        this.canvasCtx.save()\r\n    }\r\n    restore() {\r\n        this.canvasCtx.restore()\r\n    }\r\n    /** translate(x, y) 用来移动 canvas 和它的原点到一个不同的位置\r\n     * translate方法接受两个参数。*x *是左右偏移量，y 是上下偏移量\r\n     */\r\n    translate() {\r\n        this.canvasCtx.translate(80, 0)\r\n        setTimeout(() => {\r\n            this.canvasCtx.translate(0, 0)\r\n            console.log('执行了？')\r\n        }, 2000)\r\n    }\r\n    /** 旋转rotate(angle)\r\n     * 旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法\r\n     * 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值\r\n     */\r\n    rotate(angle) {\r\n        this.canvasCtx.rotate(angle)\r\n    }\r\n    /** 缩放\r\n     * scale(x, y) scale方法可以缩放画布的水平和垂直的单位\r\n     * 两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小\r\n     */\r\n    scale(x, y) {\r\n        this.canvasCtx.scale(x, y)\r\n    }\r\n    /** 裁剪：将当前正在构建的路径转换为当前的裁剪路径 */\r\n    clip() {\r\n        this.canvasCtx.beginPath()\r\n        this.canvasCtx.arc(0, 0, 60, 0, Math.PI * 2, true)\r\n        this.canvasCtx.clip()\r\n    }\r\n    /** 变形：\r\n     * transform(a, b, c, d, e, f)\r\n     * a (m11) 水平方向的缩放\r\n     * b(m12) 竖直方向的倾斜偏移\r\n     * c(m21) 水平方向的倾斜偏移\r\n     * d(m22) 竖直方向的缩放\r\n     * e(dx) 水平方向的移动\r\n     * f(dy) 竖直方向的移动\r\n     *\r\n     * setTransform(a, b, c, d, e, f) 取消了当前变形，然后设置为指定的变形\r\n     *\r\n     * resetTransform() 重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);\r\n     */\r\n    transform() {}\r\n    ainimate() {\r\n        (0,_animation__WEBPACK_IMPORTED_MODULE_3__.oneAnimate)(this.canvasCtx)\r\n    }\r\n    /** 小球动画 */\r\n    ballAnimate() {}\r\n}\r\n\n\n//# sourceURL=webpack://easy-canvas/./src/base.js?");

/***/ }),

/***/ "./src/font-api.js":
/*!*************************!*\
  !*** ./src/font-api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textFill\": () => (/* binding */ textFill)\n/* harmony export */ });\n/** 文本处理相关\r\n * font: 字体，默认是'10px sans-serif', 单写字体无效\r\n * textAlign: 文本对齐选项，可选的值包括：start, end, left, right or center. 默认值是 start\r\n * textBaseline: 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic\r\n * direction: 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit\r\n *\r\n * fillText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的\r\n * strokeText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的\r\n */\r\n\r\nconst textFill = function ({ text, font, x, y, maxWidth } = options) {\r\n    // 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的\r\n    this.font = font\r\n    this.fillText(text, x, y, maxWidth)\r\n    // this.direction = 'rtl'\r\n    // 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的\r\n    // this.strokeText(text, x, y, maxWidth)\r\n}\r\n\n\n//# sourceURL=webpack://easy-canvas/./src/font-api.js?");

/***/ }),

/***/ "./src/image-api.js":
/*!**************************!*\
  !*** ./src/image-api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawImage\": () => (/* binding */ drawImage)\n/* harmony export */ });\n/**\r\n * 可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等\r\n * 浏览器支持的任意格式的外部图片都可以使用，比如 PNG、GIF 或者 JPEG\r\n * 甚至可以将同一个页面中其他 canvas 元素生成的图片作为图片源\r\n *\r\n * 引入图像到 canvas 里需要以下两步基本操作：\r\n * 获得一个指向HTMLImageElement的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片\r\n * 使用drawImage()函数将图片绘制到画布上\r\n * \r\n * drawImage(image, x, y): image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标\r\n * \r\n * drawImage(image, x, y, width, height): width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小\r\n * \r\n * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight):\r\n * 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用\r\n * 前 4 个是定义图像源的切片位置和大小\r\n * 后 4 个则是定义切片的目标显示位置和大小\r\n * \r\n * imageData,存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：\r\n * width：图片宽度，单位是像素\r\n * height: 图片高度，单位是像素\r\n * data: Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间\r\n * 例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份:\r\n * blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];\r\n * \r\n * 写入像素数据\r\n * ctx.putImageData(myImageData, dx, dy);\r\n */\r\n\r\nfunction drawImage(ctx) {\r\n    const img = new Image()\r\n    // img.src = require('@img/01.jpg')\r\n    img.onload = function () {\r\n        ctx.drawImage(img, 0, 0)\r\n    }\r\n    img.src = '../static/image/01.jpg'\r\n}\r\n\n\n//# sourceURL=webpack://easy-canvas/./src/image-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n\r\n\r\nconsole.log('happy canvas')\r\n\r\nconst { ctx: cvs, el: canvasEl } = new _base_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('easy-canvas')\r\nconsole.log(cvs, canvasEl)\r\n\r\nfunction drawImag() {\r\n    cvs.drawImage()\r\n}\r\n\r\nfunction drawRect() {\r\n    cvs.drawRect({\r\n        x: 0,\r\n        y: 0,\r\n        width: 150,\r\n        height: 100,\r\n        fillColor: 'yellowGreen',\r\n    })\r\n    cvs.clearRect(25, 25, 60, 60)\r\n    cvs.drawRect({\r\n        x: 30,\r\n        y: 30,\r\n        width: 50,\r\n        height: 50,\r\n        type: 'stroke',\r\n        fillColor: 'rgba(0, 0, 200, 0.5)',\r\n    })\r\n}\r\nfunction drawPath() {\r\n    cvs.drawPath()\r\n}\r\nfunction drawCicle() {\r\n    cvs.drawCicle()\r\n}\r\nfunction drawCurve() {\r\n    cvs.drawCurve()\r\n}\r\nfunction drawRoundedRect() {\r\n    cvs.drawRoundedRect({ x: 50, y: 50, width: 100, height: 50, radius: 10, fillColor: 'gray' })\r\n}\r\n\r\nfunction useShadows() {\r\n    cvs.useShadows()\r\n}\r\n// drawRect()\r\n// drawPath()\r\n// drawCicle()\r\n// drawCurve()\r\n// drawImag()\r\n\r\n// drawRoundedRect()\r\n// useShadows()\r\n\r\n// cvs.textFill({\r\n//     text: '慕远',\r\n//     font: '36px sans-serif',\r\n//     x: 200,\r\n//     y: 200,\r\n//     maxWidth: 200,\r\n// })\r\n// cvs.drawImg()\r\n\r\n// cvs.drawRect({\r\n//     x: 150,\r\n//     y: 150,\r\n//     width: 150,\r\n//     height: 100,\r\n//     fillColor: 'yellowGreen',\r\n// })\r\n\r\n// cvs.drawRect({\r\n//     x: 100,\r\n//     y: 100,\r\n//     width: 150,\r\n//     height: 100,\r\n//     fillColor: 'yellowGreen',\r\n// })\r\n// cvs.save()\r\n// cvs.execuOriginApi({ fillStyle: 'red' })\r\n// cvs.drawRect({\r\n//     x: 150,\r\n//     y: 150,\r\n//     width: 150,\r\n//     height: 100,\r\n// })\r\n// cvs.restore()\r\n// cvs.translate()\r\n// cvs.drawRect({\r\n//     x: 350,\r\n//     y: 350,\r\n//     width: 150,\r\n//     height: 100,\r\n// })\r\n// cvs.scale(-1, 2)\r\n// cvs.clip()\r\n// cvs.ainimate(cvs)\r\n\r\n/** 绘制小球 */\r\nconst ball = {\r\n    x: 100,\r\n    y: 100,\r\n    vx: 5, // x方向移动距离\r\n    vy: 1, // y方向移动距离\r\n    raduis: 25,\r\n    color: 'orange',\r\n    draw: function () {\r\n        cvs.beginPath()\r\n        cvs.arc(this.x, this.y, this.raduis, 0, Math.PI * 2, true)\r\n        cvs.closePath()\r\n        cvs.fillStyle = this.color\r\n        cvs.fill()\r\n    },\r\n}\r\n\r\nlet raf,\r\n    running = false\r\n\r\nfunction draw() {\r\n    // cvs.fillStyle = 'rgba(255, 255, 255, 0.3)'\r\n    // cvs.fillRect(0, 0, canvasEl.width, canvasEl.height)\r\n    // cvs.clearRect(0, 0, 600, 400)\r\n    clear()\r\n    console.log(ball)\r\n    ball.draw()\r\n    ball.x += ball.vx\r\n    ball.y += ball.vy\r\n    ball.vy *= 0.99 // 位移递减\r\n    ball.vy += 0.25\r\n    if (ball.y + ball.vy > canvasEl.height || ball.y + ball.vy < 0) {\r\n        ball.vy = -ball.vy\r\n    }\r\n    if (ball.x + ball.vx > canvasEl.width || ball.x + ball.vx < 0) {\r\n        ball.vx = -ball.vx\r\n    }\r\n    generateImg()\r\n    raf = window.requestAnimationFrame(draw)\r\n}\r\n\r\n// canvasEl.addEventListener('mouseover', (e) => {\r\n//     raf = window.requestAnimationFrame(draw)\r\n//     console.log('raf: ', raf)\r\n// })\r\n\r\ncanvasEl.addEventListener('mouseout', (e) => {\r\n    window.cancelAnimationFrame(raf)\r\n    console.log(raf, '动画移除')\r\n    running = false\r\n})\r\n\r\ncanvasEl.addEventListener('click', function (e) {\r\n    if (!running) {\r\n        raf = window.requestAnimationFrame(draw)\r\n        running = true\r\n    }\r\n})\r\n\r\n// canvasEl.addEventListener('mousemove', function (e) {\r\n//     if (!running) {\r\n//         clear()\r\n//         ball.x = e.offsetX\r\n//         ball.y = e.offsetY\r\n//         ball.draw()\r\n//     }\r\n// })\r\n\r\nfunction clear() {\r\n    cvs.fillStyle = 'rgba(255,255,255,0.6)'\r\n    cvs.fillRect(0, 0, canvasEl.width, canvasEl.height)\r\n}\r\n\r\n// ball.draw()\r\n\r\nfunction generateImg() {\r\n    const pngData = canvasEl.toDataURL('image/png') // 默认设定。创建一个 PNG 图片。\r\n    console.log('pngdata: ', pngData)\r\n    const imgEl = document.createElement('img')\r\n    imgEl.setAttribute('src', pngData)\r\n    document.body.appendChild(imgEl)\r\n}\r\n\r\n// canvas.toDataURL('image/jpeg', quality) // 创建一个 JPG 图片。你可以有选择地提供从 0 到 1 的品质量，1 表示最好品质，0 基本不被辨析但有比较小的文件大小。\r\n\r\n// canvas.toBlob(callback, type, encoderOptions) // 创建了一个在画布中的代表图片的 Blob 对像\r\n\r\ncvs.fillStyle = 'orange'\r\ncvs.fillRect(0, 0, 100, 60)\r\n\r\ncvs.globalAlpha = 0.5\r\n\r\ncvs.fillRect(200, 200, 100, 60)\r\n\r\n// cvs.globalAlpha = 1\r\ncvs.lineWidth = 20\r\ncvs.beginPath()\r\ncvs.moveTo(120, 120)\r\ncvs.lineTo(120, 200)\r\ncvs.stroke()\r\n\r\ncvs.font = '30px sans-serif'\r\ncvs.fillText('hahahah', 120, 80)\r\n\n\n//# sourceURL=webpack://easy-canvas/./src/index.js?");

/***/ }),

/***/ "./src/rect-api.js":
/*!*************************!*\
  !*** ./src/rect-api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawRoundedRect\": () => (/* binding */ drawRoundedRect)\n/* harmony export */ });\n/** 绘制圆角矩形，radius跟height用坐标相对y定位，不需要计算高度坐标的时候-radius高度 */\nconst drawRoundedRect = function (x, y, width, height, radius, color) {\n    let offset = 0\n    function lineDash() {\n        this.setLineDash([4, 2])\n        this.lineDashOffset = -offset\n        this.strokeRect(200, 200, 100, 100)\n    }\n    function march() {\n        offset++\n        if (offset > 16) {\n            offset = 0\n        }\n    }\n    const callLineDash = lineDash.bind(this)\n    callLineDash()\n\n    /** 圆型渐变 */\n    test.call(this)\n    /** 创建线性渐变 */\n    const lineargradient = this.createLinearGradient(x, y, x + width, y + height)\n    // lineargradient.addColorStop(0, 'white')\n    // lineargradient.addColorStop(0.5, 'red')\n    // lineargradient.addColorStop(1, 'black')\n\n    lineargradient.addColorStop(0, '#A7D30C')\n    lineargradient.addColorStop(0.9, '#019F62')\n    lineargradient.addColorStop(1, 'rgba(1,159,98,0)')\n\n    this.lineWidth = 1\n    this.lineCap = 'round'\n    console.log('====================================')\n    console.log(color)\n    console.log('====================================')\n    this.fillStyle = lineargradient\n    this.beginPath()\n    this.moveTo(x, y + radius)\n    this.lineTo(x, y + height - radius)\n    // quadraticCurveTo(cp1x, cp1y, x, y) 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点\n    this.quadraticCurveTo(x, y + height, x + radius, y + height)\n    this.lineTo(x + width - radius, y + height)\n    this.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)\n    this.lineTo(x + width, y + radius)\n    this.quadraticCurveTo(x + width, y, x + width - radius, y)\n    this.lineTo(x + radius, y)\n    // fix圆角\n    this.quadraticCurveTo(x, y, x, y + radius)\n    this.fill()\n}\n\nfunction test() {\n    // createRadialGradient(x1, y1, r1, x2, y2, r2)\n    // 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，\n    // 后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。\n    var radgrad = this.createRadialGradient(45, 45, 10, 52, 50, 30)\n    radgrad.addColorStop(0, '#A7D30C')\n    radgrad.addColorStop(0.9, '#019F62')\n    radgrad.addColorStop(1, 'rgba(1,159,98,0)')\n\n    var radgrad2 = this.createRadialGradient(105, 105, 20, 112, 120, 50)\n    radgrad2.addColorStop(0, '#FF5F98')\n    radgrad2.addColorStop(0.75, '#FF0188')\n    radgrad2.addColorStop(1, 'rgba(255,1,136,0)')\n\n    var radgrad3 = this.createRadialGradient(95, 15, 15, 102, 20, 40)\n    radgrad3.addColorStop(0, '#00C9FF')\n    radgrad3.addColorStop(0.8, '#00B5E2')\n    radgrad3.addColorStop(1, 'rgba(0,201,255,0)')\n\n    var radgrad4 = this.createRadialGradient(0, 150, 50, 0, 140, 90)\n    radgrad4.addColorStop(0, '#F4F201')\n    radgrad4.addColorStop(0.8, '#E4C700')\n    radgrad4.addColorStop(1, 'rgba(228,199,0,0)')\n\n    // 画图形\n    this.fillStyle = radgrad4\n    this.fillRect(0, 0, 150, 150)\n    this.fillStyle = radgrad3\n    this.fillRect(0, 0, 150, 150)\n    this.fillStyle = radgrad2\n    this.fillRect(0, 0, 150, 150)\n    this.fillStyle = radgrad\n    this.fillRect(0, 0, 150, 150)\n}\n\n\n//# sourceURL=webpack://easy-canvas/./src/rect-api.js?");

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