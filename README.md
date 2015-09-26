# Subsy
A tool that allows you to replace strings with values from JSON object.

## Install
```shell
    npm install subsy --save-dev
```

## How to use

### With String.replace()

```javascript
    var subsy = require('subsy');

    var introduction = "Hello, my name is @name.full@. You can call me @name.short@";
    var profile = {
        "name": {
            "short": "James",
            "full": "James Roland"
        }
    };

    //output: Hello, my name is James Roland. You can call me James
    console.log(introduction.replace(/@+[\w.]+@/g, subsy.json(profile));
```

### With gulp-replace

```javascript
var replace = require('gulp-replace');
var en = require('./locale/en.json');

gulp.task('localize', function() {
    gulp.src('app/**')
        .pipe(replace(/@+[\w.]+@/g, subsy.json(en), {skipBinary: true})
        .pipe(gulp.dest('bundle/en'));
})
```