/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cost-calculator/edit.js":
/*!*************************************!*\
  !*** ./src/cost-calculator/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/cost-calculator/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: "calculator"
  }), " UniCamp Cost Calculator 2024"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Cost calculator will appear here!"));
}

/***/ }),

/***/ "./src/cost-calculator/index.js":
/*!**************************************!*\
  !*** ./src/cost-calculator/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/cost-calculator/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/cost-calculator/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/cost-calculator/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/cost-calculator/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/cost-calculator/save.js":
/*!*************************************!*\
  !*** ./src/cost-calculator/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Camp Cost Calculator"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("noscript", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "The camp cost calculator could not be loaded. Contact us for more information about rates.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "intro",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Camp rates are based on a variety of factors, including participation in CalFresh and household income."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Information you input into this calculator is not saved. When you register for camp, we will ask for more details (e.g. case numbers and detailed income information)."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button"
  }, "See your camp rate \u2192")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "dcfs-1",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Does the camper have an active LA County DCFS case number?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--inline",
    value: "yes"
  }, "Yes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button",
    value: "no"
  }, "No")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "dcfs-2",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Is the camper in a Short-Term Residential Therapeutic Program (STRTP)?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--inline",
    value: "yes"
  }, "Yes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button",
    value: "no"
  }, "No")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "dcfs-qualify",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "You likely ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "qualify to attend UniCamp for FREE"), " on a DCFS campership. These camperships are subject to DCFS approval and are only available ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "for one session per child, per summer"), ", even across programs other than UniCamp. (For instance, if your camper goes to UniCamp and another summer camp, you will only be able to use the campership on ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "one"), " of those programs.)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Additional DCFS-specific information (e.g. case number, case worker, and contact info) will be required on the UniCamp application and, if you choose to use the DCFS campership with UniCamp, will be submitted to DCFS for verification. If DCFS does not approve your campership, you will be required to pay the normal rates prior to attending camp."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button"
  }, "See my cost without a DCFS campership \u2192")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "foster",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Is the camper currently in the foster system?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--inline",
    value: "yes"
  }, "Yes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button",
    value: "no"
  }, "No")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "program",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Does the camper currently receive benefits from CalFresh, CalWORKS, FDPIR, or WIS?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--inline",
    value: "yes"
  }, "Yes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button",
    value: "no"
  }, "No")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "income",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "What is your household\u2019s combined ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "annual"), " income?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Include all household members, including children, and all income sources, including work, child support/alimony, payments from pensions/retirement/social security, and any other earnings."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "$\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: "30000",
    min: "0",
    max: "1000000000",
    step: "1",
    required: true,
    name: "income"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "How many ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "children"), " are in your household?")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: "1",
    min: "1",
    max: "20",
    required: true,
    name: "household-size-children"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "How many ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "adults"), " are in your household?")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: "1",
    min: "1",
    max: "20",
    required: true,
    name: "household-size-adults"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "button",
    type: "submit",
    value: "Continue \u2192"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "error",
    style: "color: red; display: none;"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Error:"), " Fill out both fields above with whole numbers before proceeding."))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "final-low",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Your camper qualifies for the ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "low rate of $239"), " (or $360 for The Village Session)."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "The full cost to UniCamp is $1300 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:registration@unicamp.org"
  }, "registration@unicamp.org"), " for more information.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-action": "start-over",
    className: "button button--secondary"
  }, "\u2190 Start over")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "final-medium",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Your camper qualifies for the ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "medium rate of $360"), " (or $550 for The Village Session)."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "The full cost to UniCamp is $1300 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:registration@unicamp.org"
  }, "registration@unicamp.org"), " for more information.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-action": "start-over",
    className: "button button--secondary"
  }, "\u2190 Start over")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "final-high",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Your camper qualifies for the ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "high rate of $600"), " (or $800 for The Village Session)."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "The full cost to UniCamp is $1300 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:registration@unicamp.org"
  }, "registration@unicamp.org"), " for more information.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-action": "start-over",
    className: "button button--secondary"
  }, "\u2190 Start over")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-step": "error",
    style: "display: none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Sorry, we encountered an error. Start a camper registration or reach out to us for more information about rates. Reduced rates are offered automatically during the camper registration process for those who qualify."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-action": "start-over",
    className: "button button--secondary"
  }, "\u2190 Start over")));
}

/***/ }),

/***/ "./src/cost-calculator/editor.scss":
/*!*****************************************!*\
  !*** ./src/cost-calculator/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/cost-calculator/style.scss":
/*!****************************************!*\
  !*** ./src/cost-calculator/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/cost-calculator/block.json":
/*!****************************************!*\
  !*** ./src/cost-calculator/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"unicamp/cost-calculator","version":"2023.1","title":"UniCamp Cost Calculator","category":"widgets","icon":"calculator","description":"Displays an interactive calculator for camp rates","example":{},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"cost-calculator","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"cost-calculator/index": 0,
/******/ 			"cost-calculator/style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkunicamp_blocks"] = globalThis["webpackChunkunicamp_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["cost-calculator/style-index"], () => (__webpack_require__("./src/cost-calculator/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map