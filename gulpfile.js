var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('default', function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {
        cwd: '.'
    }, reload);
});
