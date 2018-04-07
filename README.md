# that-depends-js

[![Build Status](https://travis-ci.org/reergymerej/that-depends-js.svg?branch=master)](https://travis-ci.org/reergymerej/that-depends-js)

Reads in JS, returns the imported/required file paths.

## Usage

```js
// foo.js
import x from 'z'
import a from 'a'
import otherA from './a'
```

```js
import thatDependsJS from 'that-depends-js'

const fooSource = fs.readFileSync('foo.js', 'utf8')
const dependenciesOfFoo = thatDependsJS(fooSource)

// returns ['./a', 'a', 'z']
```
