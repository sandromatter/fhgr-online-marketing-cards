const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

//compile scss into css
function style() {
  return gulp
    .src("src/assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/assets/css"))
    .pipe(browserSync.stream());
}

exports.style = style;

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "./index.html",
    },
  });
  gulp.watch("src/assets/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./assets/js/**/*.js").on("change", browserSync.reload);
}
exports.watch = watch;
