import { src, dest, watch, series } from 'gulp';
import { img as config } from './config';
import pump from 'pump';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';

export function img(cb, isProduction) {
    return pump([
        src(config.src.all),
        gulpif(isProduction, imagemin()),
        dest(config.dist.base)
    ], cb)
}

export function svgToSprite(cb, isProduction) {
    return pump([
        src('**/*.svg', { cwd: config.src.spritesheetDir }),
        gulpif(isProduction, imagemin()),
        svgSprite(config.spritesheet),
        dest('./')
    ], cb)
}

export function imgWatch() {
    watch(config.src.all, series(img))
    watch(config.src.spritesheetDir, series(svgToSprite))
}