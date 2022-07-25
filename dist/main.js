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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/modules/fitlers.js":
/*!********************************!*\
  !*** ./src/modules/fitlers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (users, value) => {\r\n  return users.filter((userItem) => {\r\n    console.log(userItem.name);\r\n    return userItem.name.includes(value);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://test/./src/modules/fitlers.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (term) => {\r\n  return fetch(`./db/users.json?${term ? `search=${term}` : \"\"}`).then(\r\n    (response) => {\r\n      return response.json();\r\n    }\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://test/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderUsers */ \"./src/modules/renderUsers.js\");\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_renderUsers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://test/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUsers */ \"./src/modules/renderUsers.js\");\n\r\nfunction modal() {\r\n  const modal = document.querySelector(\".modal\");\r\n  const btnClose = modal.querySelector(\".modal__btn-close\");\r\n  const modalDialog = modal.querySelectorAll(\".modal__dialog\");\r\n\r\n  document.addEventListener(\"click\", openCard);\r\n  btnClose.addEventListener(\"click\", function () {\r\n    modal.classList.remove(\"modal_active\");\r\n  });\r\n\r\n  function openCard(e) {\r\n    if (e.target.closest(\".user\")) {\r\n      console.log(e.target);\r\n      modalDialog.forEach((itam) => {\r\n        console.log(itam);\r\n        modal.classList.toggle(\"modal_active\");\r\n      });\r\n    } else if (!e.target.closest(\".modal__dialog\")) {\r\n      modal.classList.remove(\"modal_active\");\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://test/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/renderUsers.js":
/*!************************************!*\
  !*** ./src/modules/renderUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderUsers = (users) => {\r\n  const userWrapper = document.querySelector(\".cards\");\r\n  const modal = userWrapper.querySelector(\".modal\");\r\n  const modalDialog = modal.querySelectorAll(\".modal__dialog\");\r\n\r\n  users.forEach((user, indexUser) => {\r\n    userWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <div class=\"user\">\r\n      <p class=\"user__name\">${user.name}</p>\r\n      <div class=\"user__phone\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"16\"\r\n          height=\"16\"\r\n          fill=\"currentColor\"\r\n          class=\"user__icon\"\r\n          viewBox=\"0 0 16 16\"\r\n          stroke=\"#DD2CE9\"\r\n        >\r\n          <path\r\n            d=\"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z\"\r\n          />\r\n          <path d=\"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\" />\r\n        </svg>\r\n\r\n        <p class=\"user__text\">${user.phone}</p>\r\n      </div>\r\n     \r\n      <div class=\"user__mail\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"16\"\r\n          height=\"16\"\r\n          fill=\"currentColor\"\r\n          class=\"user__icon\"\r\n          viewBox=\"0 0 16 16\"\r\n          stroke=\"#DD2CE9\"\r\n        >\r\n          <path\r\n            d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z\"\r\n          />\r\n        </svg>\r\n        <a class=\"user__link\" href=\"#\">${user.email}</a>\r\n      </div>\r\n    \r\n    </div>\r\n\r\n  \r\n   `\r\n    );\r\n  });\r\n  modalDialog.forEach((item, indexModal) => {\r\n    users.forEach((user, indexUser) => {\r\n      if (indexUser == indexModal) {\r\n        item.insertAdjacentHTML(\r\n          \"beforeend\",\r\n          `\r\n   <h2 class=\"modal__title\">${user.name}</h2>\r\n   <div class=\"details\">\r\n     <div class=\"details__information\">\r\n       <p>Телефон:</p>\r\n       <p>Почта:</p>\r\n       <p>Дата приема:</p>\r\n       <p>Должность:</p>\r\n       <p>Подразделение:</p>\r\n     </div>\r\n     <div class=\"details__person\">\r\n       <a class=\"details__link\" href=\"tel:${user.phone}\"> ${user.phone}</a>\r\n       <a class=\"details__link\" href=\"mailto: ${user.email}\">${user.email}</a>\r\n       <p> ${user.hire_date}</p>\r\n       <p> ${user.position_name}</p>\r\n       <p> ${user.department}</p>\r\n     </div>\r\n   </div>\r\n   <div class=\"info\">\r\n     <h3 class=\"info__title\">Дополнительная информация:</h3>\r\n     <div class=\"info__text\">\r\n       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo similique,\r\n       dolore consequatur, eos delectus doloribus vero distinctio voluptate\r\n       possimus ratione totam vitae nulla.\r\n     </div>\r\n   </div>\r\n\r\n `\r\n        );\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUsers);\r\n\n\n//# sourceURL=webpack://test/./src/modules/renderUsers.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderUsers */ \"./src/modules/renderUsers.js\");\n/* harmony import */ var _fitlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitlers */ \"./src/modules/fitlers.js\");\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector(\".search__input\");\r\n\r\n  searchInput.addEventListener(\"input\", (e) => {\r\n    const value = e.target.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderUsers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_fitlers__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://test/./src/modules/search.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;