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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: cpp, java, react, cTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cpp", function() { return cpp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "java", function() { return java; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "react", function() { return react; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cTeacher", function() { return cTeacher; });
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subjects/Teacher */ "./js/subjects/Teacher.ts");
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_subjects_Teacher__WEBPACK_IMPORTED_MODULE_3__);




console.log("Webpack is working!");
// Create and export constants for Cpp, Java, and React Subjects
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
// Create and export a Teacher object cTeacher with experienceTeachingC = 10
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
// Cpp subject operations
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// Java subject operations
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// React subject operations
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function () {
        function Cpp() {
        }
        Cpp.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            return this.teacher.experienceTeachingC ?
                "Available Teacher: " + this.teacher.firstName + " " + this.teacher.lastName :
                'No available teacher';
        };
        return Cpp;
    }());
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            return this.teacher.experienceTeachingJava ?
                "Available Teacher: " + this.teacher.firstName :
                'No available teacher';
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subjects;
(function (Subjects) {
    var React = /** @class */ (function () {
        function React() {
        }
        React.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            return this.teacher.experienceTeachingReact ?
                "Available Teacher: " + this.teacher.firstName + " " + this.teacher.lastName :
                'No available teacher';
        };
        return React;
    }());
    Subjects.React = React;
})(Subjects || (Subjects = {}));


/***/ }),

/***/ "./js/subjects/Teacher.ts":
/*!********************************!*\
  !*** ./js/subjects/Teacher.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9DcHAudHMiLCJ3ZWJwYWNrOi8vLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly8vLi9qcy9zdWJqZWN0cy9SZWFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ0M7QUFDQztBQUNFO0FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVuQyxnRUFBZ0U7QUFDekQsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDL0Is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LENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDO1FBRUQsK0JBQWUsR0FBZjtZQUNJLE9BQU8sNENBQTRDLENBQUM7UUFDeEQsQ0FBQztRQUNELG1DQUFtQixHQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6Qyx3QkFBc0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFVLENBQUMsQ0FBQztnQkFDekUsc0JBQXNCLENBQUM7UUFDL0IsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDO0lBZFksY0FBSyxRQWNqQjtBQUNMLENBQUMsRUFoQlMsUUFBUSxLQUFSLFFBQVEsUUFnQmpCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsImltcG9ydCAnLi9zdWJqZWN0cy9DcHAnO1xuaW1wb3J0ICcuL3N1YmplY3RzL0phdmEnO1xuaW1wb3J0ICcuL3N1YmplY3RzL1JlYWN0JztcbmltcG9ydCAnLi9zdWJqZWN0cy9UZWFjaGVyJztcblxuY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpO1xuXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCBjb25zdGFudHMgZm9yIENwcCwgSmF2YSwgYW5kIFJlYWN0IFN1YmplY3RzXG5leHBvcnQgY29uc3QgY3BwID0gbmV3IFN1YmplY3RzLkNwcCgpO1xuZXhwb3J0IGNvbnN0IGphdmEgPSBuZXcgU3ViamVjdHMuSmF2YSgpO1xuZXhwb3J0IGNvbnN0IHJlYWN0ID0gbmV3IFN1YmplY3RzLlJlYWN0KCk7XG5cbi8vIENyZWF0ZSBhbmQgZXhwb3J0IGEgVGVhY2hlciBvYmplY3QgY1RlYWNoZXIgd2l0aCBleHBlcmllbmNlVGVhY2hpbmdDID0gMTBcbmV4cG9ydCBjb25zdCBjVGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nQzogMTAsXG59O1xuXG4vLyBDcHAgc3ViamVjdCBvcGVyYXRpb25zXG5jb25zb2xlLmxvZygnQysrJyk7XG5jcHAuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coY3BwLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG5cbi8vIEphdmEgc3ViamVjdCBvcGVyYXRpb25zXG5jb25zb2xlLmxvZygnSmF2YScpO1xuamF2YS5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coamF2YS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG4vLyBSZWFjdCBzdWJqZWN0IG9wZXJhdGlvbnNcbmNvbnNvbGUubG9nKCdSZWFjdCcpO1xucmVhY3Quc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpOyIsIm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gICAgZXhwb3J0IGNsYXNzIENwcCB7XG4gICAgICAgIHByaXZhdGUgdGVhY2hlciE6IFRlYWNoZXI7XG4gICAgICAgIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgICAgICAgfVxuICAgICAgICBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0MgP1xuICAgICAgICAgICAgICAgIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfSAke3RoaXMudGVhY2hlci5sYXN0TmFtZX1gIDpcbiAgICAgICAgICAgICAgICAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgICAgICB9XG4gICAgfVxufSIsIm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gICAgZXhwb3J0IGNsYXNzIEphdmEge1xuICAgICAgICBwcml2YXRlIHRlYWNoZXIhOiBUZWFjaGVyO1xuXG4gICAgICAgIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgSmF2YSc7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0phdmEgPyBcbiAgICAgICAgICAgICAgICBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gIDogXG4gICAgICAgICAgICAgICAgJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJuYW1lc3BhY2UgU3ViamVjdHMge1xuICAgIGV4cG9ydCBjbGFzcyBSZWFjdCB7XG4gICAgICAgIHByaXZhdGUgdGVhY2hlciE6IFRlYWNoZXI7XG4gICAgICAgIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuICAgICAgICB9XG4gICAgICAgIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QgP1xuICAgICAgICAgICAgICAgIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfSAke3RoaXMudGVhY2hlci5sYXN0TmFtZX1gIDpcbiAgICAgICAgICAgICAgICAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=