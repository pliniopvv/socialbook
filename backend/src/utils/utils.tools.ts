

export function env(env: string) {
    return process.env[env];
}

let DEBUG = env('DEBUG');

export function debug(n: number, tag: string, ...msg: string[]) {
    if (DEBUG)
        console.log(n,tag,...msg);
}