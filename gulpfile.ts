import gulp from "gulp"
import ts from "gulp-typescript"

const tsProject = ts.createProject("tsconfig.json")

const typescript = () =>
  tsProject.src().pipe(tsProject()).pipe(gulp.dest("./dist"))

const build = gulp.series(typescript)

export default build
export const watch = () => gulp.watch("./src/**/*", build)
