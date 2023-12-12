import { c as cookie } from "../../../chunks/cookie.js";
import { r as redirect } from "../../../chunks/index2.js";
async function load(event) {
  const token = event.cookies.get("auth_token");
  await cookie.logout({
    token,
    opts: { cookies: event.cookies }
  });
  event.cookies.delete("auth_token");
  throw redirect(302, "/");
}
export {
  load
};
