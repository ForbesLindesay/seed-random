# seed-random

Generate random numbers with a seed, useful for reproducible tests


[![build status](https://secure.travis-ci.org/ForbesLindesay/seed-random.png?branch=master)](http://travis-ci.org/ForbesLindesay/seed-random)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/seed-random.png)](https://gemnasium.com/ForbesLindesay/seed-random)
[![NPM version](https://badge.fury.io/js/seed-random.png)](http://badge.fury.io/js/seed-random)

## Installation

    $ npm install seed-random

## API

```javascript
var seed = require('seed-random');

var trueRandomA = seed();
var trueRandomB = seed();
trueRandomA() != trueRandomB(); //almost always true

var fakeRandomA = seed('foo');
var fakeRandomB = seed('foo');
fakeRandomA() == fakeRandomB(); //always true

seed('foo', true);//over-ride global Math.random
var numA = Math.random();
seed('foo', true);
var numB = Math.random();
numA == numB;//always true

seed(undefined, true);//reset to default Math.random
```

## License

MIT
