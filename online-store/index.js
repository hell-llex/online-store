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

/***/ "./online-store/index.html":
/*!*********************************!*\
  !*** ./online-store/index.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Online Store</title>\\n</head>\\n\\n<body class=\\\"body\\\">\\n  <div class=\\\"wrapper\\\">\\n    <header class=\\\"header active\\\">\\n      <div class=\\\"logo\\\"></div>\\n      <nav class=\\\"nav\\\">\\n        <div class=\\\"search-container\\\">\\n          <input type=\\\"search\\\" name=\\\"search\\\" id=\\\"search\\\" class=\\\"search\\\" placeholder=\\\"Search here...\\\" autocomplete=\\\"off\\\">\\n          <p class=\\\"found\\\" data-found=\\\"0\\\">\\n            <span>Found:</span>\\n            <span class=\\\"new\\\">***</span>\\n            <span>/</span>\\n            <span class=\\\"all\\\">***</span>\\n          </p>\\n        </div>\\n        <!-- <div class=\\\"search-container\\\">\\n\\n        </div> -->\\n\\n\\n        <div class=\\\"search-icon-container\\\">\\n          <div class=\\\"search-icon\\\"><span></span></div>\\n          <p class=\\\"found\\\" data-found=\\\"0\\\">\\n            <span>Found:</span>\\n            <span class=\\\"new\\\">***</span>\\n            <span>/</span>\\n            <span class=\\\"all\\\">***</span>\\n          </p>\\n        </div>\\n        <div class=\\\"btn-basket\\\">\\n          <div class=\\\"icon-basket\\\">\\n            <div class=\\\"notification\\\">\\n              <div class=\\\"notification-container\\\">\\n                <p class=\\\"header-total\\\">0$</p>\\n                <span class=\\\"spacer\\\"></span>\\n              </div>\\n              <p class=\\\"counter\\\">0</p>\\n            </div>\\n          </div>\\n        </div>\\n      </nav>\\n    </header>\\n    <main class=\\\"main\\\">\\n\\n      <div class=\\\"page__home\\\">\\n        <div class=\\\"main-container\\\">\\n          <aside class=\\\"filters\\\">\\n            <ul class=\\\"filters-list\\\">\\n              <li class=\\\"filters-item filters-item__mobile\\\">\\n                <div class=\\\"btn-switch-view\\\">\\n                  <span></span><span></span><span></span><span></span>\\n                </div>\\n\\n                <select name=\\\"sort\\\" id=\\\"sort\\\" class=\\\"sort-input\\\">\\n                  <option value=\\\"select\\\" selected disabled>Select sorting</option>\\n                  <option value=\\\"rating-highest\\\">RATING ⇧</option>\\n                  <option value=\\\"rating-lowest\\\">RATING ⇩</option>\\n                  <option value=\\\"price-highest\\\">PRICE ⇧</option>\\n                  <option value=\\\"price-lowest\\\">PRICE ⇩</option>\\n                </select>\\n              </li>\\n              <li class=\\\"filters-item\\\">\\n                <h3>Category</h3>\\n                <div class=\\\"category-container\\\" data-active=\\\"false\\\">\\n                  <div class=\\\"container-item\\\">\\n                    <label class=\\\"item-label\\\"><input type=\\\"checkbox\\\" name=\\\"Iphone\\\" class=\\\"checkbox\\\"\\n                        data-category=\\\"smart\\\">Iphone</label>\\n                    <p class=\\\"quantity\\\">5/5</p>\\n                  </div>\\n                </div>\\n              </li>\\n              <li class=\\\"filters-item\\\">\\n                <h3>Brand</h3>\\n                <div class=\\\"brand-container\\\" data-active=\\\"false\\\">\\n                  <div class=\\\"container-item\\\">\\n                    <label class=\\\"item-label\\\"><input type=\\\"checkbox\\\" name=\\\"Iphone\\\" class=\\\"checkbox\\\">Iphone</label>\\n                    <p class=\\\"quantity\\\">5/5</p>\\n                  </div>\\n                </div>\\n              </li>\\n              <li class=\\\"filters-item\\\">\\n                <h3>Quantity in stock</h3>\\n                <div class=\\\"stock-container\\\" data-active=\\\"false\\\">\\n                </div>\\n              </li>\\n              <li class=\\\"filters-item\\\">\\n                <h3>Price</h3>\\n                <div class=\\\"price-container\\\" data-active=\\\"false\\\">\\n                </div>\\n              </li>\\n              <li class=\\\"filters-item\\\">\\n                <div class=\\\"btn-container\\\">\\n                  <div class=\\\"btn-reset\\\">\\n                    <p>Reset</p>\\n                  </div>\\n                  <div class=\\\"btn-copy\\\">\\n                    <p>Copy</p>\\n                  </div>\\n                </div>\\n              </li>\\n            </ul>\\n          </aside>\\n          <div class=\\\"catalog\\\">\\n            <div class=\\\"catalog-sort\\\">\\n              <p class=\\\"filters-btn\\\">FILTERS</p>\\n              <div class=\\\"btn-switch-view\\\">\\n                <span></span><span></span><span></span><span></span>\\n              </div>\\n\\n              <select name=\\\"sort\\\" id=\\\"sort\\\" class=\\\"sort-input\\\">\\n                <option value=\\\"select\\\" selected disabled>Select sorting</option>\\n                <option value=\\\"rating-highest\\\">RATING ⇧</option>\\n                <option value=\\\"rating-lowest\\\">RATING ⇩</option>\\n                <option value=\\\"price-highest\\\">PRICE ⇧</option>\\n                <option value=\\\"price-lowest\\\">PRICE ⇩</option>\\n              </select>\\n            </div>\\n            <div class=\\\"catalog-products\\\">\\n              <div class=\\\"preloader\\\">\\n                <div class=\\\"centered\\\">\\n                  <div class=\\\"blob-1\\\"></div>\\n                  <div class=\\\"blob-2\\\"></div>\\n                </div>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"page__basket\\\">\\n        <div class=\\\"page page2\\\" data-page=\\\"page2\\\">\\n          <div class=\\\"summary-container\\\">\\n            <div class=\\\"summary\\\">\\n              <h2 class=\\\"summary__title\\\">Summary</h2>\\n              <p class=\\\"summary__products\\\">Products: 0\\n              </p>\\n              <p class=\\\"summary__total\\\">Total: 0\\n              </p>\\n              <p class=\\\"summary__discount hide\\\">Total: 0</p>\\n\\n              <input type=\\\"text\\\" placeholder=\\\"Code...\\\" class=\\\"summary__input\\\" tabindex=\\\"1\\\" required maxlength=\\\"20\\\">\\n              <div class=\\\"apply-code-container\\\">\\n                <p class=\\\"apply-code__title\\\"><b>Applied codes:</b></p>\\n                <div class=\\\"apply-code__items\\\">\\n                  <p>Сodes not found<br>(ಥ﹏ಥ)</p>\\n                </div>\\n              </div>\\n\\n              <div class=\\\"summary__example-text\\\"></div>\\n\\n              <div class=\\\"summary-btn\\\">\\n                <div class=\\\"summary__buy-btn\\\">BUY NOW!</div>\\n              </div>\\n            </div>\\n          </div>\\n\\n\\n          <div class=\\\"products\\\">\\n\\n            <div class=\\\"products__header\\\">\\n            </div>\\n\\n            <div class=\\\"products__card-container\\\">\\n              <div class=\\\"empty\\\">Basket is empty</div>\\n            </div>\\n            <!-- <div class=\\\"summary-container__mobile\\\">\\n              <div class=\\\"summary\\\">\\n                <h2 class=\\\"summary__title\\\">Summary</h2>\\n                <p class=\\\"summary__products\\\">Products: 0\\n                </p>\\n                <p class=\\\"summary__total\\\">Total: 0\\n                </p>\\n                <p class=\\\"summary__discount hide\\\">Total: 0</p>\\n\\n                <input type=\\\"text\\\" placeholder=\\\"Code: hell, store, new...\\\" class=\\\"summary__input\\\" tabindex=\\\"1\\\" required\\n                  maxlength=\\\"20\\\">\\n                <div class=\\\"apply-code-container\\\">\\n                  <p class=\\\"apply-code__title\\\"><b>Applied codes:</b></p>\\n                  <div class=\\\"apply-code__items\\\">\\n                    <p>Сodes not found<br>(ಥ﹏ಥ)</p>\\n                  </div>\\n                </div>\\n\\n                <div class=\\\"summary__example-text\\\"></div>\\n\\n                <div class=\\\"summary-btn\\\">\\n                  <div class=\\\"summary__buy-btn\\\">BUY NOW!</div>\\n                </div>\\n              </div>\\n            </div> -->\\n          </div>\\n\\n        </div>\\n      </div>\\n\\n      <div class=\\\"page__product-description\\\">\\n        <div class=\\\"details-container\\\">\\n        </div>\\n      </div>\\n\\n      <div class=\\\"page__404\\\">\\n        <div class=\\\"_404-container\\\">\\n          <div class=\\\"code-area\\\">\\n            <span style=\\\"color: #777;font-style:italic;\\\">\\n              // 404 page not found.\\n            </span>\\n            <span>\\n              <span style=\\\"color:#d65562;\\\">\\n                if\\n              </span>\\n              (<span style=\\\"color:#4ca8ef;\\\">!</span><span style=\\\"font-style: italic;color:#bdbdbd;\\\">found</span>)\\n              {\\n            </span>\\n            <span>\\n              <span style=\\\"padding-left: 15px;color:#2796ec\\\">\\n                <i style=\\\"width: 10px;display:inline-block\\\"></i>throw\\n              </span>\\n              <span>\\n                (<span style=\\\"color: #a6a61f\\\">\\\"(╯°□°)╯︵ ┻━┻\\\"</span>);\\n              </span>\\n              <span style=\\\"display:block\\\">}</span>\\n              <span style=\\\"color: #777;font-style:italic;\\\">\\n                // <a class=\\\"not-found-home-link\\\">Go home!</a>\\n              </span>\\n            </span>\\n          </div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"shadow-wrapper\\\" style=\\\"display: none;\\\">\\n        <div class=\\\"buy-form hide\\\">\\n        </div>\\n      </div>\\n      <span class=\\\"before\\\"></span>\\n      <!-- <div class=\\\"order-accepted hide\\\">\\n        <h3 class=\\\"title-accepted\\\">Order accepted!</h3>\\n      </div> -->\\n    </main>\\n    <footer class=\\\"footer\\\">\\n      <a href=\\\"https://github.com/hell-llex\\\" class=\\\"my-logo\\\"></a>\\n      <div>\\n        <a href=\\\"https://github.com/hell-llex\\\" class=\\\"footer-link\\\">hell-llex</a>\\n        <p>© 2022</p>\\n      </div>\\n    </footer>\\n  </div>\\n</body>\\n\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://online-store/./online-store/index.html?");

/***/ }),

/***/ "./online-store/src/components/basket/basket.scss":
/*!********************************************************!*\
  !*** ./online-store/src/components/basket/basket.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214048071\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/basket.scss?");

/***/ }),

/***/ "./online-store/src/components/cards/cards.scss":
/*!******************************************************!*\
  !*** ./online-store/src/components/cards/cards.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214048052\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/cards/cards.scss?");

/***/ }),

/***/ "./online-store/src/components/filter/filter.scss":
/*!********************************************************!*\
  !*** ./online-store/src/components/filter/filter.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214048066\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/filter/filter.scss?");

/***/ }),

/***/ "./online-store/src/components/filter/slider/slider.scss":
/*!***************************************************************!*\
  !*** ./online-store/src/components/filter/slider/slider.scss ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214048077\n      var cssReload = __webpack_require__(/*! ../../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/filter/slider/slider.scss?");

/***/ }),

/***/ "./online-store/src/components/loader/loader.scss":
/*!********************************************************!*\
  !*** ./online-store/src/components/loader/loader.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214047955\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/loader/loader.scss?");

/***/ }),

/***/ "./online-store/src/components/routing/404.scss":
/*!******************************************************!*\
  !*** ./online-store/src/components/routing/404.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214047967\n      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/src/components/routing/404.scss?");

/***/ }),

