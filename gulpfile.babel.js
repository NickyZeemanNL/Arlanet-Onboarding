import { series, parallel } from "gulp";
import { css, cssWatch } from "./gulptasks/css";
import { js, jsWatch } from "./gulptasks/js";
import { img, imgWatch, svgToSprite } from "./gulptasks/img";
import { fonts } from "./gulptasks/fonts";
import { vendors } from "./gulptasks/vendors";
import { cleanAll } from "./gulptasks/clean";

let isProduction = false;

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
//function clean(cb) {
//    return cleanCss(cb);
//}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildCss(cb) {
  return css(cb, isProduction);
}

function buildJs(cb) {
  return js(cb, isProduction);
}

function imgMin(cb) {
  return img(cb, isProduction);
}

function svgSpritesheet(cb) {
  return svgToSprite(cb, isProduction);
}

function copyFonts(cb) {
  return fonts(cb);
}

function copyVendors(cb) {
  return vendors(cb);
}

function setProduction(cb) {
  isProduction = true;
  cb();
}

function buildLog(cb) {
  console.log(`
\x1b[33m=============================================\x1b[0m

\x1b[33m    THIS IS A DEVELOPMENT BUILD\x1b[0m
\x1b[33m    FOR PRODUCTION USE: gulp production\x1b[0m

\x1b[33m=============================================\x1b[0m
`);
  cb();
}

function development(cb, isProduction) {
  return series(
    cleanAll,
    parallel(imgMin, svgSpritesheet, buildCss, buildJs, copyFonts, copyVendors),
    buildLog,
    parallel(cssWatch, jsWatch, imgWatch)
  )(cb, isProduction);
}

function production(cb, isProduction) {
  return series(
    setProduction,
    cleanAll,
    parallel(imgMin, svgSpritesheet, buildCss, buildJs, copyFonts, copyVendors)
  )(cb, isProduction);
}

function build(cb, isProduction) {
  return series(
    cleanAll,
    parallel(imgMin, svgSpritesheet, buildCss, buildJs, copyFonts, copyVendors),
    buildLog
  )(cb, isProduction);
}

export { development, production, build };
