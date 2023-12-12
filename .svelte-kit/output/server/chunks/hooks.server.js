import { c as cookie } from "./cookie.js";
import debug from "debug";
const log = debug("app:hooks.server");
const handle = async ({ event, resolve }) => {
  var _a;
  const cookie_token = event.cookies.get("auth_token");
  const bearer_token = (_a = event.request.headers.get("Authorization")) == null ? void 0 : _a.split(" ")[1];
  const token = cookie_token ?? bearer_token;
  log("token:", token);
  if (token) {
    const resp = await cookie.validate_session({
      token,
      opts: { cookies: event.cookies }
    });
    log("resp:", resp);
    if (resp.isOk()) {
      event.locals.user = resp.value;
    } else {
      console.error("Error validating session:", resp.error);
    }
  }
  return resolve(event);
};
export {
  handle
};
