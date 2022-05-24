import { clean as config } from './config'
import { series } from 'gulp'

import del from 'del'


function css() {
    return del(config.css)
}

function js() {
    return del(config.js)
}

function img() {
    return del(config.img)
}

function all() {
    return del(config.base)
}


export const cleanCss = cb => series(css)(cb)
export const cleanJs = cb => series(js)(cb)
export const cleanImg = cb => series(img)(cb)
export const cleanAll = cb => series(all)(cb)