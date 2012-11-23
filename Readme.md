
# seed-random

  Generate random numbers with a seed, useful for reproducible tests

## Installation

    $ component install ForbesLindesay/seed-random

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