/***/ "./online-store/styles.scss":
/*!**********************************!*\
  !*** ./online-store/styles.scss ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1692214047888\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://online-store/./online-store/styles.scss?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-env browser */\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n/** @typedef {any} TODO */\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\nfunction debounce(fn, time) {\n    var timeout = 0;\n    return function () {\n        // @ts-ignore\n        var self = this;\n        // eslint-disable-next-line prefer-rest-params\n        var args = arguments;\n        var functionCall = function functionCall() {\n            return fn.apply(self, args);\n        };\n        clearTimeout(timeout);\n        // @ts-ignore\n        timeout = setTimeout(functionCall, time);\n    };\n}\nfunction noop() { }\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\nfunction getCurrentScriptUrl(moduleId) {\n    var src = srcByModuleId[moduleId];\n    if (!src) {\n        if (document.currentScript) {\n            src = /** @type {HTMLScriptElement} */ document.currentScript.src;\n        }\n        else {\n            var scripts = document.getElementsByTagName(\"script\");\n            var lastScriptTag = scripts[scripts.length - 1];\n            if (lastScriptTag) {\n                src = lastScriptTag.src;\n            }\n        }\n        srcByModuleId[moduleId] = src;\n    }\n    /**\n     * @param {string} fileMap\n     * @returns {null | string[]}\n     */\n    return function (fileMap) {\n        if (!src) {\n            return null;\n        }\n        var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n        var filename = splitResult && splitResult[1];\n        if (!filename) {\n            return [src.replace(\".js\", \".css\")];\n        }\n        if (!fileMap) {\n            return [src.replace(\".js\", \".css\")];\n        }\n        return fileMap.split(\",\").map(function (mapRule) {\n            var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n            return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n        });\n    };\n}\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\nfunction updateCss(el, url) {\n    if (!url) {\n        if (!el.href) {\n            return;\n        }\n        // eslint-disable-next-line\n        url = el.href.split(\"?\")[0];\n    }\n    if (!isUrlRequest(/** @type {string} */ url)) {\n        return;\n    }\n    if (el.isLoaded === false) {\n        // We seem to be about to replace a css link that hasn't loaded yet.\n        // We're probably changing the same file more than once.\n        return;\n    }\n    if (!url || !(url.indexOf(\".css\") > -1)) {\n        return;\n    }\n    // eslint-disable-next-line no-param-reassign\n    el.visited = true;\n    var newEl = el.cloneNode();\n    newEl.isLoaded = false;\n    newEl.addEventListener(\"load\", function () {\n        if (newEl.isLoaded) {\n            return;\n        }\n        newEl.isLoaded = true;\n        el.parentNode.removeChild(el);\n    });\n    newEl.addEventListener(\"error\", function () {\n        if (newEl.isLoaded) {\n            return;\n        }\n        newEl.isLoaded = true;\n        el.parentNode.removeChild(el);\n    });\n    newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n    if (el.nextSibling) {\n        el.parentNode.insertBefore(newEl, el.nextSibling);\n    }\n    else {\n        el.parentNode.appendChild(newEl);\n    }\n}\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\nfunction getReloadUrl(href, src) {\n    var ret;\n    // eslint-disable-next-line no-param-reassign\n    href = normalizeUrl(href);\n    src.some(\n    /**\n     * @param {string} url\n     */\n    // eslint-disable-next-line array-callback-return\n    function (url) {\n        if (href.indexOf(src) > -1) {\n            ret = url;\n        }\n    });\n    return ret;\n}\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\nfunction reloadStyle(src) {\n    if (!src) {\n        return false;\n    }\n    var elements = document.querySelectorAll(\"link\");\n    var loaded = false;\n    forEach.call(elements, function (el) {\n        if (!el.href) {\n            return;\n        }\n        var url = getReloadUrl(el.href, src);\n        if (!isUrlRequest(url)) {\n            return;\n        }\n        if (el.visited === true) {\n            return;\n        }\n        if (url) {\n            updateCss(el, url);\n            loaded = true;\n        }\n    });\n    return loaded;\n}\nfunction reloadAll() {\n    var elements = document.querySelectorAll(\"link\");\n    forEach.call(elements, function (el) {\n        if (el.visited === true) {\n            return;\n        }\n        updateCss(el);\n    });\n}\n/**\n * @param {string} url\n * @returns {boolean}\n */\nfunction isUrlRequest(url) {\n    // An URL is not an request if\n    // It is not http or https\n    if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n        return false;\n    }\n    return true;\n}\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\nmodule.exports = function (moduleId, options) {\n    if (noDocument) {\n        console.log(\"no window.document found, will not HMR CSS\");\n        return noop;\n    }\n    var getScriptSrc = getCurrentScriptUrl(moduleId);\n    function update() {\n        var src = getScriptSrc(options.filename);\n        var reloaded = reloadStyle(src);\n        if (options.locals) {\n            console.log(\"[HMR] Detected local css modules. Reload all css\");\n            reloadAll();\n            return;\n        }\n        if (reloaded) {\n            console.log(\"[HMR] css reload %s\", src.join(\" \"));\n        }\n        else {\n            console.log(\"[HMR] Reload all css\");\n            reloadAll();\n        }\n    }\n    return debounce(update, 50);\n};\n\n\n//# sourceURL=webpack://online-store/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n/* eslint-disable */\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n    return pathComponents.reduce(function (accumulator, item) {\n        switch (item) {\n            case \"..\":\n                accumulator.pop();\n                break;\n            case \".\":\n                break;\n            default:\n                accumulator.push(item);\n        }\n        return accumulator;\n    }, /** @type {string[]} */ []).join(\"/\");\n}\n/**\n * @param {string} urlString\n * @returns {string}\n */\nmodule.exports = function (urlString) {\n    urlString = urlString.trim();\n    if (/^data:/i.test(urlString)) {\n        return urlString;\n    }\n    var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n    var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n    var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n    components[0] = \"\";\n    var path = normalizeUrl(components);\n    return protocol + host + path;\n};\n\n\n//# sourceURL=webpack://online-store/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/vanilla-router/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vanilla-router/index.js ***!
  \**********************************************/
/***/ (function(module) {

eval("\n/* global window, module */\n;\n(function (global, factory) {\n     true ? module.exports = factory() :\n        0;\n}(this, (function () {\n    /**\n     * Router\n     *\n     * @version: 1.2.7\n     * @author Graidenix\n     *\n     * @constructor\n     *\n     * @param {object} options\n     * @returns {Router}\n     */\n    function Router(options) {\n        var settings = this._getSettings(options);\n        this.notFoundHandler = settings.page404;\n        this.mode = (!window.history || !window.history.pushState) ? \"hash\" : settings.mode;\n        this.root = settings.root === \"/\" ? \"/\" : \"/\" + this._trimSlashes(settings.root) + \"/\";\n        this.beforeHook = settings.hooks.before;\n        this.securityHook = settings.hooks.secure;\n        this.routes = [];\n        if (settings.routes && settings.routes.length > 0) {\n            var _this = this;\n            settings.routes.forEach(function (route) {\n                _this.add(route.rule, route.handler, route.options);\n            });\n        }\n        this._pageState = null;\n        this._currentPage = null;\n        this._skipCheck = false;\n        this._action = null;\n        if (this.mode === \"hash\") {\n            this._historyStack = [];\n            this._historyIdx = 0;\n            this._historyState = \"add\";\n        }\n        return this;\n    }\n    /**\n     * Define Router Page\n     *\n     * @param {string} uri\n     * @param {object} query\n     * @param {Array} params\n     * @param {object} state\n     * @param {object} options\n     *\n     * @constructor\n     */\n    Router.Page = function (uri, query, params, state, options) {\n        this.uri = uri || \"\";\n        this.query = query || {};\n        this.params = params || [];\n        this.state = state || null;\n        this.options = options || {};\n    };\n    /**\n     * Sanitize options and add default values\n     *\n     * @param {object} options\n     * @returns {object}\n     * @private\n     */\n    Router.prototype._getSettings = function (options) {\n        var settings = {};\n        var defaults = {\n            routes: [],\n            mode: \"history\",\n            root: \"/\",\n            hooks: {\n                \"before\": function () {\n                },\n                \"secure\": function () {\n                    return true;\n                }\n            },\n            page404: function (page) {\n                console.error({\n                    page: page,\n                    message: \"404. Page not found\"\n                });\n            }\n        };\n        options = options || {};\n        [\"routes\", \"mode\", \"root\", \"page404\"].forEach(function (key) {\n            settings[key] = options[key] || defaults[key];\n        });\n        settings.hooks = Object.assign({}, defaults.hooks, options.hooks || {});\n        return settings;\n    };\n    /**\n     * Get URI for Router \"history\" mode\n     *\n     * @private\n     * @returns {string}\n     */\n    Router.prototype._getHistoryFragment = function () {\n        var fragment = decodeURI(window.location.pathname);\n        if (this.root !== \"/\") {\n            fragment = fragment.replace(this.root, \"\");\n        }\n        return this._trimSlashes(fragment);\n    };\n    /**\n     * Get URI for router \"hash\" mode\n     *\n     * @private\n     * @returns {string}\n     */\n    Router.prototype._getHashFragment = function () {\n        var hash = window.location.hash.substr(1).replace(/(\\?.*)$/, \"\");\n        return this._trimSlashes(hash);\n    };\n    /**\n     * Get current URI\n     *\n     * @private\n     * @returns {string}\n     */\n    Router.prototype._getFragment = function () {\n        if (this.mode === \"history\") {\n            return this._getHistoryFragment();\n        }\n        else {\n            return this._getHashFragment();\n        }\n    };\n    /**\n     * Trim slashes for path\n     *\n     * @private\n     * @param {string} path\n     * @returns {string}\n     */\n    Router.prototype._trimSlashes = function (path) {\n        if (typeof path !== \"string\") {\n            return \"\";\n        }\n        return path.toString().replace(/\\/$/, \"\").replace(/^\\//, \"\");\n    };\n    /**\n     * 404 Page Handler\n     *\n     * @private\n     */\n    Router.prototype._page404 = function (path) {\n        this._currentPage = new Router.Page(path);\n        this.notFoundHandler(path);\n    };\n    /**\n     * Convert the string route rule to RegExp rule\n     *\n     * @param {string} route\n     * @returns {RegExp}\n     * @private\n     */\n    Router.prototype._parseRouteRule = function (route) {\n        if (typeof route !== \"string\") {\n            return route;\n        }\n        var uri = this._trimSlashes(route);\n        var rule = uri\n            .replace(/([\\\\\\/\\-\\_\\.])/g, \"\\\\$1\")\n            .replace(/\\{[a-zA-Z]+\\}/g, \"(:any)\")\n            .replace(/\\:any/g, \"[\\\\w\\\\-\\\\_\\\\.]+\")\n            .replace(/\\:word/g, \"[a-zA-Z]+\")\n            .replace(/\\:num/g, \"\\\\d+\");\n        return new RegExp(\"^\" + rule + \"$\", \"i\");\n    };\n    /**\n     * Parse query string and return object for it\n     *\n     * @param {string} query\n     * @returns {object}\n     * @private\n     */\n    Router.prototype._parseQuery = function (query) {\n        var _query = {};\n        if (typeof query !== \"string\") {\n            return _query;\n        }\n        if (query[0] === \"?\") {\n            query = query.substr(1);\n        }\n        this._queryString = query;\n        query.split(\"&\").forEach(function (row) {\n            var parts = row.split(\"=\");\n            if (parts[0] !== \"\") {\n                if (parts[1] === undefined) {\n                    parts[1] = true;\n                }\n                _query[decodeURIComponent(parts[0])] = parts[1];\n            }\n        });\n        return _query;\n    };\n    /**\n     * Get query for `history` mode\n     *\n     * @returns {Object}\n     * @private\n     */\n    Router.prototype._getHistoryQuery = function () {\n        return this._parseQuery(window.location.search);\n    };\n    /**\n     * Get query for `hash` mode\n     *\n     * @returns {Object}\n     * @private\n     */\n    Router.prototype._getHashQuery = function () {\n        var index = window.location.hash.indexOf(\"?\");\n        var query = (index !== -1) ? window.location.hash.substr(index) : \"\";\n        return this._parseQuery(query);\n    };\n    /**\n     * Get query as object\n     *\n     * @private\n     * @returns {Object}\n     */\n    Router.prototype._getQuery = function () {\n        if (this.mode === \"history\") {\n            return this._getHistoryQuery();\n        }\n        else {\n            return this._getHashQuery();\n        }\n    };\n    /**\n     * Add route to routes list\n     *\n     * @param {string|RegExp} rule\n     * @param {function} handler\n     * @param {{}} options\n     * @returns {Router}\n     */\n    Router.prototype.add = function (rule, handler, options) {\n        this.routes.push({\n            rule: this._parseRouteRule(rule),\n            handler: handler,\n            options: options\n        });\n        return this;\n    };\n    /**\n     * Remove a route from routes list\n     *\n     * @param param\n     * @returns {Router}\n     */\n    Router.prototype.remove = function (param) {\n        var _this = this;\n        if (typeof param === \"string\") {\n            param = this._parseRouteRule(param).toString();\n        }\n        this.routes.some(function (route, i) {\n            if (route.handler === param || route.rule.toString() === param) {\n                _this.routes.splice(i, 1);\n                return true;\n            }\n            return false;\n        });\n        return this;\n    };\n    /**\n     * Reset the state of Router\n     *\n     * @returns {Router}\n     */\n    Router.prototype.reset = function () {\n        this.routes = [];\n        this.mode = null;\n        this.root = \"/\";\n        this._pageState = {};\n        this.removeUriListener();\n        return this;\n    };\n    /**\n     * Add current page in history stack\n     * @private\n     */\n    Router.prototype._pushHistory = function () {\n        var _this = this, fragment = this._getFragment();\n        if (this.mode === \"hash\") {\n            if (this._historyState === \"add\") {\n                if (this._historyIdx !== this._historyStack.length - 1) {\n                    this._historyStack.splice(this._historyIdx + 1);\n                }\n                this._historyStack.push({\n                    path: fragment,\n                    state: _this._pageState\n                });\n                this._historyIdx = this._historyStack.length - 1;\n            }\n            this._historyState = \"add\";\n        }\n    };\n    /**\n     *\n     * @param asyncRequest boolean\n     * @returns {PromiseResult<boolean> | boolean}\n     * @private\n     */\n    Router.prototype._unloadCallback = function (asyncRequest) {\n        var result;\n        if (this._skipCheck) {\n            return asyncRequest ? Promise.resolve(true) : true;\n        }\n        if (this._currentPage && this._currentPage.options && this._currentPage.options.unloadCb) {\n            result = this._currentPage.options.unloadCb(this._currentPage, asyncRequest);\n            if (!asyncRequest || result instanceof Promise) {\n                return result;\n            }\n            return result ? Promise.resolve(result) : Promise.reject(result);\n        }\n        else {\n            return asyncRequest ? Promise.resolve(true) : true;\n        }\n    };\n    /**\n     * Check if router has the action for current path\n     *\n     * @returns {boolean}\n     * @private\n     */\n    Router.prototype._findRoute = function () {\n        var _this = this, fragment = this._getFragment();\n        return this.routes.some(function (route) {\n            var match = fragment.match(route.rule);\n            if (match) {\n                match.shift();\n                var query = _this._getQuery();\n                var page = new Router.Page(fragment, query, match, _this._pageState, route.options);\n                if (!_this.securityHook(page)) {\n                    return false;\n                }\n                _this._currentPage = page;\n                if (_this._skipCheck) {\n                    _this._skipCheck = false;\n                    return true;\n                }\n                _this.beforeHook(page);\n                route.handler.apply(page, match);\n                _this._pageState = null;\n                window.onbeforeunload = function (ev) {\n                    if (_this._unloadCallback(false)) {\n                        return;\n                    }\n                    ev.returnValue = true;\n                    return true;\n                };\n                return true;\n            }\n            return false;\n        });\n    };\n    /**\n     *\n     */\n    Router.prototype._treatAsync = function () {\n        var result;\n        result = this._currentPage.options.unloadCb(this._currentPage, true);\n        if (!(result instanceof Promise)) {\n            result = result ? Promise.resolve(result) : Promise.reject(result);\n        }\n        result\n            .then(this._processUri.bind(this))\n            .catch(this._resetState.bind(this));\n    };\n    /**\n     *\n     * @private\n     */\n    Router.prototype._resetState = function () {\n        this._skipCheck = true;\n        this.navigateTo(this._current, this._currentPage.state, true);\n    };\n    /**\n     * Replace current page with new one\n     */\n    Router.prototype._processUri = function () {\n        var fragment = this._getFragment(), found;\n        this._current = fragment;\n        this._pushHistory();\n        found = this._findRoute.call(this);\n        if (!found) {\n            this._page404(fragment);\n        }\n    };\n    /**\n     * Check the URL and execute handler for its route\n     *\n     * @returns {Router}\n     */\n    Router.prototype.check = function () {\n        if (this._skipCheck)\n            return this;\n        // if page has unload cb treat as promise\n        if (this._currentPage && this._currentPage.options && this._currentPage.options.unloadCb) {\n            this._treatAsync();\n        }\n        else {\n            this._processUri();\n        }\n        return this;\n    };\n    /**\n     * Add the URI listener\n     *\n     * @returns {Router}\n     */\n    Router.prototype.addUriListener = function () {\n        if (this.mode === \"history\") {\n            window.onpopstate = this.check.bind(this);\n        }\n        else {\n            window.onhashchange = this.check.bind(this);\n        }\n        return this;\n    };\n    /**\n     * Remove the URI listener\n     *\n     * @returns {Router}\n     */\n    Router.prototype.removeUriListener = function () {\n        window.onpopstate = null;\n        window.onhashchange = null;\n        return this;\n    };\n    /**\n     * Redirect to a page with replace state\n     *\n     * @param {string} path\n     * @param {object} state\n     * @param {boolean} silent\n     *\n     * @returns {Router}\n     */\n    Router.prototype.redirectTo = function (path, state, silent) {\n        path = this._trimSlashes(path) || \"\";\n        this._pageState = state || null;\n        this._skipCheck = !!silent;\n        if (this.mode === \"history\") {\n            history.replaceState(state, null, this.root + this._trimSlashes(path));\n            return this.check();\n        }\n        else {\n            this._historyIdx--;\n            window.location.hash = path;\n        }\n        return this;\n    };\n    /**\n     * Navigate to a page\n     *\n     * @param {string} path\n     * @param {object} state\n     * @param {boolean} silent\n     *\n     * @returns {Router}\n     */\n    Router.prototype.navigateTo = function (path, state, silent) {\n        path = this._trimSlashes(path) || \"\";\n        this._pageState = state || null;\n        this._skipCheck = !!silent;\n        if (this.mode === \"history\") {\n            history.pushState(state, null, this.root + this._trimSlashes(path));\n            return this.check();\n        }\n        else {\n            window.location.hash = path;\n        }\n        return this;\n    };\n    /**\n     * Refresh page with recall route handler\n     * @returns {Router}\n     */\n    Router.prototype.refresh = function () {\n        if (!this._currentPage) {\n            return this;\n        }\n        var path = this._currentPage.uri + \"?\" + this._queryString;\n        return this.navigateTo(path, this._currentPage.state);\n    };\n    /**\n     * Go Back in browser history\n     * Simulate \"Back\" button\n     *\n     * @returns {Router}\n     */\n    Router.prototype.back = function () {\n        if (this.mode === \"history\") {\n            window.history.back();\n            return this;\n        }\n        return this.go(this._historyIdx - 1);\n    };\n    /**\n     * Go Forward in browser history\n     * Simulate \"Forward\" button\n     *\n     * @returns {Router}\n     */\n    Router.prototype.forward = function () {\n        if (this.mode === \"history\") {\n            window.history.forward();\n            return this;\n        }\n        return this.go(this._historyIdx + 1);\n    };\n    /**\n     * Go to a specific history page\n     *\n     * @param {number} count\n     * @returns {Router}\n     */\n    Router.prototype.go = function (count) {\n        if (this.mode === \"history\") {\n            window.history.go(count);\n            return this;\n        }\n        var page = this._historyStack[count];\n        if (!page) {\n            return this;\n        }\n        this._historyIdx = count;\n        this._historyState = \"hold\";\n        return this.navigateTo(page.path, page.state);\n    };\n    return Router;\n})));\n\n\n//# sourceURL=webpack://online-store/./node_modules/vanilla-router/index.js?");

/***/ }),

/***/ "./online-store/src/components/basket/basket.ts":
/*!******************************************************!*\
  !*** ./online-store/src/components/basket/basket.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBasket: () => (/* binding */ renderBasket)\n/* harmony export */ });\n/* harmony import */ var _basket_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.scss */ \"./online-store/src/components/basket/basket.scss\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _renderTotalPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTotalPrice */ \"./online-store/src/components/basket/renderTotalPrice.ts\");\n/* harmony import */ var _renderProductHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProductHeader */ \"./online-store/src/components/basket/renderProductHeader.ts\");\n/* harmony import */ var _renderCardsInBasket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderCardsInBasket */ \"./online-store/src/components/basket/renderCardsInBasket.ts\");\n/* harmony import */ var _handleClickPlusMinusDel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleClickPlusMinusDel */ \"./online-store/src/components/basket/handleClickPlusMinusDel.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ \"./online-store/src/components/types/index.ts\");\n\n\n\n\n\n\n\nvar productCardContainer = document.querySelector('.products__card-container');\nvar summary = document.querySelector('.summary');\nvar productHeader = document.querySelector('.products__header');\nfunction renderBasket() {\n    (0,_renderProductHeader__WEBPACK_IMPORTED_MODULE_3__.renderProductHeader)();\n    (0,_renderCardsInBasket__WEBPACK_IMPORTED_MODULE_4__.renderCardsInBasket)();\n    (0,_renderTotalPrice__WEBPACK_IMPORTED_MODULE_2__.renderTotalPrice)();\n    document.querySelector('.counter').innerHTML = \"\".concat(_index__WEBPACK_IMPORTED_MODULE_1__.itemInBasket.reduce(function (acc, item) { return acc + item.count; }, 0));\n    document.querySelector('.header-total').innerHTML = \"\".concat(_index__WEBPACK_IMPORTED_MODULE_1__.total.totalPrice, \"$\");\n    // if (itemInBasket.length === 0) {\n    //   summary.classList.add('hidden');\n    //   productHeader.classList.add('hidden');\n    // } else {\n    //   summary.classList.remove('hidden');\n    //   productHeader.classList.remove('hidden');\n    // }\n}\n// handle clicking on + - Del\nproductCardContainer.addEventListener('click', function (e) {\n    if (e !== null &&\n        e.target instanceof HTMLElement &&\n        (e.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_6__.basketButton.plus ||\n            e.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_6__.basketButton.minus ||\n            e.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_6__.basketButton.del)) {\n        (0,_handleClickPlusMinusDel__WEBPACK_IMPORTED_MODULE_5__.handleClickPlusMinusDel)(e);\n        renderBasket();\n    }\n});\nproductCardContainer.addEventListener('click', function (e) {\n    if (e !== null &&\n        e.target instanceof HTMLElement &&\n        (e.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_6__.basketButton.increment ||\n            e.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_6__.basketButton.decrement)) {\n        renderBasket();\n    }\n});\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/basket.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/buyForm.ts":
