/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/asset/bg.jpg */ "./src/asset/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 100%;
  height: 100vh;
}

#content {
  padding: 2rem;
  cursor: default;
  background-image: linear-gradient(
      225deg,
      rgba(0, 0, 0, 0.5),
      rgba(82, 45, 35, 0.7)
    ),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #fff;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  position: relative;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "logo tab tab tab purchase"
    ". title title title ."
    ". tabcontent tabcontent tabcontent .";
}

#content {
  --coffee-color-one: #884a39;
  --focus-color: #f2c380;
}

@media only screen and (min-width: 1000px) {
  #content {
    padding: 6rem;
  }
}

#content svg {
  grid-area: logo;
  width: 5rem;
  display: block;
  z-index: 3;
  height: 5rem;
  transition: all ease-in 400ms;
  filter: drop-shadow(0px 0px 10px var(--focus-color));
}

#content svg:hover {
  stroke: var(--focus-color) !important;
  filter: drop-shadow(0px 0px 20px var(--focus-color));
}

#content button {
  grid-area: purchase;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: var(--coffee-color-one);
  outline: none;
  border: 0;
  transition: all ease-in 400ms;
  color: var(--focus-color);
  border-radius: 20px;
}

.buttontab {
  background-color: var(--focus-color) !important;
  color: #fff !important;
  filter: drop-shadow(0px 0px 10px var(--focus-color));
}

#content button:hover {
  background-color: var(--focus-color);
  color: #fff;
  filter: drop-shadow(0px 0px 10px var(--focus-color));
}

#content > h1 {
  font-size: 8rem;
  grid-area: title;
  transition: all ease-in 300ms;
}

#content > h1:hover {
  color: var(--focus-color);
  filter: drop-shadow(0px 0px 20px var(--focus-color));
}

#content div.tabcontent {
  grid-area: tabcontent;
  align-self: self-start;
}

#content .tab {
  grid-area: tab;
}

#content .tab .tab1,
#content .tab .tab2,
#content .tab .tab3 {
  margin: 1.1rem;
  padding: 1.3rem;
}

#content .tab .tab2,
#content .tab .tab3 {
  margin-left: 2rem;
}

#content .tabcontent .containeropenandreserv {
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}

#content .tabcontent .containeropenandreserv .openinghours {
  background-color: #44251d;
  padding: 3rem;
  border-radius: 20px 0 0 20px;
  min-height: 100%;
}

#content .tabcontent .containeropenandreserv .openinghours h1 {
  margin-bottom: 1rem;
}

#content
  .tabcontent
  .containeropenandreserv
  .openinghours
  ul
  li:not(
    #content
      .tabcontent
      .containeropenandreserv
      .openinghours
      ul
      li:last-of-type
  ) {
  margin-bottom: 1rem;
}
#content .tabcontent .containeropenandreserv .openinghours ul li {
  list-style: none;
}

#content .tabcontent .containeropenandreserv .tablereserve {
  background-color: #311b14;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 0 20px 20px 0;
  padding: 1rem;
}

#content .tabcontent .card h1,
#content .tabcontent .card p {
  font-size: 1rem;
  text-align: center;
}

#content .tabcontent .tab3 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
}

#content .tabcontent {
  display: flex;
  flex-direction: row;
  justify-items: center;
  width: 100%;
  height: 100%;
  align-items: center;
}

@media only screen and (max-width: 1328px) {
  #content .tabcontent {
    flex-direction: column;
  }
  #content .tabcontent .card {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

#content .card {
  background-color: var(--coffee-color-one);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 1rem;
  padding: 1rem;
}

#content .card > img {
  max-width: 50%;
  border-radius: 20px;
}

