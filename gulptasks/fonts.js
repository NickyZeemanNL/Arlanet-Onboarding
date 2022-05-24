import { src, dest } from 'gulp';
import { fonts as config } from './config';
import pump from 'pump';

export function fonts(cb) {
    return pump([
        src(config.src.all),
        dest(config.dist.base)
    ], cb)
}