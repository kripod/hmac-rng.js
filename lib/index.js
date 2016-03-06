var crypto = require('crypto');

/**
 * @module HmacRng
 */
module.exports = HmacRng;

/**
 * Creates a new HMAC-RNG instance.
 * @constructor
 * @alias module:HmacRng
 * @param {string} seed Seed used for randomization.
 * @param {string} [algorithm=sha512] Cryptographical algorithm to use HMAC
 * with.
 */
function HmacRng(seed, algorithm) {
  this.seed = seed;
  this.algorithm = algorithm || HmacRng.defaultAlgorithm;

  // Initialize the first hash to generate outputs from
  this._changeHash(seed);
}

HmacRng.defaultAlgorithm = 'sha512';

/**
 * Gets the next random integer in the current sequence.
 * The maximum range of 'min' and 'max' is 2^28 (268435456).
 * @param {number} min Inclusive lower bound of the random integer returned.
 * @param {number} max Inclusive upper bound of the random integer returned.
 * This must be greater than 'min'.
 * @returns {number} The generated random integer.
 */
HmacRng.prototype.nextInt = function (min, max) {
  var outputRangeMinus1 = max - min;
  var outputRange = outputRangeMinus1 + 1;

  // Calculate the amount of HEX digits to read from the hash
  var hexDigitCount;
  for (var i = 1; i < 8; i++) {
    if (outputRangeMinus1 >> (4 * i) === 0) {
      // Read one more digit than needed to improve efficiency
      hexDigitCount = Math.min(i + 1, 7);
      break;
    }
  }

  // Calculate the range of the HEX substring's possible values
  var hexRange = 1 << (4 * hexDigitCount);

  // Get the lowest integer which is not part of the equal distribution range
  var firstTooHighValue = Math.floor(hexRange / outputRange) * outputRange;

  // Iterate through the HEX substrings of the hash.
  // Equal distribution is ensured by continuing with the next substring if the
  // current substring is not qualifiable for the equal distribution range.
  while (true) { // eslint-disable-line no-constant-condition
    var value = parseInt(this._readHash(hexDigitCount), 16);
    if (firstTooHighValue === 0 || value < firstTooHighValue) {
      // Return as soon as a valid output can be generated
      return (value % outputRange) + min;
    }
  }
};

/**
 * Gets the next random integers in the current sequence.
 * The maximum range of 'min' and 'max' is 2^28 (268435456).
 * @param {number} min Inclusive lower bound of the random integers returned.
 * @param {number} max Inclusive upper bound of the random integers returned.
 * This must be greater than 'min'.
 * @param {number} amount Amount of integers to be generated.
 * @returns {number[]} The generated array of random integers.
 */
HmacRng.prototype.nextInts = function (min, max, amount) {
  var output = [];
  for (var i = amount; i > 0; i--) {
    output.push(this.nextInt(min, max));
  }
  return output;
};

/**
 * Generates a random integer using the default algorithm.
 * The maximum range of 'min' and 'max' is 2^28 (268435456).
 * @param {string} seed Seed used for randomization.
 * @param {number} min Inclusive lower bound of the random integer returned.
 * @param {number} max Inclusive upper bound of the random integer returned.
 * This must be greater than 'min'.
 * @returns {number} The generated random integer.
 * @since 1.1.0
 */
HmacRng.getRandomInt = function (seed, min, max) {
  return new HmacRng(seed).nextInt(min, max);
};

/**
 * Generates random integers using the default algorithm.
 * The maximum range of 'min' and 'max' is 2^28 (268435456).
 * @param {string} seed Seed used for randomization.
 * @param {number} min Inclusive lower bound of the random integers returned.
 * @param {number} max Inclusive upper bound of the random integers returned.
 * This must be greater than 'min'.
 * @param {number} amount Amount of integers to be generated.
 * @returns {number[]} The generated array of random integers.
 * @since 1.1.0
 */
HmacRng.getRandomInts = function (seed, min, max, amount) {
  return new HmacRng(seed).nextInts(min, max, amount);
};

/**
 * Shuffles the given array using the default algorithm.
 * @param {string} seed Seed used for randomization.
 * @param {Object[]} array Array to be shuffled.
 * @returns {Object[]} The array which has been shuffled.
 * @since 1.1.0
 */
HmacRng.shuffleArray = function (seed, array) {
  var instance = new HmacRng(seed);
  var output = array.slice(0);

  // Iterating backwards is extremely important
  for (var i = output.length - 1; i > 0; i--) {
    // Generate a random integer between 0 and i
    var j = instance.nextInt(0, i);

    // Exchange output[i] and output[j]
    var temp = output[i];
    output[i] = output[j];
    output[j] = temp;
  }

  return output;
};

HmacRng.prototype._readHash = function (amount) {
  var pointer = this._pointer;
  var hash = this._hash;

  // Change the hash if necassary
  if (pointer + amount > hash.length) {
    hash = this._changeHash(this._hash);
  }

  // Read a specific amount of chars from the hash, increase the pointer's
  // value, and then return the output
  var output = hash.substr(pointer, amount);
  this._pointer += amount;
  return output;
};

HmacRng.prototype._changeHash = function (key) {
  // Change the hash based on the given key. Update with the original seed to
  // avoid potential security issues when a hash collision happens.
  this._pointer = 0;
  return this._hash = crypto.createHmac(this.algorithm, key)
    .update(this.seed)
    .digest('hex');
};
