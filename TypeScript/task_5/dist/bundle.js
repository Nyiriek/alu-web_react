/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        major: 'Computer Science'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        minor: 'Math'
    };
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ01PLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDMUUsT0FBTztRQUNILE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO1FBQzVDLEtBQUssRUFBRSxrQkFBa0I7S0FDNUIsQ0FBQztBQUNOLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQzFFLE9BQU87UUFDSCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxLQUFLLEVBQUUsTUFBTTtLQUNoQixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBNYWpvckNyZWRpdHMge1xuICAgIGNyZWRpdHM6IG51bWJlcjtcbiAgICBtYWpvcjogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlub3JDcmVkaXRzIHtcbiAgICBjcmVkaXRzOiBudW1iZXI7XG4gICAgbWlub3I6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3VtTWFqb3JDcmVkaXRzKHN1YmplY3QxOiBNYWpvckNyZWRpdHMsIHN1YmplY3QyOiBNYWpvckNyZWRpdHMpOiBNYWpvckNyZWRpdHMge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxuICAgICAgICBtYWpvcjogJ0NvbXB1dGVyIFNjaWVuY2UnXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhzdWJqZWN0MTogTWlub3JDcmVkaXRzLCBzdWJqZWN0MjogTWlub3JDcmVkaXRzKTogTWlub3JDcmVkaXRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICAgICAgbWlub3I6ICdNYXRoJ1xuICAgIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9