/*!*******************************************************!*\
  !*** ./online-store/src/components/basket/buyForm.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBuyForm: () => (/* binding */ renderBuyForm)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket */ \"./online-store/src/components/basket/basket.ts\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n\n// import { CreateProductCard, productsData } from '../cards/cards';\n\n\nfunction renderBuyForm(itemBuy) {\n    var buyForm = document.querySelector('.buy-form');\n    var shadowWrapper = document.querySelector('.shadow-wrapper');\n    var body = document.querySelector('.body');\n    buyForm.classList.remove('hide');\n    shadowWrapper.style.display = 'flex';\n    body.classList.add('overflow-hidden');\n    buyForm.innerHTML = '';\n    var sngCountriesData = [\n        {\n            countryCode: '375',\n            operatorCodes: ['33', '29', '25', '44'],\n            flag: '🇧🇾',\n            countryName: 'Belarus',\n        },\n        {\n            countryCode: '7',\n            operatorCodes: ['900', '901', '902', '903', '904', '905'],\n            flag: '🇷🇺',\n            countryName: 'Russia',\n        },\n        {\n            countryCode: '380',\n            operatorCodes: ['50', '66', '67', '68', '96', '97', '98'],\n            flag: '🇺🇦',\n            countryName: 'Ukraine',\n        },\n        {\n            countryCode: '992',\n            operatorCodes: ['93', '50', '55'],\n            flag: '🇹🇯',\n            countryName: 'Tajikistan',\n        },\n        {\n            countryCode: '993',\n            operatorCodes: ['61', '62', '63', '64', '65'],\n            flag: '🇹🇲',\n            countryName: 'Turkmenistan',\n        },\n        {\n            countryCode: '996',\n            operatorCodes: ['55', '77', '50', '70'],\n            flag: '🇰🇬',\n            countryName: 'Kyrgyzstan',\n        },\n        {\n            countryCode: '998',\n            operatorCodes: ['90', '91', '93', '94', '95'],\n            flag: '🇺🇿',\n            countryName: 'Uzbekistan',\n        },\n        {\n            countryCode: '374',\n            operatorCodes: ['55', '77', '91', '93'],\n            flag: '🇦🇲',\n            countryName: 'Armenia',\n        },\n        {\n            countryCode: '995',\n            operatorCodes: ['32', '51', '55', '59', '77'],\n            flag: '🇬🇪',\n            countryName: 'Georgia',\n        },\n        {\n            countryCode: '7',\n            operatorCodes: ['800'],\n            flag: '🇰🇿',\n            countryName: 'Kazakhstan',\n        },\n    ];\n    var countryCodeSelect = \"<select class=\\\"js-select-country-code\\\">\\n    \".concat(sngCountriesData\n        .map(function (elem) {\n        return \"<option value=\\\"\".concat(elem.countryCode, \"\\\">\").concat(elem.flag, \"+\").concat(elem.countryCode, \"</option>\");\n    })\n        .join(''), \"\\n    </select>\\n    <select class=\\\"js-select-operator-code\\\"></select>\\n    \");\n    var countrySelect = \"<select class=\\\"js-select-country\\\">\\n    \".concat(sngCountriesData\n        .map(function (elem) {\n        return \"<option value=\\\"\".concat(elem.countryName, \"\\\">\").concat(elem.flag).concat(elem.countryName, \"</option>\");\n    })\n        .join(''), \"\\n    \");\n    var buyFormHTML = \"\\n        <div class=\\\"js-form\\\">\\n            <div class=\\\"row\\\">\\n                <div class=\\\"col\\\">\\n                    <h3 class=\\\"title\\\">\\u0421ommodity details</h3>\\n                    <div class=\\\"inputBox \\u0441ommodity-container\\\">\\n                      <p class=\\\"cost\\\"><b>Cost:</b><span>\".concat(itemBuy.price, \"$</span></p>\\n                      <p class=\\\"commodity\\\"><b>Products:</b> <span>\").concat(itemBuy.item, \" (\").concat(itemBuy.countProducts, \")</span></p>\\n                    </div>\\n                    <h3 class=\\\"title\\\">Personal details</h3>\\n                    <div class=\\\"inputBox\\\">\\n                        <p>Full name:</p>\\n                        <input class=\\\"input js-input js-input-name\\\" name=\\\"name\\\"\\n                        type=\\\"text\\\" placeholder=\\\"John Jonson\\\"\\n                        required\\n                        pattern=\\\"[a-zA-Z\\u0430-\\u044F\\u0410-\\u044F]{3,}(\\\\s[a-zA-Z\\u0430-\\u044F\\u0410-\\u044F]{3,})+\\\"\\n                        title=\\\"\\u0418\\u043C\\u044F \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u0442\\u044C 2 \\u0441\\u043B\\u043E\\u0432\\u0430 \\u0434\\u043B\\u0438\\u043D\\u0435\\u0435 3 \\u0431\\u0443\\u043A\\u0432\\\"\\n                        >\\n                    </div>\\n                    <div class=\\\"inputBox\\\">\\n                        <p>Email:</p>\\n                        <input class=\\\"input js-input js-input-email\\\" name=\\\"email\\\"\\n                        type=\\\"email\\\" placeholder=\\\"example@example.com\\\"\\n                        required>\\n                    </div>\\n                    <div class=\\\"inputBox\\\">\\n                        <p>Phone:</p>\\n                        <div class=\\\"js-input-phone-container\\\">\\n                          \").concat(countryCodeSelect, \"\\n                          <input class=\\\"input js-input js-input-phone\\\" id=\\\"js-input-phone\\\" name=\\\"phone\\\"\\n                          type=\\\"tel\\\" placeholder=\\\"375 19 03\\\"\\n                          required\\n                          pattern=\\\"[0-9]{7}\\\"\\n                          title=\\\"7 digits\\\"\\n                          maxlength=\\\"7\\\">\\n                        </div>\\n                    </div>\\n                    <div class=\\\"inputBox\\\">\\n                        <p>Address:</p>\\n                        <div class=\\\"js-input-adress-container\\\">\\n                        \").concat(countrySelect, \"\\n                          <input class=\\\"input js-input js-input-adress-city adress-city\\\" name=\\\"adress-city\\\"\\n                          type=\\\"text\\\" placeholder=\\\"Minsk\\\"\\n                          required\\n                          pattern=\\\"[a-zA-Z\\u0430-\\u044F\\u0410-\\u044F]{2,}\\\"\\n                          title=\\\"City\\\"\\n                          >\\n                          <input class=\\\"input js-input js-input-adress adress-street\\\" name=\\\"adress-street\\\"\\n                          type=\\\"text\\\" placeholder=\\\"Pinskay 33\\\"\\n                          required\\n                          pattern=\\\"[a-zA-Z\\u0430-\\u044F\\u0410-\\u044F]{2,}(\\\\s[0-9]{1,})+\\\"\\n                          title=\\\"Street home\\\"\\n                          >\\n                        </div>\\n\\n                    </div>\\n                </div>\\n                    <div class=\\\"col\\\">\\n                    <h3 class=\\\"title\\\">payment</h3>\\n\\n                    <div class=\\\"preview-card\\\">\\n                      <div class=\\\"card\\\">\\n                        <div class=\\\"img-container\\\">\\n                          <div class=\\\"chip\\\"></div>\\n                          <div class=\\\"img-card\\\"></div>\\n                        </div>\\n                        <div class=\\\"info\\\">\\n\\n                          <div class=\\\"number-container\\\">\\n                            <p>Card Number</p>\\n                            <p class=\\\"number\\\">0000 - 0000 - 0000 - 0000</p>\\n                          </div>\\n\\n                          <div class=\\\"name-container\\\">\\n                            <p>Name</p>\\n                            <p class=\\\"name\\\">John Jonson</p>\\n                          </div>\\n\\n                          <div class=\\\"date-container\\\">\\n                            <p>Valid Thru</p>\\n                            <p class=\\\"date\\\">00/00</p>\\n                          </div>\\n\\n                        </div>\\n                      </div>\\n                      <div class=\\\"back-card\\\">\\n                        <div class=\\\"cvv-container\\\">\\n                          <p>CVV</p>\\n                          <p class=\\\"cvv\\\">000</p>\\n                        </div>\\n                      </div>\\n                    </div>\\n\\n                    <div class=\\\"inputBox\\\">\\n                        <p>Card number:</p>\\n                        <input class=\\\"input js-input js-input-card-number\\\" name=\\\"card-number\\\"\\n                        type=\\\"text\\\" placeholder=\\\"0000000000000000\\\"\\n                        required\\n                        pattern=\\\"[0-9]{16}\\\"\\n                        maxlength=\\\"16\\\"\\n                        title=\\\"16 \\u0446\\u0438\\u0444\\u0440\\\">\\n                    </div>\\n                    <div class=\\\"flex\\\">\\n                        <div class=\\\"inputBox\\\">\\n                            <p>Valid thru:</p>\\n                            <input class=\\\"input js-input js-input-card-term\\\" name=\\\"card-term\\\"\\n                            type=\\\"text\\\" placeholder=\\\"mm/yy\\\"\\n                            required\\n                            maxlength=\\\"5\\\"\\n                            title=\\\"Validity period in mm / yy format\\\"\\n                            >\\n                        </div>\\n                        <div class=\\\"inputBox\\\">\\n                            <p>CVV:</p>\\n                            <input class=\\\"input js-input js-input-card-cvv\\\" name=\\\"card-cvv\\\"\\n                            type=\\\"text\\\" placeholder=\\\"123\\\"\\n                            required\\n                            pattern=\\\"[0-9]{3}\\\"\\n                            maxlength=\\\"3\\\"\\n                            title=\\\"3 digits\\\">\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"buy-btn\\\">BUY</div>\\n        </div>\\n  \");\n    buyForm.insertAdjacentHTML('afterbegin', buyFormHTML);\n    var selectCountryCode = document.querySelector('.js-select-country-code');\n    var selectOperatorCode = document.querySelector('.js-select-operator-code');\n    function changeOperatorCode() {\n        selectOperatorCode.innerHTML = sngCountriesData\n            .map(function (elem) {\n            if (elem.countryCode === selectCountryCode.value) {\n                return elem.operatorCodes.map(function (elem) { return \"<option value=\\\"\".concat(elem, \"\\\">\").concat(elem, \"</option>\"); });\n            }\n        })\n            .join('');\n    }\n    selectCountryCode.addEventListener('change', changeOperatorCode);\n    changeOperatorCode();\n    // Outside buyForm-close\n    shadowWrapper.addEventListener('click', function (e) {\n        if (e.target.classList.contains('shadow-wrapper'))\n            shadowWrapperCloser();\n    });\n    function shadowWrapperCloser() {\n        // shadowWrapper.classList.add('hide');\n        shadowWrapper.style.display = 'none';\n        buyForm.classList.add('hide');\n        body.classList.remove('overflow-hidden');\n    }\n    // Form card-term validation\n    var inputCardNumber = document.querySelector('.js-input-card-number');\n    var inputCardName = document.querySelector('.js-input-name');\n    var inputCardTerm = document.querySelector('.js-input-card-term');\n    var inputCardCvv = document.querySelector('.js-input-card-cvv');\n    var inputPhone = document.querySelector('.js-input-phone');\n    var buyBtn = document.querySelector('.buy-btn');\n    var imgCard = document.querySelector('.img-card');\n    function validCardNumber(e) {\n        inputCardNumber.value = inputCardNumber.value.replace(/[^\\d]/g, '');\n        var value = e.target.value;\n        var cardNumber = document.querySelector('.number-container .number');\n        if (!!Number(value) && e.target.value.length !== 0) {\n            if (+value[0] === 4) {\n                imgCard.classList.add('img-visa');\n            }\n            else if (+value[0] === 5) {\n                imgCard.classList.add('img-master');\n            }\n            else if (+value[0] === 6) {\n                imgCard.classList.add('img-union');\n            }\n            else {\n                imgCard.classList.remove('img-visa');\n                imgCard.classList.remove('img-master');\n                imgCard.classList.remove('img-union');\n            }\n            value = value\n                .split('')\n                .map(function (elem, i) { return (i++ !== 0 && i++ % 4 === 0 ? \"\".concat(elem, \" - \") : elem); })\n                .join('')\n                .slice(0, 25);\n            cardNumber.innerHTML = value;\n            if (cardNumber.innerHTML.length === 25) {\n                cardNumber.style.color = 'black';\n            }\n            else {\n                cardNumber.style.color = '#C2C2C2';\n            }\n        }\n        if (value.length === 0) {\n            value = '';\n            cardNumber.innerHTML = '0000 - 0000 - 0000 - 0000';\n        }\n    }\n    function validCardName(e) {\n        var value = e.target.value;\n        var cardCvv = document.querySelector('.name-container .name');\n        if (e.target.value.length !== 0) {\n            if (value.length >= 16) {\n                cardCvv.innerHTML = \"\".concat(value.split(' ')[0][0], \" \").concat(value.split(' ')[1]).slice(0, 16);\n            }\n            else {\n                cardCvv.innerHTML = value;\n            }\n            if (cardCvv.innerHTML.split(' ').length === 2) {\n                cardCvv.style.color = 'black';\n            }\n            else {\n                cardCvv.style.color = '#C2C2C2';\n            }\n        }\n        if (value.length === 0) {\n            value = '';\n            cardCvv.innerHTML = 'John Jonson';\n        }\n    }\n    function validCardTerm(e) {\n        inputCardTerm.value = inputCardTerm.value\n            .replace(/[^\\d]/g, '')\n            .replace(/^(\\d{2})(\\d)/, '$1/$2');\n        var value = e.target.value;\n        var cardDate = document.querySelector('.date-container .date');\n        value = value.split('/');\n        if (e.target.value.length !== 0) {\n            if (value[0] && !!Number(value[0]) && Number(value[0]) <= 12) {\n                cardDate.innerHTML = value[0].length === 2 ? value[0] + '/' : value[0];\n                if (value[1] &&\n                    !!Number(value[1]) &&\n                    Number(value[1]) > Number(\"\".concat(new Date().getFullYear()).slice(2))) {\n                    cardDate.innerHTML = value.join('/');\n                }\n                if (cardDate.innerHTML.length === 5) {\n                    cardDate.style.color = 'black';\n                }\n                else {\n                    cardDate.style.color = '#C2C2C2';\n                }\n            }\n        }\n        if (e.target.value.length === 0) {\n            value = '';\n            cardDate.innerHTML = '00/00';\n        }\n    }\n    function validCardCvv(e) {\n        inputCardCvv.value = inputCardCvv.value.replace(/[^\\d]/g, '');\n        var value = e.target.value;\n        var cardCvv = document.querySelector('.cvv-container .cvv');\n        if (!!Number(value) && e.target.value.length !== 0) {\n            cardCvv.innerHTML = value;\n            if (cardCvv.innerHTML.length === 3) {\n                cardCvv.style.color = 'white';\n            }\n            else {\n                cardCvv.style.color = '#C2C2C2';\n            }\n        }\n        if (value.length === 0) {\n            value = '';\n            cardCvv.innerHTML = '000';\n        }\n    }\n    function validPhone() {\n        inputPhone.value = inputPhone.value.replace(/[^\\d]/g, '');\n    }\n    inputCardNumber.addEventListener('input', function (e) {\n        validCardNumber(e);\n    });\n    inputCardName.addEventListener('input', function (e) {\n        validCardName(e);\n    });\n    inputCardTerm.addEventListener('input', function (e) {\n        validCardTerm(e);\n    });\n    inputCardCvv.addEventListener('input', function (e) {\n        validCardCvv(e);\n    });\n    inputPhone.addEventListener('input', validPhone);\n    buyBtn.addEventListener('click', function (e) {\n        if (e.target.classList.contains('active')) {\n            buyForm.innerHTML = \"<div class='order-accepted-container'>\\n        <p class=\\\"order-accepted\\\">Your order has been accepted!</p>\\n        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\\n      </div>\";\n            // const orderAccepted = document.querySelector(\n            //   '.order-accepted',\n            // ) as HTMLElement;\n            shadowWrapper.removeEventListener('click', shadowWrapperCloser);\n            if (itemBuy.item === 'All Basket') {\n                // itemInBasket.length = 0;\n                _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.splice(0, _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.length);\n                (0,_basket__WEBPACK_IMPORTED_MODULE_1__.renderBasket)();\n                (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.addLocalStorageBasket)();\n            }\n            setTimeout(function () {\n                // window.location.replace('/#');\n                window.location.hash = '#';\n                shadowWrapper.style.display = 'none';\n                body.classList.remove('overflow-hidden');\n            }, 2000);\n        }\n    });\n    var allInputForm = document.querySelectorAll('.js-form input');\n    var selectPhone = document.querySelectorAll('.js-input-phone-container select');\n    var selectAddress = document.querySelector('.js-input-adress-container select');\n    allInputForm.forEach(function (item) {\n        item.addEventListener('change', function () {\n            var validForm = true;\n            allInputForm.forEach(function (elem) {\n                if (elem.classList.contains('js-input-phone') && elem.validity.valid) {\n                    selectPhone.forEach(function (elem) { return elem.classList.add('active'); });\n                    // selectPhone[0].classList.add('active');\n                    // selectPhone[1].classList.add('active');\n                }\n                else if (elem.classList.contains('js-input-phone') &&\n                    !elem.validity.valid) {\n                    selectPhone.forEach(function (elem) { return elem.classList.remove('active'); });\n                    // selectPhone[0].classList.remove('active');\n                    // selectPhone[1].classList.remove('active');\n                }\n                if (elem.classList.contains('adress-street') &&\n                    elem.validity.valid &&\n                    allInputForm[3].validity.valid) {\n                    selectAddress.classList.add('active');\n                }\n                else if (elem.classList.contains('adress-street') &&\n                    (!elem.validity.valid || !allInputForm[3].validity.valid)) {\n                    selectAddress.classList.remove('active');\n                }\n                elem.validity.valid ? true : (validForm = false);\n            });\n            if (validForm)\n                buyBtn.classList.add('active');\n            else\n                buyBtn.classList.remove('active');\n        });\n    });\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/buyForm.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/handleClickPlusMinusDel.ts":
/*!***********************************************************************!*\
  !*** ./online-store/src/components/basket/handleClickPlusMinusDel.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleClickPlusMinusDel: () => (/* binding */ handleClickPlusMinusDel)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./online-store/src/components/types/index.ts\");\n\n\nfunction handleClickPlusMinusDel(event) {\n    if (event !== null &&\n        event.target instanceof HTMLElement &&\n        (event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.plus ||\n            event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.minus ||\n            event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.del)) {\n        var itemCard = event.target.closest('.products__item-card'); // get closest .products__item-card from event.target\n        var itemID_1 = itemCard.getAttribute('data-identifier');\n        _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.forEach(function (el) {\n            if (itemID_1 !== null && el.id === +itemID_1) {\n                // compare itemInBasket.id and DOM element data-identifier\n                if (event !== null &&\n                    event.target instanceof HTMLElement &&\n                    event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.plus) {\n                    if (el.count < el.stock) {\n                        el.count = ++el.count;\n                    }\n                }\n                if (event !== null &&\n                    event.target instanceof HTMLElement &&\n                    event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.minus) {\n                    if (el.count === 1) {\n                        delCardBasket(el);\n                    }\n                    if (el.count > 1) {\n                        el.count = --el.count;\n                    }\n                }\n                if (event !== null &&\n                    event.target instanceof HTMLElement &&\n                    event.target.dataset.action === _types__WEBPACK_IMPORTED_MODULE_1__.basketButton.del) {\n                    delCardBasket(el);\n                }\n            }\n        });\n    }\n}\nfunction delCardBasket(product) {\n    // del product from itemInBasket array\n    _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.forEach(function (el, index) {\n        if (el.id === product.id) {\n            _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.splice(index, 1);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/handleClickPlusMinusDel.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/localStorage.ts":
/*!************************************************************!*\
  !*** ./online-store/src/components/basket/localStorage.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLocalStorageBasket: () => (/* binding */ addLocalStorageBasket),\n/* harmony export */   addLocalStorageLimitItems: () => (/* binding */ addLocalStorageLimitItems),\n/* harmony export */   addLocalStoragePage: () => (/* binding */ addLocalStoragePage),\n/* harmony export */   getLocalStorageBasket: () => (/* binding */ getLocalStorageBasket),\n/* harmony export */   getLocalStorageLimitItems: () => (/* binding */ getLocalStorageLimitItems),\n/* harmony export */   getLocalStoragePage: () => (/* binding */ getLocalStoragePage),\n/* harmony export */   localStorageUrl: () => (/* binding */ localStorageUrl)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _renderCardsInBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCardsInBasket */ \"./online-store/src/components/basket/renderCardsInBasket.ts\");\n\n\nfunction addLocalStorageBasket() {\n    localStorage.setItem('storage', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket)); // serialize and write to the localstorage\n}\nfunction getLocalStorageBasket() {\n    if (localStorage.storage) {\n        return JSON.parse(localStorage.storage);\n    }\n    else {\n        console.error('Not found Array Basket');\n    }\n}\nfunction addLocalStoragePage() {\n    localStorage.setItem('page', JSON.stringify(_renderCardsInBasket__WEBPACK_IMPORTED_MODULE_1__.currentPage)); // serialize and write to the localstorage\n}\nfunction getLocalStoragePage() {\n    var page = localStorage.getItem('page');\n    var parsedPage = +JSON.parse(page !== null && page !== void 0 ? page : '1');\n    if (!parsedPage) {\n        throw new Error('Invalid page number');\n    }\n    return parsedPage; // we take it out of the locale and parse it back\n}\nfunction addLocalStorageLimitItems() {\n    localStorage.setItem('limit', JSON.stringify(_renderCardsInBasket__WEBPACK_IMPORTED_MODULE_1__.limitItemsBasket)); // serialize and write to the localstorage\n}\nfunction getLocalStorageLimitItems() {\n    var limit = localStorage.getItem('limit');\n    var parsedLimit = +JSON.parse(limit !== null && limit !== void 0 ? limit : '4');\n    if (!parsedLimit) {\n        throw new Error('Invalid limit number');\n    }\n    return parsedLimit; // we take it out of the locale and parse it back\n}\nfunction localStorageUrl(trigger) {\n    if (trigger === 'set') {\n        localStorage.setItem('url', JSON.stringify(window.location.href.toString()));\n    }\n    if (trigger === 'get') {\n        var url = '';\n        if (localStorage.url) {\n            url = JSON.parse(localStorage.url);\n        }\n        else {\n            url = window.location.href.toString();\n        }\n        return url;\n    }\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/localStorage.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/renderCardsInBasket.ts":
