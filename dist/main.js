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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/nav */ \"./src/pages/nav.js\");\n\r\n\r\nfunction component(){\r\n    let contents = document.getElementById('content');\r\n    (0,_pages_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    return contents;\r\n}\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact(){\r\n    let contact = document.createElement('div');\r\n    contact.classList.add('content')\r\n    let phoneNum = document.createElement('p');\r\n    phoneNum.textContent = \"Phone Number: 080-856-456\";\r\n    contact.appendChild(phoneNum);\r\n    let emailAdd = document.createElement('p');\r\n    emailAdd.textContent = \"Email Address: abc@gmail.com\";\r\n    contact.appendChild(emailAdd);\r\n\r\n    \r\n    return contact\r\n}\r\n\r\nfunction contactEl() {\r\n\r\n    let main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(contact());\r\n   \r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactEl);\n\n//# sourceURL=webpack://restaurant-project/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet content = document.getElementById('content')\r\n\r\nfunction createHome(){\r\n    let homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('content');\r\n\r\n    let title = para(\"Exceptional Restaurant\");\r\n    homeDiv.appendChild(title);\r\n\r\n    let text1 = para(\"Founded with passion since 1980\");\r\n    homeDiv.appendChild(text1);\r\n\r\n    //Image tag\r\n    let image = document.createElement('img');\r\n    image.src=\"images/chef2.jpg\";\r\n    image.classList.add(\"image\");\r\n    homeDiv.appendChild(image);\r\n\r\n    //Order Button\r\n    let orderBtn = document.createElement('button');\r\n    orderBtn.textContent = \"Order Now\";\r\n    orderBtn.classList.add(\"order\");\r\n    homeDiv.appendChild(orderBtn);\r\n\r\n    //Visit Address\r\n    let visitParag = para(\"Visit us @ www.mayorwise.com.ng\");\r\n    visitParag.classList.add('visit')\r\n    homeDiv.appendChild(visitParag);\r\n\r\n\r\n\r\n    content.appendChild(homeDiv);\r\nreturn homeDiv;\r\n}\r\n\r\nfunction para(text){\r\n    let paraG = document.createElement('p');\r\n    paraG.textContent = text;\r\n    return paraG;\r\n}\r\n\r\n\r\n\r\nfunction createHomeEl() {\r\n\r\n    let main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHome());\r\n   \r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeEl);\n\n//# sourceURL=webpack://restaurant-project/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet content = document.getElementById('content')\r\nfunction menuListEl(){\r\n\r\n    let menuDiv = myDiv()\r\n    menuDiv.classList.add('grid');\r\n    menuDiv.classList.add('content')\r\n\r\n//Dish one\r\nlet section1 = myDiv()\r\nsection1.classList.add('section1')\r\nlet dishTitle = mypara(\"Dish Title: Pizza\");\r\nsection1.appendChild(dishTitle);\r\n let availEl = mypara(\"Availability: Yes\");\r\n section1.appendChild(availEl);\r\n let image1 = document.createElement('img');\r\n image1.src = \"images/food.jpg\"\r\n image1.classList.add('menuImage')\r\n section1.appendChild(image1);\r\n\r\n//Dish two\r\nlet section2 = myDiv()\r\nsection2.classList.add('section2')\r\nlet dishTitle2 = mypara(\"Dish Title: sausage\");\r\nsection2.appendChild(dishTitle2);\r\n let availEl2 = mypara(\"Availability: Yes\");\r\n section2.appendChild(availEl2);\r\n let image2 = document.createElement('img');\r\n image2.src = \"images/food2.jpg\" \r\n image2.classList.add('menuImage')\r\n section2.appendChild(image2);\r\n\r\n //Dish Three\r\n let section3 = myDiv()\r\nsection3.classList.add('section3')\r\nlet dishTitle3 = mypara(\"Dish Title:Rice\");\r\nsection3.appendChild(dishTitle3);\r\n let availEl3 = mypara(\"Availability: Yes\");\r\n section3.appendChild(availEl3);\r\n let image3 = document.createElement('img');\r\n image3.src = \"images/friedrice.jpg\"\r\n image3.classList.add('menuImage')\r\n section3.appendChild(image3);\r\n\r\n//Dish Four\r\n\r\n let section4 = myDiv()\r\nsection4.classList.add('section4')\r\nlet dishTitle4 = mypara(\"Dish Title: Grilled\");\r\nsection4.appendChild(dishTitle4);\r\n let availEl4 = mypara(\"Availability: Yes\");\r\n section4.appendChild(availEl4);\r\n let image4 = document.createElement('img');\r\n image4.src = \"images/grilledchicken.jpg\"\r\n image4.classList.add('menuImage')\r\n section4.appendChild(image4);\r\n\r\n\r\n\r\nmenuDiv.appendChild(section1);\r\nmenuDiv.appendChild(section2);\r\nmenuDiv.appendChild(section3);\r\nmenuDiv.appendChild(section4);\r\n\r\ncontent.appendChild(menuDiv)\r\nreturn menuDiv\r\n}\r\n\r\nfunction myDiv(){\r\n\r\n    let divEl = document.createElement('div')\r\nreturn divEl\r\n}\r\n\r\nfunction mypara(text){\r\nlet paraEl = document.createElement('p');\r\nparaEl.textContent = text\r\nreturn paraEl\r\n}\r\n\r\nfunction loadMenu() {\r\n    let main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(menuListEl());\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/nav.js":
/*!**************************!*\
  !*** ./src/pages/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/pages/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/pages/contact.js\");\n\r\n\r\n\r\n\r\nlet contents = document.getElementById('content')\r\nfunction headerFunction(){\r\nlet nav = document.createElement('nav');\r\nnav.classList.add('nav')\r\n\r\nlet header = document.createElement('h1');\r\nheader.textContent = 'Restaurant Page';\r\nnav.appendChild(header)\r\n\r\n//This creates the menulist\r\nlet home = document.createElement('ul');\r\nhome.classList.add('menu-list')\r\n\r\n//This creates the Home Button\r\nlet homeList = list('Home')\r\nhomeList.classList.add('home');\r\nhome.appendChild(homeList);\r\nhomeList.classList.add('button-nav')\r\nhomeList.addEventListener(\"click\", (e)=>{\r\n\r\n    if(e.target.classList.contains(\"active\"))return;\r\n    setActiveButton(homeList);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\n//This creates the Home Button\r\nlet menuList = list('Menu');\r\nmenuList.classList.add('menu');\r\nmenuList.classList.add('button-nav')\r\nhome.appendChild(menuList);\r\nmenuList.addEventListener(\"click\", (e)=>{\r\n\r\n    if(e.target.classList.contains(\"active\"))return;\r\n        setActiveButton(menuList);\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n//This creates the contact Button\r\nlet contactList = list('Contact');\r\ncontactList.classList.add('contact');\r\ncontactList.classList.add('button-nav')\r\nhome.appendChild(contactList)\r\ncontactList.addEventListener(\"click\", (e)=>{\r\n\r\n    if(e.target.classList.contains(\"active\"))return;\r\n        setActiveButton(contactList);\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\nnav.appendChild(home);\r\n\r\n\r\n\r\nfunction createMain() {\r\n    const main = document.createElement(\"main\");\r\n    //main.classList.add(\"main\");\r\n    main.setAttribute(\"id\", \"main\");\r\n    return main;\r\n  }\r\n\r\n  nav.appendChild(createMain()) \r\nreturn nav\r\n}\r\n\r\nfunction list(text){\r\n    let myList = document.createElement('li');\r\n    myList.textContent = text;\r\n    return myList;\r\n}\r\n\r\n\r\n//This functions is responsible for making our tab module display only once when clicked\r\n\r\nfunction setActiveButton(button){\r\n    const buttons = document.querySelectorAll(\".button-nav\");\r\n\r\n    buttons.forEach((button)=>{\r\n        if(button !== this){\r\n            button.classList.remove(\"active\")\r\n        }\r\n    });\r\n\r\n    button.classList.add(\"active\");\r\n}\r\n\r\n\r\n\r\nlet whatToExport = ()=>{\r\n    let contents = document.getElementById('content')\r\n    contents.appendChild(headerFunction())\r\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whatToExport);\n\n//# sourceURL=webpack://restaurant-project/./src/pages/nav.js?");

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