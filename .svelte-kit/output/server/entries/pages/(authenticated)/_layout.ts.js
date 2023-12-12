import { s as session } from "../../../chunks/session.js";
import { r as redirect } from "../../../chunks/index2.js";
import debug from "debug";
import { i as get_store_value } from "../../../chunks/index.js";
const log = debug("app:routes:(authenticated):layout");
async function load(event) {
  var _a, _b, _c;
  const parent_user = (_a = await event.parent()) == null ? void 0 : _a.user;
  const locals_user = (_b = event.locals) == null ? void 0 : _b.user;
  const session_user = (_c = get_store_value(session)) == null ? void 0 : _c.user;
  log("parent_user:", parent_user);
  log("locals_user:", locals_user);
  log("session_user:", session_user);
  const user = session_user || locals_user || parent_user;
  log("user:", user);
  if (!user) {
    log("no user, redirecting to /login");
    throw redirect(301, "/login");
  }
  return { user };
}
export {
  load
};
