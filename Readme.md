# deep-flat

## Flatten an arrays of arrays ad infinitum

## Usage
deep-flat exports a single function accepting two parameters:

```js
(array = [], depth = 1) => [...] (flattened array)
```

`depth` dictates how many times we flatten the array,
if the `depth` is greater than the amount of levels no
error will be thrown, the lowest possible array level will
be returned. 

## Example

```js
var flat = require('deep-flat')
console.log(flat([[[[1, 2, 3]]]], 3))
```

## Implementation

This is a zero production dependencies module. 

The code is tiny: 

```js
module.exports =
  (array = [], depth = 1) => 
    Array.apply(0, {length: depth})
      .reduce(Function.apply.bind([].concat, []), array)
```

Two interesting techniques are employed here: 

* non-sparse array generation via [call invo-cursion][]
* [flattening via `concat.apply`][]


## Transpilation

The source is ES2015/ES6 but the entrypoint (`index.js`)
is transpiled from source(`index.es6`) into ES5 compatible
code.


## Limits

Supplying `depth` as `Infinity` or `Number.MAX_VALUE`
will result in the original array being returned.

The amount of times the array can be flattened is limited
by maximum stack size, passing in a very large `depth` such
as `1e6` will cause a stack overflow. 



[call invo-cursion]: https://gist.github.com/cowboy/4477847
[flattening via `concat.apply`]: http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
