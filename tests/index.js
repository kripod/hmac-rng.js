var test = require('tape');
var HmacRng = require('./../lib/index');

HmacRng.defaultAlgorithm = 'sha512';

test('generating an integer with different algorithms', function (t) {
  var rng1 = new HmacRng('test');
  var rng2 = new HmacRng('test', 'sha256');

  t.equal(rng1.nextInt(0, 100000), 99441);
  t.equal(rng2.nextInt(0, 100000), 65320);
  t.end();
});

test('generating multiple integers', function (t) {
  var rng = new HmacRng('test', 'sha512');

  t.deepEqual(rng.nextInts(-100, 100, 5), [ -22, 0, -82, -61, -69 ]);
  t.end();
});

test('checking integer range', function (t) {
  var rng = new HmacRng('test', 'sha256');
  var min = -1;
  var max = 1;

  var values = rng.nextInts(-1, 1, 50);
  for (var i = values.length - 1; i >= 0; i--) {
    var value = values[i];
    t.ok(value >= min && value <= max);
  }
  t.end();
});

test('shuffling an array deterministically', function (t) {
  var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  var output = HmacRng.shuffleArray('test', input);

  t.ok(output !== input, 'input should be immutable');
  t.deepEqual(output, [ 4, 3, 0, 7, 1, 9, 2, 6, 8, 5 ]);
  t.end();
});

test('static functions', function (t) {
  t.equal(HmacRng.getRandomInt('test', -100, 100), -22);
  t.deepEqual(HmacRng.getRandomInts('test', 0, 100, 5), [ 66, 98, 14, 32, 15 ]);
  t.end();
});