#content .card > .container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf;;;;;2CAK0B;EAC1B,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,+BAA+B;EAC/B,qCAAqC;EACrC;;;0CAGwC;AAC1C;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE,eAAe;EACf,WAAW;EACX,cAAc;EACd,UAAU;EACV,YAAY;EACZ,6BAA6B;EAC7B,oDAAoD;AACtD;;AAEA;EACE,qCAAqC;EACrC,oDAAoD;AACtD;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,yCAAyC;EACzC,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,+CAA+C;EAC/C,sBAAsB;EACtB,oDAAoD;AACtD;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,oDAAoD;AACtD;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,oDAAoD;AACtD;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;EAGE,cAAc;EACd,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;;;;;;;;;;EAaE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;;EAEE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;AACF;;AAEA;EACE,yCAAyC;EACzC,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  max-width: 100%;\n  height: 100vh;\n}\n\n#content {\n  padding: 2rem;\n  cursor: default;\n  background-image: linear-gradient(\n      225deg,\n      rgba(0, 0, 0, 0.5),\n      rgba(82, 45, 35, 0.7)\n    ),\n    url(../src/asset/bg.jpg);\n  color: #fff;\n  min-height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  max-width: 100%;\n  position: relative;\n  justify-items: center;\n  align-items: center;\n  display: grid;\n  grid-template-rows: 1fr 3fr 3fr;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-areas:\n    \"logo tab tab tab purchase\"\n    \". title title title .\"\n    \". tabcontent tabcontent tabcontent .\";\n}\n\n#content {\n  --coffee-color-one: #884a39;\n  --focus-color: #f2c380;\n}\n\n@media only screen and (min-width: 1000px) {\n  #content {\n    padding: 6rem;\n  }\n}\n\n#content svg {\n  grid-area: logo;\n  width: 5rem;\n  display: block;\n  z-index: 3;\n  height: 5rem;\n  transition: all ease-in 400ms;\n  filter: drop-shadow(0px 0px 10px var(--focus-color));\n}\n\n#content svg:hover {\n  stroke: var(--focus-color) !important;\n  filter: drop-shadow(0px 0px 20px var(--focus-color));\n}\n\n#content button {\n  grid-area: purchase;\n  padding: 1rem;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  background-color: var(--coffee-color-one);\n  outline: none;\n  border: 0;\n  transition: all ease-in 400ms;\n  color: var(--focus-color);\n  border-radius: 20px;\n}\n\n.buttontab {\n  background-color: var(--focus-color) !important;\n  color: #fff !important;\n  filter: drop-shadow(0px 0px 10px var(--focus-color));\n}\n\n#content button:hover {\n  background-color: var(--focus-color);\n  color: #fff;\n  filter: drop-shadow(0px 0px 10px var(--focus-color));\n}\n\n#content > h1 {\n  font-size: 8rem;\n  grid-area: title;\n  transition: all ease-in 300ms;\n}\n\n#content > h1:hover {\n  color: var(--focus-color);\n  filter: drop-shadow(0px 0px 20px var(--focus-color));\n}\n\n#content div.tabcontent {\n  grid-area: tabcontent;\n  align-self: self-start;\n}\n\n#content .tab {\n  grid-area: tab;\n}\n\n#content .tab .tab1,\n#content .tab .tab2,\n#content .tab .tab3 {\n  margin: 1.1rem;\n  padding: 1.3rem;\n}\n\n#content .tab .tab2,\n#content .tab .tab3 {\n  margin-left: 2rem;\n}\n\n#content .tabcontent .containeropenandreserv {\n  display: flex;\n  flex-direction: row;\n  min-width: 100%;\n  min-height: 100%;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: center;\n}\n\n#content .tabcontent .containeropenandreserv .openinghours {\n  background-color: #44251d;\n  padding: 3rem;\n  border-radius: 20px 0 0 20px;\n  min-height: 100%;\n}\n\n#content .tabcontent .containeropenandreserv .openinghours h1 {\n  margin-bottom: 1rem;\n}\n\n#content\n  .tabcontent\n  .containeropenandreserv\n  .openinghours\n  ul\n  li:not(\n    #content\n      .tabcontent\n      .containeropenandreserv\n      .openinghours\n      ul\n      li:last-of-type\n  ) {\n  margin-bottom: 1rem;\n}\n#content .tabcontent .containeropenandreserv .openinghours ul li {\n  list-style: none;\n}\n\n#content .tabcontent .containeropenandreserv .tablereserve {\n  background-color: #311b14;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  border-radius: 0 20px 20px 0;\n  padding: 1rem;\n}\n\n#content .tabcontent .card h1,\n#content .tabcontent .card p {\n  font-size: 1rem;\n  text-align: center;\n}\n\n#content .tabcontent .tab3 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-items: center;\n  align-items: center;\n}\n\n#content .tabcontent {\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\n@media only screen and (max-width: 1328px) {\n  #content .tabcontent {\n    flex-direction: column;\n  }\n  #content .tabcontent .card {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n}\n\n#content .card {\n  background-color: var(--coffee-color-one);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  align-items: center;\n  border-radius: 20px;\n  margin-right: 1rem;\n  padding: 1rem;\n}\n\n#content .card > img {\n  max-width: 50%;\n  border-radius: 20px;\n}\n\n#content .card > .container {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/inital-page.js":
/*!****************************!*\
  !*** ./src/inital-page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab1Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1Content */ "./src/tab1Content.js");


