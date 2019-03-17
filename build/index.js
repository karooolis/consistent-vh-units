"use strict";

var debounce = function debounce(callback, time) {
  var interval;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(interval);
    interval = setTimeout(function () {
      interval = null;
      callback.apply(void 0, args);
    }, time);
  };
};

var adjustVhUnits = function adjustVhUnits() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

var handleResize = debounce(adjustVhUnits, 10);
window.addEventListener('resize', handleResize);
adjustVhUnits();
