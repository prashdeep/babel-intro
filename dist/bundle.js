(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _greet = require("./lib/greet");

var message = (0, _greet.greet)("Hello Babel!!");
console.log("".concat(message));
console.log("URL => ".concat(_greet.google_url));

},{"./lib/greet":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = greet;
exports.course = exports.google_url = void 0;

function greet(message) {
  return "Hello World !! ".concat(message);
}

var google_url = "http://google.com";
exports.google_url = google_url;
var course = {
  name: 'React',
  duration: '2 weeks',
  price: 20000
};
exports.course = course;

var innerFunction = function innerFunction() {
  console.log("THis function cannot be used outside.");
};

},{}]},{},[1]);
