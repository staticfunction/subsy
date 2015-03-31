/**
 * Created by jcabresos on 3/31/15.
 */
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var mocha = require('gulp-mocha');
var merge = require('merge2');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var pkg = require('./package.json');

gulp.task('build-src', function() {
    var src = gulp.src(["src/**", "typings/tsd.d.ts"])
                    .pipe(typescript({
                        "module": "commonjs"
                    }));

    return src.js.pipe(gulp.dest('build/src'));
})

gulp.task('build-test', function() {
    var test = gulp.src(["test/**", "typings/tsd.d.ts"])
                    .pipe(typescript({
                        "module": "commonjs"
                    }))

    return test.js.pipe(gulp.dest('build/test'));
})

gulp.task('dist', function() {
    var src = gulp.src(["src/**", "typings/tsd.d.ts"])
        .pipe(typescript({
            "declarationFiles": true,
            "module": "commonjs"
        }));

    return merge([
        src.js.pipe(gulp.dest('dist')),
        src.dts
            .pipe(replace(/declare\s/g, ''))
            .pipe(insert.wrap('declare module \"'+ pkg.name +'\" {\n', '\n}'))
            .pipe(gulp.dest('dist'))
    ])
})

gulp.task('test', ['build-src', 'build-test'], function() {
    return gulp.src('build/test/**/*.js', {"read": false})
            .pipe(mocha({"reporter": "nyan"}))
})