/*!*******************************************************************!*\
  !*** ./online-store/src/components/basket/renderCardsInBasket.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentPage: () => (/* binding */ currentPage),\n/* harmony export */   limitItemsBasket: () => (/* binding */ limitItemsBasket),\n/* harmony export */   renderCardsInBasket: () => (/* binding */ renderCardsInBasket)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n\n\nvar productCardContainer = document.querySelector('.products__card-container');\nvar productHeader = document.querySelector('.products__header');\nvar currentPage = 1;\nvar limitItemsBasket = 4;\nfunction renderCardsInBasket() {\n    var limitEl = document.querySelector('.limit__count');\n    var summaryContainer = document.querySelector('.summary');\n    var summary = document.querySelector('.summary-container');\n    var postData = _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket;\n    limitItemsBasket = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getLocalStorageLimitItems)();\n    currentPage = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getLocalStoragePage)();\n    if (postData.length === 0) {\n        productCardContainer.innerHTML = \"<div class=\\\"empty\\\">Basket is empty<br>(\\u0CA5\\uFE4F\\u0CA5)</div>\";\n        summaryContainer.classList.add('inactive');\n        document.querySelector('.summary__products').innerHTML =\n            '<b>Products:</b> 0';\n        document.querySelector('.summary__total').innerHTML =\n            '<b>Total:</b> 0';\n    }\n    else {\n        summaryContainer.classList.remove('inactive');\n        limitEl.value = \"\".concat(limitItemsBasket);\n        displayList(postData, limitItemsBasket, currentPage);\n    }\n    inactiveBtn();\n    var productList = document.querySelector('.products__card-container');\n    if (productList.children.length <= 3) {\n        summary.classList.add('active');\n    }\n    else {\n        summary.classList.remove('active');\n    }\n    window.addEventListener('resize', function () {\n        if (window.innerWidth > 768)\n            summary.classList.remove('active');\n        if (productList.children.length <= 3) {\n            summary.classList.add('active');\n        }\n        else {\n            summary.classList.remove('active');\n        }\n    });\n    productList.addEventListener('scroll', function () {\n        if (productList.scrollHeight <=\n            productList.scrollTop +\n                productList.clientHeight +\n                productList.children[productList.children.length - 1].clientHeight) {\n            summary.classList.add('active');\n        }\n        else if (!(productList.scrollHeight <=\n            productList.scrollTop +\n                productList.clientHeight +\n                productList.children[productList.children.length - 1].clientHeight) &&\n            productList.children.length > 3) {\n            summary.classList.remove('active');\n        }\n    });\n}\n// productHeader.addEventListener('click', (e: Event) => {\n//   const limitCountText = document.querySelector(\n//     '.limit__count',\n//   ) as HTMLInputElement;\n//   // const pageCountText = document.querySelector(\n//   //   '.page__count',\n//   // ) as HTMLInputElement;\n//   if ((e.target as HTMLElement).closest('.products__items-limit')) {\n//     let limitItemsBasket = +limitCountText.value;\n//     if (\n//       (e.target as HTMLElement).closest('.limit-minus') &&\n//       limitItemsBasket > 2\n//     ) {\n//       // limitCountText.value += 1;\n//       limitItemsBasket--;\n//       // renderCardsInBasket();\n//     } else if (\n//       (e.target as HTMLElement).closest('.limit-plus') &&\n//       limitItemsBasket < 10\n//     ) {\n//       // limitCountText.value = `${+limitCountText.value + 1}`;\n//       limitItemsBasket++;\n//       // renderCardsInBasket();\n//     }\n//     limitCountText.value = `${limitItemsBasket}`;\n//     // limitCountText.innerHTML = `${limitItemsBasket}`;\n//   }\n//   // else if ((e.target as HTMLElement).closest('.products__page-count')) {\n//   //   if ((e.target as HTMLElement).closest('.page-minus') && currentPage > 1) {\n//   //     currentPage--;\n//   //   } else if (\n//   //     (e.target as HTMLElement).closest('.page-plus') &&\n//   //     currentPage < Math.ceil(itemInBasket.length / limitItemsBasket)\n//   //   ) {\n//   //     currentPage++;\n//   //   }\n//   //   pageCountText.value = `${currentPage}`;\n//   //   // pageCountText.innerHTML = `${currentPage}`;\n//   // }\n// });\nproductHeader.addEventListener('click', function (e) {\n    managementHeader(e);\n});\nproductHeader.addEventListener('change', function (e) {\n    if (e !== null &&\n        e.target instanceof HTMLElement &&\n        e.target.classList.contains('products__limit'))\n        renderCardsInBasket();\n});\nfunction managementHeader(event) {\n    var limitEl = document.querySelector('.limit__count');\n    var PageCounter = document.querySelector('.page__count');\n    if (event.target.closest('.products__items-limit')) {\n        if (event.target.closest('.limit-minus') &&\n            limitItemsBasket > 2) {\n            limitItemsBasket--;\n        }\n        else if (event.target.closest('.limit-plus') &&\n            limitItemsBasket < 10) {\n            limitItemsBasket++;\n        }\n        limitEl.value = \"\".concat(limitItemsBasket);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.addLocalStorageLimitItems)();\n        renderCardsInBasket();\n    }\n    if (event.target.closest('.products__page-count')) {\n        if (event.target.closest('.page-plus') &&\n            currentPage < Math.ceil(_index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.length / limitItemsBasket)) {\n            currentPage++;\n        }\n        else if (event.target.closest('.page-minus') &&\n            currentPage > 1) {\n            currentPage--;\n        }\n        PageCounter.value = \"\".concat(currentPage);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.addLocalStoragePage)();\n        // displayList(postData, limitItemsBasket, currentPage);\n        renderCardsInBasket();\n    }\n    inactiveBtn();\n}\nfunction inactiveBtn() {\n    if (limitItemsBasket === 2)\n        document.querySelector('.limit-minus').classList.add('inactive');\n    else\n        document.querySelector('.limit-minus').classList.remove('inactive');\n    if (limitItemsBasket === 10)\n        document.querySelector('.limit-plus').classList.add('inactive');\n    else\n        document.querySelector('.limit-plus').classList.remove('inactive');\n    if (currentPage === 1)\n        document.querySelector('.page-minus').classList.add('inactive');\n    else\n        document.querySelector('.page-minus').classList.remove('inactive');\n    if (currentPage === Math.ceil(_index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.length / limitItemsBasket))\n        document.querySelector('.page-plus').classList.add('inactive');\n    else\n        document.querySelector('.page-plus').classList.remove('inactive');\n}\nfunction displayList(arrData, rowPerPage, page) {\n    var PageCounter = document.querySelector('.page__count');\n    // PageCounter.innerText = `${currentPage}`;\n    PageCounter.value = \"\".concat(currentPage);\n    productCardContainer.innerHTML = '';\n    page--;\n    var start = rowPerPage * page;\n    var end = start + rowPerPage;\n    var paginatedData = arrData.slice(start, end);\n    //decriment pagination on 1 if no more products and click del or -\n    if (paginatedData.length === 0) {\n        currentPage = currentPage - 1;\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.addLocalStoragePage)();\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.addLocalStorageLimitItems)();\n        renderCardsInBasket();\n    }\n    paginatedData.forEach(function (el, index) {\n        var productCardHTML = \"\\n    <div class=\\\"products__item-card\\\" data-identifier=\\\"\".concat(el.id, \"\\\">\\n      <div class=\\\"products__position\\\"> \").concat(page * rowPerPage + index + 1, \" </div>\\n      <div class=\\\"item-card__info\\\">\\n        <div class=\\\"product-img\\\"\\n          style=\\\"background-image: url('\").concat(el.thumbnail, \"');\\\"></div>\\n        <div class=\\\"item-card__detail\\\">\\n          <div class=\\\"item-card__title\\\">\\n            <h3>\").concat(el.title, \"</h3>\\n          </div>\\n          <div class=\\\"item-card__description\\\">\").concat(el.description, \"\\n          </div>\\n          <div class=\\\"item-card__other\\\">\\n            <p><b>Rating:</b> \").concat(el.rating, \"</p>\\n            <p><b>Discount:</b> \").concat(el.discountPercentage, \"%</p>\\n            <p class=\\\"stock-control\\\"><b>Stock:</b> \").concat(el.stock, \"</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"number-control\\\">\\n        <p class=\\\"amount-control\\\"><b>Price:</b> \").concat(el.price, \"$</p>\\n        <div class=\\\"incDec-control\\\">\\n          <button class=\\\"minus\\\" data-action=\\\"minus\\\">-</button>\\n          <p class=\\\"item__count\\\" data-counterItem>\").concat(el.count, \"</p>\\n          <button class=\\\"plus\\\" data-action=\\\"plus\\\">+</button>\\n        </div>\\n        <div class=\\\"product-btn\\\">\\n          <div class=\\\"btn-del\\\" data-action=\\\"del\\\">Delete</div>\\n          <div class=\\\"btn-det\\\" data-action=\\\"det\\\">Details</div>\\n        </div>\\n      </div>\\n    </div>\");\n        productCardContainer.insertAdjacentHTML('beforeend', productCardHTML);\n    });\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/renderCardsInBasket.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/renderProductHeader.ts":
/*!*******************************************************************!*\
  !*** ./online-store/src/components/basket/renderProductHeader.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProductHeader: () => (/* binding */ renderProductHeader)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n\nvar productHeader = document.querySelector('.products__header');\nfunction renderProductHeader() {\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.length === 0) {\n        productHeader.innerHTML = '';\n    }\n    productHeader.innerHTML = '';\n    // <input class=\"products__limit\" type=\"number\" id=\"count-items\" value=\"4\" min=\"2\" max=\"10\" data-limit>\n    var productHeaderHTML = \"\\n  <p class=\\\"products__items\\\"><b>Items:</b><span>\".concat(_index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.length, \"</span></p>\\n  <div class=\\\"products__items-limit\\\">\\n    <b>Limit:</b>\\n    <div class=\\\"number\\\">\\n      <input type=\\\"number\\\" class=\\\"limit__count\\\" id=\\\"count-items\\\" value=\\\"4\\\" min=\\\"2\\\" max=\\\"10\\\" data-limit readonly >\\n      <div class=\\\"plus-minus-btn-container\\\">\\n        <div class=\\\"limit-minus number-minus\\\" data-action=\\\"decrement\\\">-</div>\\n        <div class=\\\"limit-plus number-plus\\\" data-action=\\\"increment\\\">+</div>\\n      </div>\\n    </div>\\n  </div>\\n\\n  <div class=\\\"products__page-count\\\">\\n    <b>Page:</b>\\n    <div class=\\\"number\\\">\\n      <input type=\\\"number\\\" class=\\\"page__count\\\" id=\\\"count-items\\\" value=\\\"1\\\" min=\\\"1\\\" data-limit readonly >\\n      <div class=\\\"plus-minus-btn-container\\\">\\n        <div class=\\\"page-minus number-minus\\\" data-action=\\\"decrement\\\">-</div>\\n        <div class=\\\"page-plus number-plus\\\" data-action=\\\"increment\\\">+</div>\\n      </div>\\n    </div>\\n  </div>\");\n    // <p class=\"limit__count\" id = \"count-items\" data - value=\"4\" > 4 < /p>\n    // <p class=\"page__count\" id=\"count-items\" data-value=\"1\">1</p>\n    // <input type=\"number\" class=\"page__count\" id = \"count-items\" value = \"1\" min = \"1\" data - limit readonly >\n    // <button class=\"\" data-action=\"minusPage\">-</button>\n    //     <span  data-counterPage>1</span>\n    //     <button class=\"\" data-action=\"plusPage\">+</button>\n    productHeader.insertAdjacentHTML('afterbegin', productHeaderHTML);\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/renderProductHeader.ts?");

/***/ }),

