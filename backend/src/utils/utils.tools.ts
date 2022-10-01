import { Logger } from "@nestjs/common";

export function env(env: string) {
    return process.env[env];
}

let DEBUG = env('DEBUG');
let log = new Logger();

export function debug(n: number, tag: string, ...msg: string[]) {
    if (DEBUG)
        log.debug(msg,tag);
}