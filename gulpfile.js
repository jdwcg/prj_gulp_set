const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

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

// Browsersync 초기화 태스크
gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./dist", // 서버의 기본 경로를 지정합니다.
    },
  });

  // 파일 변경 감지 시 Browsersync로 브라우저를 새로고침합니다.
  gulp.watch("src/scss/*.scss", gulp.series("style"));
  gulp
    .watch(
      ["src/html/*.html", "src/html/include/*.html"],
      gulp.series("fileinclude")
    )
    .on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("fileinclude", "style", "serve"));
