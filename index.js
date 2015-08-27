"use strict";

module.exports = function () {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  return Array.apply(0, { length: depth }).reduce(Function.apply.bind([].concat, []), array);
};