/**
 *
 * @param {Function} callBackFuntion
 */
let setUp = (callBackFuntion) => {
  let contentElement = document.querySelector("#content");
  let tabContentElement = document.createElement("div");

  contentElement.append(
    createSvgElement(),
    createHeaderTitle(),
    tabContentElement,
    createPurchaseButton(),
    createTabButton()
  );
  tabContentElement.setAttribute("class", "tabcontent");
  tabContentElement.append((0,_tab1Content__WEBPACK_IMPORTED_MODULE_0__["default"])());
  callBackFuntion();
};

/**
 *
 * @returns {HTMLHeadingElement}
 */
let createHeaderTitle = () => {
  let headerTitle = document.createElement("h1");
  headerTitle.classList.add("header");
  headerTitle.textContent = "Losama";
  return headerTitle;
};

/**
 * @returns {HTMLDivElement}
 */
let createTabButton = () => {
  // <div class="tab">
  //       <button class="tab1">tab1</button>
  //       <button class="tab2">tab2</button>
  //       <button class="tab3">tab3</button>
  //     </div>
  let tab = document.createElement("div");
  tab.classList.add("tab");
  let tabButton1 = document.createElement("button");
  tabButton1.classList.add("tab1");
  tabButton1.textContent = "tab1";
  tabButton1.classList.add("class", "buttontab");
  let tabButton2 = document.createElement("button");
  tabButton2.classList.add("tab2");
  tabButton2.textContent = "tab2";
  let tabButton3 = document.createElement("button");
  tabButton3.classList.add("tab3");
  tabButton3.textContent = "tab3";
  tab.append(tabButton1, tabButton2, tabButton3);
  return tab;
};

/**
 *
 * @returns {HTMLParagraphElement}
 */
let createPurchaseButton = () => {
  let logoButton = document.createElement("button");
  logoButton.classList.add("purchase");
  logoButton.textContent = "Purchase";
  return logoButton;
};

/**
 *
 * @returns {SVGElement}
 */
let createSvgElement = () => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "white");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "feather feather-coffee");
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M18 8h1a4 4 0 0 1 0 8h-1");
  let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z");
  let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", "6");
  line1.setAttribute("y1", "1");
  line1.setAttribute("x2", "6");
  line1.setAttribute("y2", "4");
  let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", "10");
  line2.setAttribute("y1", "1");
  line2.setAttribute("x2", "10");
  line2.setAttribute("y2", "4");
  let line3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line3.setAttribute("x1", "14");
  line3.setAttribute("y1", "1");
  line3.setAttribute("x2", "14");
  line3.setAttribute("y2", "4");
  svg.append(path, path2, line1, line2, line3);
  return svg;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUp);


/***/ }),

/***/ "./src/tab1Content.js":
/*!****************************!*\
  !*** ./src/tab1Content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @returns {HTMLParagraphElement}
 */
