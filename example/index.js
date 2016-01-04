/* eslint no-console: 0 */

var readline = require('readline');
var HmacRng = require('./../lib/index');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('seed: ', function (seed) {
  rl.question('algorithm: (sha512) ', function (algorithm) {
    rl.question('min: (0) ', function (min) {
      rl.question('max: (9) ', function (max) {
        rl.question('amount: (20) ', function (amount) {
          var random = new HmacRng(seed, algorithm || 'sha512');
          console.log(random.nextInts(
            parseInt(min || 0),
            parseInt(max || 9),
            amount || 20
          ));

          rl.close();
        });
      });
    });
  });
});
