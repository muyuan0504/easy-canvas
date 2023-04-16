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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"canvas {\\n    box-sizing: border-box;\\n    border: 1px solid yellowgreen;\\n    width: 600px;\\n    height: 400px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://easy-canvas/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EasyCanvas)\n/* harmony export */ });\n/* harmony import */ var _rect_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect-api */ \"./src/rect-api.js\");\n/* harmony import */ var _font_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-api */ \"./src/font-api.js\");\n/* harmony import */ var _image_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-api */ \"./src/image-api.js\");\n/** canvas:\n *  浏览器支持：IE9之前的IE浏览器不支持\n *  默认宽高为：300px * 150px\n *  渲染上下文：2D 渲染上下文( WebGL 使用了基于OpenGL ES的 3D 上下文)\n */\n\n\n\nclass EasyCanvas {\n    constructor(elID) {\n        const canvasEl = document.getElementById(elID)\n        if (canvasEl.getContext) {\n            this.canvasCtx = canvasEl.getContext('2d')\n        } else {\n            throw '当前运行环境不支持canvas'\n        }\n        // this.canvasCtx.globalAlpha = 0.2\n    }\n    drawImg() {\n        (0,_image_api__WEBPACK_IMPORTED_MODULE_2__.drawImage)(this.canvasCtx)\n    }\n    drawImage() {\n        const img = new Image()\n        // img.src = require('@img/01.jpg')\n        img.src = '../static/image/01.jpg'\n        img.onload = (msg) => {\n            console.log('加載成功--', msg)\n            // 创建图案\n            var ptrn = this.canvasCtx.createPattern(img, 'repeat-x')\n            this.canvasCtx.fillStyle = ptrn\n            this.canvasCtx.fillRect(200, 20, 150, 150)\n        }\n        img.onerror = (err) => {\n            console.log('加載error--', err)\n        }\n        console.log(img)\n    }\n    /** 绘制矩形 */\n    drawRect({ x, y, width, height, fillColor = '', type = 'fill' } = options) {\n        // fillRect：绘制一个填充的矩形，需要先填充fillStyle，再绘制才能生效\n        if (fillColor) {\n            this.canvasCtx.fillStyle = fillColor\n        }\n        if (type == 'fill') {\n            this.canvasCtx.fillRect(x, y, width, height)\n        } else {\n            this.canvasCtx.strokeRect(x, y, width, height)\n        }\n    }\n    /** 绘制圆角矩形 */\n    drawRoundedRect({ x, y, width, height, radius, fillColor } = options) {\n        _rect_api__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRect.call(this.canvasCtx, x, y, width, height, radius, fillColor)\n    }\n    /** 清除指定矩形区域，让清除部分完全透明 */\n    cleanRect({ x, y, width, height } = options) {\n        this.canvasCtx.clearRect(x, y, width, height)\n    }\n    /** 绘制路径：图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合\n     * 1. 创建路径起始点;\n     * 2. 使用画图命令去画出路径;\n     * 3. 把路径封闭;\n     * 4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形\n     *\n     * lineTo(x, y)：绘制直线\n     */\n    drawPath() {\n        // 生成路径的第一步\n        this.canvasCtx.fillStyle = 'red'\n        this.canvasCtx.beginPath()\n        // 设置起点：将笔触移动到指定的坐标 x 以及 y 上\n        this.canvasCtx.moveTo(75, 50)\n        this.canvasCtx.lineTo(100, 75)\n        this.canvasCtx.lineTo(100, 25)\n        // 通过线条来绘制图形轮廓\n        this.canvasCtx.stroke()\n        // 闭合路径之后图形绘制命令又重新指向到上下文中\n        // 闭合路径 closePath(),不是必需的。\n        // 这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。\n        // 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做\n        // this.canvasCtx.closePath()\n        // 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。\n        // 但是调用 stroke() 时不会自动闭合\n        this.canvasCtx.fill()\n\n        /** 使用path2D */\n        this.canvasCtx.fillStyle = 'blue'\n        const drawCircle = new Path2D()\n        drawCircle.moveTo(125, 35)\n        drawCircle.arc(100, 35, 25, 0, 2 * Math.PI)\n\n        this.canvasCtx.fill(drawCircle)\n\n        for (var i = 0; i < 6; i++) {\n            for (var j = 0; j < 6; j++) {\n                this.canvasCtx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)'\n                this.canvasCtx.fillRect(j * 25, i * 25, 25, 25)\n            }\n        }\n    }\n    /**\n     * arc(x, y, radius, startAngle, endAngle, anticlokwise:boolean-方向)：\n     * 绘制圆，画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），\n     * 从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成\n     *\n     * arcTo(x1, y1, x2, y2, radius)：绘制圆弧，根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点\n     */\n    drawCicle() {\n        // this.canvasCtx.fillStyle = 'black'\n        this.canvasCtx.moveTo(100, 100)\n        this.canvasCtx.arc(100, 100, 10, Math.PI * 1, Math.PI * 2, false)\n        this.canvasCtx.fill()\n    }\n    /** 绘制曲线\n     * quadraticCurveTo(cp1x, cp1y, x, y)：\n     * 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，\n     * (x,y) 为结束点x，y坐标，起始点为当前line所画到点，或者moveTo到达的坐标\n     *\n     * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：\n     * 绘制三次贝塞尔曲线，cp1x, cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点\n     *\n     * 二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点\n     */\n    drawCurve() {\n        this.canvasCtx.fillStyle = 'black'\n        // 二次贝塞尔曲线\n        this.canvasCtx.beginPath()\n        this.canvasCtx.moveTo(300, 150)\n        this.canvasCtx.quadraticCurveTo(150, 150, 150, 75)\n        // this.canvasCtx.quadraticCurveTo(25, 100, 50, 100)\n        // this.canvasCtx.quadraticCurveTo(50, 120, 30, 125)\n        // this.canvasCtx.quadraticCurveTo(60, 120, 65, 100)\n        // this.canvasCtx.quadraticCurveTo(125, 100, 125, 62.5)\n        // this.canvasCtx.quadraticCurveTo(125, 25, 75, 25)\n        this.canvasCtx.stroke()\n\n        //三次贝塞尔曲线\n        // this.canvasCtx.fillStyle = 'red'\n        // this.canvasCtx.beginPath()\n        // this.canvasCtx.moveTo(75, 40)\n        // this.canvasCtx.bezierCurveTo(75, 37, 70, 25, 50, 25)\n        // this.canvasCtx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)\n        // this.canvasCtx.bezierCurveTo(20, 80, 40, 102, 75, 120)\n        // this.canvasCtx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)\n        // this.canvasCtx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)\n        // this.canvasCtx.bezierCurveTo(85, 25, 75, 37, 75, 40)\n        // this.canvasCtx.fill()\n    }\n    /** 设置阴影\n     * shadowOffsetX\n     * shadowOffsetY\n     * shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，\n     * 它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0\n     *\n     * shadowBlur = float\n     * 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0\n     *\n     * shadowColor = color\n     * shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色\n     */\n    useShadows() {\n        this.canvasCtx.shadowOffsetX = 2\n        this.canvasCtx.shadowOffsetY = 2\n        this.canvasCtx.shadowBlur = 2\n        this.canvasCtx.shadowColor = 'rgba(0, 0, 0, 0.5)'\n\n        this.canvasCtx.font = '20px Times New Roman'\n        this.canvasCtx.fillStyle = 'Black'\n        this.canvasCtx.fillText('Sample String', 5, 30)\n    }\n    textFill(options) {\n        _font_api__WEBPACK_IMPORTED_MODULE_1__.textFill.call(this.canvasCtx, options)\n    }\n    /** 执行自定义api调用 */\n    execuOriginApi(options) {\n        for (let key in options) {\n            this.canvasCtx[key] = options[key]\n        }\n    }\n    /** 当前配置（即移动，旋转和缩放，见下）入栈：\n     * strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled\n     * 当前的裁切路径（clipping path）\n     */\n    save() {\n        this.canvasCtx.save()\n    }\n    restore() {\n        this.canvasCtx.restore()\n    }\n    /** translate(x, y) 用来移动 canvas 和它的原点到一个不同的位置\n     * translate方法接受两个参数。*x *是左右偏移量，y 是上下偏移量\n     */\n    translate() {\n        this.canvasCtx.translate(80, 0)\n        setTimeout(() => {\n            this.canvasCtx.translate(0, 0)\n            console.log('执行了？')\n        }, 2000)\n    }\n    /** 旋转rotate(angle)\n     * 旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法\n     * 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值\n     */\n    rotate(angle) {\n        this.canvasCtx.rotate(angle)\n    }\n    /** 缩放\n     * scale(x, y) scale方法可以缩放画布的水平和垂直的单位\n     * 两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小\n     */\n    scale(x, y) {\n        this.canvasCtx.scale(x, y)\n    }\n    /** 裁剪：将当前正在构建的路径转换为当前的裁剪路径 */\n    clip() {}\n    /** 变形：\n     * transform(a, b, c, d, e, f)\n     * a (m11) 水平方向的缩放\n     * b(m12) 竖直方向的倾斜偏移\n     * c(m21) 水平方向的倾斜偏移\n     * d(m22) 竖直方向的缩放\n     * e(dx) 水平方向的移动\n     * f(dy) 竖直方向的移动\n     * \n     * setTransform(a, b, c, d, e, f) 取消了当前变形，然后设置为指定的变形\n     * \n     * resetTransform() 重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);\n     */ \n    transform() {}\n}\n\n\n//# sourceURL=webpack://easy-canvas/./src/base.js?");

