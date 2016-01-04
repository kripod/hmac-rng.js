var test = require('tape');
var HmacRng = require('./../lib/index');

test('generating an integer', function (t) {
  var random = new HmacRng('test', 'sha512');

  t.equal(random.nextInt(0, 100000), 99441);
  t.end();
});

test('generating multiple integers', function (t) {
  var random = new HmacRng('test', 'sha512');

  t.deepEqual(random.nextInts(-100, 100, 5), [ -22, 0, -82, -61, -69 ]);
  t.end();
});

test('checking integer range', function (t) {
  var random = new HmacRng('test', 'sha256');
  var min = -1;
  var max = 1;

  var values = random.nextInts(-1, 1, 50);
  for (var i = values.length - 1; i >= 0; i--) {
    var value = values[i];
    t.ok(value >= min && value <= max);
  }
  t.end();
});