/***/ "./online-store/src/components/basket/renderTotalPrice.ts":
/*!****************************************************************!*\
  !*** ./online-store/src/components/basket/renderTotalPrice.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTotalPrice: () => (/* binding */ renderTotalPrice)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ \"./online-store/src/index.ts\");\n/* harmony import */ var _buyForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyForm */ \"./online-store/src/components/basket/buyForm.ts\");\n\n\nvar promoCodeArr = [\n    { text: 'hell', discount: 10 },\n    { text: 'store', discount: 10 },\n    { text: 'new', discount: 10 },\n];\nvar activeCode = [];\nfunction renderTotalPrice() {\n    var priceTotal = 0;\n    var priceDiscountTotal = 0;\n    var totalCountEl = 0;\n    var promoCodeBtn = function (promoCode, active) { return \"\\n  <div class=\\\"promo-code-item \".concat(active ? 'active' : '', \"\\\" data-code=\\\"\").concat(promoCode.text, \"\\\">\\n    <p><b>\").concat(promoCode.text, \"</b> = \").concat(promoCode.discount, \"%</p>\\n    <div class=\\\"wrapper-btn\\\">\\n      <div class=\\\"change-btn\\\" data-action=\\\"\").concat(active ? 'drop' : 'add', \"\\\">\").concat(active ? 'Drop' : 'Add', \"</div>\\n    </div>\\n  </div>\\n  \"); };\n    var summaryInput = document.querySelector('.summary__input');\n    var summaryExampleText = document.querySelector('.summary__example-text');\n    var summaryTotal = document.querySelector('.summary__total');\n    var summaryProducts = document.querySelector('.summary__products');\n    var applyCodesItems = document.querySelector('.apply-code__items');\n    // const applyCodesContainer = document.querySelector(\n    //   '.apply-code-container',\n    // ) as HTMLElement;\n    var summaryDiscount = document.querySelector('.summary__discount');\n    summaryInput.setAttribute('placeholder', 'Code: ' + promoCodeArr.map(function (elem) { return \"\".concat(elem.text); }).join(', ') + '...');\n    summaryExampleText.innerHTML =\n        '<b>Example code:</b><br>' +\n            promoCodeArr.map(function (elem) { return \"\".concat(elem.text); }).join(', ') +\n            '...';\n    // (\n    //   document.querySelector('.header-total') as HTMLElement\n    // ).innerHTML = `${priceTotal}$`;\n    _index__WEBPACK_IMPORTED_MODULE_0__.itemInBasket.forEach(function (purchase) {\n        priceTotal += purchase.count * purchase.price;\n        totalCountEl += purchase.count;\n        summaryProducts.innerHTML = \"<b>Products:</b> \".concat(totalCountEl);\n        if (activeCode.length !== 0) {\n            priceDiscountTotal = Math.round((priceTotal / 100) *\n                (100 - activeCode.reduce(function (a, b) { return a + b.discount; }, 0)));\n            summaryTotal.innerHTML = \"<b>Old total:</b> <span>\".concat(priceTotal, \"$</span>\");\n            summaryDiscount.innerHTML = \"<b>New total:</b> <span>\".concat(priceDiscountTotal, \"$</span>\");\n        }\n        else {\n            summaryTotal.innerHTML = \"<b>Total:</b> <span>\".concat(priceTotal, \"$</span>\");\n            summaryTotal.classList.remove('active');\n        }\n    });\n    summaryInput.addEventListener('input', function (e) {\n        findDiscount(e.target.value);\n    });\n    applyCodesItems.addEventListener('click', function (e) {\n        addDiscount(e.target);\n    });\n    function addDiscount(element) {\n        var _a, _b;\n        if (element.closest('.change-btn')) {\n            if (element.closest('.change-btn').dataset.action == 'add') {\n                var code_1 = promoCodeArr.find(function (elem) {\n                    return elem.text ===\n                        element.closest('.promo-code-item').dataset.code;\n                });\n                // if (code\n                // && !activeCode.find((elem) => elem.text === code!.text)\n                // ) {\n                (_a = element.closest('.promo-code-item')) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n                // element.closest('.change-btn')!.innerHTML = 'Drop';\n                // element.closest('.change-btn')?.classList.replace('add', 'drop');\n                if (!activeCode.find(function (elem) { return elem.text === code_1.text; }))\n                    activeCode.push(code_1);\n                summaryDiscount.classList.remove('hide');\n                summaryTotal.classList.add('active');\n                summaryTotal.innerHTML = \"<b>Old total:</b> <span>\".concat(priceTotal, \"$</span>\");\n                priceDiscountTotal = Math.round((priceTotal / 100) *\n                    (100 - activeCode.reduce(function (a, b) { return a + b.discount; }, 0)));\n                summaryDiscount.innerHTML = \"<b>New total:</b> <span>\".concat(priceDiscountTotal, \"$</span>\");\n                summaryInput.value = '';\n                // (element.closest('.change-btn') as HTMLElement)!.dataset.action =\n                //   (element.closest('.change-btn') as HTMLElement)!.dataset.action ===\n                //   'add'\n                //     ? 'drop'\n                //     : 'add';\n                // }\n                applyCodesItems.innerHTML =\n                    activeCode.length !== 0\n                        ? activeCode.map(function (elem) { return promoCodeBtn(elem, true); }).join('')\n                        : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';\n            }\n            else if (element.closest('.change-btn').dataset.action ==\n                'drop') {\n                (_b = element.closest('.promo-code-item')) === null || _b === void 0 ? void 0 : _b.classList.remove('active');\n                activeCode = activeCode.filter(function (elem) {\n                    return elem.text !==\n                        element.closest('.promo-code-item').dataset.code;\n                });\n                applyCodesItems.innerHTML =\n                    activeCode.length !== 0\n                        ? activeCode.map(function (elem) { return promoCodeBtn(elem, true); }).join('')\n                        : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';\n                activeCode.length !== 0\n                    ? ((priceDiscountTotal = Math.round((priceTotal / 100) *\n                        (100 -\n                            activeCode.reduce(function (acc, item) { return acc + item.discount; }, 0)))),\n                        (summaryDiscount.innerHTML = \"<b>New total:</b> <span>\".concat(priceDiscountTotal, \"$</span>\")))\n                    : (summaryDiscount.classList.add('hide'),\n                        (summaryTotal.innerHTML = \"<b>Total:</b> <span>\".concat(priceTotal, \"$</span>\")),\n                        summaryTotal.classList.remove('active'));\n            }\n        }\n    }\n    function findDiscount(promoCode) {\n        var code = promoCodeArr.find(function (elem) {\n            return elem.text === promoCode.trim().toLowerCase() &&\n                !activeCode.find(function (item) { return item.text === elem.text; });\n        });\n        if (code) {\n            applyCodesItems.innerHTML =\n                promoCodeBtn(code, false) +\n                    activeCode.map(function (elem) { return promoCodeBtn(elem, true); }).join('');\n        }\n        else if (activeCode.length !== 0) {\n            applyCodesItems.innerHTML = activeCode\n                .map(function (elem) { return promoCodeBtn(elem, true); })\n                .join('');\n        }\n        else {\n            applyCodesItems.innerHTML = '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';\n        }\n    }\n    // function addDiscount1(): void {\n    //   const discount1 = document.querySelector('.add-code1-btn') as HTMLElement;\n    //   const discount2 = document.querySelector('.add-code2-btn') as HTMLElement;\n    //   if (summaryInput.value.match(/^rs$/) || summaryInput.value.match(/^rs\\s/)) {\n    //     if (discount1.dataset.discount === 'on') {\n    //       document.querySelector('.add-code-1')?.classList.remove('hide');\n    //       document.querySelector('.add-code1-btn')?.classList.add('hide');\n    //     } else {\n    //       document.querySelector('.add-code-1')?.classList.remove('hide');\n    //       document.querySelector('.add-code1-btn')?.classList.remove('hide');\n    //     }\n    //     document\n    //       .querySelector('.summary')\n    //       ?.addEventListener('click', (e: Event) => {\n    //         if (\n    //           //if click on 'RSS' code - add code\n    //           e !== null &&\n    //           e.target instanceof HTMLElement &&\n    //           e.target.classList.contains('add-code1-btn')\n    //         ) {\n    //           discount1.dataset.discount = 'on';\n    //           summaryTotal.style.textDecoration = 'line-through solid red';\n    //           document\n    //             .querySelector('.apply-code__title')\n    //             ?.classList.remove('hide');\n    //           document.querySelector('.drop-code-1')?.classList.remove('hide');\n    //           summaryDiscount.classList.remove('hide');\n    //           document.querySelector('.add-code1-btn')?.classList.add('hide');\n    //           document.querySelector('.add-code-1')?.classList.remove('hide');\n    //           (\n    //             document.querySelector('.summary__input') as HTMLInputElement\n    //           ).value = '';\n    //         }\n    //         if (\n    //           //if click on 'RSS' code - drop code\n    //           e !== null &&\n    //           e.target instanceof HTMLElement &&\n    //           e.target.classList.contains('drop-code1-btn')\n    //         ) {\n    //           discount1.dataset.discount = 'off';\n    //           if (\n    //             discount1.dataset.discount === 'off' &&\n    //             discount2.dataset.discount === 'off'\n    //           ) {\n    //             summaryTotal.style.textDecoration = 'none';\n    //             document\n    //               .querySelector('.apply-code__title')\n    //               ?.classList.add('hide');\n    //             summaryDiscount.classList.add('hide');\n    //             (\n    //               document.querySelector('.summary__input') as HTMLInputElement\n    //             ).value = '';\n    //           }\n    //           document.querySelector('.drop-code-1')?.classList.add('hide');\n    //           document.querySelector('.add-code-1')?.classList.add('hide');\n    //           document.querySelector('.add-code1-btn')?.classList.add('hide');\n    //         }\n    //         counDiscount();\n    //       });\n    //   } else {\n    //     if (discount1.dataset.discount === 'on') {\n    //       document.querySelector('.add-code-1')?.classList.remove('hide');\n    //       document.querySelector('.add-code1-btn')?.classList.add('hide');\n    //     }\n    //     counDiscount();\n    //   }\n    //   //discount 2\n    //   if (\n    //     summaryInput.value.match(/^epm$/) ||\n    //     summaryInput.value.match(/^epm\\s/)\n    //   ) {\n    //     if (discount2.dataset.discount === 'on') {\n    //       document.querySelector('.add-code-2')?.classList.remove('hide');\n    //       document.querySelector('.add-code2-btn')?.classList.add('hide');\n    //     } else {\n    //       document.querySelector('.add-code-2')?.classList.remove('hide');\n    //       document.querySelector('.add-code2-btn')?.classList.remove('hide');\n    //     }\n    //     document\n    //       .querySelector('.summary')\n    //       ?.addEventListener('click', (e: Event) => {\n    //         if (\n    //           //if click on 'EPM' code - add code\n    //           e !== null &&\n    //           e.target instanceof HTMLElement &&\n    //           e.target.classList.contains('add-code2-btn')\n    //         ) {\n    //           discount2.dataset.discount = 'on';\n    //           document.querySelector('.add-code2-btn')?.classList.add('hide');\n    //           summaryTotal.style.textDecoration = 'line-through solid red';\n    //           document\n    //             .querySelector('.apply-code__title')\n    //             ?.classList.remove('hide');\n    //           document.querySelector('.drop-code-2')?.classList.remove('hide');\n    //           summaryDiscount.classList.remove('hide');\n    //           (\n    //             document.querySelector('.summary__input') as HTMLInputElement\n    //           ).value = '';\n    //         }\n    //         if (\n    //           //if click on 'epm' - Drop code\n    //           e !== null &&\n    //           e.target instanceof HTMLElement &&\n    //           e.target.classList.contains('drop-code2-btn')\n    //         ) {\n    //           discount2.dataset.discount = 'off';\n    //           if (\n    //             discount1.dataset.discount === 'off' &&\n    //             discount2.dataset.discount === 'off'\n    //           ) {\n    //             summaryTotal.style.textDecoration = 'none';\n    //             document\n    //               .querySelector('.apply-code__title')\n    //               ?.classList.add('hide');\n    //             summaryDiscount.classList.add('hide');\n    //             (\n    //               document.querySelector('.summary__input') as HTMLInputElement\n    //             ).value = '';\n    //           }\n    //           document.querySelector('.drop-code-2')?.classList.add('hide');\n    //           document.querySelector('.add-code-2')?.classList.add('hide');\n    //           document.querySelector('.add-code2-btn')?.classList.add('hide');\n    //         }\n    //         counDiscount();\n    //       });\n    //   } else {\n    //     document.querySelector('.add-code-2')?.classList.add('hide');\n    //     discount2.dataset.discount = 'off';\n    //     counDiscount();\n    //   }\n    //   function counDiscount() {\n    //     let disc = 1;\n    //     if (discount1.dataset.discount === 'on') disc = 0.9;\n    //     if (discount2.dataset.discount === 'on') disc = 0.9;\n    //     if (\n    //       discount1.dataset.discount === 'on' &&\n    //       discount2.dataset.discount === 'on'\n    //     )\n    //       disc = 0.8;\n    //     summaryDiscount.innerText = `Total: ${Math.floor(priceTotal * disc)}$`;\n    //   }\n    // }\n    var buyButton = document.querySelector('.summary-btn');\n    var summary = document.querySelector('.summary-container');\n    buyButton.addEventListener('click', function () {\n        if (window.innerWidth > 768) {\n            (0,_buyForm__WEBPACK_IMPORTED_MODULE_1__.renderBuyForm)({\n                price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,\n                item: 'All Basket',\n                countProducts: totalCountEl,\n            });\n        }\n        else {\n            var productList = document.querySelector('.products__card-container');\n            // productList.scrollHeight <=\n            //   productList.scrollTop +\n            //     productList.clientHeight +\n            //     productList.children[productList.children.length - 1].clientHeight;\n            // \n            if (!summary.classList.contains('active')) {\n                // summary.classList.add('active');\n                productList.scrollTop = productList.clientHeight;\n            }\n            else {\n                (0,_buyForm__WEBPACK_IMPORTED_MODULE_1__.renderBuyForm)({\n                    price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,\n                    item: 'All Basket',\n                    countProducts: totalCountEl,\n                });\n            }\n        }\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__.total.totalPrice = priceTotal;\n    _index__WEBPACK_IMPORTED_MODULE_0__.total.totalElements = totalCountEl;\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/basket/renderTotalPrice.ts?");

/***/ }),

/***/ "./online-store/src/components/button.ts":
/*!***********************************************!*\
  !*** ./online-store/src/components/button.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _basket_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket/localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _routing_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n\n\n\nvar Button = /** @class */ (function () {\n    function Button() {\n        this.btnView = document.querySelectorAll('.btn-switch-view');\n        // logo = document.querySelector('.logo') as HTMLElement;\n        this.btnContainer = document.querySelector('.btn-container');\n        this.catalogProducts = document.querySelector('.catalog-products');\n        this.search = document.querySelector('.search');\n        this.searchBtn = document.querySelector('.search-icon');\n        this.searchContainer = document.querySelector('.search-container');\n        this.sort = document.querySelectorAll('.sort-input');\n        this.filtersBtn = document.querySelector('.filters-btn');\n    }\n    // html = document.querySelector('.filters-btn') as HTMLInputElement;\n    Button.prototype.btnFilter = function (e) {\n        var _this = this;\n        if (e.target.closest('.btn-reset') ||\n            e.target.closest('.logo')) {\n            var containerItem = document.querySelectorAll('.filters .container-item');\n            var containerItemValue_1 = document.querySelectorAll('.filters .quantity');\n            var categoryCheck = document.querySelectorAll('.category-container .checkbox');\n            var brandCheck = document.querySelectorAll('.brand-container .checkbox');\n            var stockLowerSlider = document.querySelector(\".stock-lower\");\n            var stockUpperSlider = document.querySelector(\".stock-upper\");\n            var priceLowerSlider = document.querySelector(\".price-lower\");\n            var priceUpperSlider = document.querySelector(\".price-upper\");\n            var stockLowerValues = document.querySelector(\".stock-from\");\n            var stockUpperValues = document.querySelector(\".stock-to\");\n            var priceLowerValues = document.querySelector(\".price-from\");\n            var priceUpperValues = document.querySelector(\".price-to\");\n            categoryCheck.forEach(function (elem) {\n                elem.checked = false;\n            });\n            brandCheck.forEach(function (elem) {\n                elem.checked = false;\n            });\n            stockLowerValues.innerHTML =\n                stockLowerValues.dataset.from =\n                    stockLowerSlider.value =\n                        stockLowerSlider.min;\n            stockUpperValues.innerHTML =\n                stockUpperValues.dataset.to =\n                    stockUpperSlider.value =\n                        stockUpperSlider.max;\n            priceLowerValues.innerHTML =\n                priceLowerValues.dataset.from =\n                    priceLowerSlider.value =\n                        priceLowerSlider.min;\n            priceUpperValues.innerHTML =\n                priceLowerValues.dataset.to =\n                    priceUpperSlider.value =\n                        priceUpperSlider.max;\n            this.search.value = '';\n            this.sort[0].value = 'select';\n            this.sort[1].value = 'select';\n            window.location.hash = '#';\n            (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageUrl)('set');\n            this.btnView[0].classList.remove('active');\n            this.btnView[1].classList.remove('active');\n            this.catalogProducts.classList.remove('active');\n            containerItem.forEach(function (elem, i) {\n                var _a;\n                elem.classList.remove('inactive');\n                if (containerItemValue_1[i]) {\n                    var x = (_a = containerItemValue_1[i].children[0].parentNode) === null || _a === void 0 ? void 0 : _a.innerText[2];\n                    document.querySelectorAll('.filters .quantity span')[i].innerHTML = x;\n                }\n            });\n            (0,_cards_cards__WEBPACK_IMPORTED_MODULE_1__.CreateProductCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_1__.productsData.products);\n        }\n        else if (e.target.closest('.btn-copy')) {\n            void navigator.clipboard\n                .writeText(window.location.href)\n                .then(function () {\n                setTimeout(function () {\n                    _this.btnContainer.children[1].innerHTML = \"<p>Copying...</p>\";\n                    _this.btnContainer.children[1].style.background =\n                        '#000000';\n                    _this.btnContainer.children[1].style.color =\n                        '#ffffff';\n                }, 100);\n            })\n                .then(function () {\n                setTimeout(function () {\n                    _this.btnContainer.children[1].innerHTML = \"<p>Copy</p>\";\n                    _this.btnContainer.children[1].style.background =\n                        '';\n                    _this.btnContainer.children[1].style.color = '';\n                }, 600);\n            });\n        }\n    };\n    Button.prototype.listeners = function () {\n        var _this = this;\n        this.btnView.forEach(function (elem) {\n            elem.addEventListener('click', function () {\n                _this.btnView[0].classList.toggle('active');\n                _this.btnView[1].classList.toggle('active');\n                if (_this.btnView[0].classList.contains('active') &&\n                    _this.btnView[1].classList.contains('active')) {\n                    (0,_routing_routing__WEBPACK_IMPORTED_MODULE_2__.searchParams)('set', 'view', 'active');\n                }\n                else\n                    (0,_routing_routing__WEBPACK_IMPORTED_MODULE_2__.searchParams)('del', 'view');\n                _this.catalogProducts.classList.toggle('active');\n            });\n        });\n        this.btnContainer.addEventListener('click', function (e) {\n            _this.btnFilter(e);\n        });\n        // this.logo!.addEventListener('click', (e: Event) => {\n        // this.btnFilter(e);\n        // CreateProductCard(productsData.products);\n        // });\n        // this.searchBtn!.addEventListener('click', (e: Event) => {\n        //   this.searchContainer.classList.add('active');\n        // });\n        window.addEventListener('click', function (e) {\n            if (e.target.closest('.filters-btn')) {\n                if (_this.filtersBtn.classList.contains('active')) {\n                    document.querySelector('.filters').classList.remove('active');\n                    _this.filtersBtn.classList.remove('active');\n                }\n                else {\n                    document.querySelector('.filters').classList.add('active');\n                    _this.filtersBtn.classList.add('active');\n                }\n            }\n            else if (_this.filtersBtn.classList.contains('active') &&\n                !e.target.closest('.filters')) {\n                document.querySelector('.filters').classList.remove('active');\n                _this.filtersBtn.classList.remove('active');\n            }\n            if (e.target.closest('.search-icon')) {\n                _this.searchContainer.classList.add('active');\n            }\n            else if (_this.searchContainer.classList.contains('active') &&\n                !e.target.closest('.search-container')) {\n                _this.searchContainer.classList.remove('active');\n            }\n        });\n    };\n    return Button;\n}());\n\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/button.ts?");

/***/ }),

/***/ "./online-store/src/components/cards/cards.ts":
/*!****************************************************!*\
  !*** ./online-store/src/components/cards/cards.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProductCard: () => (/* binding */ CreateProductCard),\n/* harmony export */   loadProduct: () => (/* binding */ loadProduct),\n/* harmony export */   products: () => (/* binding */ products),\n/* harmony export */   productsData: () => (/* binding */ productsData)\n/* harmony export */ });\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.scss */ \"./online-store/src/components/cards/cards.scss\");\n/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/filter */ \"./online-store/src/components/filter/filter.ts\");\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search */ \"./online-store/src/components/search/search.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ \"./online-store/src/index.ts\");\n/* harmony import */ var _basket_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basket/localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\nvar productsData = {\n    limit: 0,\n    products: [],\n    skip: 0,\n    total: 0,\n}; // get full object\nvar products = []; // array with all elements like HTML code\nfunction CreateProductCard(setting) {\n    // accepts an array of data\n    var currentProducts = [];\n    if (typeof setting === 'string' || setting.length === 0) {\n        document.querySelector('.catalog-products').style.display =\n            'flex';\n        document.querySelector('.catalog-products').innerHTML =\n            '<p class=\"not-found\">No products found <br> (ಥ﹏ಥ)</p>';\n        document.querySelectorAll('.found').forEach(function (elem) { return (elem.dataset.found = '0'); });\n        document.querySelectorAll('.found .new').forEach(function (elem) { return (elem.innerHTML = '0'); });\n    }\n    else {\n        setting.forEach(function (elem) {\n            var images = [];\n            elem.images.forEach(function (elem) {\n                var image = \"<li><div class=\\\"image\\\" style=\\\"background-image: url('\".concat(elem, \"');\\\"></div></li>\");\n                images.push(image);\n            });\n            //we change the button and the date attribute Add/Drop on the product button\n            function addDropCard() {\n                for (var _i = 0, itemInBasket_1 = ___WEBPACK_IMPORTED_MODULE_3__.itemInBasket; _i < itemInBasket_1.length; _i++) {\n                    var el = itemInBasket_1[_i];\n                    if (el.id === elem.id)\n                        return 'Remove';\n                }\n                return 'Add';\n            }\n            var card = \"<div class=\\\"product-item\\\" data-identifier=\\\"\".concat(elem.id, \"\\\">\\n    <div class=\\\"product-img\\\"\\n      style=\\\"background-image: url('\").concat(elem.thumbnail, \"');\\\"></div>\\n    <h3>\").concat(elem.title, \"</h3>\\n    <ul class=\\\"list-images\\\">\").concat(images.join(''), \"</ul>\\n    <p><b>Description: </b> \").concat(elem.description, \"</p>\\n    <p><b>Category: </b> \").concat(elem.category, \"</p>\\n    <p><b>Brand: </b> \").concat(elem.brand, \"</p>\\n    <p><b>Price: </b> <span>\").concat(Math.round((elem.price / 100) * (100 + elem.discountPercentage)), \"$</span>/<span>\").concat(elem.price, \"$</span></p>\\n    <p><b>Discount: </b> \").concat(elem.discountPercentage, \"%</p>\\n    <p><b>Rating: </b> \").concat(elem.rating, \"</p>\\n    <p><b>Stock: </b> \").concat(elem.stock, \"</p>\\n      <div class=\\\"product-btn\\\">\\n        <div class=\\\"btn__addBasket\\\" data-action=\\\"\").concat(addDropCard(), \"\\\">\").concat(addDropCard(), \"</div>\\n        <div class=\\\"btn__description\\\">Details</div>\\n      </div>\\n    </div>\");\n            currentProducts.push(card);\n        });\n        products = currentProducts.slice();\n        document.querySelector('.catalog-products').style.display =\n            'grid';\n        document.querySelector('.catalog-products').innerHTML =\n            currentProducts.join('');\n        document.querySelectorAll('.found').forEach(function (elem) { return (elem.dataset.found = \"\".concat(currentProducts.length)); });\n        document.querySelectorAll('.found .new').forEach(function (elem) { return (elem.innerHTML = \"\".concat(currentProducts.length)); });\n    }\n}\nfunction loadProduct(quantity) {\n    var _this = this;\n    if (quantity === void 0) { quantity = 100; }\n    // the default value is 100 cards, redefined in the function call\n    void fetch(\"https://dummyjson.com/products?limit=\".concat(quantity))\n        .then(function (data) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\n        return [2 /*return*/, data.json()];\n    }); }); })\n        .then(function (data) {\n        data.products.forEach(function (elem) { return (elem.count = 1); });\n        Object.assign(productsData, data); // clone object\n        CreateProductCard(data.products); // passes an array to a function CreateProductCard\n        (0,_filter_filter__WEBPACK_IMPORTED_MODULE_1__.loadFilter)(data.products);\n        (0,_search_search__WEBPACK_IMPORTED_MODULE_2__.searchProductCard)('notNow');\n        window.location.href = (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_4__.localStorageUrl)('get');\n        document.querySelectorAll('.found .all').forEach(function (elem) { return (elem.innerHTML = \"\".concat(quantity)); });\n    });\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/cards/cards.ts?");

/***/ }),

