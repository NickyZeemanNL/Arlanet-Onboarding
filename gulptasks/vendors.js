import { src, dest } from 'gulp';
import { vendors as config } from './config';
import pump from 'pump';

export function vendors(cb) {
    return pump([
        src(config.src.all),
        dest(config.dist.base)
    ], cb)
}