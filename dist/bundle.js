/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Student__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Student___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_Student__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Employee__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Employee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_Employee__);



const EVENTS = {
    DOM_LOADED: "DOMContentLoaded",
    CLICK: "click"
};

const people = [];
let dogPhotoIndex = 0;

window.addEventListener(EVENTS.DOM_LOADED, () => {

    // add a person to the array
    document.getElementById("add").addEventListener(EVENTS.CLICK, () => {
        addPerson();
    });

    // show all persons entered
    document.getElementById("show-all").addEventListener(EVENTS.CLICK, () => {
        print();
    });

    // cycles through all people added and displays an image of the dog url associated with that person obkect
    document.getElementById("show-dog").addEventListener(EVENTS.CLICK, () => {
        document.getElementById("photo").src = people[dogPhotoIndex].dogPhotoUrl;

        if (people.length > 0 && dogPhotoIndex < people.length - 1) {
            dogPhotoIndex = dogPhotoIndex + 1;
        }
    });
});

function idGenerator() {
    return Math.floor(Math.random() * 1000000).toString(16);
}

function addPerson() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    if (document.getElementById("student").checked) {
        let student = new __WEBPACK_IMPORTED_MODULE_0__src_Student__["Student"](idGenerator(), firstName, lastName);
        student.getFavoriteDogPhoto();
        people.push(student);
    } else {
        let employee = new __WEBPACK_IMPORTED_MODULE_1__src_Employee__["Employee"](idGenerator(), firstName, lastName);
        employee.favoriteDogPhoto();
        people.push(employee);
    }
}

function print() {
    let out = document.getElementById("people-output");
    out.innerText = "";
    out.innerText = "Here is everything entered so far:\n\n";

    for (let person of people) {
        out.innerText += person.prettyPrint();
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(personId, firstName, lastName) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dogPhotoUrl = "";
    }
    prettyPrint() {
        let data = "\nType: Person" +
            "\nID: " + this.personId +
            "\nFirst Name: " + this.firstName +
            "\nLast Name: " + this.lastName +
            "\n\n";
        return data;
    }
    getFavoriteDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.dogPhotoUrl = data['message']);
    }
}
exports.Student = Student;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(personId, firstName, lastName) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dogPhotoUrl = "";
    }
    // clean print of the data associated with the object
    prettyPrint() {
        let data = "\nType: Employee" +
            "\nID: " + this.personId +
            "\nFirst Name: " + this.firstName +
            "\nLast Name: " + this.lastName +
            "\n\n";
        return data;
    }
    // fetches the url of a dog
    favoriteDogPhoto() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.dogPhotoUrl = data['message']);
    }
}
exports.Employee = Employee;


/***/ })
/******/ ]);