/***/ "./online-store/src/components/details/productCard.ts":
/*!************************************************************!*\
  !*** ./online-store/src/components/details/productCard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDetails: () => (/* binding */ renderDetails)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./online-store/src/index.ts\");\n/* harmony import */ var _basket_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basket/basket */ \"./online-store/src/components/basket/basket.ts\");\n/* harmony import */ var _basket_buyForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basket/buyForm */ \"./online-store/src/components/basket/buyForm.ts\");\n/* harmony import */ var _basket_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basket/localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _routing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n\n// import Data from '../../products-v1.json';\n\n\n\n\n\nvar detailsContainer = document.querySelector('.details-container');\nfunction renderDetails(identifier) {\n    function addDropCard() {\n        for (var _i = 0, itemInBasket_1 = ___WEBPACK_IMPORTED_MODULE_0__.itemInBasket; _i < itemInBasket_1.length; _i++) {\n            var el = itemInBasket_1[_i];\n            if (el.id === identifier)\n                return 'Remove';\n        }\n        return 'Add';\n    }\n    detailsContainer.innerHTML = '';\n    var detailsContainerHTML = \"\\n            <div class=\\\"bread-crumbs-container\\\">\\n              <div class=\\\"bread-crumbs\\\">\\n                <a class=\\\"home-link\\\">Store</a>\\n                <span>></span>\\n                <p>\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].category, \"</p>\\n                <span>></span>\\n                <p>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].brand, \"</p>\\n                <span>></span>\\n                <p>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].title, \"</p>\\n              </div>\\n            </div>\\n            <div class=\\\"details__card-container\\\">\\n              <div class=\\\"details__card\\\" data-identifier=\\\"\").concat(identifier, \"\\\">\\n                <div class=\\\"card__info\\\">\\n                    <div class=\\\"cards__image\\\">\\n                      <div class=\\\"small__images\\\">\\n                        \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[0]\n        ? \"<div class=\\\"small__img active\\\" style=\\\"background-image: url('\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[0], \"');\\\"></div>\")\n        : '', \"\\n                        \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[1]\n        ? \"<div class=\\\"small__img\\\" style=\\\"background-image: url('\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[1], \"');\\\"></div>\")\n        : '', \"\\n                        \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[2]\n        ? \"<div class=\\\"small__img\\\" style=\\\"background-image: url('\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[2], \"');\\\"></div>\")\n        : '', \"\\n                        \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[3]\n        ? \"<div class=\\\"small__img\\\" style=\\\"background-image: url('\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].images[3], \"');\\\"></div>\")\n        : '', \"\\n                      </div>\\n                      <div class=\\\"focus__img\\\">\\n                        \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].thumbnail\n        ? \"<div class=\\\"small__img\\\" style=\\\"background-image: url('\".concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].thumbnail, \"');\\\"></div>\")\n        : '', \"\\n                      </div>\\n                    </div>\\n\\n                    <div class=\\\"card__description\\\">\\n                      <h3>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].title, \"</h3>\\n                      <div class=\\\"item-card__description\\\">\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].description, \"\\n                      </div>\\n                      <p><b>Category: </b> \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].category, \"</p>\\n                      <p><b>Brand: </b> \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].brand, \"</p>\\n                      <p><b>Old price: </b><span> \").concat(Math.round((_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].price / 100) *\n        (100 + _cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].discountPercentage)), \"$</span></p>\\n                      <p><b>Discount: </b>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].discountPercentage, \"%</p>\\n                      <p><b>New price: </b><span> \").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].price, \"$</span></p>\\n                      <p><b>Stock: </b>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].stock, \"</p>\\n                      <p><b>Rating: </b>\").concat(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[identifier - 1].rating, \"</p>\\n                    </div>\\n\\n                    <div class=\\\"card__buy\\\">\\n                    <div class=\\\"btn__addBasket\\\" data-action=\\\"\").concat(addDropCard(), \"\\\">\").concat(addDropCard(), \"</div>\\n                    <button class=\\\"details__buy-btn\\\">Buy now!</button>\\n                    </div>\\n                  </div>\\n              </div>\\n            </div>\\n\");\n    detailsContainer.insertAdjacentHTML('beforeend', detailsContainerHTML);\n    // const buyButton = document.querySelector('.details__buy-btn') as HTMLElement;\n    // const buttonsDetails = document.querySelector('.card__buy') as HTMLElement;\n    // buttonsDetails.addEventListener('click', (e: Event) => {\n    //   buyFromDescriptions(e);\n    // });\n}\n// cards__image\n// (document.querySelector('.home-link') as HTMLElement).addEventListener(\n//   'click',\n//   () => {\n//     // router.navigateTo('#');\n//     window.location.href = new URL(\n//       '#',\n//       window.location.origin + window.location.pathname,\n//     ).href;\n//     const recoveryUrl =\n//       localStorageUrl('get') ?? window.location.href.toString();\n//     recoveryValue(recoveryUrl);\n//   },\n// );\ndetailsContainer.addEventListener('click', function (e) {\n    var _a;\n    if (e !== null &&\n        e.target instanceof HTMLElement &&\n        e.target.closest('.small__img')) {\n        document.querySelectorAll('.small__img').forEach(function (elem) {\n            elem.classList.remove('active');\n        });\n        (_a = e.target.closest('.small__img')) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n        document.querySelector('.focus__img').innerHTML =\n            e.target.outerHTML;\n        // focusImg.setAttribute('src', e.target.src);\n    }\n});\ndetailsContainer.addEventListener('click', function (e) {\n    var _a;\n    if (e.target.closest('.btn__addBasket') &&\n        e.target instanceof HTMLElement &&\n        e.target.dataset.action === 'Add') {\n        var closestCard = e.target.closest('.details__card');\n        var identifier = closestCard.dataset.identifier;\n        ___WEBPACK_IMPORTED_MODULE_0__.itemInBasket.push(_cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[+identifier - 1]);\n        e.target.dataset.action = 'Remove';\n        e.target.innerText = 'Remove';\n        (0,_basket_basket__WEBPACK_IMPORTED_MODULE_1__.renderBasket)();\n    }\n    else if (e.target.closest('.btn__addBasket') &&\n        e.target instanceof HTMLElement &&\n        e.target.dataset.action === 'Remove') {\n        var closestCard = e.target.closest('.details__card');\n        var identifier_1 = closestCard.dataset.identifier;\n        ___WEBPACK_IMPORTED_MODULE_0__.itemInBasket.forEach(function (el, index) {\n            if (el.id === +identifier_1) {\n                ___WEBPACK_IMPORTED_MODULE_0__.itemInBasket.splice(index, 1);\n            }\n        });\n        e.target.dataset.action = 'Add';\n        e.target.innerText = 'Add';\n        (0,_basket_basket__WEBPACK_IMPORTED_MODULE_1__.renderBasket)();\n        renderDetails(+identifier_1);\n    }\n    else if (e.target.closest('.details__buy-btn') &&\n        e.target instanceof HTMLElement) {\n        var closestCard = e.target.closest('.details__card');\n        var identifier = closestCard.dataset.identifier;\n        var itemProduct = _cards_cards__WEBPACK_IMPORTED_MODULE_4__.productsData.products[+identifier - 1];\n        (0,_basket_buyForm__WEBPACK_IMPORTED_MODULE_2__.renderBuyForm)({\n            price: itemProduct.price,\n            item: itemProduct.title,\n            countProducts: 1,\n        });\n    }\n    else if (e.target.closest('.home-link') &&\n        e.target instanceof HTMLElement) {\n        window.location.href = new URL('#', window.location.origin + window.location.pathname).href;\n        var recoveryUrl = (_a = (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_3__.localStorageUrl)('get')) !== null && _a !== void 0 ? _a : window.location.href.toString();\n        (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.recoveryValue)(recoveryUrl);\n    }\n});\n// function buyFromDescriptions(e: Event) {\n//   // console.log('e :>> ', e.target);\n//   // const\n//   if ((e.target as HTMLElement).closest('.btn__addBasket')) {\n//\n//\n//     // const itemCard = (e.target! as HTMLElement)\n//     //   .previousElementSibling as HTMLElement;\n//     // if product in basket render bye form\n//     // if (itemCard!.dataset.action === 'Remove') {\n//     //   const itemProduct = productsData.products[+!e.target.dataset.identifier];\n//     //   console.log('object :>> ', productsData.products[+!e.target.dataset.identifier]);\n//     //   renderBuyForm({\n//     //     price: productsData.products[+!e.target.dataset.identifier].price,\n//     //     item: productsData.products[+!e.target.dataset.identifier].title,\n//     //     countProducts: 1,\n//     //   });\n//     // }\n//     //if no one in basket push in array, change btn text and redirect\n//     // else if (itemCard!.dataset.action === 'Add') {\n//     //   const itemProduct = productsData.products[+!e.target.dataset.identifier];\n//     //   itemInBasket.push(itemProduct);\n//     //   e.target.dataset.action = 'Remove';\n//     //   itemCard.innerText = 'Remove';\n//     //   window.location.replace('#basket');\n//     //   renderBasket();\n//     //   console.log('object :>> ', productsData.products[+!e.target.dataset.identifier]);\n//     //   // renderBuyForm({\n//     //   //   price: productsData.products[+!e.target.dataset.identifier].price,\n//     //   //   item: productsData.products[+!e.target.dataset.identifier].title,\n//     //   //   countProducts: 1,\n//     //   // });\n//     // }\n//   } else if ((e.target as HTMLElement).closest('.details__buy-btn')) {\n//\n//   }\n// }\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/details/productCard.ts?");

/***/ }),

