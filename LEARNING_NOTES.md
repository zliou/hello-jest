Things I've learned from this project.

Zachary Liou

2023 Sept 8

# Jest

* Run tests with Jest:
```
jest my_lib.test.js
```

Assertions and other test functionality:
* `expect(expression).toBe(expected_value);`
* `.toHaveBeenCalled()`
* `.toBeUndefined()`
* `.toHaveLength(n)`
* `.toBeTruthy()` and `.toBeFalsy()`
  * Don't use a bare `expect(true)` - note that `expect(false)` will pass!

# JS exports

* `module.exports` is a single object exported by a JS file.
* To export multiple functions: 
```
// lib.js
module.exports.func1 = func1;
module.exports.func2 = func2;
```

* Then, to use those exports:
```
// lib.test.js
const lib = require('./lib.js');

foo(lib.func1());
bar(lib.func2());
```