let createParagraphText = () => {
  let paragraph = document.createElement("p");
  paragraph.textContent = ` Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nihil ratione doloremque tempore minus quis beatae?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
       ducimus earum ea, qui itaque eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quis quod eius, reiciendis ipsa, explicabo tenetur est sint accusantium cupiditate tempore qui consequatur similique velit! Molestias vel iusto praesentium temporibus!`;
  return paragraph;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createParagraphText);


/***/ }),

/***/ "./src/tab2Content.js":
/*!****************************!*\
  !*** ./src/tab2Content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_asset_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/asset/img1.jpg */ "./src/asset/img1.jpg");
/* harmony import */ var _src_asset_img2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/asset/img2.jpg */ "./src/asset/img2.jpg");
/* harmony import */ var _src_asset_img3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/asset/img3.jpg */ "./src/asset/img3.jpg");




/**
 *
 * @returns {Array<HTMLDivElement>}
 */
let createTab2Content = () => {
  let prices = ["20.0$", "40.0$", "60.0$"];
  let imgSources = [_src_asset_img1_jpg__WEBPACK_IMPORTED_MODULE_0__, _src_asset_img2_jpg__WEBPACK_IMPORTED_MODULE_1__, _src_asset_img3_jpg__WEBPACK_IMPORTED_MODULE_2__];
  let nameOfCoffees = ["Brewed Coffee", "Cappuccino", "Cold Brew"];
  let listOfCardCreated = [];
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgOfCoffeeCard = document.createElement("img");
    imgOfCoffeeCard.src = `${imgSources[i]}`;

    let textFlexContainer = document.createElement("div");
    textFlexContainer.classList.add("container");

    let nameOfCoffee = document.createElement("h1");
    nameOfCoffee.textContent = nameOfCoffees[i];

    let priceOfCoffee = document.createElement("p");
    priceOfCoffee.textContent = prices[i];

    textFlexContainer.append(nameOfCoffee, priceOfCoffee);

    card.append(imgOfCoffeeCard, textFlexContainer);
    listOfCardCreated.push(card);
  }
  return listOfCardCreated;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTab2Content);


/***/ }),

/***/ "./src/tab3Content.js":
/*!****************************!*\
  !*** ./src/tab3Content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @returns {{tableReservation:HTMLDivElement,openingHours:HTMLDivElement}}
 */

let createSchedulesView = () => {
  //table reservation box
  let tableReservation = document.createElement("div");
  tableReservation.classList.add("tablereserve");

  let tableReservationTitle = document.createElement("h1");
  tableReservationTitle.classList.add("tableReservation");
  tableReservationTitle.textContent = "TABLE RESERVATION...";

  let phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(008) 01869018907";

  let contantEmail = document.createElement("p");
  contantEmail.textContent = "eyoelseleshizeyohannes@gmail.com";

  let contactAddress = document.createElement("p");
  contactAddress.textContent = "08744,Sadar pur 8973";

  tableReservation.append(
    tableReservationTitle,
    phoneNumber,
    contantEmail,
    contactAddress
  );

  //open hours box
  let openingHours = document.createElement("div");
  openingHours.classList.add("openinghours");

  let openingHoursTilte = document.createElement("h1");
  openingHoursTilte.textContent = "OPENING HOURS...";

  let weekSchedule = document.createElement("ul");

  let listOfDaysInWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let listOfTimeAvailable = [
    "9:00 - 18:00",
    "10:00 - 18:00",
    "11:00 - 18:00",
    "12:00 - 18:00",
    "14:00 - 18:00",
    "16:00 - 18:00",
    "CLOSED",
  ];

  for (let i = 0; i < 7; i++) {
    let day = document.createElement("li");
    day.textContent = `${listOfDaysInWeek[i]} ${listOfTimeAvailable[i]}`;
    weekSchedule.appendChild(day);
  }

  openingHours.append(openingHoursTilte, weekSchedule);

  let containerOfOpeningAndReserv = document.createElement("div");
  containerOfOpeningAndReserv.classList.add("containeropenandreserv");
  containerOfOpeningAndReserv.append(openingHours, tableReservation);
  return containerOfOpeningAndReserv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSchedulesView);


