"use strict";
var _ = require('underscore');
var d = { key: 'abc', value: '10' };
console.log(d.value);
var s = [2, 3];
var total = _.reduce(s, function (p, c) { return p + c; }, 0);
console.log(total);
