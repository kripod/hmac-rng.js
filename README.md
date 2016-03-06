# hmac-rng

[![Version (npm)](https://img.shields.io/npm/v/hmac-rng.svg)](https://npmjs.com/package/hmac-rng)
[![Build Status](https://img.shields.io/travis/kripod/hmac-rng.js/master.svg)](https://travis-ci.org/kripod/hmac-rng.js)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/github/kripod/hmac-rng.js.svg)](https://codeclimate.com/github/kripod/hmac-rng.js/coverage)
[![Code Climate](https://img.shields.io/codeclimate/github/kripod/hmac-rng.js.svg)](https://codeclimate.com/github/kripod/hmac-rng.js)

HMAC-based random number generator written in JavaScript.

## API Reference

* [HmacRng](#module_HmacRng)
    * [HmacRng](#exp_module_HmacRng--HmacRng) ⏏
        * [new HmacRng(seed, [algorithm])](#new_module_HmacRng--HmacRng_new)
        * _instance_
            * [.nextInt(min, max)](#module_HmacRng--HmacRng+nextInt) ⇒ <code>number</code>
            * [.nextInts(min, max, amount)](#module_HmacRng--HmacRng+nextInts) ⇒ <code>Array.&lt;number&gt;</code>
        * _static_
            * [.defaultAlgorithm](#module_HmacRng--HmacRng.defaultAlgorithm)
            * [.getRandomInt(seed, min, max)](#module_HmacRng--HmacRng.getRandomInt) ⇒ <code>number</code>
            * [.getRandomInts(seed, min, max, amount)](#module_HmacRng--HmacRng.getRandomInts) ⇒ <code>Array.&lt;number&gt;</code>
            * [.shuffleArray(seed, array)](#module_HmacRng--HmacRng.shuffleArray) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="exp_module_HmacRng--HmacRng"></a>
### HmacRng ⏏
**Kind**: Exported class  
<a name="new_module_HmacRng--HmacRng_new"></a>
#### new HmacRng(seed, [algorithm])
Creates a new HMAC-RNG instance.


| Param | Type | Description |
| --- | --- | --- |
| seed | <code>string</code> | Seed used for randomization. |
| [algorithm] | <code>string</code> | Cryptographic algorithm to use HMAC with. |

<a name="module_HmacRng--HmacRng+nextInt"></a>
#### hmacRng.nextInt(min, max) ⇒ <code>number</code>
Gets the next random integer in the current sequence.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: instance method of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
**Returns**: <code>number</code> - The generated random integer.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive lower bound of the random integer returned. |
| max | <code>number</code> | Inclusive upper bound of the random integer returned. This must be greater than 'min'. |

<a name="module_HmacRng--HmacRng+nextInts"></a>
#### hmacRng.nextInts(min, max, amount) ⇒ <code>Array.&lt;number&gt;</code>
Gets the next random integers in the current sequence.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: instance method of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
**Returns**: <code>Array.&lt;number&gt;</code> - The generated array of random integers.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive lower bound of the random integers returned. |
| max | <code>number</code> | Inclusive upper bound of the random integers returned. This must be greater than 'min'. |
| amount | <code>number</code> | Amount of integers to be generated. |

<a name="module_HmacRng--HmacRng.defaultAlgorithm"></a>
#### HmacRng.defaultAlgorithm
Determines the default cryptographic algorithm to use HMAC with.Useful for altering the output of static methods.

**Kind**: static property of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
<a name="module_HmacRng--HmacRng.getRandomInt"></a>
#### HmacRng.getRandomInt(seed, min, max) ⇒ <code>number</code>
Generates a random integer using the default algorithm.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: static method of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
**Returns**: <code>number</code> - The generated random integer.  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| seed | <code>string</code> | Seed used for randomization. |
| min | <code>number</code> | Inclusive lower bound of the random integer returned. |
| max | <code>number</code> | Inclusive upper bound of the random integer returned. This must be greater than 'min'. |

<a name="module_HmacRng--HmacRng.getRandomInts"></a>
#### HmacRng.getRandomInts(seed, min, max, amount) ⇒ <code>Array.&lt;number&gt;</code>
Generates random integers using the default algorithm.The maximum range of 'min' and 'max' is 2^28 (268435456).

**Kind**: static method of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
**Returns**: <code>Array.&lt;number&gt;</code> - The generated array of random integers.  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| seed | <code>string</code> | Seed used for randomization. |
| min | <code>number</code> | Inclusive lower bound of the random integers returned. |
| max | <code>number</code> | Inclusive upper bound of the random integers returned. This must be greater than 'min'. |
| amount | <code>number</code> | Amount of integers to be generated. |

<a name="module_HmacRng--HmacRng.shuffleArray"></a>
#### HmacRng.shuffleArray(seed, array) ⇒ <code>Array.&lt;Object&gt;</code>
Shuffles the given array using the default algorithm.

**Kind**: static method of <code>[HmacRng](#exp_module_HmacRng--HmacRng)</code>  
**Returns**: <code>Array.&lt;Object&gt;</code> - The array which has been shuffled.  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| seed | <code>string</code> | Seed used for randomization. |
| array | <code>Array.&lt;Object&gt;</code> | Array to be shuffled. |