/***/ }),

/***/ "./src/asset/bg.jpg":
/*!**************************!*\
  !*** ./src/asset/bg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg.jpg";

/***/ }),

/***/ "./src/asset/img1.jpg":
/*!****************************!*\
  !*** ./src/asset/img1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img1.jpg";

/***/ }),

/***/ "./src/asset/img2.jpg":
/*!****************************!*\
  !*** ./src/asset/img2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img2.jpg";

/***/ }),

/***/ "./src/asset/img3.jpg":
/*!****************************!*\
  !*** ./src/asset/img3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img3.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _inital_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inital-page */ "./src/inital-page.js");
/* harmony import */ var _tab2Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2Content */ "./src/tab2Content.js");
/* harmony import */ var _tab3Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3Content */ "./src/tab3Content.js");
/* harmony import */ var _tab1Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab1Content */ "./src/tab1Content.js");






/**
 * @type {HTMLImageElement}
 */

//Declarations
let tabAlreadyClicked = "tab1";

//made this so that when the elements are drawn by inital-page.js then it runs
let callAfterInitialSetup = () => {
  //get element
  let tabButton1 = document.querySelector("#content .tab button.tab1");
  let tabButton2 = document.querySelector("#content .tab button.tab2");
  let tabButton3 = document.querySelector("#content .tab button.tab3");
  let tabContent = document.querySelector("#content div.tabcontent");

  //listeners
  tabButton1.addEventListener("click", () => {
    tabClicked(tabButton1);
  });

  tabButton2.addEventListener("click", () => {
    tabClicked(tabButton2);
  });

  tabButton3.addEventListener("click", () => {
    tabClicked(tabButton3);
  });

  //Functions
  /**
   *
   * @param {HTMLButtonElement} button
   */
  let tabClicked = (button) => {
    let buttonName = button.textContent;
    console.log(buttonName);
    switch (buttonName) {
      case "tab1":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        console.log(buttonName, tabAlreadyClicked);
        tabButton1.classList.add("buttontab");
        tabAlreadyClicked = "tab1";
        //creates a paragraph if clicked
        //p.s to save code duplication function is taken from inital-page.js
        let paragraph = (0,_tab1Content__WEBPACK_IMPORTED_MODULE_4__["default"])();

        tabContent.append(paragraph);
        break;
      case "tab2":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        tabButton2.classList.add("buttontab");
        tabAlreadyClicked = "tab2";
        //creating card elements
        let listOfCreatedCards = (0,_tab2Content__WEBPACK_IMPORTED_MODULE_2__["default"])();
        // console.log(tabAlreadyClicked);
        listOfCreatedCards.forEach((value) => {
          tabContent.append(value);
        });
        break;
      case "tab3":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        console.log(buttonName, tabAlreadyClicked);
        tabButton3.classList.add("buttontab");
        tabAlreadyClicked = "tab3";

        //creating schedules
        let schedulesView = (0,_tab3Content__WEBPACK_IMPORTED_MODULE_3__["default"])();

        tabContent.append(schedulesView);
        break;
      default:
        console.log("Some thing wrong was in tab buttons", buttonName);
    }
  };

  let clearAlreadyClickedTabButtons = () => {
    if (tabButton1.classList.contains("buttontab")) {
      tabButton1.classList.remove("buttontab");
    } else if (tabButton2.classList.contains("buttontab")) {
      tabButton2.classList.remove("buttontab");
    } else if (tabButton3.classList.contains("buttontab")) {
      tabButton3.classList.remove("buttontab");
    }

    while (tabContent.hasChildNodes()) {
      tabContent.removeChild(tabContent.firstChild);
    }
  };
};

//initial Html setup
(0,_inital_page__WEBPACK_IMPORTED_MODULE_1__["default"])(callAfterInitialSetup);

})();

/******/ })()
;
//# sourceMappingURL=bundlecf43ade51271fc7269ba.js.map