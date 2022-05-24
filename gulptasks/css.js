import { src, dest, watch, series } from "gulp";
import { css as config } from "./config";
import pump from "pump";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import changed from "gulp-changed";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export function css(cb, isProduction) {
  const postcssProcessors = [autoprefixer()];

  return pump(
    [
      src(config.src.staticAll),
      changed(config.src.staticAll),
      gulpif(!isProduction, sourcemaps.init()),
      sass().on("error", sass.logError),
      postcss(postcssProcessors),
      gulpif(isProduction, cleanCSS({ level: { 1: { specialComments: 0 } } })),
      gulpif(!isProduction, sourcemaps.write()),
      dest(config.dist.base),
    ],
    cb
  );
}

export function cssWatch() {
  watch(config.src.staticAll, series(css));
}
