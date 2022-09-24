import { environment } from "src/environments/environment";

export function log(...msg: Object[]) {
    console.log(...msg);
}
export function debug(...msg: Object[]) {
  if (environment.DEBUG)
    log(...msg);
}