/***/ "./online-store/src/components/filter/filter.ts":
/*!******************************************************!*\
  !*** ./online-store/src/components/filter/filter.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeFilter: () => (/* binding */ changeFilter),\n/* harmony export */   countView: () => (/* binding */ countView),\n/* harmony export */   loadFilter: () => (/* binding */ loadFilter),\n/* harmony export */   resultData: () => (/* binding */ resultData)\n/* harmony export */ });\n/* harmony import */ var _filter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.scss */ \"./online-store/src/components/filter/filter.scss\");\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort/sort */ \"./online-store/src/components/sort/sort.ts\");\n/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider */ \"./online-store/src/components/filter/slider/slider.ts\");\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search */ \"./online-store/src/components/search/search.ts\");\n/* harmony import */ var _routing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n\n\n\n\n\n\nvar filterCategory = { arrFilter: [], countFilter: [] }; // категории по всему списку товаров\nvar filterBrand = { arrFilter: [], countFilter: [] }; // брэнды по всему списку товаров\nvar filterStock = { min: 0, max: 1 }; // минимальное и максимальное кол-во товара по всему списку товаров\nvar filterPrice = { min: 0, max: 1 }; // минимальная и максимальная стоимость товара по всему списку товаров\nfunction CreateFilter(setting, location) {\n    // значения строки category, brand, stock, price\n    var dataDom = [];\n    if (location === 'category' || location === 'brand') {\n        setting.arrFilter.forEach(function (elem, i) {\n            dataDom.push(\"<div class=\\\"container-item\\\">\\n        <label class=\\\"item-label\\\">\\n          <input type=\\\"checkbox\\\" name=\\\"\".concat(elem, \"\\\" class=\\\"checkbox\\\" data-\").concat(location, \"=\\\"\").concat(elem, \"\\\" data-count=\\\"\").concat(setting.countFilter[i], \"\\\">\\n          <svg viewBox=\\\"0 0 21 18\\\">\\n            <symbol id=\\\"tick-path\\\" viewBox=\\\"0 0 21 18\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n              <path d=\\\"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69\\\" fill=\\\"none\\\" stroke-width=\\\"2.25\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" />\\n            </symbol>\\n              <defs>\\n                <mask id=\\\"tick\\\">\\n                  <use class=\\\"tick mask\\\" href=\\\"#tick-path\\\" />\\n                </mask>\\n              </defs>\\n              <use class=\\\"tick\\\" href=\\\"#tick-path\\\" stroke=\\\"currentColor\\\" />\\n              <path fill=\\\"white\\\" mask=\\\"url(#tick)\\\" d=\\\"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z\\\" />\\n          </svg>\\n          <svg class=\\\"lines\\\" viewBox=\\\"0 0 11 11\\\">\\n              <path d=\\\"M5.88086 5.89441L9.53504 4.26746\\\" />\\n              <path d=\\\"M5.5274 8.78838L9.45391 9.55161\\\" />\\n              <path d=\\\"M3.49371 4.22065L5.55387 0.79198\\\" />\\n          </svg>\\n          <p class=\\\"checkbox-text\\\">\").concat(elem, \"</p>\\n        </label>\\n        <p class=\\\"quantity\\\">\\n        <span>\").concat(setting.countFilter[i], \"</span>/\").concat(setting.countFilter[i], \"</p></div>\"));\n        });\n    }\n    else if (location === 'stock' || location === 'price') {\n        var value = setting;\n        dataDom.push(\"<div class=\\\"value-container\\\">\\n      <p class=\\\"\".concat(location, \"-from _from\\\" data-from=\\\"\").concat(value.min, \"\\\">\").concat(value.min, \"</p>\\n      <p class=\\\"\").concat(location, \"-to _to\\\" data-to=\\\"\").concat(value.max, \"\\\">\").concat(value.max, \"</p>\\n    </div>\\n    <div class=\\\"multi-range\\\">\\n      <input type=\\\"range\\\" min=\\\"\").concat(value.min, \"\\\" max=\\\"\").concat(value.max, \"\\\" value=\\\"\").concat(value.min, \"\\\" class=\\\"\").concat(location, \"-lower _lower\\\">\\n      <input type=\\\"range\\\" min=\\\"\").concat(value.min, \"\\\" max=\\\"\").concat(value.max, \"\\\" value=\\\"\").concat(value.max, \"\\\" class=\\\"\").concat(location, \"-upper _upper\\\">\\n    </div>\"));\n    }\n    document.querySelector(\".\".concat(location, \"-container\")).innerHTML =\n        dataDom.join(''); // создание фильтров\n}\nfunction loadFilter(arrProd) {\n    var stock = [];\n    var price = [];\n    arrProd.forEach(function (el) {\n        if (!filterCategory.arrFilter.includes(el.category)) {\n            filterCategory.arrFilter.push(el.category);\n            filterCategory.countFilter.push(1);\n        }\n        else {\n            filterCategory.countFilter[filterCategory.arrFilter.indexOf(el.category)] += 1;\n        }\n        if (!filterBrand.arrFilter.includes(el.brand)) {\n            filterBrand.arrFilter.push(el.brand);\n            filterBrand.countFilter.push(1);\n        }\n        else {\n            filterBrand.countFilter[filterBrand.arrFilter.indexOf(el.brand)] += 1;\n        }\n        stock.push(el.stock);\n        price.push(el.price);\n    });\n    filterStock.min = Math.min.apply(Math, stock); // получение минимального и максимального значения колличества\n    filterStock.max = Math.max.apply(Math, stock); // получение минимального и максимального значения колличества\n    filterPrice.min = Math.min.apply(Math, price); // получение минимального и максимального значения цены\n    filterPrice.max = Math.max.apply(Math, price); // получение минимального и максимального значения цены\n    CreateFilter(filterCategory, 'category'); // вызов функции для заполнения фильтрации\n    CreateFilter(filterBrand, 'brand'); // вызов функции для заполнения фильтрации\n    CreateFilter(filterStock, 'stock'); // вызов функции для заполнения фильтрации\n    CreateFilter(filterPrice, 'price'); // вызов функции для заполнения фильтрации\n    (0,_slider_slider__WEBPACK_IMPORTED_MODULE_3__.slider)(); // вызов функции для использования слайдера\n    changeFilter(); // вызов функции для использования всей фильтрации\n}\nfunction countView(arrProd) {\n    var containerItem = document.querySelectorAll('.filters .container-item');\n    var containerItemValue = document.querySelectorAll('.filters .quantity span');\n    var containerCheckbox = document.querySelectorAll('.filters .checkbox');\n    var stockLowerValues = document.querySelector(\".stock-from\");\n    var stockUpperValues = document.querySelector(\".stock-to\");\n    var priceLowerValues = document.querySelector(\".price-from\");\n    var priceUpperValues = document.querySelector(\".price-to\");\n    var viewCategory = [];\n    var viewBrand = [];\n    var viewStock = [];\n    var viewPrice = [];\n    if (typeof arrProd !== 'string') {\n        arrProd.forEach(function (elem) {\n            viewCategory.push(elem.category);\n            viewBrand.push(elem.brand);\n            viewStock.push(elem.stock);\n            viewPrice.push(elem.price);\n        });\n        viewStock.sort(function (a, b) { return a - b; });\n        viewPrice.sort(function (a, b) { return a - b; });\n        containerCheckbox.forEach(function (elem, i) {\n            if (elem.dataset.category) {\n                var countCategory = viewCategory.filter(function (item) { return item === elem.dataset.category; });\n                if (countCategory.length !== 0) {\n                    containerItem[i].classList.remove('inactive');\n                }\n                else {\n                    containerItem[i].classList.add('inactive');\n                }\n                if (containerItemValue[i])\n                    containerItemValue[i].innerText = \"\".concat(countCategory.length);\n            }\n            if (elem.dataset.brand) {\n                var countBrand = viewBrand.filter(function (item) { return item === elem.dataset.brand; });\n                if (countBrand.length !== 0) {\n                    containerItem[i].classList.remove('inactive');\n                }\n                else {\n                    containerItem[i].classList.add('inactive');\n                }\n                if (containerItemValue[i])\n                    containerItemValue[i].innerText = \"\".concat(countBrand.length);\n            }\n        });\n        if (stockLowerValues &&\n            stockUpperValues &&\n            priceLowerValues &&\n            priceLowerValues) {\n            stockLowerValues.innerHTML =\n                stockLowerValues.dataset.from = \"\".concat(viewStock[0]);\n            stockUpperValues.innerHTML = stockUpperValues.dataset.to = \"\".concat(viewStock[viewStock.length - 1]);\n            priceLowerValues.innerHTML =\n                priceLowerValues.dataset.from = \"\".concat(viewPrice[0]);\n            priceUpperValues.innerHTML = priceLowerValues.dataset.to = \"\".concat(viewPrice[viewStock.length - 1]);\n        }\n    }\n    else {\n        if (document.querySelector('.found').dataset.found === '0') {\n            containerItem.forEach(function (elem, i) {\n                elem.classList.add('inactive');\n                if (containerItemValue[i])\n                    containerItemValue[i].innerText = \"0\";\n            });\n        }\n    }\n}\nvar resultData = []; // массив с данным для сортировки во время фильтрации\nfunction changeFilter(trigger) {\n    var _a;\n    function filtering(e) {\n        var productFilter = _cards_cards__WEBPACK_IMPORTED_MODULE_1__.productsData.products.slice();\n        if ((document.querySelector('.search').value.length ===\n            0 &&\n            document.querySelector('.category-container').dataset\n                .active === 'false') ||\n            document.querySelector('.brand-container').dataset\n                .active === 'false' ||\n            document.querySelector('.stock-container').dataset\n                .active === 'false' ||\n            document.querySelector('.price-container').dataset\n                .active === 'false') {\n            productFilter = (0,_search_search__WEBPACK_IMPORTED_MODULE_4__.searchProductCard)('now', _cards_cards__WEBPACK_IMPORTED_MODULE_1__.productsData.products);\n        }\n        var checkboxCategory = []; // массив с выбранными фильтрами\n        var checkboxBrand = []; // массив с выбранными фильтрами\n        var result = [];\n        if (document.querySelectorAll('.category-container .checkbox:checked')\n            .length !== 0) {\n            document.querySelector('.category-container').dataset.active = 'true';\n        }\n        else\n            document.querySelector('.category-container').dataset.active = 'false';\n        if (document.querySelectorAll('.brand-container .checkbox:checked').length !==\n            0) {\n            document.querySelector('.brand-container').dataset.active = 'true';\n        }\n        else\n            document.querySelector('.brand-container').dataset.active = 'false';\n        if (trigger ||\n            e.target.closest('.category-container .checkbox') !=\n                null ||\n            e.target.closest('.brand-container .checkbox') != null) {\n            document\n                .querySelectorAll('.category-container .checkbox:checked')\n                .forEach(function (elem) {\n                checkboxCategory.push(elem.dataset.category);\n            });\n            document\n                .querySelectorAll('.brand-container .checkbox:checked')\n                .forEach(function (elem) {\n                checkboxBrand.push(elem.dataset.brand);\n            });\n            var stockRange = document.querySelector('.stock-container');\n            var priceRange = document.querySelector('.price-container');\n            // =============================================блок проверок по массиву=============================================================\n            result = productFilter.filter(function (item) {\n                return checkboxCategory.includes(item.category) ||\n                    checkboxBrand.includes(item.brand);\n            });\n            if (stockRange.dataset.active === 'true' ||\n                priceRange.dataset.active === 'true') {\n                result = productFilter.filter(function (item) {\n                    return ((checkboxCategory.includes(item.category) ||\n                        checkboxBrand.includes(item.brand)) &&\n                        item.stock >= valuesFrom[0] &&\n                        item.stock <= valuesTo[0] &&\n                        item.price >= valuesFrom[1] &&\n                        item.price <= valuesTo[1]);\n                });\n            }\n            if (checkboxBrand.length !== 0 &&\n                checkboxCategory.length !== 0 &&\n                (stockRange.dataset.active === 'false' ||\n                    priceRange.dataset.active === 'false')) {\n                result = productFilter.filter(function (item) {\n                    return checkboxCategory.includes(item.category) &&\n                        checkboxBrand.includes(item.brand);\n                });\n            }\n            if (checkboxBrand.length !== 0 &&\n                checkboxCategory.length !== 0 &&\n                (stockRange.dataset.active === 'true' ||\n                    priceRange.dataset.active === 'true')) {\n                result = productFilter.filter(function (item) {\n                    return (checkboxCategory.includes(item.category) &&\n                        checkboxBrand.includes(item.brand) &&\n                        item.stock >= valuesFrom[0] &&\n                        item.stock <= valuesTo[0] &&\n                        item.price >= valuesFrom[1] &&\n                        item.price <= valuesTo[1]);\n                });\n            }\n            if (checkboxBrand.length === 0 &&\n                checkboxCategory.length === 0 &&\n                stockRange.dataset.active === 'false' &&\n                priceRange.dataset.active === 'false') {\n                result = productFilter.slice();\n            }\n            if (checkboxBrand.length === 0 &&\n                checkboxCategory.length === 0 &&\n                (stockRange.dataset.active === 'true' ||\n                    priceRange.dataset.active === 'true')) {\n                result = productFilter.filter(function (item) {\n                    return (item.stock >= valuesFrom[0] &&\n                        item.stock <= valuesTo[0] &&\n                        item.price >= valuesFrom[1] &&\n                        item.price <= valuesTo[1]);\n                });\n            }\n            // =======================================================================================================================================\n            checkboxCategory.length !== 0\n                ? (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('set', 'category', checkboxCategory)\n                : (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('del', 'category');\n            checkboxBrand.length !== 0\n                ? (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('set', 'brand', checkboxBrand)\n                : (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('del', 'brand');\n            // =======================================================================================================================================\n            resultData = result.slice();\n            result = (0,_sort_sort__WEBPACK_IMPORTED_MODULE_2__.SortProductCard)('now', result);\n            result.length === 0\n                ? (0,_cards_cards__WEBPACK_IMPORTED_MODULE_1__.CreateProductCard)('not-found')\n                : (0,_cards_cards__WEBPACK_IMPORTED_MODULE_1__.CreateProductCard)(result);\n            countView(result);\n        }\n    }\n    var lowerSliderAll = document.querySelectorAll('._lower'); // нижние части слайдеров\n    var upperSliderAll = document.querySelectorAll('._upper'); // верхние части салйдеров\n    var valuesLowerSliderAll = document.querySelectorAll('._from'); // блок с данными слайдеров\n    var valuesUpperSliderAll = document.querySelectorAll('._to'); // блок с данными слайдеров\n    var valuesTo = []; // [stock, price]\n    var valuesFrom = []; // [stock, price]\n    var saveStock = [\n        \"\".concat(valuesLowerSliderAll[0].dataset.from),\n        \"\".concat(valuesUpperSliderAll[0].dataset.to),\n    ];\n    var savePrice = [\n        \"\".concat(valuesLowerSliderAll[1].dataset.from),\n        \"\".concat(valuesUpperSliderAll[1].dataset.to),\n    ];\n    valuesTo = [\n        +valuesUpperSliderAll[0].dataset.to,\n        +valuesUpperSliderAll[1].dataset.to,\n    ];\n    valuesFrom = [\n        +valuesLowerSliderAll[0].dataset.from,\n        +valuesLowerSliderAll[1].dataset.from,\n    ];\n    function ISliderSelector(a, b) {\n        // функция которая передается в обработчик событий input (stock = 0 или price = 1, to = нижний или from = верхний)\n        var productFilter = _cards_cards__WEBPACK_IMPORTED_MODULE_1__.productsData.products.slice();\n        if ((document.querySelector('.search').value.length ===\n            0 &&\n            document.querySelector('.category-container').dataset\n                .active === 'false') ||\n            document.querySelector('.brand-container').dataset\n                .active === 'false' ||\n            document.querySelector('.stock-container').dataset\n                .active === 'false' ||\n            document.querySelector('.price-container').dataset\n                .active === 'false') {\n            productFilter = (0,_search_search__WEBPACK_IMPORTED_MODULE_4__.searchProductCard)('now', _cards_cards__WEBPACK_IMPORTED_MODULE_1__.productsData.products);\n        }\n        var result = [];\n        var stockRange = document.querySelector('.stock-container'); // блок слайдера stock\n        var priceRange = document.querySelector('.price-container'); // блок слайдера price\n        var checkboxCategory = []; // массив с выбранными фильтрами\n        var checkboxBrand = []; // массив с выбранными фильтрами\n        document\n            .querySelectorAll('.category-container .checkbox:checked')\n            .forEach(function (elem) {\n            return checkboxCategory.push(elem.dataset.category);\n        });\n        document\n            .querySelectorAll('.brand-container .checkbox:checked')\n            .forEach(function (elem) {\n            return checkboxBrand.push(elem.dataset.brand);\n        });\n        if (a === 0 && b === 'to') {\n            valuesTo[0] = +valuesUpperSliderAll[0].dataset.to;\n        }\n        else if (a === 0 && b === 'from') {\n            valuesFrom[0] = +valuesLowerSliderAll[0].dataset.from;\n        }\n        else if (a === 1 && b === 'to') {\n            valuesTo[1] = +valuesUpperSliderAll[1].dataset.to;\n        }\n        else if (a === 1 && b === 'from') {\n            valuesFrom[1] = +valuesLowerSliderAll[1].dataset.from;\n        }\n        // =============================================блок проверки активности слайдеров======================================================\n        if (lowerSliderAll[0].min !== lowerSliderAll[0].value ||\n            upperSliderAll[0].max !== upperSliderAll[0].value) {\n            stockRange.dataset.active = 'true';\n            saveStock = [\"\".concat(lowerSliderAll[0].value), \"\".concat(upperSliderAll[0].value)];\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('set', 'stock', saveStock);\n        }\n        else if (lowerSliderAll[0].min === lowerSliderAll[0].value &&\n            upperSliderAll[0].max === upperSliderAll[0].value) {\n            stockRange.dataset.active = 'false';\n            saveStock = [\"\".concat(lowerSliderAll[0].value), \"\".concat(upperSliderAll[0].value)];\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('del', 'stock');\n        }\n        if (lowerSliderAll[1].min !== lowerSliderAll[1].value ||\n            upperSliderAll[1].max !== upperSliderAll[1].value) {\n            priceRange.dataset.active = 'true';\n            savePrice = [\"\".concat(lowerSliderAll[1].value), \"\".concat(upperSliderAll[1].value)];\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('set', 'price', savePrice);\n        }\n        else if (lowerSliderAll[1].min === lowerSliderAll[1].value &&\n            upperSliderAll[1].max === upperSliderAll[1].value) {\n            priceRange.dataset.active = 'false';\n            savePrice = [\"\".concat(lowerSliderAll[1].value), \"\".concat(upperSliderAll[1].value)];\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_5__.searchParams)('del', 'price');\n        }\n        // =============================================блок проверок по массиву=============================================================\n        result = productFilter.filter(function (item) {\n            return (item.stock >= valuesFrom[0] &&\n                item.stock <= valuesTo[0] &&\n                item.price >= valuesFrom[1] &&\n                item.price <= valuesTo[1]);\n        });\n        if (checkboxBrand.length !== 0 || checkboxCategory.length !== 0) {\n            result = productFilter.filter(function (item) {\n                return ((checkboxCategory.includes(item.category) ||\n                    checkboxBrand.includes(item.brand)) &&\n                    item.stock >= valuesFrom[0] &&\n                    item.stock <= valuesTo[0] &&\n                    item.price >= valuesFrom[1] &&\n                    item.price <= valuesTo[1]);\n            });\n        }\n        if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {\n            result = productFilter.filter(function (item) {\n                return (checkboxCategory.includes(item.category) &&\n                    checkboxBrand.includes(item.brand) &&\n                    item.stock >= valuesFrom[0] &&\n                    item.stock <= valuesTo[0] &&\n                    item.price >= valuesFrom[1] &&\n                    item.price <= valuesTo[1]);\n            });\n        }\n        if (document.querySelectorAll('.filters .checkbox:checked').length === 0 &&\n            stockRange.dataset.active === 'false' &&\n            priceRange.dataset.active === 'false') {\n            result = productFilter.slice();\n        }\n        // =======================================================================================================================================\n        resultData = result.slice();\n        result = (0,_sort_sort__WEBPACK_IMPORTED_MODULE_2__.SortProductCard)('now', result);\n        result.length === 0\n            ? (0,_cards_cards__WEBPACK_IMPORTED_MODULE_1__.CreateProductCard)('not-found')\n            : (0,_cards_cards__WEBPACK_IMPORTED_MODULE_1__.CreateProductCard)(result);\n        countView(result);\n        if (document.querySelector(\".stock-from\").innerHTML ===\n            'undefined')\n            document.querySelector(\".stock-from\").innerHTML = 'none';\n        if (document.querySelector(\".stock-to\").innerHTML ===\n            'undefined')\n            document.querySelector(\".stock-to\").innerHTML = 'none';\n        if (document.querySelector(\".price-from\").innerHTML ===\n            'undefined')\n            document.querySelector(\".price-from\").innerHTML = 'none';\n        if (document.querySelector(\".price-to\").innerHTML ===\n            'undefined')\n            document.querySelector(\".price-to\").innerHTML = 'none';\n    }\n    // ======================category / brand==========================\n    (0,_search_search__WEBPACK_IMPORTED_MODULE_4__.searchProductCard)('notNow');\n    (_a = document.querySelectorAll('.filters .checkbox')) === null || _a === void 0 ? void 0 : _a.forEach(function (elem) {\n        elem.addEventListener('click', function (e) {\n            filtering(e);\n        });\n    });\n    // ======================stock==========================\n    upperSliderAll[0].addEventListener('input', function () {\n        ISliderSelector(0, 'to');\n    });\n    lowerSliderAll[0].addEventListener('input', function () {\n        ISliderSelector(0, 'from');\n    });\n    // ======================price==========================\n    upperSliderAll[1].addEventListener('input', function () {\n        ISliderSelector(1, 'to');\n    });\n    lowerSliderAll[1].addEventListener('input', function () {\n        ISliderSelector(1, 'from');\n    });\n    if (trigger === 'now') {\n        filtering();\n        ISliderSelector(0, 'to');\n        ISliderSelector(0, 'from');\n        ISliderSelector(1, 'to');\n        ISliderSelector(1, 'from');\n    }\n    // =====================================================\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/filter/filter.ts?");

/***/ }),

/***/ "./online-store/src/components/filter/slider/slider.ts":
/*!*************************************************************!*\
  !*** ./online-store/src/components/filter/slider/slider.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\n/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.scss */ \"./online-store/src/components/filter/slider/slider.scss\");\n\nfunction slider() {\n    function dualRange(location) {\n        // 2 values  stock or price\n        var lowerSlider = document.querySelector(\".\".concat(location, \"-lower\"));\n        var upperSlider = document.querySelector(\".\".concat(location, \"-upper\"));\n        var valuesLowerSlider = document.querySelector(\".\".concat(location, \"-from\"));\n        var valuesUpperSlider = document.querySelector(\".\".concat(location, \"-to\"));\n        var lowerVal;\n        var upperVal;\n        upperSlider.oninput = function () {\n            lowerVal = parseInt(lowerSlider.value);\n            upperVal = parseInt(upperSlider.value);\n            if (upperVal < lowerVal) {\n                lowerSlider.value = \"\".concat(upperVal);\n                if (\"\".concat(lowerVal) === lowerSlider.min) {\n                    upperSlider.value = '0';\n                }\n            }\n            valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =\n                lowerSlider.value;\n            valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =\n                upperSlider.value;\n        };\n        lowerSlider.oninput = function () {\n            lowerVal = parseInt(lowerSlider.value);\n            upperVal = parseInt(upperSlider.value);\n            if (lowerVal > upperVal) {\n                upperSlider.value = \"\".concat(lowerVal);\n                if (\"\".concat(upperVal) === upperSlider.max) {\n                    lowerSlider.value = \"\".concat(parseInt(upperSlider.max));\n                }\n            }\n            valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =\n                lowerSlider.value;\n            valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =\n                upperSlider.value;\n        };\n    }\n    dualRange('price');\n    dualRange('stock');\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/filter/slider/slider.ts?");

/***/ }),

