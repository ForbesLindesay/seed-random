'use strict';

var assert = require('assert');
var seed = require('../');

var trueRandomA = seed();
var trueRandomB = seed();
assert(trueRandomA() != trueRandomB());

var fakeRandomA = seed('foo');
var fakeRandomB = seed('foo');
assert(fakeRandomA() == fakeRandomB());

seed('foo', true);//over-ride global Math.random
var numA = Math.random();
seed('foo', true);
var numB = Math.random();
assert(numA == numB);//always true

seed(undefined, true);//reset to default Math.random

console.log('All Tests Passed');