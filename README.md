# hmac-rng

[![Version (npm)](https://img.shields.io/npm/v/hmac-rng.svg)](https://npmjs.com/package/hmac-rng)
[![Build Status](https://img.shields.io/travis/kripod/hmac-rng.js/master.svg)](https://travis-ci.org/kripod/hmac-rng.js)
[![Code Climate](https://img.shields.io/codeclimate/github/kripod/hmac-rng.js.svg)](https://codeclimate.com/github/kripod/hmac-rng.js)

HMAC-based random number generator written in JavaScript.

## API Reference

* [hmac-rng](#module_hmac-rng)
    * [~HmacRng](#module_hmac-rng..HmacRng)
        * [new HmacRng(seed, [algorithm])](#new_module_hmac-rng..HmacRng_new)
        * [.nextInt(min, max)](#module_hmac-rng..HmacRng+nextInt) ⇒ <code>number</code>
        * [.nextInts(min, max, amount)](#module_hmac-rng..HmacRng+nextInts) ⇒ <code>Array.&lt;number&gt;</code>

<a name="module_hmac-rng..HmacRng"></a>
### hmac-rng~HmacRng
**Kind**: inner class of <code>[hmac-rng](#module_hmac-rng)</code>  

* [~HmacRng](#module_hmac-rng..HmacRng)
    * [new HmacRng(seed, [algorithm])](#new_module_hmac-rng..HmacRng_new)
    * [.nextInt(min, max)](#module_hmac-rng..HmacRng+nextInt) ⇒ <code>number</code>
    * [.nextInts(min, max, amount)](#module_hmac-rng..HmacRng+nextInts) ⇒ <code>Array.&lt;number&gt;</code>

<a name="new_module_hmac-rng..HmacRng_new"></a>
#### new HmacRng(seed, [algorithm])
Creates a new HMAC-RNG instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| seed | <code>string</code> |  | Seed used for randomization. |
| [algorithm] | <code>string</code> | <code>&quot;sha512&quot;</code> | Cryptographical algorithm to use HMAC with. |

<a name="module_hmac-rng..HmacRng+nextInt"></a>
#### hmacRng.nextInt(min, max) ⇒ <code>number</code>
Gets the next random integer in the current sequence.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: instance method of <code>[HmacRng](#module_hmac-rng..HmacRng)</code>  
**Returns**: <code>number</code> - The generated random integer.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive lower bound of the random integer returned. |
| max | <code>number</code> | Inclusive upper bound of the random integer returned. This must be greater than 'min'. |

<a name="module_hmac-rng..HmacRng+nextInts"></a>
#### hmacRng.nextInts(min, max, amount) ⇒ <code>Array.&lt;number&gt;</code>
Gets the next random integers in the current sequence.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: instance method of <code>[HmacRng](#module_hmac-rng..HmacRng)</code>  
**Returns**: <code>Array.&lt;number&gt;</code> - The generated array of random integers.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive lower bound of the random integers returned. |
| max | <code>number</code> | Inclusive upper bound of the random integers returned. This must be greater than 'min'. |
| amount | <code>number</code> | Amount of integers to be generated. |

