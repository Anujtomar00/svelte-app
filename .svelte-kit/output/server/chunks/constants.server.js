var _a;
import { e as env } from "./env-private.js";
const one_day = 60 * 60 * 24;
const AUTH_TOKEN_EXPIRY_SECONDS = Number(
  ((_a = env) == null ? void 0 : _a.AUTH_TOKEN_EXPIRY_SECONDS) ?? one_day * 365
);
export {
  AUTH_TOKEN_EXPIRY_SECONDS as A
};