/***/ "./online-store/src/components/routing/routing.ts":
/*!********************************************************!*\
  !*** ./online-store/src/components/routing/routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Routing: () => (/* binding */ Routing),\n/* harmony export */   recoveryValue: () => (/* binding */ recoveryValue),\n/* harmony export */   searchParams: () => (/* binding */ searchParams)\n/* harmony export */ });\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../search/search */ \"./online-store/src/components/search/search.ts\");\n/* harmony import */ var vanilla_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-router */ \"./node_modules/vanilla-router/index.js\");\n/* harmony import */ var vanilla_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _404_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.scss */ \"./online-store/src/components/routing/404.scss\");\n/* harmony import */ var _details_productCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/productCard */ \"./online-store/src/components/details/productCard.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.. */ \"./online-store/src/index.ts\");\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _basket_basket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basket/basket */ \"./online-store/src/components/basket/basket.ts\");\n/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter/filter */ \"./online-store/src/components/filter/filter.ts\");\n/* harmony import */ var _basket_localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../basket/localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n\n\n\n\n\n\n\n\n\nfunction recoveryValue(value) {\n    var _a, _b, _c, _d;\n    var stockLowerSlider = document.querySelector('.stock-lower');\n    var stockUpperSlider = document.querySelector('.stock-upper');\n    var priceLowerSlider = document.querySelector('.price-lower');\n    var priceUpperSlider = document.querySelector('.price-upper');\n    var stockLowerValue = document.querySelector('.stock-from');\n    var stockUpperValue = document.querySelector('.stock-to');\n    var priceLowerValue = document.querySelector('.price-from');\n    var priceUpperValue = document.querySelector('.price-to');\n    var searchDom = document.querySelector('.search');\n    var sortDom = document.querySelector('.sort-input');\n    var filterCheck = document.querySelectorAll('.filters .checkbox');\n    var btnView = document.querySelector('.btn-switch-view');\n    var catalogProducts = document.querySelector('.catalog-products');\n    value = value.slice(value.indexOf('#') + 2);\n    var params = new URLSearchParams(value);\n    var category = params.has('category')\n        ? (_a = params.get('category')) === null || _a === void 0 ? void 0 : _a.split('+')\n        : [];\n    var brand = params.has('brand') ? (_b = params.get('brand')) === null || _b === void 0 ? void 0 : _b.split('+') : [];\n    var sort = params.has('sort') ? params.get('sort') : 'select';\n    var search = params.has('search') ? params.get('search') : '';\n    var stock = params.has('stock')\n        ? (_c = params.get('stock')) === null || _c === void 0 ? void 0 : _c.split('+')\n        : [stockLowerSlider.min, stockUpperSlider.max];\n    var price = params.has('price')\n        ? (_d = params.get('price')) === null || _d === void 0 ? void 0 : _d.split('+')\n        : [priceLowerSlider.min, priceUpperSlider.max];\n    var view = params.has('view') ? params.get('view') : 'inactive';\n    filterCheck.forEach(function (elem) {\n        if (elem.dataset.category && category.includes(elem.dataset.category)) {\n            elem.checked = true;\n        }\n        if (elem.dataset.brand && brand.includes(elem.dataset.brand)) {\n            elem.checked = true;\n        }\n    });\n    stockLowerValue.innerHTML =\n        stockLowerValue.dataset.from =\n            stockLowerSlider.value =\n                stock[0];\n    stockUpperValue.innerHTML =\n        stockUpperValue.dataset.to =\n            stockUpperSlider.value =\n                stock[1];\n    priceLowerValue.innerHTML =\n        priceLowerValue.dataset.from =\n            priceLowerSlider.value =\n                price[0];\n    priceUpperValue.innerHTML =\n        priceUpperValue.dataset.to =\n            priceUpperSlider.value =\n                price[1];\n    searchDom.value = search;\n    sortDom.value = sort;\n    if (view === 'active') {\n        btnView.classList.add('active');\n        catalogProducts.classList.add('active');\n        searchParams('set', 'view', 'active');\n    }\n    else {\n        btnView.classList.remove('active');\n        catalogProducts.classList.remove('active');\n        searchParams('del', 'view');\n    }\n    (0,_filter_filter__WEBPACK_IMPORTED_MODULE_7__.changeFilter)('now');\n    (0,_search_search__WEBPACK_IMPORTED_MODULE_0__.searchProductCard)('now');\n}\nfunction Routing() {\n    window.location.href =\n        window.location.hash.length === 0\n            ? new URL(\"#\", window.location.href).href\n            : window.location.href;\n    var basket = document.querySelector('.btn-basket');\n    var logo = document.querySelector('.logo');\n    var homeLinkBtn = document.querySelector('.not-found-home-link');\n    var header = document.querySelector('.header');\n    var main = document.querySelector('.main').children;\n    var catalog = document.querySelector('.catalog-products');\n    var productCardContainer = document.querySelector('.products__card-container');\n    var router = new (vanilla_router__WEBPACK_IMPORTED_MODULE_1___default())({\n        mode: 'hash',\n        page404: function () {\n            router.navigateTo('page404');\n        },\n    });\n    router.add('', function () {\n        main[0].style.display = 'flex';\n        main[1].style.display = 'none';\n        // (main[0] as HTMLElement).style.display = 'none';\n        // (main[1] as HTMLElement).style.display = 'flex';\n        main[2].style.display = 'none';\n        main[3].style.display = 'none';\n        header.classList.add('active');\n        basket.classList.remove('active');\n        (0,_cards_cards__WEBPACK_IMPORTED_MODULE_5__.CreateProductCard)(_cards_cards__WEBPACK_IMPORTED_MODULE_5__.productsData.products);\n        // if (!!window.location.hash) {\n        if (!!window.location.hash.toString()) {\n            recoveryValue(window.location.href.toString());\n        }\n    });\n    router.add('basket', function () {\n        main[0].style.display = 'none';\n        main[1].style.display = 'flex';\n        main[2].style.display = 'none';\n        main[3].style.display = 'none';\n        header.classList.remove('active');\n        basket.classList.add('active');\n    });\n    router.add('page404', function () {\n        main[0].style.display = 'none';\n        main[1].style.display = 'none';\n        main[2].style.display = 'none';\n        main[3].style.display = 'flex';\n        header.classList.remove('active');\n        basket.classList.remove('active');\n    });\n    router.add('products/(:any)', function (name) {\n        if (typeof +name === 'number') {\n            var nCard = +name;\n            if (nCard <= 100 && nCard > 0) {\n                (0,_details_productCard__WEBPACK_IMPORTED_MODULE_3__.renderDetails)(nCard);\n                main[0].style.display = 'none';\n                main[1].style.display = 'none';\n                main[2].style.display = 'flex';\n                main[3].style.display = 'none';\n                header.classList.remove('active');\n                basket.classList.remove('active');\n            }\n            else {\n                document.querySelector('.catalog-products').style.display = 'flex';\n                document.querySelector('.catalog-products').innerHTML =\n                    '<p class=\"not-found\">No products found <br> (ಥ﹏ಥ)</p>';\n                document.querySelector('.found .new').innerHTML = '0';\n                document.querySelector('.found').dataset.found = '0';\n                main[0].style.display = 'flex';\n                main[1].style.display = 'none';\n                main[2].style.display = 'none';\n                main[3].style.display = 'none';\n                header.classList.add('active');\n                basket.classList.remove('active');\n            }\n        }\n        else\n            alert('Please enter the product number');\n    });\n    router.addUriListener();\n    router.navigateTo('#');\n    logo === null || logo === void 0 ? void 0 : logo.addEventListener('click', function () {\n        var _a;\n        if (!!window.location.hash.toString()) {\n            router.navigateTo('#');\n            var recoveryUrl = (_a = (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_8__.localStorageUrl)('get')) !== null && _a !== void 0 ? _a : window.location.href.toString();\n            recoveryValue(recoveryUrl);\n        }\n    });\n    homeLinkBtn === null || homeLinkBtn === void 0 ? void 0 : homeLinkBtn.addEventListener('click', function () {\n        var _a;\n        if (!!window.location.hash.toString()) {\n            router.navigateTo('#');\n            var recoveryUrl = (_a = (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_8__.localStorageUrl)('get')) !== null && _a !== void 0 ? _a : window.location.href.toString();\n            recoveryValue(recoveryUrl);\n        }\n    });\n    basket === null || basket === void 0 ? void 0 : basket.addEventListener('click', function () {\n        var _a;\n        // basket.classList.contains('active')\n        //   ? (basket as HTMLElement).classList.remove('active')\n        //   : (basket as HTMLElement).classList.add('active');\n        if (basket.classList.contains('active')) {\n            basket.classList.remove('active');\n            basket.classList.add('start');\n            if (!!window.location.hash.toString()) {\n                router.navigateTo('#');\n                var recoveryUrl = (_a = (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_8__.localStorageUrl)('get')) !== null && _a !== void 0 ? _a : window.location.href.toString();\n                recoveryValue(recoveryUrl);\n            }\n            // window.location.href = new URL(\n            //   '#',\n            //   window.location.origin + window.location.pathname,\n            // ).href;\n            basket.classList.remove('start');\n        }\n        else {\n            basket.classList.add('active');\n            basket.classList.add('start');\n            window.location.href = new URL('#basket', window.location.origin + window.location.pathname).href;\n            basket.classList.remove('start');\n        }\n    });\n    function cardSelection(e) {\n        var nCard = +e.target.closest('.product-item').dataset.identifier;\n        var currentAddBtn = e.target.closest('.btn__addBasket');\n        if (\n        //добавил этот if отслеживаем клик по Add добавляем в карзину, меняем указатели на кнопках\n        e.target.closest('.btn__addBasket') &&\n            e !== null &&\n            e.target instanceof HTMLElement &&\n            e.target.dataset.action === 'Add') {\n            ___WEBPACK_IMPORTED_MODULE_4__.itemInBasket.push(_cards_cards__WEBPACK_IMPORTED_MODULE_5__.productsData.products[nCard - 1]);\n            e.target.dataset.action = 'Remove';\n            currentAddBtn.innerText = 'Remove';\n            (0,_basket_basket__WEBPACK_IMPORTED_MODULE_6__.renderBasket)();\n        }\n        else if (\n        //добавил этот if отслеживаем клик по Remove удаляем из карзины меняем указатели на кнопках\n        e.target.closest('.btn__addBasket') &&\n            e !== null &&\n            e.target instanceof HTMLElement &&\n            e.target.dataset.action === 'Remove') {\n            ___WEBPACK_IMPORTED_MODULE_4__.itemInBasket.forEach(function (el, index) {\n                if (el.id === nCard) {\n                    ___WEBPACK_IMPORTED_MODULE_4__.itemInBasket.splice(index, 1);\n                }\n            });\n            e.target.dataset.action = 'Add';\n            currentAddBtn.innerText = 'Add';\n            (0,_basket_basket__WEBPACK_IMPORTED_MODULE_6__.renderBasket)();\n        }\n        else if (\n        // (e.target! as HTMLElement).closest('.product-item') ||\n        e.target.closest('.btn__description')) {\n            window.location.href = new URL(\"#products/\".concat(nCard), window.location.origin + window.location.pathname).href;\n            (0,_details_productCard__WEBPACK_IMPORTED_MODULE_3__.renderDetails)(nCard);\n        }\n    }\n    catalog === null || catalog === void 0 ? void 0 : catalog.addEventListener('click', function (e) {\n        cardSelection(e);\n    });\n    productCardContainer === null || productCardContainer === void 0 ? void 0 : productCardContainer.addEventListener('click', function (e) {\n        if (e !== null &&\n            e.target instanceof HTMLElement &&\n            e.target.closest('.products__item-card')) {\n            var cardForRender = e.target.closest('.products__item-card');\n            if (e.target.closest('.btn-det')) {\n                window.location.href = new URL(\"#products/\".concat(+cardForRender.dataset.identifier), window.location.href).href;\n                (0,_details_productCard__WEBPACK_IMPORTED_MODULE_3__.renderDetails)(+cardForRender.dataset.identifier);\n            }\n        }\n    });\n}\nvar params = new URLSearchParams();\nfunction searchParams(action, key, value) {\n    // add - добавление, set - замена, del - удаление\n    if (!value) {\n        params.delete(key);\n    }\n    else if (typeof value === 'string') {\n        if (action === 'add') {\n            params.append(key, value);\n        }\n        else if (action === 'set') {\n            params.set(key, value);\n        }\n        else if (action === 'del') {\n            params.delete(key);\n        }\n    }\n    else {\n        if (value.length === 0) {\n            params.delete(key);\n        }\n        if (action === 'add') {\n            params.append(key, value.join('+'));\n        }\n        else if (action === 'set') {\n            params.set(key, value.join('+'));\n        }\n        else if (action === 'del') {\n            params.delete(key);\n        }\n    }\n    window.location.hash =\n        params.toString().length !== 0\n            ? '?' + params.toString()\n            : params.toString();\n    (0,_basket_localStorage__WEBPACK_IMPORTED_MODULE_8__.localStorageUrl)('set');\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/routing/routing.ts?");

/***/ }),

/***/ "./online-store/src/components/search/search.ts":
/*!******************************************************!*\
  !*** ./online-store/src/components/search/search.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchProductCard: () => (/* binding */ searchProductCard),\n/* harmony export */   searchResult: () => (/* binding */ searchResult)\n/* harmony export */ });\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/filter */ \"./online-store/src/components/filter/filter.ts\");\n/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort/sort */ \"./online-store/src/components/sort/sort.ts\");\n/* harmony import */ var _routing_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n\n\n\n\n// Массив для хранения результатов поиска\nvar searchResult = [];\n// Функция для выполнения поиска продуктов\nfunction searchProductCard(trigger, arraySearch) {\n    // Создание копии массива продуктов для поиска\n    var searchArrProducts = _cards_cards__WEBPACK_IMPORTED_MODULE_0__.productsData.products.slice();\n    // Функция для обновления результатов поиска\n    function updateSearch() {\n        // Получение элементов DOM для различных контейнеров\n        var search = document.querySelector('.search');\n        var categoryContainer = document.querySelector('.category-container');\n        var brandContainer = document.querySelector('.brand-container');\n        var stockContainer = document.querySelector('.stock-container');\n        var priceContainer = document.querySelector('.price-container');\n        // Обновление массива продуктов, если активны какие-либо фильтры\n        if (JSON.parse(categoryContainer.dataset.active) ||\n            JSON.parse(brandContainer.dataset.active) ||\n            JSON.parse(stockContainer.dataset.active) ||\n            JSON.parse(priceContainer.dataset.active)) {\n            searchArrProducts = _filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.slice();\n        }\n        // Обновление массива продуктов при срабатывании триггера 'now'\n        if (trigger === 'now' && arraySearch) {\n            searchArrProducts = arraySearch.slice();\n        }\n        else if (JSON.parse(categoryContainer.dataset.active) &&\n            JSON.parse(brandContainer.dataset.active) &&\n            JSON.parse(stockContainer.dataset.active) &&\n            JSON.parse(priceContainer.dataset.active)) {\n            searchArrProducts = _cards_cards__WEBPACK_IMPORTED_MODULE_0__.productsData.products.slice();\n        }\n        else if (_filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.length !== 0 &&\n            document.querySelector('.found').dataset.found !== '0') {\n            searchArrProducts = _filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.slice();\n        }\n        // Получение значения поискового запроса\n        var value = \"\".concat(search.value.trim().toLowerCase());\n        // Свойства продукта, по которым будет выполняться поиск\n        var searchProperties = [\n            'id',\n            'count',\n            'title',\n            'description',\n            'price',\n            'discountPercentage',\n            'rating',\n            'stock',\n            'brand',\n            'category',\n        ];\n        // Фильтрация массива продуктов по заданному поисковому запросу\n        searchArrProducts = searchArrProducts.filter(function (item) {\n            return searchProperties.some(function (prop) {\n                var propValue = String(item[prop])\n                    .trim()\n                    .toLowerCase();\n                return propValue.includes(value);\n            });\n        });\n        // Обновление параметров поиска в URL\n        if (value.length !== 0) {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('set', 'search', value);\n        }\n        else {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('del', 'search');\n        }\n        // Обновление результата поиска\n        searchResult = searchArrProducts.slice();\n        // Сортировка результатов поиска\n        searchArrProducts = (0,_sort_sort__WEBPACK_IMPORTED_MODULE_2__.SortProductCard)('now', searchArrProducts);\n        // Создание карточек продуктов или информации о неудачном поиске\n        if (trigger !== 'now') {\n            searchArrProducts.length === 0\n                ? (0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.CreateProductCard)('not-found')\n                : (0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.CreateProductCard)(searchArrProducts);\n            (0,_filter_filter__WEBPACK_IMPORTED_MODULE_1__.countView)(searchArrProducts);\n        }\n        if (trigger === 'now')\n            return searchArrProducts;\n    }\n    // Добавление слушателя события ввода для поисковой строки\n    if (trigger !== 'now')\n        document.querySelector('.search').addEventListener('input', updateSearch);\n    // Вызов функции обновления при триггере 'now'\n    if (trigger === 'now') {\n        return updateSearch();\n    }\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/search/search.ts?");

/***/ }),

/***/ "./online-store/src/components/sort/sort.ts":
/*!**************************************************!*\
  !*** ./online-store/src/components/sort/sort.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SortProductCard: () => (/* binding */ SortProductCard)\n/* harmony export */ });\n/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/filter */ \"./online-store/src/components/filter/filter.ts\");\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search */ \"./online-store/src/components/search/search.ts\");\n/* harmony import */ var _routing_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n\n\n\n\nfunction SortProductCard(trigger, arraySort) {\n    // 'now' для выпослнения сразу после фильтрации\n    var sortArray = document.querySelectorAll('.sort-input');\n    var sortArrproducts = [];\n    function update() {\n        var sortNone = getComputedStyle(sortArray[0]).display === 'none'\n            ? sortArray[0]\n            : sortArray[1];\n        var sort = getComputedStyle(sortArray[0]).display === 'none'\n            ? sortArray[1]\n            : sortArray[0];\n        sortNone.value = sort.value;\n        sortArrproducts = _cards_cards__WEBPACK_IMPORTED_MODULE_0__.productsData.products.slice(); // копирование полченного массива данных\n        if (trigger === 'now') {\n            sortArrproducts = arraySort.slice();\n        }\n        else if (_filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.length === 0 &&\n            _search_search__WEBPACK_IMPORTED_MODULE_2__.searchResult.length === 0 &&\n            document.querySelector('.found').dataset.found === '0') {\n            sortArrproducts = _cards_cards__WEBPACK_IMPORTED_MODULE_0__.productsData.products.slice();\n        }\n        else if (_filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.length !== 0 &&\n            document.querySelector('.found').dataset.found !== '0') {\n            sortArrproducts = _filter_filter__WEBPACK_IMPORTED_MODULE_1__.resultData.slice();\n        }\n        else if (_search_search__WEBPACK_IMPORTED_MODULE_2__.searchResult.length !== 0 &&\n            document.querySelector('.found').dataset.found !== '0') {\n            sortArrproducts = _search_search__WEBPACK_IMPORTED_MODULE_2__.searchResult.slice();\n        }\n        if (sort.value === 'rating-highest') {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('set', 'sort', 'rating-highest');\n            sortArrproducts.sort(function (a, b) { return b.rating - a.rating; }); // проверка на значение сортировки\n        }\n        if (sort.value === 'rating-lowest') {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('set', 'sort', 'rating-lowest');\n            sortArrproducts.sort(function (a, b) { return a.rating - b.rating; }); // проверка на значение сортировки\n        }\n        if (sort.value === 'price-highest') {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('set', 'sort', 'price-highest');\n            sortArrproducts.sort(function (a, b) { return b.price - a.price; }); // проверка на значение сортировки\n        }\n        if (sort.value === 'price-lowest') {\n            (0,_routing_routing__WEBPACK_IMPORTED_MODULE_3__.searchParams)('set', 'sort', 'price-lowest');\n            sortArrproducts.sort(function (a, b) { return a.price - b.price; }); // проверка на значение сортировки\n        }\n        if (document.querySelector('.found').dataset.found !== '0') {\n            (0,_cards_cards__WEBPACK_IMPORTED_MODULE_0__.CreateProductCard)(sortArrproducts); // вызов функции создания карточек\n        }\n    }\n    if (trigger !== 'now')\n        sortArray.forEach(function (elem) { return elem === null || elem === void 0 ? void 0 : elem.addEventListener('change', update); });\n    if (trigger === 'now') {\n        update();\n        return sortArrproducts;\n    }\n}\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/sort/sort.ts?");

/***/ }),

/***/ "./online-store/src/components/types/index.ts":
/*!****************************************************!*\
  !*** ./online-store/src/components/types/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   basketButton: () => (/* binding */ basketButton)\n/* harmony export */ });\nvar basketButton;\n(function (basketButton) {\n    basketButton[\"plus\"] = \"plus\";\n    basketButton[\"minus\"] = \"minus\";\n    basketButton[\"del\"] = \"del\";\n    basketButton[\"increment\"] = \"increment\";\n    basketButton[\"decrement\"] = \"decrement\";\n})(basketButton || (basketButton = {}));\n\n\n//# sourceURL=webpack://online-store/./online-store/src/components/types/index.ts?");

/***/ }),

/***/ "./online-store/src/index.ts":
/*!***********************************!*\
  !*** ./online-store/src/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemInBasket: () => (/* binding */ itemInBasket),\n/* harmony export */   total: () => (/* binding */ total)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./online-store/index.html\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ \"./online-store/styles.scss\");\n/* harmony import */ var _components_loader_loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.scss */ \"./online-store/src/components/loader/loader.scss\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button */ \"./online-store/src/components/button.ts\");\n/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/cards */ \"./online-store/src/components/cards/cards.ts\");\n/* harmony import */ var _components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/basket/localStorage */ \"./online-store/src/components/basket/localStorage.ts\");\n/* harmony import */ var _components_routing_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/routing/routing */ \"./online-store/src/components/routing/routing.ts\");\n/* harmony import */ var _components_sort_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sort/sort */ \"./online-store/src/components/sort/sort.ts\");\n/* harmony import */ var _components_basket_basket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/basket/basket */ \"./online-store/src/components/basket/basket.ts\");\nvar _a;\n\n\n// import './components/basket/basket.scss';\n\n// import './components/cards/cards.scss';\n// import './components/basket/basket';\n\n\n\n\n\n\n// import { renderBuyForm } from './components/basket/buyForm';\n(0,_components_cards_cards__WEBPACK_IMPORTED_MODULE_4__.loadProduct)(30);\n(0,_components_routing_routing__WEBPACK_IMPORTED_MODULE_6__.Routing)();\nvar buttons = new _components_button__WEBPACK_IMPORTED_MODULE_3__.Button();\nbuttons.listeners();\n(0,_components_sort_sort__WEBPACK_IMPORTED_MODULE_7__.SortProductCard)('notNow');\nvar intervalId = setInterval(function () {\n    if (document.querySelector('.stock-lower') &&\n        document.querySelector('.stock-upper') &&\n        document.querySelector('.price-lower') &&\n        document.querySelector('.price-upper') &&\n        document.querySelector('.search') &&\n        document.querySelector('.sort-input') &&\n        document.querySelectorAll('.filters .checkbox') &&\n        document.querySelector('.btn-container') &&\n        document.querySelector('.catalog-products')) {\n        clearInterval(intervalId);\n        (0,_components_routing_routing__WEBPACK_IMPORTED_MODULE_6__.recoveryValue)(window.location.href.toString());\n    }\n}, 1000);\nwindow.addEventListener('beforeunload', _components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__.addLocalStoragePage); // catch reload-page event\nwindow.addEventListener('load', _components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLocalStoragePage);\nwindow.addEventListener('beforeunload', _components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__.addLocalStorageBasket);\nwindow.addEventListener('load', _components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLocalStorageBasket);\nwindow.addEventListener('load', _components_basket_basket__WEBPACK_IMPORTED_MODULE_8__.renderBasket);\nvar itemInBasket = (_a = (0,_components_basket_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLocalStorageBasket)()) !== null && _a !== void 0 ? _a : [];\nvar total = {\n    totalPrice: 0,\n    totalElements: 0,\n};\n\n\n//# sourceURL=webpack://online-store/./online-store/src/index.ts?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5251a2634bda9333896f")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "online-store:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateonline_store"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./online-store/src/index.ts");
/******/ 	
/******/ })()
;