# lookly-preset-mocha

Wrapper around mocha for ease of use and zero configuration.

# usage

You can easily attach mocha to your gulpfile.

```JavaScript
const gulp = require('gulp');
const mocha = require('lookly-preset-mocha');

gulp.task('test', function gulpTestTask() {
  return mocha([
    'tests/**/*.test.js',
  ]);
});
```