/***/ }),

/***/ "./src/font-api.js":
/*!*************************!*\
  !*** ./src/font-api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textFill\": () => (/* binding */ textFill)\n/* harmony export */ });\n/** 文本处理\n * font: 字体，默认是'10px sans-serif', 单写字体无效\n * textAlign: 文本对齐选项，可选的值包括：start, end, left, right or center. 默认值是 start\n * textBaseline: 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic\n * direction: 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit\n *\n * fillText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的\n * strokeText(text, x, y [, maxWidth]): 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的\n */\n\nconst textFill = function ({ text, font, x, y, maxWidth } = options) {\n    // 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的\n    this.font = font\n    this.fillText(text, x, y, maxWidth)\n    // this.direction = 'rtl'\n    // 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的\n    // this.strokeText(text, x, y, maxWidth)\n}\n\n\n//# sourceURL=webpack://easy-canvas/./src/font-api.js?");

/***/ }),

/***/ "./src/image-api.js":
/*!**************************!*\
  !*** ./src/image-api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawImage\": () => (/* binding */ drawImage)\n/* harmony export */ });\n/**\n * 可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等\n * 浏览器支持的任意格式的外部图片都可以使用，比如 PNG、GIF 或者 JPEG\n * 甚至可以将同一个页面中其他 canvas 元素生成的图片作为图片源\n *\n * 引入图像到 canvas 里需要以下两步基本操作：\n * 获得一个指向HTMLImageElement的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片\n * 使用drawImage()函数将图片绘制到画布上\n * \n * drawImage(image, x, y): image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标\n * \n * drawImage(image, x, y, width, height): width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小\n * \n * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight):\n * 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用\n * 前 4 个是定义图像源的切片位置和大小\n * 后 4 个则是定义切片的目标显示位置和大小\n */\n\nfunction drawImage(ctx) {\n    const img = new Image()\n    // img.src = require('@img/01.jpg')\n    img.onload = function () {\n        ctx.drawImage(img, 0, 0)\n    }\n    img.src = '../static/image/01.jpg'\n}\n\n\n//# sourceURL=webpack://easy-canvas/./src/image-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n\n\nconsole.log('happy canvas')\n\nconst cvs = new _base_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('easy-canvas')\nconsole.log(cvs)\n\nfunction drawImag() {\n    cvs.drawImage()\n}\n\nfunction drawRect() {\n    cvs.drawRect({\n        x: 0,\n        y: 0,\n        width: 150,\n        height: 100,\n        fillColor: 'yellowGreen',\n    })\n    cvs.cleanRect({ x: 25, y: 25, width: 60, height: 60 })\n    cvs.drawRect({\n        x: 30,\n        y: 30,\n        width: 50,\n        height: 50,\n        type: 'stroke',\n        fillColor: 'rgba(0, 0, 200, 0.5)',\n    })\n}\nfunction drawPath() {\n    cvs.drawPath()\n}\nfunction drawCicle() {\n    cvs.drawCicle()\n}\nfunction drawCurve() {\n    cvs.drawCurve()\n}\nfunction drawRoundedRect() {\n    cvs.drawRoundedRect({ x: 50, y: 50, width: 100, height: 50, radius: 10, fillColor: 'gray' })\n}\n\nfunction useShadows() {\n    cvs.useShadows()\n}\n// drawRect()\n// drawPath()\n// drawCicle()\n// drawCurve()\n// drawImag()\n\n// drawRoundedRect()\n// useShadows()\n\ncvs.textFill({\n    text: '慕远',\n    font: '36px sans-serif',\n    x: 200,\n    y: 200,\n    maxWidth: 200,\n})\ncvs.drawImg()\n\ncvs.drawRect({\n    x: 150,\n    y: 150,\n    width: 150,\n    height: 100,\n    fillColor: 'yellowGreen',\n})\n\ncvs.drawRect({\n    x: 100,\n    y: 100,\n    width: 150,\n    height: 100,\n    fillColor: 'yellowGreen',\n})\ncvs.save()\ncvs.execuOriginApi({ fillStyle: 'red' })\ncvs.drawRect({\n    x: 150,\n    y: 150,\n    width: 150,\n    height: 100,\n})\ncvs.restore()\ncvs.translate()\ncvs.drawRect({\n    x: 350,\n    y: 350,\n    width: 150,\n    height: 100,\n})\ncvs.scale(-1, 2)\n\n\n//# sourceURL=webpack://easy-canvas/./src/index.js?");

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