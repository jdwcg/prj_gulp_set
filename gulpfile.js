const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");

// HTML include
gulp.task("fileinclude", function () {
  return gulp
    .src([
      "./src/html/*", // 불러올 파일의 위치
      "!" + "./src/html/include*", // 읽지 않고 패스할 파일의 위치
    ])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./dist/html")); // 변환한 파일의 저장 위치 지정
});

gulp.task("default", gulp.parallel("fileinclude"));

// scss
gulp.task("style", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream()); // Browsersync로 변경된 스타일을 적용합니다.
});

// JS
gulp.task("minify-js", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      uglify().on("error", function (err) {
        console.error(err.toString()); // 오류 출력
        this.emit("end"); // 오류를 처리하고 작업 계속 진행
      })
    )
    .pipe(gulp.dest("dist/js"));
});

// Browsersync 초기화
gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./dist", // 서버의 기본 경로를 지정합니다.
    },
  });

  // 파일 변경 감지 시 Browsersync로 브라우저를 새로고침합니다.
  gulp.watch("src/scss/*.scss", gulp.series("style"));
  gulp
    .watch("src/**/*.html", gulp.series("fileinclude"))
    .on("change", browserSync.reload);
  gulp
    .watch("src/js/**/*.js", gulp.series("minify-js"))
    .on("change", browserSync.reload);
});

// 기본(default) Gulp 작업
gulp.task(
  "default",
  gulp.parallel("fileinclude", "style", "minify-js", "serve")
);
