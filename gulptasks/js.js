import { src, dest, watch, series } from "gulp";
import { js as config } from "./config";
import pump from "pump";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import vinylNamed from "vinyl-named";

export function js(cb, isProduction) {
  let streamMode;

  isProduction
    ? (streamMode = require("../webpack/config.production.js"))
    : (streamMode = require("../webpack/config.development.js"));

  return pump(
    [
      src(config.src.static),
      vinylNamed(),
      webpackStream(streamMode, webpack),
      dest(config.dist.base),
    ],
    cb
  );
}

export function jsWatch() {
  watch(config.src.staticAll, series(js));
}
